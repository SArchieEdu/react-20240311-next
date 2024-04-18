export async function getHeadphones() {
  const result = await fetch("http://localhost:3001/api/products");

  return result.json();
}

export async function getHeadphoneById(headphoneId) {
  const result = await fetch(
    `http://localhost:3001/api/product/${headphoneId}`
  );
  const response = await result.json();

  return response;
}
