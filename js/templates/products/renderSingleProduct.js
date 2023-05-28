import { getDescription } from "../../helpers/products.js";

export function renderSingleProduct(container, product) {
  container.innerHTML = "";
  container.className = "product";

  const title = document.querySelector("h1");
  title.textContent = product.name;
  container.append(title);

  const image = document.createElement("img");
  image.src = product.images[0].src;
  image.alt = product.images[0].alt;
  image.classList.add("rounded", "float-start", "img-fluid", "product-image");
  container.append(image);

  const content = document.createElement("div");
  content.className = "product-content";
  const paragraphs = getDescription(product.description);
  container.append(...paragraphs);

  return container;
}
