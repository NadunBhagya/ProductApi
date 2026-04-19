import {useState} from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password });
      localStorage.setItem("token", res.data.token);
      
      navigate("/");
    } catch (err) {
       alert("Login failed");
    }   
    };

    return (
        <form onSubmit={handleLogin}>
      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button>Login</button>
    </form>
    );
}

export default Login;