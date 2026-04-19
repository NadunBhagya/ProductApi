import { useState } from "react";
import { addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Container } from "@mui/material";

function AddProducts({onSubmit}) {
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
      <Container sx={{ mt: 4 }}>
         <Box display="flex" flexDirection="column" gap={2}>
          <TextField label="Product Name" />
          <TextField label="Price" type="number" />
          <Button variant="contained">Add Product</Button>
        </Box>
      </Container>
    );
}

export default AddProducts;