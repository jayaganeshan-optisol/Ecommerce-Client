import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import "./App.css";
import { login } from "./redux/slice/userSlice";
import { RootState } from "./redux/store";
import routes from "./routes";
// import {createStore} from ""

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const user: string | null = localStorage.getItem("user");
    if(user) {const { name, role } = JSON.parse(user as string); 
    dispatch(login(name))}
   },[dispatch])
  const  isLoggedIn:boolean=useSelector((state:RootState)=>state.user.loggedInStatus);
   
  const routing = useRoutes(routes(isLoggedIn));
  return <>{routing}</>;
}

export default App;
