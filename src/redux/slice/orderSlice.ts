import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import message from "../../utils/tostify";
import { fetchOrder, orderByCart } from "../../services/orderServices";
import { removeAllCart } from "./cartSlice";

const slice = createSlice({
  name: "order",
  initialState: { userOrders: [] },
  reducers: {
    setOrder: (state, action: PayloadAction<any>) => {
      state.userOrders = action.payload;
    },
  },
});

export const getOrders = () => {
  return async (dispatch: any) => {
    try {
      const user = await fetchOrder();
      dispatch(setOrder(user));
    } catch (er: any) {
      console.log(er);
    }
  };
};

export const placeOrderByCart = () => {
  return async (dispatch: any) => {
    try {
      const result = await orderByCart();
      dispatch(getOrders());
      dispatch(removeAllCart());
      message(result.message, "success");
    } catch (er: any) {
      if (axios.isAxiosError(er)) {
        message(er.response?.data.error, "error");
      }
    }
  };
};

export const { setOrder } = slice.actions;
export default slice.reducer;
