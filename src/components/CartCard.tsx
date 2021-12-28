import axios from "axios";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCart, updateCart } from "../redux/slice/cartSlice";
import { RootState } from "../redux/store";
import { CartProductProps, IProductResult } from "../types/types";
import message from "../utils/tostify";

const CartCard: FC<CartProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tempProduct = useSelector((state: RootState) => state.product.products);
  const prod: IProductResult[] = tempProduct.filter(
    (temp: IProductResult) => temp.product_id === product.product_id
  );
  console.log(prod[0].number_in_stock);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ quantity: number }>();

  const onSubmit: SubmitHandler<{ quantity: string }> = async (data) => {
    try {
      dispatch(
        updateCart({
          product_id: product.product_id,
          quantity: Number(data.quantity),
        })
      );
      message("Product Updated Successfully", "success");
    } catch (er) {
      if (axios.isAxiosError(er)) {
        console.log(er.response?.data.error);
        message(er.response?.data.error, "error");
      }
    }
  };
  const handleRemoveProduct = () => {
    dispatch(removeCart(product.product_id));
    message("Removed Successfully", "success");
  };
  return (
    <div className="cart_card_wrapper">
      <div className="cart_card">
        <h2 onClick={() => navigate("/product/" + product.product_id)}>
          {product.product_name}
        </h2>
        <div className="cart_body_center">
          Quantity:
          <input
            placeholder="quantity"
            type="number"
            min="1"
            {...register("quantity", {
              required: true,
              min: 1,
              max: prod[0].number_in_stock,
            })}
            className="input_field quantity"
            defaultValue={product.quantity}
          />
          {
            <span className={errors.quantity ? "error" : "hidden_error"}>
              {errors.quantity?.type === "min" && "Minimum 1"}
              {errors.quantity?.type === "max" && "Exceeds the stock"}
            </span>
          }
          <h4>Unit Price:&#8377; {product.unit_price}</h4>
          <h4>Sub Total:&#8377;{product.unit_price * product.quantity}</h4>
        </div>
        <div className="cart_body_right">
          <button className="update_cart" onClick={handleSubmit(onSubmit)}>
            Update Cart
          </button>
          <button className="remove_cart" onClick={handleRemoveProduct}>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
