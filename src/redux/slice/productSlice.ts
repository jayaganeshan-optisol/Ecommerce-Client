import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { fetchProducts } from "../../services/productService";

const slice = createSlice({
  name: "product",
  initialState: { products: [] },
  reducers: {
    setProducts: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.products = action.payload;
    },
  },
});

export const getProducts = () => {
  return async (dispatch: any) => {
    try {
      const user = await fetchProducts();
      dispatch(setProducts(user));
    } catch (er: any) {
      console.log(er);
    }
  };
};

export const { setProducts } = slice.actions;
export default slice.reducer;
