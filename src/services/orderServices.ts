import axios from "../axios";

//get all te orders by user
export const fetchOrder = async () => {
  const result = await axios("http://localhost:3001/order/user", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};
//Placing order directly from cart
export const orderByCart = async () => {
  const result = await axios("http://localhost:3001/order/by/cart", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};
// Products in Cart
export const fetchOrderItems = async (id: number) => {
  const result = await axios("http://localhost:3001/order/find/" + id, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};
//Payment for the order
export const orderPayment = async (order_id: number) => {
  const result = await axios(
    "http://localhost:3001/order/payment/" + order_id,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify({
        card: {
          number: "4242424242424242",
          exp_month: 12,
          exp_year: 2022,
          cvc: "314",
        },
      }),
    }
  );
  return result.data;
};

//cancel order
export const removeOrder = async (order_id: number) => {
  const result = await axios("http://localhost:3001/order/cancel/" + order_id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  return result.data;
};
