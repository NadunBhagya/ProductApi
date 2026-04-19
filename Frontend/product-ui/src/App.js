import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProducts from "./pages/AddProducts";
import Login from "./pages/Login";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
  };


function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark px-4">
        <h4 className="text-white">Product App</h4>
        <div>
          <Link className="btn btn-outline-light me-2" to="/">Products</Link>
          <Link className="btn btn-success" to="/add">Add Product</Link>
          <button className="btn btn-danger ms-2" onClick={logout}>Logout</button>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          } />
          <Route path="/add" element={<AddProducts />} />
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
