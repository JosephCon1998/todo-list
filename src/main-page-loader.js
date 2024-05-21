export function loadMainPage() {
  const container = document.querySelector("#container");

  const holderDiv = document.createElement("div");
  holderDiv.classList.add("center-div-main-page");
  container.appendChild(holderDiv);

  const defaultHeader = document.createElement("h3");
  defaultHeader.classList.add("default-header");
  defaultHeader.textContent = "ToDo List";
  holderDiv.appendChild(defaultHeader);
}
