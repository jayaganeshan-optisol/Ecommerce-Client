import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeWishList } from "../redux/slice/wishlistSlice";
import { WishListProductProps } from "../types/types";

const WishListCard: FC<WishListProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemoveCart = (id: number) => {
    dispatch(removeWishList(id));
  };
  return (
    <div className="wishlist_card_wrapper">
      <div>
        <div className="wishlist_card_body">
          <div>
            <h1 onClick={() => navigate("/product/" + product.product_id)}>
              {product.product_name}
            </h1>
            <h3 className="product_desc">{product.description}</h3>
          </div>
          <h4>
            price:{" "}
            <span className="highlight">&#8377;{product.unit_price}</span>
          </h4>
          <div>
            <button
              className="input_field remove_product red"
              onClick={() => handleRemoveCart(product.product_id)}
            >
              Remove from WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
