import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProducts from "./pages/AddProducts";




function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Products</Link> |{" "}
        <Link to="/add">Add Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
