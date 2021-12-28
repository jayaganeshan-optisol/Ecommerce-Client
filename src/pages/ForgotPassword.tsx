import { SubmitHandler, useForm } from "react-hook-form";
import { Iemail } from "../types/types";
function ForgotPassword() {
  const emailPattern = new RegExp(
    "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iemail>();

  const onSubmit: SubmitHandler<Iemail> = async (data) => {
    console.log(data);
  };
  return (
    <div className="wrapper">
      <h1 className="title">Ecommerce</h1>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input
            placeholder="email"
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
            type="submit"
            value="Send me reset link"
            className=" input_field form_button"
          />
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
