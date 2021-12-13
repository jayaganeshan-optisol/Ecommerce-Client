import { Navigate } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/Not-Found";
import SignUp from "./pages/SignUp";


const routes = (isLoggedIn: boolean) => [
  { path: "/signup", element: !isLoggedIn ? <SignUp /> : <Navigate to="/" /> },
  { path: "/login", element: !isLoggedIn ? <Login /> : <Navigate to="/" /> },
  { path: "/forgot-password", element: !isLoggedIn ? <ForgotPassword /> : <Navigate to="/" /> },

  {
    path: "/",
    element: isLoggedIn ? <Home /> : <Navigate to="/login" />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "signup", element: <SignUp /> },
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
