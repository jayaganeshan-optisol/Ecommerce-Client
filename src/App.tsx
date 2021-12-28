import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ParsedToken } from "./utils/tokenParsing";
import { setUser } from "./redux/slice/userSlice";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);
  const user: ParsedToken = useSelector(
    (state: RootState) => state.user.loggedInUser
  );
  const routing = useRoutes(routes(token, user.role));
  return <>{routing}</>;
}

export default App;
