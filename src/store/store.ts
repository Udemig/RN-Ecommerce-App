import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/productSlice';
import homeSlice from "./slice/homeSlice"
import cartSlice from "./slice/cartSlice"
import favoriteSlice from "./slice/favoriteSlice"
import authSlice from "./slice/authSlice"
export const store = configureStore({
  reducer: {
    products: productSlice,
    home:homeSlice,
    cart:cartSlice,
    favorites:favoriteSlice,
    auth:authSlice
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch