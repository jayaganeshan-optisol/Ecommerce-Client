import axios from "../axios";
import { LoginInputs, SignUpInputs } from "../types/types";

export const signUpReq = async (data: SignUpInputs) => {
  const result = await axios("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify(data),
  });
  return result;
};
export const loginReq = async (data: LoginInputs) => {
  const result = await axios("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify(data),
  });
  localStorage.setItem("token", result.data.token);
  return result.data.token;
};
