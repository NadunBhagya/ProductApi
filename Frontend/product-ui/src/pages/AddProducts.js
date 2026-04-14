import { useEffect, useState } from "react";
import { addProduct } from "../services/api";

function AddProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");  

    const handleAddProduct = async () => {
        try {
            await addProduct({ name, price: parseFloat(price) });
            setName("");
            setPrice("");
        } catch (error) {
            console.error("Error adding product:", error);
        }   };  
    return (
        <div>
            <h1>Add Product</h1>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
            <button onClick={handleAddProduct}>Add</button>
        </div>
    );
}

export default AddProducts;