import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import WishListCard from "../components/WishListCard";
import { removeAllWishList } from "../redux/slice/wishlistSlice";
import { RootState } from "../redux/store";
import { IWishList } from "../types/types";

const WishList = () => {
  const dispatch = useDispatch();
  const wishlistProducts = useSelector(
    (state: RootState) => state.wishList.userWishList
  );
  const handleClearAll = () => {
    dispatch(removeAllWishList());
  };
  return (
    <div>
      <Header />
      {wishlistProducts.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>WishList is Empty</h1>
      ) : (
        <div className="wishlist_wrapper">
          <button className="input_field form_button" onClick={handleClearAll}>
            Clear all
          </button>
          {wishlistProducts.map((product: IWishList) => (
            <WishListCard key={product.product_id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
