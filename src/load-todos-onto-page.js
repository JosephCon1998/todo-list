import { deleteStorage } from "./local-storage";

export function todoLoader(projects) {
  const container = document.querySelector(".center-div-main-page");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const defaultHeader = document.createElement("h3");
  defaultHeader.classList.add("default-header");
  defaultHeader.textContent = "ToDo List";
  container.appendChild(defaultHeader);

  const projectDropDown = document.getElementById("project-select");
  let selectedProject =
    "@" + projectDropDown.value.replace(/\s+/g, "").toLowerCase();

  //Get an array of keys(projectIDs)
  const projectKeys = Object.keys(projects);
  console.log(projectKeys);
  //loop through the array of keys
  for (let i = 0; i < projectKeys.length; i++) {
    const project = projectKeys[i];
    const todo = projects[project];
    console.log(project);
    console.log(todo);
    if (project === selectedProject) {
      for (let k = 0; k < todo.length; k++) {
        //const removedSpaces = project.split(" ").join("");

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-containers");
        todoDiv.setAttribute("id", "todo-list-holder" + k);
        container.appendChild(todoDiv);

        const expandDivs = document.querySelector("#todo-list-holder" + k);
        let descriptionAdded = false;

        expandDivs.addEventListener("click", function () {
          expandDivs.classList.toggle("expand");

          if (!descriptionAdded) {
            const todoDescription = document.createElement("div");
            todoDescription.classList.add("todo-item-description");
            todoDescription.textContent = `${todo[k].description}`;
            todoDiv.appendChild(todoDescription);

            descriptionAdded = true;
          } else {
            const todoDescription = document.querySelector(
              ".todo-item-description"
            );
            todoDescription.remove();
            descriptionAdded = false;
          }
        });

        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-item");
        todoTitle.textContent = `${todo[k].title}`;
        todoDiv.appendChild(todoTitle);

        const todoDueDate = document.createElement("div");
        todoDueDate.classList.add("todo-item");
        todoDueDate.textContent = `${todo[k].dueDate}`;
        todoDiv.appendChild(todoDueDate);

        const toDoPriority = document.createElement("div");
        toDoPriority.classList.add("todo-item");
        toDoPriority.textContent = `Priority: ${todo[k].priority}`;
        todoDiv.appendChild(toDoPriority);

        const todoDelete = document.createElement("button");
        todoDelete.classList.add(project);
        todoDelete.textContent = "delete";
        todoDiv.appendChild(todoDelete);
        todoDelete.addEventListener("click", function () {
          todo.splice(k, 1);
          deleteStorage(k, projects);
          todoLoader(projects);
        });
      }
    }
  }
}
