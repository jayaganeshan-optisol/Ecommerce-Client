import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ProductProps } from "../types/types";

const Product: FC<ProductProps> = ({ info }) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate("/product/" + id);
  };
  return (
    <div onClick={() => console.log(info.product_id)} className="product_box">
      <section
        className=" col product_info"
        onClick={() => handleClick(info.product_id)}
      >
        <h1>{info.product_name}</h1>
        <h4 className="product_desc">{info.description}</h4>
      </section>
      <section className=" col product_price">&#8377;{info.unit_price}</section>
      <section className=" col product_button">
        <button className="add_to_cart">Add to Cart</button>
        <button className="add_to_cart">Add to Wishlist </button>
      </section>
    </div>
  );
};

export default Product;
