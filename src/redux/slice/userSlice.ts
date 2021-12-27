import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginReq } from "../../services/userService";
import jwtDecode from "jwt-decode";
import { ParsedToken } from "../../utils/tokenParsing";
import { LoginInputs } from "../../types/types";
const slice = createSlice({
  name: "test",
  initialState: {
    loggedInUser: {
      name: "",
      stripe_id: "",
      user_id: "",
      role: "",
    },
  },
  reducers: {
    setUser: (state, action: PayloadAction) => {
      const token = localStorage.getItem("token");
      if (token) {
        const user: ParsedToken = jwtDecode(token as string);
        state.loggedInUser = user;
      }
    },
    login: (state, action: PayloadAction<any>) => {
      try {
        if (action.payload) {
          state.loggedInUser = action.payload;
        }
      } catch (er) {
        console.log(er);
      }
    },
    logout: (state, action: PayloadAction) => {
      localStorage.clear();
      state.loggedInUser = {
        name: "",
        stripe_id: "",
        user_id: "",
        role: "",
      };
    },
  },
});
export const signIn = (body: LoginInputs) => {
  return async (dispatch: any) => {
    try {
      const user = await loginReq(body);
      localStorage.setItem("token", user);
      const { name, role, user_id, stripe_id }: ParsedToken = jwtDecode(user);
      dispatch(login({ name, role, user_id, stripe_id }));
    } catch (er: any) {
      console.log(er);
    }
  };
};
export const { login, logout, setUser } = slice.actions;
export default slice.reducer;
