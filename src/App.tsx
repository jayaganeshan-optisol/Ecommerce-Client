import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { setUser } from "./redux/slice/userSlice";
import { RootState } from "./redux/store";

import routes from "./routes";
import { ParsedToken } from "./utils/tokenParsing";
import jwtDecode from "jwt-decode";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user: ParsedToken = jwtDecode(token as string);

  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  const routing = useRoutes(routes(token, user.role));
  return <>{routing}</>;
}

export default App;
