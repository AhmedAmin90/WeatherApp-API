import { getData, dataObj, changeBackGround} from './fetchData';
import Else from './img/else.jpg';


// Main elements:
const searchBtn = document.querySelector('#searchBtn');
const weatherImg = document.querySelector('#weather-img');
const changeBtn = document.querySelector('#changeBtn');
const cityName = document.querySelector('#city-name');
const tempDisplay = document.querySelector('#temp-degree');
const feelsLike = document.querySelector('#feel-like');
const humidityDisplay = document.querySelector('#humidity');
const weatherCond = document.querySelector('#weather-condition');
const table = document.querySelector('table');

// Main style and content:
weatherImg.src = Else;
table.classList.add('hide');
changeBtn.classList.add('hideVis')


// Main functions:
function fillData(){
  // Setup the elements:
  cityName.classList.add('text-primary')
  cityName.classList.remove('text-danger');
  weatherCond.classList.remove('hide');
  // weatherCond.classList.add('show');
  table.classList.remove('hide');
  // table.classList.add('show');
  changeBtn.classList.add('show');
  changeBtn.classList.remove('hideVis');

  // Add content:
  weatherCond.innerHTML = `Weather Condition: ${dataObj['weatherDes']}`;
  cityName.innerHTML = `City Name: ${dataObj['name']}`;
  tempDisplay.innerHTML = `${Math.round(dataObj['temp'])} °C `;
  feelsLike.innerHTML = dataObj['feels'];
  humidityDisplay.innerHTML = dataObj['humidity'];
}

function errorData(){
  weatherImg.src = Else;
  cityName.innerHTML = 'Wrong City Name !';
  cityName.classList.remove('text-primary')
  cityName.classList.add('text-danger');
  weatherCond.classList.add('hide');
  weatherCond.classList.remove('show');
  table.classList.add('hide');
  table.classList.remove('show');
  changeBtn.classList.add('hideVis');
  changeBtn.classList.remove('show');
}

// Evenets:
searchBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const search = document.querySelector('#search').value;
  getData(search).then(()=>{
    fillData();
    changeBackGround(weatherImg)
  }).catch(()=>{
    errorData()
  })
})

changeBtn.addEventListener('click' ,() => {
  if (tempDisplay.innerHTML.includes('C')) {
    tempDisplay.innerHTML = `${dataObj['temp'] * 9 / 5 + 32} °F`;
    feelsLike.innerHTML = dataObj['feels'] * 9 / 5 + 32;
    changeBtn.innerHTML = 'Change To Celsius'
  } else {
    tempDisplay.innerHTML = `${Math.round(dataObj['temp'])} °C `;
    changeBtn.innerHTML = 'Change To Fahrenheit';
    feelsLike.innerHTML = dataObj['feels'];
  }
  })
