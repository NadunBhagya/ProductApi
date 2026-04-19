
const URL = "http://localhost:5212/api/product";


export const fetchProducts = async () => {
    const res = await fetch(URL);
    return res.json();
  };

export const addProduct = async (product) => {
  const response = await fetch("http://localhost:5212/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    const data = await response.json();
    throw data; // 💥 send validation errors to frontend
  }

  return response.json();
};

export const deleteProduct = async (id, product) => {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
};

