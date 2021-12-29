import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { fetchOrderItems } from "../services/orderServices";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    async function fetch() {
      const result = await fetchOrderItems(Number(orderId));
      setOrderItems(result);
    }
    fetch();
  }, [orderId]);
  console.log(orderItems);
  return (
    <div>
      <Header />
      {orderItems?.map((product: any) => (
        <h1>{product.product_name}</h1>
      ))}
    </div>
  );
};

export default OrderDetails;
