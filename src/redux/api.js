import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dataFilter from './dataFilter';
import local from './local';

const baseURL = 'https://api.coingecko.com/api/v3/';

const api = {};

api.fetchTrending = createAsyncThunk('main/fetchTrending', async () => {
  const apiCall = await axios
    .get(`${baseURL}search/trending`)
    .then((response) => dataFilter(
      response.data.coins,
      ['CoinId', 'id', 'name', 'img', 'price', 'altName', 'symbol'],
      ['coin_id', 'id', 'name', 'large', 'price_btc', 'slug', 'symbol'],
      'item',
    ));
  local.setToLocal(apiCall, 'trending');
  return apiCall;
});

api.fetchTrending100 = createAsyncThunk('trending100/fetchTrending100', async (arrayOfIds) => {
  const stringOfIds = arrayOfIds.join('%2');
  const apiCall = await axios
    .get(`${baseURL}coins/markets?vs_currency=usd&ids=${stringOfIds}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then((response) => {
      const finalData = dataFilter(
        response.data,
        ['ChangePercent', 'id', 'name', 'img', 'price', 'rank', 'symbol', 'lastUpdated'],
        ['price_change_percentage_24h', 'id', 'name', 'image', 'current_price', 'market_cap_rank', 'symbol', 'last_updated'],
      );
      return finalData;
    });
  return apiCall;
});

api.fetchSingleCoin = createAsyncThunk('main/fetchSingleCoin', async (coinId) => {
  const apiCall = await axios
    .get(`${baseURL}coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
    .then((response) => {
      const filteredData = {
        description: response.data.description,
        id: response.data.id,
        name: response.data.name,
        img: response.data.image,
        marketData: response.data.market_data,
        links: response.data.links,
        symbol: response.data.symbol,
        lastUpdated: response.data.last_updated,
      };
      const { marketData } = filteredData;
      const filteredMarketData = {
        currentPrice: marketData.current_price.usd,
        priceArray: marketData.sparkline_7d.price,
        ChnagePercentage: marketData.price_change_percentage_24h,
      };
      const finalData = { ...filteredData, ...filteredMarketData, marketData: '' };
      return finalData;
    });
  return apiCall;
});

export default api;
