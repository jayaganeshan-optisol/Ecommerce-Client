import { Sell } from "@mui/icons-material";
import { Navigate, Outlet } from "react-router-dom";
import Product from "./components/Product";
import AccountSettings from "./pages/AccountSettings";
import Cart from "./pages/Cart";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/Not-Found";
import ProductInfo from "./pages/ProductInfo";
import SellProduct from "./pages/SellProduct";
import SignUp from "./pages/SignUp";
import { ParsedToken } from "./utils/tokenParsing";

const routes = (isLoggedIn: string | null, user: ParsedToken) => [
  { path: "signup", element: !isLoggedIn ? <SignUp /> : <Navigate to="/" /> },
  { path: "login", element: !isLoggedIn ? <Login /> : <Navigate to="/" /> },
  {
    path: "forgot-password",
    element: !isLoggedIn ? <ForgotPassword /> : <Navigate to="/" />,
  },
  {
    path: "sell-product",
    element:
      isLoggedIn && ["seller", "both"].indexOf(user.role) >= 0 ? (
        <SellProduct />
      ) : (
        <Navigate to="/" />
      ),
  },
  {
    path: "cart",
    element:
      isLoggedIn && ["buyer", "both"].indexOf(user.role) >= 0 ? (
        <Cart  />
      ) : (
        <Navigate to="/" />
      ),
  },
  {
    path: "account-settings",
    element: isLoggedIn ? <AccountSettings /> : <Navigate to="/" />,
  },
  {
    path: "product",
    element: isLoggedIn ? <Outlet /> : <Navigate to="/" />,
    children: [
      {
        path: ":product_id",
        element: <ProductInfo />,
      },
    ],
  },

  {
    path: "/",
    element: isLoggedIn ? <Home /> : <Navigate to="/login" />,
    children: [
      {
        path: "account-settings",
        element: <AccountSettings />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
