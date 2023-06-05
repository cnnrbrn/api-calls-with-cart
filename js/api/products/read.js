import { BASE_URL } from "../../constants/api.js";

export async function getProducts() {
	const url = `${BASE_URL}products`;
	const response = await fetch(url);

	if (response.ok) {
		const json = await response.json();
		return json;
	}

	throw new Error("There was an error fetching the products");
}

export async function getProduct(id) {
	const url = `${BASE_URL}products/${id}`;
	const response = await fetch(url);

	if (response.ok) {
		const json = await response.json();
		return json;
	}

	throw new Error(`There was an error fetching the product with id: ${id}`);
}
