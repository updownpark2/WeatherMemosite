import Forecastinfo from "./Forecastinfo.js";
import ForecastPaint from "./ForecastPaint.js";
import Background from "./Background.js";
export default function App({ $target }) {
  this.data = [];
  this.setState = function (newdata) {
    this.data = newdata;
    forecastpaint.setState(this.data);
  };
  const forecastpaint = new ForecastPaint({ $target, data: this.data });

  const forecastinfo = new Forecastinfo({
    Foreweather: (res) => {
      res.map((item) => {
        console.log(item.rain);
      });
      this.setState(res);
      //여기서 데이터를 가지고 그리면 된다!
    },
  });

  /*const background = new Background({
    goBack: (arr) => {
      const body = document.querySelector("body");
      const image = document.createElement("img");
      image.classList.add("img");
      image.src = `./img/${arr[Math.floor(Math.random() * 4)]}`;
      body.appendChild(image);
    },
  });*/
}
