var btn = document.getElementsByClassName("btn")[0];
var div = document.getElementsByClassName("card");
var cards = document.getElementsByClassName("cards")[0];
var search = document.getElementsByTagName("input")[0];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

btn.addEventListener("click", async function () {
  var res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=f00c6e3c7cda41049ef225602241106&q=${search.value}&days=3`
  );
  finalRes = await res.json();
  console.log(finalRes);
  var d = new Date(`${finalRes.forecast.forecastday[0].date}`);
  var dayName = days[d.getDay()];
  div[0].innerHTML = `
    <h6>${dayName}</h6>
    ${finalRes.forecast.forecastday[0].date}
    <img src="https:${finalRes.forecast.forecastday[0].day.condition.icon}" alt="icon">  
    ${finalRes.location.country}<br>  
    ${finalRes.location.name}<br> 
    ${finalRes.current.temp_c} C<br> 
    ${finalRes.forecast.forecastday[0].day.condition.text}<br> 
    sun rise ${finalRes.forecast.forecastday[0].astro.sunrise}<br>
    `;

  for (let i = 1; i < 8; i++) {
    var d = new Date(`${finalRes.forecast.forecastday[i].date} `);
    var dayName = days[d.getDay()];
    div[`${i}`].innerHTML = `<h6>${dayName}</h6>
    ${finalRes.forecast.forecastday[i].date}
    <img src="https:${finalRes.forecast.forecastday[i].day.condition.icon}" alt="icon">                        
    ${finalRes.location.name}<br> 
    ${finalRes.forecast.forecastday[i].day.maxtemp_c} C<br>     `;
  }
});

(async function () {
  var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f00c6e3c7cda41049ef225602241106&q=07112&days=37`);
  finalRes = await res.json();
  console.log(finalRes);
  var d = new Date(`${finalRes.forecast.forecastday[0].date}`);
  var dayName = days[d.getDay()];
  div[0].innerHTML = `
    <h6>${dayName}</h6>
    ${finalRes.forecast.forecastday[0].date}
    <img src="https:${finalRes.forecast.forecastday[0].day.condition.icon}" alt="icon">  
    ${finalRes.location.country}<br>  
    ${finalRes.location.name}<br> 
    ${finalRes.forecast.forecastday[0].day.maxtemp_c} C<br> 
    ${finalRes.forecast.forecastday[0].day.condition.text}<br> 
    sun rise ${finalRes.forecast.forecastday[0].astro.sunrise}<br>
    `;
  for (let i = 1; i < 8; i++) {
    var d = new Date(`${finalRes.forecast.forecastday[i].date} `);
    var dayName = days[d.getDay()];
    div[`${i}`].innerHTML = `<h6>${dayName}</h6>
    ${finalRes.forecast.forecastday[i].date}
    <img src="https:${finalRes.forecast.forecastday[i].day.condition.icon}" alt="icon">                        
    ${finalRes.location.name}<br> 
    ${finalRes.forecast.forecastday[i].day.maxtemp_c} C<br> 
    `;
  }
})();