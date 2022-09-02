export default function Forecast({ Forweather }) {
  function Success(position) {
    let lat2 = position.coords.latitude;
    let lon2 = position.coords.longitude;
    const APIKEY2 = "0df8b3dcb31ae79a932729e9ef135343";
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat2}&lon=${lon2}&appid=${APIKEY2}&units=metric`
    )
      .then((data) => data.json())
      .then(function (res) {
        const filteres = res.list.filter(function (i, index) {
          return index % 8 === 0 || index * 1 === 39; //인덱스 나누기 0 8 16 24 32
        });
        console.log(filteres);
        Forweather(filteres);
      }); //여기서 보내도되겠다. 짤라서
  }
  function fail() {
    alert("I can't find you!");
  }

  navigator.geolocation.getCurrentPosition(Success, fail);
}
