
const URL = "http://localhost:5212/api/product";


export const fetchProducts = async () => {
    const res = await fetch(URL);
    return res.json();
  };

export const addProduct = async (product) => {
        await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
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

