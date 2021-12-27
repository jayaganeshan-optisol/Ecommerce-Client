import axios from "../axios";
import {
  IPasswordChange,
  IUpdateAddress,
  LoginInputs,
  SignUpInputs,
} from "../types/types";

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
  return result.data.token;
};

export const passwordChange = async (data: IPasswordChange) => {
  const result = await axios("http://localhost:3001/change-password", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify(data),
  });
  return result.data.message;
};

export const updateShipping = async (data: IUpdateAddress) => {
  const result = await axios("http://localhost:3001/update/shipping", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    data: JSON.stringify(data),
  });
  return result.data.message;
};
