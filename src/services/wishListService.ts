import axios from "../axios";
import { IWishList, WishListRequest } from "../types/types";

export const fetchWishList = async (): Promise<IWishList[]> => {
  const result = await axios("http://localhost:3001/wishlist", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};

export const addProductToWishList = async (productId: number) => {
  const result = await axios("http://localhost:3001/wishlist/add", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify({ product_id: productId }),
  });
  return result.data;
};

export const deleteProductInWishList = async (id: number) => {
  const result = await axios("http://localhost:3001/wishlist/remove/" + id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};

export const deleteAllInWishList = async () => {
  const result = await axios("http://localhost:3001/wishlist/remove", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};
