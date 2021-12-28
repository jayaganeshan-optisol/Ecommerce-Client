import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Product from "../components/Product";
import { getProducts } from "../redux/slice/productSlice";
import { RootState } from "../redux/store";
import { IProductResult } from "../types/types";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products: IProductResult[] = useSelector(
    (state: RootState) => state.product.products
  );
  return (
    <div>
      <Header />
      {products.map((product) => (
        <Product key={product.product_id} info={product} />
      ))}
    </div>
  );
}

export default Home;
