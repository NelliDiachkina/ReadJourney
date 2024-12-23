import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from '../auth/operations';

const defaultParams = {
  page: 1,
  perPage: 10,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchAll',
  async (customParams = {}, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const persistedToken = auth.token;

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/books/recommend', {
        params: { ...defaultParams, ...customParams },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      const savedToken = auth.token;
      const isRefreshing = auth.isRefreshing;
      return savedToken !== null && !isRefreshing;
    },
  }
);
