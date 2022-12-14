export default function Todopaint({ $target, todo, onRemove }) {
  this.todo = todo;

  const todopaintbox = document.createElement("div");
  todopaintbox.classList.add("todopaintbox");
  this.render = function () {
    $target.appendChild(todopaintbox);
    todopaintbox.innerHTML = `<ul id="UL">${this.todo
      .map(function (item, index) {
        return `<li class="todolist" class="animated fadeIn" id=${index}>* ${item}<button>ð</button></li>`;
      })
      .join("")}</ul>`;
    //ìëë ì¬ê¸°ì ëì¸ë° ì´ê±¸ ì¬ê¸°ì ë£ì´ì£¼ì´ì¼ ulì´ ì½í..
    const ul = document.querySelector("#UL");
    ul.addEventListener("click", function (e) {
      //ì´ê±¸ ëª»ì½ì
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
