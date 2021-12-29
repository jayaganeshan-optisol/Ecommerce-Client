import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import { getOrders } from "../redux/slice/orderSlice";
import { RootState } from "../redux/store";
import { Order } from "../types/types";

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  const userOrders = useSelector((state: RootState) => state.order.userOrders);
  return (
    <div>
      <Header />
      {userOrders.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No Orders</h1>
      ) : (
        <div className="order_wrapper">
          {userOrders.map((order: Order) => (
            <OrderCard key={order.order_id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
