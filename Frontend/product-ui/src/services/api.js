import axios from "axios";

const BASE_URL = "http://localhost:5212/api";

// 🔥 GLOBAL fetch wrapper (like interceptor)
const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });

  // 🔥 Auto logout on 401
  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  if (!res.ok) {
    const text = await res.text();
    throw text ? JSON.parse(text) : "Request failed";
  }

  const text = await res.text();
  return text ? JSON.parse(text) : null;
};


// ✅ PRODUCTS

export const fetchProducts = () => authFetch("/product");

export const addProduct = (product) =>
  authFetch("/product", {
    method: "POST",
    body: JSON.stringify(product),
  });

export const deleteProduct = (id) =>
  authFetch(`/product/${id}`, {
    method: "DELETE",
  });


// ✅ LOGIN (keep axios or convert later)
const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const login = (data) => API.post("/auth/login", data);

export default API;
