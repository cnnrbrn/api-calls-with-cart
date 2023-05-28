import displayProducts from "../../ui/products/displayProducts.js";

export function showProductsListener() {
  window.addEventListener("DOMContentLoaded", () => {
    displayProducts();
  });
}
