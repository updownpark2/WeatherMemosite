export default function Login({ $target, onSubmit, data }) {
  this.data = data;
  const Loginbox = document.createElement("div");
  Loginbox.classList.add("Loginbox");
  this.render = function () {
    $target.appendChild(Loginbox);
    Loginbox.innerHTML = `<form class="Loginboxform"><input class="animated fadeIn" placeholder="당신의 이름을 입력해주세요"/></form>`;
  };
  this.render();

  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };

  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputvalue = e.target[0].value;
    e.target[0].value = "";
    onSubmit(inputvalue);
  });
}
