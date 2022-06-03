import { createAsyncThunk } from '@reduxjs/toolkit';

const local = {};

local.setToLocal = (data, name) => {
  localStorage.setItem(name, JSON.stringify(data));
};

local.getTrending = createAsyncThunk(
  'main/getTrendingFromLocal',
  async (name = 'trending') => {
    const data = await JSON.parse(localStorage.getItem(name));
    return data;
  },
);

local.getFavourites = createAsyncThunk(
  'main/getFavouritesFromLocal',
  async (name = 'favourites') => {
    const data = await JSON.parse(localStorage.getItem(name));
    return data;
  },
);

export default local;
