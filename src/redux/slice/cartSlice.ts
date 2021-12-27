import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  addProductToCart,
  deleteAllInCart,
  deleteProductInCart,
  fetchCart,
  updateCartProduct,
} from "../../services/cartService";
import { CartRequest } from "../../types/types";
import axios from "axios";
import message from "../../utils/tostify";

const slice = createSlice({
  name: "cart",
  initialState: { userCart: [] },
  reducers: {
    setCart: (state, action: PayloadAction<any>) => {
      state.userCart = action.payload;
    },
  },
});

export const getCart = () => {
  return async (dispatch: any) => {
    try {
      const user = await fetchCart();
      dispatch(setCart(user));
    } catch (er: any) {
      console.log(er);
    }
  };
};
export const addToCart = (productId: number, quantity: number = 1) => {
  return async (dispatch: any) => {
    try {
      const result = await addProductToCart(productId, quantity);
      if (result.message) {
        message(result.message, "success");
      } else {
        message("Added Successfully", "success");
      }
      dispatch(getCart());
    } catch (er) {
      if (axios.isAxiosError(er)) {
        message(er.response?.data.error, "error");
      }
    }
  };
};
export const updateCart = (data: CartRequest) => {
  return async (dispatch: any) => {
    try {
      await updateCartProduct(data);
      dispatch(getCart());
    } catch (er: any) {
      console.log(er);
    }
  };
};
export const removeCart = (data: number) => {
  return async (dispatch: any) => {
    try {
      await deleteProductInCart(data);
      dispatch(getCart());
    } catch (er: any) {
      console.log(er);
    }
  };
};
export const removeAllCart = () => {
  return async (dispatch: any) => {
    try {
      await deleteAllInCart();
      dispatch(getCart());
    } catch (er: any) {
      console.log(er);
    }
  };
};
export const { setCart } = slice.actions;
export default slice.reducer;
