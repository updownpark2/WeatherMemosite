export default function Weather({ GoWeather }) {
  function Success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const APIKEY = "0df8b3dcb31ae79a932729e9ef135343";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    )
      .then((res) => res.json())
      .then(function (data) {
        const userlocation = data.name;
        const userweather = data.weather[0].main;
        const weathericon = data.weather[0].icon;
        const weathertemp = data.main.temp;
        console.log(data.main.temp); //저장은했음
        GoWeather({ userlocation, userweather, weathericon, weathertemp });
      });
  }
  function fail() {
    alert("I can't find you!");
  }
  navigator.geolocation.getCurrentPosition(Success, fail);
}
//이 값을 변수로 저장하고 그 변수를 날씨 API에 다시 넣어주기
//그리고 그 날씨값에 대한 데이터 저장 후 표현 !
