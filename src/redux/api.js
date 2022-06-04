import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dataFilter from './dataFilter';
import local from './local';

const baseURL = 'https://api.coingecko.com/api/v3/';

const api = {};

api.fetchTrending = createAsyncThunk('main/fetchTrending', async () => {
  const apiCall = await axios
    .get(`${baseURL}search/trending`)
    .then((response) => {
      console.log(response.data.coins);
      return dataFilter(
        response.data.coins,
        ['CoinId', 'id', 'name', 'img', 'price', 'altName', 'symbol'],
        ['coin_id', 'id', 'name', 'large', 'price_btc', 'slug', 'symbol'],
        'item',
      );
    });
  local.setToLocal(apiCall, 'trending');
  return apiCall;
});

api.fetchFavourites = createAsyncThunk('favourite/fetchFavourites', async (arrayOfIds) => {
  const stringOfIds = arrayOfIds.join('%2');
  const apiCall = await axios
    .get(`${baseURL}coins/markets?vs_currency=usd&ids=${stringOfIds}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then((response) => {
      console.log(response.data);
      return dataFilter(
        response.data.coins,
        ['ChangePercent', 'id', 'name', 'img', 'price', 'rank', 'symbol', 'lastUpdated'],
        ['price_change_percentage_24h', 'id', 'name', 'image', 'market_cap_rank', 'slug', 'symbol', 'last_updated'],
      );
    });
  local.setToLocal(apiCall, 'trending');
  return apiCall;
});

api.fetchSingleCoin = createAsyncThunk('main/fetchSingleCoin', async (coinId) => {
  const apiCall = await axios
    .get(`${baseURL}coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
    .then((response) => {
      console.log(response.data);
      return dataFilter(
        response.data.coins,
        ['description', 'id', 'name', 'img', 'marketData', 'links', 'symbol', 'lastUpdated'],
        ['description', 'id', 'name', 'image', 'market_data', 'links', 'symbol', 'last_updated'],
      );
    })
    .then((filteredData) => {
      const { marketData } = filteredData;
      const filteredMarketData = {
        currentPrice: marketData.current_price.usd,
        priceArray: marketData.sparkline_7d.price,
        ChnagePercentage: marketData.price_change_percentage_24h,
      };
      return { ...filteredData, ...filteredMarketData, marketData: '' };
    });
  return apiCall;
});

export default api;
