import { useEffect, useState } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import { getProducts } from "../services/productService";
import { IProductResult } from "../types/types";

function Home() {
  const [products, setProducts] = useState<IProductResult[]>([]);
  useEffect(() => {
    async function fetch() {
      let products = await getProducts();
      setProducts(products);
    }
    fetch();
  }, []);
  console.log(products);
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
