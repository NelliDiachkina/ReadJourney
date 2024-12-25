import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setupAuthHeader } from '../auth/operations';

const defaultParams = {
  page: 1,
  perPage: 10,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchAll',
  async (customParams = {}, thunkAPI) => {
    try {
      setupAuthHeader(thunkAPI);
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

export const addBookFromRecommend = createAsyncThunk(
  'books/addBookFromRecommend',
  async (id, thunkAPI) => {
    try {
      setupAuthHeader(thunkAPI);
      const { data } = await axios.post(`/books/add/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOwnBooks = createAsyncThunk(
  'books/ownBooks',
  async (_, thunkAPI) => {
    try {
      setupAuthHeader(thunkAPI);
      const response = await axios.get('/books/own');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      setupAuthHeader(thunkAPI);
      const response = await axios.delete(`/books/remove/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
