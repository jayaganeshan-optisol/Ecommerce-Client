import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginReq } from "../../services/userService";
import jwtDecode from "jwt-decode";
import { ParsedToken } from "../../utils/tokenParsing";
import { LoginInputs } from "../../types/types";
const slice = createSlice({
  name: "test",
  initialState: { loggedInStatus: false },
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      try {
        state.loggedInStatus = true;
      } catch (er) {
        console.log(er);
      }
    },
    logout: (state, action: PayloadAction) => {
      localStorage.clear();
      state.loggedInStatus = false;
    },
  },
});
export const signIn = (body: LoginInputs) => {
  return async (dispatch: any) => {
    try {
      const user = await loginReq(body);
      const { name, role, user_id, stripe_id }: ParsedToken = jwtDecode(user);
      localStorage.setItem("user", JSON.stringify({ name, role }));
      dispatch(login({ name, role, user_id, stripe_id }));
    } catch (er) {
      console.log(er);
    }
  };
};
export const { login, logout } = slice.actions;
export default slice.reducer;
