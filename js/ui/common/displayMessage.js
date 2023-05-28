export function displayMessage(messageType, message, target) {
  console.log(typeof target);
  let container = target;
  if (typeof target === "string") {
    container = document.querySelector(target);
  }
  container.innerHTML = `<div class="alert alert-${messageType}">${message}</div>`;
}
