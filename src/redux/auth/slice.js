import { createSlice } from '@reduxjs/toolkit';
import { logOutUser, loginUser, refreshUser, registerUser } from './operations';

const initialState = {
  name: null,
  token: null,
  refreshToken: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, handleRejected)
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, state => {
        state.name = null;
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOutUser.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
