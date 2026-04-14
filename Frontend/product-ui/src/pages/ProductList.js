import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;