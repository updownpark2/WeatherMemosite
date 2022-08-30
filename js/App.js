import Clock from "./Clock.js";
import Login from "./Login.js";
import Header from "./Header.js";
import Weather from "./Weather.js";
import Background from "./Background.js";
import Mention from "./mention.js";
import Todoinput from "./Todoinput.js";
import Todopaint from "./Todopaint.js";
export default function App({ $target }) {
  localStorage.getItem("todolist") !== null
    ? (this.todo = JSON.parse(localStorage.getItem("todolist")))
    : (this.todo = []); //처음 그 값이 저장되어버림
  this.setState = function (newdata) {
    this.todo = newdata; //업데이트
    localStorage.setItem("todolist", JSON.stringify(this.todo));
    todopaint.setState(this.todo);
  };
  this.data = localStorage.getItem("name");

  const clock = new Clock({
    $target,
    Timego: (Timebox) => {
      function timegoon() {
        const date = new Date();
        Timebox.innerHTML = `<span class="animated bounceIn";>${String(
          date.getHours()
        ).padStart("2", 0)}:${String(date.getMinutes()).padStart(
          "2",
          0
        )}:${String(date.getSeconds()).padStart("2", 0)}</span>`;
      }
      timegoon();
      setInterval(() => {
        timegoon();
      }, 1000);
    },
  });

  if (this.data === null) {
    const login = new Login({
      $target,
      onSubmit: (inputvalue) => {
        localStorage.setItem("name", inputvalue);
        location.reload();
      },
      data: this.data,
    });
  }

  const header = new Header({ $target, data: this.data });

  const todoinput = new Todoinput({
    $target,
    todoSubmit: (inputvalue) => {
      this.setState([...this.todo, inputvalue]);
    },
  });
  const todopaint = new Todopaint({
    $target,
    todo: this.todo,
    onRemove: (liid) => {
      const filtertodo = this.todo.filter(
        (item, index) => index !== parseInt(liid)
      );
      this.setState(filtertodo);
    },
  });

  const weather = new Weather({
    GoWeather: ({ userlocation, userweather, weathericon, weathertemp }) => {
      const paintcover = document.createElement("div");
      paintcover.classList.add("weathercover");
      paintcover.innerHTML = `<div class="weatherbox"></div>`;
      $target.appendChild(paintcover);
      const paintbox = document.querySelector(".weatherbox");
      paintbox.innerHTML = `<div class="paintcover"><div><span>${userlocation}</span></div><div class="animated jello infinite"><img class="weathericon" src="http://openweathermap.org/img/wn/${weathericon}@4x.png"/></div><div><span>온도: ${weathertemp}℃</span></div></div>`;

      const mention = new Mention({
        onMention: (arr2) => {
          const mentionbox = document.createElement("div");
          mentionbox.classList.add("mentionbox");
          $target.appendChild(mentionbox);
          mentionbox.innerHTML = `<span class="animated fadeIn slowly infinite">${
            arr2[Math.floor(Math.random() * arr2.length)]
          }</span>`;
        },
      });
    },
  });
  const background = new Background({
    goBack: (arr) => {
      const body = document.querySelector("body");
      const image = document.createElement("img");
      image.classList.add("img");
      image.src = `./img/${arr[Math.floor(Math.random() * 4)]}`;
      body.appendChild(image);
    },
  });
}
