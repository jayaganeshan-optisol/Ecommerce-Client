import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import Header from "../components/Header";
import { removeAllCart } from "../redux/slice/cartSlice";
import { RootState } from "../redux/store";
import { ICart } from "../types/types";

const Cart = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.userCart);
  const dispatch = useDispatch();
  const handleClearAll = () => {
    dispatch(removeAllCart());
  };
  return (
    <div>
      <Header />
      {cartProducts.length > 0 ? (
        <div className="cart_wrapper">
          <button className="input_field form_button" onClick={handleClearAll}>
            Clear all
          </button>
          {cartProducts.map((product: ICart) => (
            <CartCard key={product.product_id} product={product} />
          ))}
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
