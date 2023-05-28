import { getProducts } from "../../api/products/read.js";
import { renderProducts } from "../../templates/index.js";
import { displayMessage } from "../common/displayMessage.js";

export default async function displayPrenderProducts() {
  const container = document.querySelector("#productContainer");

  try {
    const { products } = await getProducts();
    renderProducts(container, products);
  } catch (error) {
    displayMessage("danger", error, container);
  }
}
