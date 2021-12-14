import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slice/userSlice";
import { ParsedToken } from "../utils/tokenParsing";

function Header() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { name, role }: ParsedToken = jwtDecode(token as string);

  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="header">
      <div className="headerWrapper">
        <h1 onClick={() => navigate("/")}>Ecommerce</h1>
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
          <h4 onClick={handleClick} className="navbar">
            Logout
          </h4>
        </nav>
      </div>
    </div>
  );
}

export default Header;
