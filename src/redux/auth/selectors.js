export const selectUserName = state => state.auth.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token;
export const selectRefreshToken = state => state.auth.refreshToken;
