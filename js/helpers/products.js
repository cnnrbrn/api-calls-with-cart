export function getDescription(htmlString, firstOnly = false) {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(htmlString, "text/html");

  const paragraphs = htmlDoc.querySelectorAll("p");

  if (firstOnly) {
    return paragraphs[0].innerHTML;
  }

  return paragraphs;
}
