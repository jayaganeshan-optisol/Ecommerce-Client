import axios from "../axios";
import { IProductDetails } from "../types/types";

export const createProduct = async (data: IProductDetails) => {
  const result = await axios("http://localhost:3001/product/create", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify(data),
  });
  return result.data;
};

export const fetchProducts = async () => {
  const result = await axios("http://localhost:3001/product/all", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};

export const getProduct = async (id: string | undefined) => {
  const result = await axios("http://localhost:3001/product/" + id, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};
