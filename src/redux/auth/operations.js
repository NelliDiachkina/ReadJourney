import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api';

export const setupAuthHeader = (thunkAPI, tokenName = 'token') => {
  const { auth } = thunkAPI.getState();
  const persistedToken = auth[tokenName];
  axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (registerData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', registerData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (loginData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signin', loginData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      setupAuthHeader(thunkAPI);
      await axios.post('/users/signout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      setupAuthHeader(thunkAPI, 'refreshToken');
      const { data } = await axios.get('/users/current/refresh');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      const savedToken = auth.refreshToken;
      const isRefreshing = auth.isRefreshing;
      return savedToken !== null && !isRefreshing;
    },
  }
);
