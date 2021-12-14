import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateShipping } from "../services/userService";
import { IUpdateAddress } from "../types/types";
import message from "../utils/tostify";

function UpdateAddress() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IUpdateAddress>();

  const onSubmit: SubmitHandler<IUpdateAddress> = async (data) => {
    try {
      const result = await updateShipping(data);
      resetField("shipping_address");
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
        <h3>Update Shipping</h3>
        <textarea
          placeholder="Enter Address"
          {...register("shipping_address", { required: true })}
          className="input_field text_area"
        />
        {
          <span className={errors.shipping_address ? "error" : "hidden_error"}>
            {errors.shipping_address?.type === "required" &&
              "Address is required"}
          </span>
        }
        <input
          type="submit"
          value="Update Address"
          className="input_field form_button"
          onClick={handleSubmit(onSubmit)}
        ></input>
      </form>
    </div>
  );
}

export default UpdateAddress;
