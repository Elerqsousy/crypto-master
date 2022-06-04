import { createSlice } from '@reduxjs/toolkit';
import api from './api';
import local from './local';

const mainSlice = createSlice({
  name: 'favourite',
  initialState: { status: 'none', favouriteList: [] },
  extraReducers: {
    [api.fetchFavourites.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchFavourites.fulfilled]: (state, action) => ({
      ...state,
      favouriteList: action.payload,
      status: 'idle',
    }),
    [api.fetchFavourites.rejected]: (state) => ({ ...state, status: 'fail' }),
    [local.getFavourites.pending]: (state) => ({ ...state, status: 'loading' }),
    [local.getFavourites.fulfilled]: (state, action) => ({
      ...state,
      favouriteList: action.payload,
      status: 'idle',
    }),
    [local.getFavourites.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export const { toggleReservation } = mainSlice.actions;

export default mainSlice.reducer;
