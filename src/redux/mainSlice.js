import { createSlice } from '@reduxjs/toolkit';
import api from './api';
import local from './local';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    status: 'none', trendingList: [], favourites: [], singleCoin: '',
  },
  reducers: {
    deleteFavourite(state, action) {
      const newlist = state.favourites.filter((item) => item.id === action.payload);
      local.setToLocal(newlist, 'favourites');
      return {
        ...state,
        favourites: [...newlist],
      };
    },
    setFavourite(state, action) {
      const newlist = [...state.favourites, action.payload];
      local.setToLocal(newlist, 'favourites');
      return {
        ...state,
        favourites: [...newlist],
      };
    },
  },
  extraReducers: {
    [api.fetchTrending.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchTrending.fulfilled]: (state, action) => ({
      ...state,
      trendingList: action.payload,
      status: 'idle',
    }),
    [api.fetchTrending.rejected]: (state) => ({ ...state, status: 'fail' }),
    [local.getTrending.pending]: (state) => ({ ...state, status: 'loading' }),
    [local.getTrending.fulfilled]: (state, action) => ({
      ...state,
      trendingList: action.payload,
      status: 'idle',
    }),
    [local.getTrending.rejected]: (state) => ({ ...state, status: 'fail' }),

    [api.fetchSingleCoin.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchSingleCoin.fulfilled]: (state, action) => ({
      ...state,
      singleCoin: action.payload,
      status: 'idle',
    }),
    [api.fetchSingleCoin.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export const { setFavourite, deleteFavourite } = mainSlice.actions;

export default mainSlice.reducer;
