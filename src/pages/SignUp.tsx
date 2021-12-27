// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { signUpReq } from "../services/userService";
import {CircularProgress} from "@mui/material"
import { SignUpInputs } from "../types/types";
import axios from "axios";
import message from "../utils/tostify";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function SignUp() {
  const passwordPattern = new RegExp(
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
  );
  const emailPattern = new RegExp(
    "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"
  );
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();
  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    try {
      setLoading(true);
      await signUpReq(data);
      setLoading(false);
      navigate("/", { replace: true });
    } catch (er) {
      if (axios.isAxiosError(er)) {
        console.log(er.response?.data.error);
        message(er.response?.data.error, "error");
      }
    }
  };
  return (
    <div className="wrapper">
      <ToastContainer />
      <h1 className="title">Ecommerce </h1>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            type="text"
            placeholder="username"
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 45,
            })}
            className="input_field"
          />
          {
            <span className={errors.name ? "error" : "hidden_error"}>
              {errors.name?.type === "required"
                ? "Username is Required"
                : "Username  is too short or long"}
            </span>
          }
          <input
            placeholder="email"
            type="email"
            {...register("email", { required: true, pattern: emailPattern })}
            className="input_field"
          />
          {
            <span className={errors.email ? "error" : "hidden_error"}>
              {errors.email?.type === "required"
                ? "Email is required"
                : "Email don't match the pattern"}
            </span>
          }
          <input
            placeholder="password"
            type="password"
            {...register("password", {
              required: true,
              pattern: passwordPattern,
            })}
            className="input_field"
          />
          {
            <span className={errors.password ? "error" : "hidden_error"}>
              {errors.password?.type === "required"
                ? "Password is required"
                : "Password should have uppercase,lowercase,number and special character"}
            </span>
          }
          <select {...register("role")} className="input_field">
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="both">Seller & Buyer</option>
          </select>
         <button className="input_field form_button">{loading? <CircularProgress size={14} />:"Sign Up"}</button>
        </form>
        <p className="link">
          Aleready a user,<a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
