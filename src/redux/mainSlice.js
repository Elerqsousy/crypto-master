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
      const newlist = state.favourites.filter((item) => item !== action.payload);
      const newState = {
        ...state,
        favourites: [...newlist],
      };
      local.setToLocal(newlist, 'favourites');
      return newState;
    },
    setFavourite(state, action) {
      const newlist = [...state.favourites, action.payload];
      const newState = {
        ...state,
        favourites: [...newlist],
      };
      local.setToLocal(newlist, 'favourites');
      return newState;
    },
    resetSingleCoin(state, action) {
      const newState = {
        ...state,
        singleCoin: action.payload,
      };
      local.setToLocal(newState);
      return newState;
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

    [local.getFavourites.pending]: (state) => ({ ...state, status: 'loading' }),
    [local.getFavourites.fulfilled]: (state, action) => ({
      ...state,
      favourites: action.payload,
      status: 'idle',
    }),
    [local.getFavourites.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export const { setFavourite, deleteFavourite, resetSingleCoin } = mainSlice.actions;

export default mainSlice.reducer;
