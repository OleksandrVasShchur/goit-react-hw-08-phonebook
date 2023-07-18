export const selectIsLogin = state => !!state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing
export const selectIsAuthError = state => state.auth.selectIsAuthError