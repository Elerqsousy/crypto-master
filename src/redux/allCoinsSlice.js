import { createSlice } from '@reduxjs/toolkit';
import api from './api';
import local from './local';

const initialState = {
  data: [],
  loading: false,
  error: null,
  joinedMissions: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setJoinMission(state, action) {
      const newState = {
        ...state,
        joinedMissions: [...state.joinedMissions, action.payload],
      };
      local.setToLocal(newState, 'missions');
      return newState;
    },
    setLeaveMission(state, action) {
      const newState = {
        ...state,
        joinedMissions: [
          ...state.joinedMissions.filter(
            (missions) => missions !== action.payload,
          ),
        ],
      };
      local.setToLocal(newState, 'missions');
      return newState;
    },
  },
  extraReducers: {
    [api.FETCH_DATA.pending]: (state) => {
      const newState = { ...state, loading: true };
      local.setToLocal(newState, 'missions');
      return newState;
    },
    [api.FETCH_DATA.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        data: action.payload,
        loading: false,
      };
      local.setToLocal(newState, 'missions');
      return newState;
    },
    [api.FETCH_DATA.rejected]: (state, action) => {
      const newState = {
        ...state,
        loading: false,
        error: action.payload,
      };
      local.setToLocal(newState, 'missions');
      return newState;
    },
    [local.FETCH_LOCAL_DATA.pending]: (state) => ({ ...state, loading: true }),
    [local.FETCH_LOCAL_DATA.fulfilled]: (state, action) => ({
      ...action.payload,
    }),
    [local.FETCH_LOCAL_DATA.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export const { setJoinMission, setLeaveMission } = missionSlice.actions;

export default missionSlice.reducer;
