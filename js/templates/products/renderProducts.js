import { getDescription } from "../../helpers/products.js";

export function renderProducts(container, products) {
  container.innerHTML = "";
  const divs = products.map(createProduct);
  divs.forEach((div) => container.append(div));
}

function createProduct(product) {
  const col = document.createElement("div");
  col.classList.add("col-12", "col-md-4", "col-lg-3");
  const card = document.createElement("div");
  card.classList.add("card", "d-flex", "flex-column");
  col.append(card);
  const image = document.createElement("img");
  image.classList.add("card-img-top");
  image.src = product.images[0].src;
  image.alt = product.images[0].alt;
  card.append(image);
  const cardBody = document.createElement("div");
  card.append(cardBody);
  cardBody.classList.add("card-body");
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerText = product.name;
  cardBody.append(title);
  const text = document.createElement("p");
  text.classList.add("card-text");
  text.innerHTML = getDescription(product.description, true);
  cardBody.append(text);
  const link = document.createElement("a");
  link.classList.add("btn", "btn-primary", "mt-auto");
  link.href = `product.html?id=${product.id}`;
  link.innerText = "Read more";
  cardBody.append(link);
  return col;
}
