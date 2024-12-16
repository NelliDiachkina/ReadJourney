import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './operations';
import { logOutUser } from '../auth/operations';

const initialState = {
  items: [],
  page: 1,
  perPage: 10,
  hasNextPage: false,
  isLoadingBooks: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    decrementPage(state) {
      state.page -= 1;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBooks.pending, handlePending)
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.results;
        state.page = payload.page;
        state.hasNextPage = state.page < payload.totalPages;
      })
      .addCase(fetchBooks.rejected, handleRejected)
      .addCase(logOutUser.fulfilled, state => {
        state.items = [];
        state.isLoading = false;
      }),
});

export const { decrementPage, incrementPage } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
