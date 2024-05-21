const projects = [];

export function createProjects(name) {
  const projectID = "@" + name.replace(/\s+/g, "").toLowerCase();
  projects.push(name);
  updateDropDown(projects);
  return { name, projectID };
}

//update the main drop down with all project options
export function updateDropDown(options) {
  const menu = document.getElementById("project-select");

  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    menu.appendChild(optionElement);
  });
}
