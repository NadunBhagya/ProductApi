import { useState } from "react";
import { addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");  
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
    await addProduct({ name, price: parseFloat(price) });
    setErrors({});
    navigate("/");
  } catch (err) {
    setErrors(err.errors || {}); // 💥 capture validation errors
  }
    };
    return (
        <div className="card shadow p-4">
      <h3 className="mb-3">Add Product</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            className={`form-control ${errors?.Name ? "is-invalid" : ""}`}
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {errors?.Name && (
            <div className="invalid-feedback">
              {errors.Name[0]}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            className={`form-control ${errors?.Price ? "is-invalid" : ""}`}
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          {errors?.Price && (
            <div className="invalid-feedback">
              {errors.Price[0]}
            </div>
          )}
        </div>

        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
    );
}

export default AddProducts;