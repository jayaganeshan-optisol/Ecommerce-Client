import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { addToCart } from "../redux/slice/cartSlice";
import { getProduct } from "../services/productService";
import { IProductResult } from "../types/types";

function ProductInfo() {
  const params = useParams();
  const [product, setProduct] = useState<IProductResult>();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetch() {
      const result = await getProduct(params.product_id);
      setProduct(result);
    }
    fetch();
  }, [params]);
  const handleCart = () => {
    if (product?.product_id) {
      dispatch(addToCart(product.product_id, quantity));
    }
  };
  return (
    <div>
      <Header />
      <section className="product_info_box">
        <section className="product_info_box_content">
          <section className="right_product_info">
            <h2>{product?.product_name}</h2>
            <h2 className="product_desc">{product?.description}</h2>
          </section>
          <section className="left_product_info">
            <h3>
              Seller name:
              <span className="highlight">{product?.seller_name}</span>
            </h3>
            <h3>
              Available Stock:
              <span className="highlight">{product?.number_in_stock}</span>
            </h3>
            <h3>
              Price: &#8377;
              <span className="highlight">{product?.unit_price}</span>
            </h3>
            <input
              type="number"
              placeholder="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              max={product?.number_in_stock}
              className="input_field"
            />
          </section>
        </section>
        <div>
          <button
            className="add_to_cart"
            onClick={handleCart}
            disabled={product?.number_in_stock === 0}
          >
            {product?.number_in_stock === 0 ? "Out Of Stock" : "Add to Cart"}
          </button>
          <button className="add_to_cart">Add to wishlist</button>
        </div>
      </section>
    </div>
  );
}

export default ProductInfo;
