// import { ComponentType, FC } from "react";
import jwtDecode from "jwt-decode";
import { useRoutes } from "react-router-dom";
import "./App.css";

import routes from "./routes";
import { ParsedToken } from "./utils/tokenParsing";

function App() {
  const token = localStorage.getItem("token");
  let user: ParsedToken = {
    name: "",
    stripe_id: "",
    user_id: "",
    role: "",
  };
  if (token) {
    user = jwtDecode(token);
  }
  const routing = useRoutes(routes(token, user));
  return <>{routing}</>;
}
// interface Props {
//   component: ComponentType;
// }
export default App;
// const PrivateRoute: FC<Props> = ({ component: RouteComponent }): any => {
//   console.log(localStorage.getItem("token"), "token");
//   const token = localStorage.getItem("token");
//   if (token) {
//     return <RouteComponent />;
//   }
//   if (!token) {
//     return <Navigate to="/login" />;
//   }
// };

// <Routes>
//   <Route path="/" element={<PrivateRoute component={Home} />} />
//   <Route path="/signup" element={<SignUp />} />
//   <Route
//     path="/account-settings"
//     element={<PrivateRoute component={AccountSettings} />}
//   />
// </Routes>
