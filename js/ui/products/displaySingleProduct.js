import { getProduct } from "../../api/products/index.js";
import { renderSingleProduct } from "../../templates/index.js";
import { displayMessage } from "../common/displayMessage.js";

export default async function displaySingleProduct(id) {
  const container = document.querySelector("#productContainer");

  try {
    const product = await getProduct(id);
    console.log(product);
    document.title = product.name;
    renderSingleProduct(container, product);
  } catch (error) {
    displayMessage("danger", error, container);
  }
}
