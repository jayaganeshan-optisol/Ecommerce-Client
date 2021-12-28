import { FC } from "react";
import { useDispatch } from "react-redux";
import { removeWishList } from "../redux/slice/wishlistSlice";
import { WishListProductProps } from "../types/types";

const WishListCard: FC<WishListProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleRemoveCart = (id: number) => {
    dispatch(removeWishList(id));
  };
  return (
    <div className="wishlist_card_wrapper">
      <div>
        <div className="wishlist_card_body">
          <div>
            <h1>{product.product_name}</h1>
            <h3>{product.description}</h3>
          </div>
          <h4>price: &#8377;{product.unit_price}</h4>
          <button
            className="input_field form_button red"
            onClick={() => handleRemoveCart(product.product_id)}
          >
            Remove from WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
