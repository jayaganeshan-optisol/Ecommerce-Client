import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slice/cartSlice";
import { addToWishList } from "../redux/slice/wishlistSlice";
import { RootState } from "../redux/store";
import { ICart, ProductProps } from "../types/types";

const Product: FC<ProductProps> = ({ info }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [wishlistDisabled, setWishlistDisabled] = useState(false);

  const cartProducts = useSelector((state: RootState) => state.cart.userCart);
  const wishListProducts = useSelector(
    (state: RootState) => state.wishList.userWishList
  );

  useEffect(() => {
    cartProducts.forEach((product: ICart) => {
      if (product.product_id === info.product_id) {
        setDisabled(true);
      }
    });
    wishListProducts.forEach((product: ICart) => {
      if (product.product_id === info.product_id) {
        setWishlistDisabled(true);
      }
    });
  });

  const handleClick = (id: number) => {
    navigate("/product/" + id);
  };
  const handleAddCart = (id: number) => {
    dispatch(addToCart(id));
  };

  const handleAddWishList = (id: number) => {
    dispatch(addToWishList(id));
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
          disabled={info.number_in_stock === 0 || disabled}
        >
          {info.number_in_stock === 0 ? "Out Of Stock" : "Add to Cart"}
        </button>
        <button
          className="add_to_cart"
          onClick={() => handleAddWishList(info.product_id)}
          disabled={wishlistDisabled}
        >
          Add to Wishlist
        </button>
      </section>
    </div>
  );
};

export default Product;
