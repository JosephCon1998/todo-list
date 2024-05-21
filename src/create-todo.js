import { todoLoader } from "./load-todos-onto-page";
import { populateStorage } from "./local-storage";
export const toDoByProjectID = {};

//create ToDo items function
export function createToDo(title, description, dueDate, priority, projectID) {
  const todo = { title, description, dueDate, priority };

  //Check if projectId exists. if not, create empty array for it
  if (!toDoByProjectID[projectID]) {
    toDoByProjectID[projectID] = [];
  }
  ssfdf;

  //Push the todo Object to array corresponding the projectId
  toDoByProjectID[projectID].push(todo);

  return todo;
}

//using a dialog form to get user input for new To Do lists
const addToDoDialog = document.getElementById("addToDoDialog");
const newTitle = addToDoDialog.querySelector("#title-input");
const newDescription = addToDoDialog.querySelector("#description-input");
const newDueDate = addToDoDialog.querySelector("#dueDate-input");
let priorityValue = "low";

//This function checks the priority that the user selects. Defaulted to low, this finds the checked radio button on the submit form
function getSelectedPriority() {
  const selectedPriority = addToDoDialog.querySelector(
    'input[name="priority"]:checked'
  );

  if (selectedPriority) {
    priorityValue = selectedPriority.value;
    return priorityValue;
  } else {
    return priorityValue;
  }
}

//set default project
let userProject = "@default";

//This will get the current project name that the ToDo should belong to
const dropdownMenu = document.getElementById("project-select");
dropdownMenu.addEventListener("change", function () {
  userProject = "@" + dropdownMenu.value.replace(/\s+/g, "").toLowerCase();
  return userProject;
});

//This series is the functionality of a user submitting a new ToDo item
const newToDoSubmitBTN = document.querySelector("#confirm-btn-todo");

newToDoSubmitBTN.addEventListener("click", (event) => {
  console.log(toDoByProjectID);
  const toDoTitle = newTitle.value;
  const toDoDescription = newDescription.value;
  const toDoDueDate = newDueDate.value;
  const toDoPriority = getSelectedPriority();
  event.preventDefault();
  createToDo(
    toDoTitle,
    toDoDescription,
    toDoDueDate,
    toDoPriority,
    userProject
  );
  todoLoader(toDoByProjectID);
  populateStorage(toDoByProjectID);
  addToDoDialog.close();
});
