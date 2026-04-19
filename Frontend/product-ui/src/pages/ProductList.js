import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { deleteProduct } from "../services/api";

function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      console.log(localStorage.getItem("token"));
    });
  }, []);

  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    await deleteProduct(id);
    setProducts(products.filter(p => p.id !== id));
  };

  

  return (
    <div>
      <h2 className="mb-4">Product List</h2>

      <table className="table table-bordered table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteProduct(p.id)}>
                  Delete
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;