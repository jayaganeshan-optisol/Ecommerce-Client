import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import Header from "../components/Header";
import { removeAllCart } from "../redux/slice/cartSlice";
import { placeOrderByCart } from "../redux/slice/orderSlice";
import { RootState } from "../redux/store";
import { ICart } from "../types/types";

const Cart = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.userCart);
  const dispatch = useDispatch();
  const handleClearAll = () => {
    dispatch(removeAllCart());
  };
  //Placing order from cart
  const handlePlaceOrder = () => {
    dispatch(placeOrderByCart());
  };
  return (
    <div>
      <Header />
      {cartProducts.length > 0 ? (
        <div className="cart_wrapper">
          <div className="cart_buttons">
            <button
              className="input_field cart_quantity"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
            <button className="input_field  red" onClick={handleClearAll}>
              Clear all
            </button>
          </div>

          {cartProducts.map((product: ICart) => (
            <CartCard key={product.product_id} product={product} />
          ))}
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
