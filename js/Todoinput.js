export default function Todoinput({ $target, todoSubmit }) {
  const Inputbox = document.createElement("div");
  Inputbox.classList.add("Inputbox");
  this.render = function () {
    $target.appendChild(Inputbox);
    Inputbox.innerHTML = `<form id="todoform"><input placeholder="✏️(할일)"></form>`;
  };
  this.render();

  const todoform = document.getElementById("todoform");
  todoform.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputvalue = e.target[0].value;
    todoSubmit(inputvalue);
    e.target[0].value = "";
  });
}
