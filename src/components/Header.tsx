import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slice/userSlice";

function Header() {
  const dispatch = useDispatch();
  const user: string | null = localStorage.getItem("user");
  const { name, role } = JSON.parse(user as string);

  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logout());
    navigate("/login");
  };
  console.log(role === "buyer");
  return (
    <div className="header">
      <div className="headerWrapper">
        <h1>Ecommerce</h1>
        <nav className="navbar">
          <h4 className="navbar">Account Settings</h4>
          {role !== "buyer" && <h4>Sell Product</h4>}
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
