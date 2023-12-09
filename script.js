const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

const addTask = () => {
  const inputValue = input.value;
  input.value = "";
  const task = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  task.appendChild(span);
  span.textContent = inputValue;
  task.appendChild(delBtn);
  delBtn.textContent = "Delete";
  ul.appendChild(task);
  //to delete a task
  delBtn.addEventListener("click", () => {
    ul.removeChild(task);
    input.focus();
  });

  input.focus();
};

button.addEventListener("click", addTask);
input.focus();
