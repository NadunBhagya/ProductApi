import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import { deleteProduct } from "../services/api";
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow,
  Paper, Button, Container
} from "@mui/material";

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
      <Container sx={{ mt: 4 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.name}</TableCell>
                <TableCell>${p.price}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => handleDeleteProduct(p.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
      </Container>
    );
}

export default ProductList;