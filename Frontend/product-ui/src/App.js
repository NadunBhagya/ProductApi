import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProducts from "./pages/AddProducts";




function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark px-4">
        <h4 className="text-white">Product App</h4>
        <div>
          <Link className="btn btn-outline-light me-2" to="/">Products</Link>
          <Link className="btn btn-success" to="/add">Add Product</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
