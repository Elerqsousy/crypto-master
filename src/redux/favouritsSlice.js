import { createSlice } from '@reduxjs/toolkit';
import api from './api';

const trending100 = createSlice({
  name: 'trending100',
  initialState: { status: 'none', list: [] },
  extraReducers: {
    [api.fetchTrending100.pending]: (state) => ({ ...state, status: 'loading' }),
    [api.fetchTrending100.fulfilled]: (state, action) => ({
      ...state,
      list: action.payload,
      status: 'idle',
    }),
    [api.fetchTrending100.rejected]: (state) => ({ ...state, status: 'fail' }),
  },
});

export const { toggleReservation } = trending100.actions;

export default trending100.reducer;
