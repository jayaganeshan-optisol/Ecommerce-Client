import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../redux/slice/orderSlice";
import { orderPayment, removeOrder } from "../services/orderServices";
import { OrdersProps } from "../types/types";
import message from "../utils/tostify";

const OrderCard: FC<OrdersProps> = ({ order }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleClick = async (id: number) => {
    navigate("/orders/" + Number(id));
  };

  //Payment for the order
  const handlePayment = async (id: number) => {
    try {
      setLoading(true);
      const result = await orderPayment(id);
      dispatch(getOrders());
      setLoading(false);
      message(result.message, "success");
    } catch (er) {
      if (axios.isAxiosError(er)) {
        message(er.response?.data.error, "error");
      }
    }
  };

  //Canceling the order
  const handleCancel = async (id: number) => {
    try {
      const result = await removeOrder(id);
      dispatch(getOrders());
      message(result.message, "success");
    } catch (er: any) {
      if (axios.isAxiosError(er)) {
        message(er.response?.data.error, "error");
      }
    }
  };
  return (
    <div className="order_card_wrapper">
      <h3
        style={{ cursor: "pointer" }}
        onClick={() => handleClick(order.order_id)}
      >
        Order Id: <span className="highlight">{order.order_id}</span>
      </h3>
      <h3>
        Order Date: <span className="highlight">{order.date}</span>
      </h3>
      <h3>
        Payment Status:{" "}
        <span className="highlight">
          {order.payment_status ? "Paid" : "Unpaid"}
        </span>
      </h3>
      <h3>
        Total Price: &#8377;
        <span className="highlight">{order.total_price}</span>
      </h3>
      <div className="order_items_buttons">
        <button
          className="pay_button"
          disabled={order.payment_status}
          onClick={() => handlePayment(order.order_id)}
        >
          {loading ? <CircularProgress size={14} color="success" /> : "Pay"}
        </button>
        <button
          className="cancel_button"
          onClick={() => handleCancel(order.order_id)}
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
