import { Navigate, Outlet } from "react-router-dom";
import AccountSettings from "./pages/AccountSettings";
import Cart from "./pages/Cart";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/Not-Found";
import ProductInfo from "./pages/ProductInfo";
import SellProduct from "./pages/SellProduct";
import SignUp from "./pages/SignUp";
import WishList from "./pages/WishList";

const routes = (isLoggedIn: string | null, role: string) => [
  {
    path: "forgot-password",
    element: !isLoggedIn ? <ForgotPassword /> : <Navigate to="/" />,
  },
  {
    path: "sell-product",
    element:
      isLoggedIn && ["seller", "both"].indexOf(role) >= 0 ? (
        <SellProduct />
      ) : (
        <Navigate to="/" />
      ),
  },
  {
    path: "cart",
    element:
      isLoggedIn && ["buyer", "both"].indexOf(role) >= 0 ? (
        <Cart />
      ) : (
        <Navigate to="/" />
      ),
  },
  {
    path: "wish-list",
    element:
      isLoggedIn && ["buyer", "both"].indexOf(role) >= 0 ? (
        <WishList />
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
  { path: "signup", element: !isLoggedIn ? <SignUp /> : <Navigate to="/" /> },
  { path: "login", element: !isLoggedIn ? <Login /> : <Navigate to="/" /> },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
