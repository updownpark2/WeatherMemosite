export default function Forecastinfo({ Foreweather }) {
  console.log("Asdasd");
  function Success(position) {
    //여기서 img의 index를받아야한다.
    const imgstorage = localStorage.getItem("IMG");
    const forecastdata = JSON.parse(localStorage.getItem("forecastdata"));
    console.log(forecastdata);
    if (imgstorage === "0") {
      let filterres = forecastdata.filter(function (item, index) {
        return index < 3;
      }); //타입이 스트링이라안됐엇음..
      Foreweather(filterres);
    }
    if (imgstorage === "1") {
      let filterres = forecastdata.filter(function (item, index) {
        return 3 <= index && index <= 10;
      }); //타입이 스트링이라안됐엇음..
      Foreweather(filterres);
    }
    if (imgstorage === "2") {
      let filterres = forecastdata.filter(function (item, index) {
        return 11 <= index && index <= 18;
      });
      Foreweather(filterres);
    }
    if (imgstorage === "3") {
      let filterres = forecastdata.filter(function (item, index) {
        return 19 <= index && index <= 26;
      });
      Foreweather(filterres);
    }
    if (imgstorage === "4") {
      let filterres = forecastdata.filter(function (item, index) {
        return 27 <= index && index <= 34;
      });
      Foreweather(filterres);
    }
    if (imgstorage === "5") {
      let filterres = forecastdata.filter(function (item, index) {
        return 35 <= index && index <= 39;
      });
      Foreweather(filterres); //데이터를 정상적으로보냄!
    } //여기서 보내도되겠다. 짤라서
  }

  function fail() {
    alert("I can't find you!");
  }

  navigator.geolocation.getCurrentPosition(Success, fail);
}
