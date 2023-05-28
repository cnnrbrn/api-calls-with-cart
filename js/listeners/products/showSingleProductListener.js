import { getQueryParam } from "../../helpers/browser.js";
import displaySingleProduct from "../../ui/products/displaySingleProduct.js";

export function showSingleProductListener() {
  window.addEventListener("DOMContentLoaded", () => {
    const id = getQueryParam("id");
    if (!id) {
      window.location.href = "/";
    }
    displaySingleProduct(id);
  });
}
