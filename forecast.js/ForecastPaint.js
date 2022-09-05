export default function ForecastPaint({ $target, data }) {
  this.data = data;

  const forecastpaintbox = document.createElement("div");
  this.render = function () {
    $target.appendChild(forecastpaintbox);
    function unixchange(time) {
      const date = new Date(time * 1000);
      return `<div><span>${String(date.getHours()).padStart(
        2,
        "0"
      )}시</span></div>`;
    }
    forecastpaintbox.innerHTML = `<ul class="animated fadeInUp slowly">${this.data
      .map(function (item, index) {
        if (index === 3) {
          return `<li><div><img class="animated jello infinite" src="http://openweathermap.org/img/wn/${
            item.weather[0].icon
          }@2x.png"/></div><div>${item.main.temp}℃</div>${unixchange(
            item.dt
          )}</li>
          <span><s>여기부터오후!!</s></span>`;
        }
        return `<li><div><img class="animated jello infinite" src="http://openweathermap.org/img/wn/${
          item.weather[0].icon
        }@2x.png"/></div><div>${item.main.temp}℃</div>${unixchange(item.dt)}</li>`;
      })
      .join("")}</ul>`;
  };
  this.render();

  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };
}
