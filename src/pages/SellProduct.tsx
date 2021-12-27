import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../components/Header";
import { createProduct } from "../services/productService";
import { IProductDetails } from "../types/types";
import message from "../utils/tostify";

function SellProduct() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IProductDetails>();

  const onSubmit: SubmitHandler<IProductDetails> = async (data) => {
    try {
      const result = await createProduct(data);
      if (result) {
        resetField("product_name");
        resetField("description");
        resetField("unit_price");
        resetField("number_in_stock");

        message("Product successfully Posted", "success");
      }
    } catch (er) {
      if (axios.isAxiosError(er)) message(er.response?.data.error, "error");
    }
  };

  return (
    <div>
      <Header />
      <div className="content_box">
        <div className="product_details_box">
          <div className="product_details_box_content">
            <h2>Post Information:</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <input
                placeholder="Product_name"
                {...register("product_name", {
                  required: true,
                })}
                className="input_field"
              />
              {
                <span
                  className={errors.product_name ? "error" : "hidden_error"}
                >
                  {errors.product_name?.type === "required"
                    ? "Required"
                    : "Email don't match the pattern"}
                </span>
              }
              <textarea
                placeholder="Description about product"
                {...register("description", { required: true })}
                className="input_field text_area"
              />
              {
                <span className={errors.description ? "error" : "hidden_error"}>
                  {errors.description?.type === "required"
                    ? "Required"
                    : "Email don't match the pattern"}
                </span>
              }
              <input
                placeholder="Available stock"
                type="number"
                min="1"
                {...register("number_in_stock", {
                  required: true,
                  min: 1,
                  max: 100000,
                })}
                className="input_field"
              />
              {
                <span
                  className={errors.number_in_stock ? "error" : "hidden_error"}
                >
                  {errors.number_in_stock?.type === "required"
                    ? "Required"
                    : "Email don't match the pattern"}
                </span>
              }
              <input
                placeholder="Unit Price"
                type="number"
                min="1"
                {...register("unit_price", {
                  required: true,
                  min: 1,
                  max: 100000,
                })}
                className="input_field"
              />
              {
                <span className={errors.unit_price ? "error" : "hidden_error"}>
                  {errors.unit_price?.type === "required"
                    ? "Required"
                    : "Provide valid Price"}
                </span>
              }
              <input
                type="submit"
                value="Sell Product"
                className="input_field form_button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SellProduct;
