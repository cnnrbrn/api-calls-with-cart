import { BASE_URL } from "../../constants/api.js";

export async function getProducts() {
  const url = `${BASE_URL}products`;
  const response = await fetch(url);

  const json = await response.json();

  console.log(json);

  if (response.ok) {
    return { products: json };
  }

  throw new Error(json.message);
}

export async function getProduct(id) {
  const url = `${BASE_URL}products/${id}`;
  const response = await fetch(url);

  const json = await response.json();

  if (response.ok) {
    return json;
  }

  throw new Error(json.message);
}
