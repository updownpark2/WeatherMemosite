export default function Todopaint({ $target, todo, onRemove }) {
  this.todo = todo;

  const todopaintbox = document.createElement("div");
  todopaintbox.classList.add("todopaintbox");
  this.render = function () {
    $target.appendChild(todopaintbox);
    todopaintbox.innerHTML = `<ul id="UL">${this.todo
      .map(function (item, index) {
        return `<li class="todolist" class="animated fadeIn" id=${index}>* ${item}<button>🖍</button></li>`;
      })
      .join("")}</ul>`;
    //원래는 여기서 끝인데 이걸 여기에 넣어주어야 ul이 읽힘..
    const ul = document.querySelector("#UL");
    ul.addEventListener("click", function (e) {
      //이걸 못읽음
      if (e.target.tagName === "BUTTON") {
        const liid = e.target.parentElement.id;
        onRemove(liid);
      }
    });
  };
  this.render();

  this.setState = function (newdata) {
    this.todo = newdata;
    this.render();
  };
}

/*export default function Todopaint({ $target, todo, onRemove }) {
  this.todo = todo;
  const Todopaintbox = document.createElement("div");
  this.render = function () {
    $target.appendChild(Todopaintbox);
    Todopaintbox.innerHTML = `<ul>
${this.todo
  .map(function (item, index) {
    return `<li id=${index}>${item}<button >completed!</button></li>`;
  })
  .join("")}
</ul>`;
  };
  this.render();

  this.setState = function (newdata) {
    this.todo = newdata;
    this.render();
  };
  const ul = document.querySelector("ul");
  ul.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const liid = e.target.parentElement.id;
      onRemove(liid);
    }
  });
}*/
