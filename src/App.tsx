import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { setUser } from "./redux/slice/userSlice";
import { RootState } from "./redux/store";

import routes from "./routes";
import { ParsedToken } from "./utils/tokenParsing";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  const user: ParsedToken = useSelector(
    (state: RootState) => state.user.loggedInUser
  );
  const routing = useRoutes(routes(user.user_id, user));
  return <>{routing}</>;
}

export default App;
