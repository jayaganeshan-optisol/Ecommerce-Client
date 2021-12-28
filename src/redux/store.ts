import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import cartSlice from "./slice/cartSlice";
import wishListSlice from "./slice/wishlistSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartSlice,
    wishList: wishListSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
