import { createSlice } from '@reduxjs/toolkit';
import {
  addBookFromRecommend,
  deleteBook,
  fetchBooks,
  fetchOwnBooks,
} from './operations';
import { logOutUser } from '../auth/operations';

const initialState = {
  items: [],
  libraryBooks: [],
  page: 1,
  perPage: 10,
  hasNextPage: false,
  isLoadingBooks: false,
  filter: { value: '', text: 'All books' },
};

const handlePending = state => {
  state.isLoadingBooks = true;
};

const handleRejected = state => {
  state.isLoadingBooks = false;
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
    saveFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBooks.pending, handlePending)
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.isLoadingBooks = false;
        state.items = payload.results;
        state.page = payload.page;
        state.hasNextPage = state.page < payload.totalPages;
      })
      .addCase(fetchBooks.rejected, handleRejected)
      .addCase(logOutUser.fulfilled, state => {
        state.items = [];
        state.page = 1;
        state.hasNextPage = false;
        state.isLoadingBooks = false;
      })
      .addCase(addBookFromRecommend.pending, handlePending)
      .addCase(addBookFromRecommend.fulfilled, (state, { payload }) => {
        state.isLoadingBooks = false;
        state.libraryBooks = [...state.libraryBooks, payload];
      })
      .addCase(addBookFromRecommend.rejected, handleRejected)
      .addCase(fetchOwnBooks.pending, handlePending)
      .addCase(fetchOwnBooks.fulfilled, (state, { payload }) => {
        state.isLoadingBooks = false;
        state.libraryBooks = payload;
      })
      .addCase(fetchOwnBooks.rejected, handleRejected)
      .addCase(deleteBook.pending, handlePending)
      .addCase(deleteBook.fulfilled, (state, { payload }) => {
        state.isLoadingBooks = false;
        state.libraryBooks = state.libraryBooks.filter(
          book => book._id !== payload.id
        );
      })
      .addCase(deleteBook.rejected, handleRejected),
});

export const { decrementPage, incrementPage, saveFilter } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
