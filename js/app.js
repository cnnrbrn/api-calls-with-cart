import * as listeners from "./listeners/index.js";

const path = window.location.pathname;

console.log(path);

switch (path) {
  case "/":
  case "/index.html":
    listeners.showProductsListener();
    break;
  case "/product.html":
    listeners.showSingleProductListener();
    break;
}
