import Clock from "./Clock.js";
import Login from "./Login.js";
import Header from "./Header.js";
import Weather from "./Weather.js";
import Background from "./Background.js";
import Mention from "./mention.js";
export default function App({ $target }) {
  this.data = localStorage.getItem("name");
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

  const clock = new Clock({
    $target,
    Timego: (Timebox) => {
      function timegoon() {
        const date = new Date();
        Timebox.innerHTML = `<span>${String(date.getHours()).padStart(
          "2",
          0
        )}:${String(date.getMinutes()).padStart("2", 0)}:${String(
          date.getSeconds()
        ).padStart("2", 0)}</span>`;
      }
      timegoon();
      setInterval(() => {
        timegoon();
      }, 1000);
    },
  });

  const header = new Header({ $target, data: this.data });

  const weather = new Weather({
    GoWeather: ({ userlocation, userweather, weathericon, weathertemp }) => {
      const paintbox = document.createElement("div");
      $target.appendChild(paintbox);
      paintbox.innerHTML = `당신의 위치는 ! ${userlocation} 날씨는 ! ${userweather} <img src="http://openweathermap.org/img/wn/${weathericon}@2x.png"/> 그곳의 온도는 ! ${weathertemp}℃`;
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

  const mention = new Mention({
    onMention: (arr2) => {
      const mentionbox = document.createElement("div");
      $target.appendChild(mentionbox);
      mentionbox.innerHTML = `<span>${
        arr2[Math.floor(Math.random() * arr2.length)]
      }</span>`;
    },
  });
}
