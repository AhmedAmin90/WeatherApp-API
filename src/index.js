import { getData, dataObj, changeBackGrounf} from './fetchData';
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


// Evenets:
searchBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const search = document.querySelector('#search').value;
  getData(search).then(()=>{
    // Setup the elements:
    cityName.classList.add('text-primary')
    cityName.classList.remove('text-danger');
    weatherCond.classList.remove('hide');
    weatherCond.classList.add('show');
    table.classList.remove('hide');
    table.classList.add('show');
    changeBtn.classList.add('show');
    changeBtn.classList.remove('hideVis');

    // Add content:
    weatherCond.innerHTML = `Weather Condition: ${dataObj['weatherDes']}`;
    cityName.innerHTML =  `City Name: ${dataObj['name']}`;
    tempDisplay.innerHTML = dataObj['temp'];
    feelsLike.innerHTML = dataObj['feels'];
    humidityDisplay.innerHTML = dataObj['humidity'];
    changeBackGrounf(weatherImg)
  }).catch(()=>{
    weatherImg.src = Else;
    cityName.innerHTML = 'Wrong City Name !';
    cityName.classList.remove('text-primary')
    cityName.classList.add('text-danger');
    weatherCond.classList.add('hide');
    weatherCond.classList.remove('show');
    table.classList.add('hide');
    table.classList.remove('show');
    changeBtn.classList.add('hideVis');
  })
})

// clsBtn.addEventListener('click' ,  )
