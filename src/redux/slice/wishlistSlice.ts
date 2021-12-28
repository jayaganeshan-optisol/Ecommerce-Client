import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import message from "../../utils/tostify";
import {
  addProductToWishList,
  deleteAllInWishList,
  deleteProductInWishList,
  fetchWishList,
} from "../../services/wishListService";

const slice = createSlice({
  name: "wishlist",
  initialState: { userWishList: [] },
  reducers: {
    setWishList: (state, action: PayloadAction<any>) => {
      state.userWishList = action.payload;
    },
  },
});

export const getWishList = () => {
  return async (dispatch: any) => {
    try {
      const user = await fetchWishList();
      dispatch(setWishList(user));
    } catch (er: any) {
      console.log(er);
    }
  };
};
export const addToWishList = (productId: number) => {
  return async (dispatch: any) => {
    try {
      const result = await addProductToWishList(productId);
      if (result.message) {
        message(result.message, "success");
      } else {
        message("Added Successfully", "success");
      }
      dispatch(getWishList());
    } catch (er) {
      if (axios.isAxiosError(er)) {
        message(er.response?.data.error, "error");
      }
    }
  };
};
export const removeWishList = (data: number) => {
  return async (dispatch: any) => {
    try {
      await deleteProductInWishList(data);
      dispatch(getWishList());
    } catch (er: any) {
      console.log(er);
    }
  };
};
export const removeAllWishList = () => {
  return async (dispatch: any) => {
    try {
      await deleteAllInWishList();
      dispatch(getWishList());
    } catch (er: any) {
      console.log(er);
    }
  };
};
export const { setWishList } = slice.actions;
export default slice.reducer;
