import Clock from "./Clock.js";
import Login from "./Login.js";
import Header from "./Header.js";
import Weather from "./Weather.js";
import Background from "./Background.js";
import Mention from "./mention.js";
import Todoinput from "./Todoinput.js";
import Todopaint from "./Todopaint.js";
import Forecast from "./forecast.js";
import Forecastpaint from "./Forcastpaint.js";
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

  this.cast = [];

  this.newcast = function (castnew) {
    this.cast = castnew;
  };
  //forecast data

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

  /*const todoinput = new Todoinput({
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
  });*/

  const weather = new Weather({
    GoWeather: ({
      userlocation,
      userweather,
      weathericon,
      weathertemp,
      filterforecastdata,
    }) => {
      let paintarray = [];
      filterforecastdata.map(function (item) {
        if (item.rain !== undefined) {
          paintarray.push(JSON.stringify(item.rain));
          console.log(item.rain);
        } else if (item.rain === undefined) {
          return;
        }
      }); //강수량변화

      console.log(paintarray);

      const paintcover = document.createElement("div");
      paintcover.classList.add("weathercover");
      paintcover.innerHTML = `<div class="weatherbox"></div>`;
      $target.appendChild(paintcover);
      const paintbox = document.querySelector(".weatherbox");
      paintbox.innerHTML = `<div class="paintcover"><div><span>${userlocation}</span></div><div class="animated jello infinite"><img class="weathericon" src="http://openweathermap.org/img/wn/${weathericon}@4x.png"/></div><div><ul>${
        paintarray.length === 0
          ? `<span>오늘은 비가 오지 않을 예정입니다!🌞</span>`
          : `<span>우산 챙기세요!🌂</span> ${paintarray
              .map(function (item, index) {
                return `<li class="hidden">${
                  (index + 1) * 3
                }시간 후 비가 시간 당 ${Math.floor(item / 3)}mm 내립니다💧</li>`;
              })
              .join("")}<button id="InfoButton">상세정보</button>`
      }</ul></div><div><span>온도: ${weathertemp}℃</span></div></div>`;
      //loading창만들기
      $target.classList.remove("test");
      const mask = document.querySelector(".mask");
      mask.classList.add("test");
      if (paintarray.length !== 0) {
        const InfoButton = document.querySelector(".InfoButton");
        InfoButton.add("click", function (e) {
          console.log(e.target); //여기서 이제 li찾아서 li.Classlist.remove("hidden")
          //한 후 애니메이션 추가! 후 InfoButton은 addClasslist.add("hidden") 버튼 li.innerHTML=<button>닫기</button>
          //닫기버튼에 addeventlistener() 적용해서 열고 닫기 할 수 있게 설정
        });
      }
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
  const forecast = new Forecast({
    Forweather: (res) => {
      //res = > 5개의 배열원소로이루어짐
      this.newcast(res); //this.cast는 res가됐다.
      const forecastpaint = new Forecastpaint({ $target, cast: this.cast });
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

  //newopen.close();이렇게하면됨
}
