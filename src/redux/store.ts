import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import cartSlice from "./slice/cartSlice";
import wishListSlice from "./slice/wishlistSlice";
import orderSlice from "./slice/orderSlice";
import productSlice from "./slice/productSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartSlice,
    wishList: wishListSlice,
    order: orderSlice,
    product: productSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
