import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slice/userSlice";
import { ParsedToken } from "../utils/tokenParsing";
import { ShoppingCartSharp } from "@mui/icons-material";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { getCart } from "../redux/slice/cartSlice";
import { ToastContainer } from "react-toastify";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, role }: ParsedToken = useSelector(
    (state: RootState) => state.user.loggedInUser
  );
  const cartProducts = useSelector((state: RootState) => state.cart.userCart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="header">
      <ToastContainer />
      <div className="headerWrapper">
        <h1 className="logo" onClick={() => navigate("/")}>
          Ecommerce
        </h1>
        <nav className="navbar">
          <h4 className="navbar" onClick={() => navigate("/account-settings")}>
            Account Settings
          </h4>
          {role !== "buyer" && (
            <h4
              onClick={() => {
                navigate("/sell-product");
              }}
            >
              Sell Product
            </h4>
          )}
          <h4 className="navbar">{"Hello," + name}</h4>
          {role === "seller" ? (
            ""
          ) : (
            <h4 className="cart" onClick={() => navigate("/cart")}>
              <ShoppingCartSharp />
              <div className="cart_count">{cartProducts.length}</div>
            </h4>
          )}

          <h4 onClick={handleClick} className="navbar">
            Logout
          </h4>
        </nav>
      </div>
    </div>
  );
}

export default Header;
