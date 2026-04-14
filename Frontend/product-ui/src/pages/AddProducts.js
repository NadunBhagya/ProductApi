import { useState } from "react";
import { addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");  
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    await addProduct({ name, price: parseFloat(price) });
    navigate("/");
    };
    return (
        <div className="card shadow p-4">
      <h3 className="mb-3">Add Product</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            className="form-control"
            placeholder="Enter product name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            type="number"
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
    );
}

export default AddProducts;