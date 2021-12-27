import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slice/cartSlice";
import { ProductProps } from "../types/types";

const Product: FC<ProductProps> = ({ info }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (id: number) => {
    navigate("/product/" + id);
  };
  const handleAddCart = (id: number) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="product_box">
      <section
        className=" col product_info"
        onClick={() => handleClick(info.product_id)}
      >
        <h1>{info.product_name}</h1>
        <h4 className="product_desc">{info.description}</h4>
      </section>
      <section className=" col product_price">&#8377;{info.unit_price}</section>
      <section className=" col product_button">
        <button
          className="add_to_cart"
          onClick={() => handleAddCart(info.product_id)}
        >
          Add to Cart
        </button>
        <button className="add_to_cart">Add to Wishlist </button>
      </section>
    </div>
  );
};

export default Product;
