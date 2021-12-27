import axios from "../axios";
import { CartRequest, ICart } from "../types/types";

export const fetchCart = async (): Promise<ICart[]> => {
  const result = await axios("http://localhost:3001/cart/view", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};

export const addProductToCart = async (productId: number, quantity: number) => {
  const result = await axios("http://localhost:3001/cart", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify({ product_id: productId, quantity }),
  });
  return result.data;
};

export const updateCartProduct = async (data: CartRequest) => {
  const result = await axios("http://localhost:3001/cart/update", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify(data),
  });
  return result.data;
};

export const deleteProductInCart = async (id: number) => {
  const result = await axios("http://localhost:3001/cart/delete/" + id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};

export const deleteAllInCart = async () => {
  const result = await axios("http://localhost:3001/cart/all/delete", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};
