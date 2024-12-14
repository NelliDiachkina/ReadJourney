import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './operations';
import { logOutUser } from '../auth/operations';

const initialState = { items: [], isLoading: false };

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchBooks.pending, handlePending)
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchBooks.rejected, handleRejected)
      .addCase(logOutUser.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
      }),
});

export const booksReducer = booksSlice.reducer;
