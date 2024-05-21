import { todoLoader } from "./load-todos-onto-page";
import { updateDropDown } from "./create-projects";

export function populateStorage(project) {
  localStorage.setItem("todo", JSON.stringify(project));
}

export function retrieveStorage(project) {
  const todo = JSON.parse(localStorage.getItem("todo"));
  const projectKeys = Object.keys(todo);
  updateDropDown(projectKeys.map((key) => key.replace(/^@/, "")));

  todoLoader(todo);
}

export function deleteStorage(key, project) {
  //const todo = JSON.parse(localStorage.getItem("todo"));
  localStorage.removeItem(key);

  populateStorage(project);
}
