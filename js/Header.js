export default function Header({ $target, data }) {
  const Headerbox = document.createElement("div");
  Headerbox.classList.add("Headerbox");
  this.data = data;

  this.render = function () {
    $target.appendChild(Headerbox);
    Headerbox.innerHTML = `${
      this.data === null
        ? `<span class="animated fadeIn">사용자의 이름은 무엇인가요?</span>`
        : `<span class="animated fadeIn">Have a good day ${this.data} 님!<span/><div id="changename"><button>이름변경!</button></div>`
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
