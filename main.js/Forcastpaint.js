export default function Forecastpaint({ $target, cast }) {
  this.cast = cast;
  const Forecastbox = document.createElement("div");
  console.log(this.cast);
  Forecastbox.classList.add("Forecastbox");
  function ChangeUnix(unixdata) {
    const Unix = new Date(unixdata * 1000); //이미 이거는 dt값임
    //월
    return `<span class="unixspan">${
      Unix.getMonth() + 1
    }월${Unix.getDate()}일 </span>`;
  }

  this.render = function () {
    $target.appendChild(Forecastbox);
    Forecastbox.innerHTML = `${this.cast
      .map(function (item, index) {
        return `<div class="forecastimg"><div id=${index}><img class="animated jello infinite" src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png"/></div><div class="tempandday">${item.main.temp}℃</div>${ChangeUnix(item.dt)}</div>`; //데이터받는거성공
      })
      .join("")}`;
  };

  this.render();
  Forecastbox.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      const imgid = e.target.parentElement.id; //넘겨줄수있음!
      localStorage.setItem("IMG", imgid * 1);
      const newopen = window.open(
        "http://127.0.0.1:5500/forecast.html",
        "forecast",
        "left=100,top=100,width=320,height=600"
      ); //이걸로 넘겨줬으니까 HTML에서 사용해보자
    }
  });
}
