import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { passwordChange } from "../services/userService";
import { IPasswordChange } from "../types/types";
import message from "../utils/tostify";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IPasswordChange>();

  const passwordPattern = new RegExp(
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
  );

  const onSubmit: SubmitHandler<IPasswordChange> = async (data) => {
    try {
      const result = await passwordChange(data);
      resetField("newPassword");
      resetField("oldPassword");

      message(result, "success");
    } catch (er) {
      if (axios.isAxiosError(er)) {
        message(er.response?.data.error, "error");
      }
    }
  };
  return (
    <div>
      <form className="account_form">
        <h3>Change Password</h3>
        <input
          placeholder="Current Password"
          {...register("oldPassword", {
            required: true,
            pattern: passwordPattern,
          })}
          className="input_field"
        />
        {
          <span className={errors.oldPassword ? "error" : "hidden_error"}>
            {errors.oldPassword?.type === "required"
              ? "Password is required"
              : "Password should have uppercase,lowercase,number and special character"}
          </span>
        }
        <input
          placeholder="New Password"
          {...register("newPassword", {
            required: true,
            pattern: passwordPattern,
          })}
          className="input_field"
        />
        {
          <span className={errors.newPassword ? "error" : "hidden_error"}>
            {errors.newPassword?.type === "required"
              ? "Password is required"
              : "Password should have uppercase,lowercase,number and special character"}
          </span>
        }
        <input
          type="submit"
          onClick={handleSubmit(onSubmit)}
          value="Change Password"
          className="input_field form_button"
        ></input>
      </form>
    </div>
  );
}

export default ChangePassword;
