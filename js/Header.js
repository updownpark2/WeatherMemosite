export default function Header({ $target, data }) {
  const Headerbox = document.createElement("div");

  this.data = data;

  this.render = function () {
    $target.appendChild(Headerbox);
    Headerbox.innerHTML = `${
      this.data === null
        ? `<span>input your name please ^^</span>`
        : `<span>Have a good day ${this.data} <span/><button>이름변경!</button>`
    }`;
  };
  this.render();

  const Button = document.querySelector("button");
  if (this.data !== null) {
    Button.addEventListener("click", function (e) {
      localStorage.removeItem("name");
      location.reload();
    });
  }
}
