import axios from "../axios";

export const fetchOrder = async () => {
  const result = await axios("http://localhost:3001/order/user", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};

export const orderByCart = async () => {
  const result = await axios("http://localhost:3001/order/by/cart", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};
