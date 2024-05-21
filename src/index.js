import "./style.css";
import { loadMainPage } from "./main-page-loader";
import { createToDo, toDoByProjectID } from "./create-todo";
import { createProjects, projects } from "./create-projects";
import { todoLoader } from "./load-todos-onto-page";
import { retrieveStorage } from "./local-storage";

loadMainPage();
createProjects("default");

//createToDo("gay title", "gay description", "no date", "low", "@default");
retrieveStorage();

const newNoteBTN = document.getElementById("add-note-btn");
newNoteBTN.addEventListener("click", function () {
  addToDoDialog.showModal();
});

const newProjectBTN = document.getElementById("add-project-btn");
newProjectBTN.addEventListener("click", function () {
  let projectName = prompt("Enter a project name:");
  createProjects(projectName);
});

const dropdownMenu = document.getElementById("project-select");
dropdownMenu.addEventListener("change", function () {
  todoLoader(toDoByProjectID);
});
