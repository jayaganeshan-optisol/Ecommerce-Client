import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
