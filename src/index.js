import { getData, dataObj, changeBackGrounf} from './fetchData';
import Else from './img/else.jpg';


const searchBtn = document.querySelector('#searchBtn');
const weatherImg = document.querySelector('#weather-img');
const clsBtn = document.querySelector('#cles-btn');
const cityName = document.querySelector('#city-name');
const tempDisplay = document.querySelector('#temp-degree');
const feelsLike = document.querySelector('#feel-like');
const humidityDisplay = document.querySelector('#humidity');
const weatherCond = document.querySelector('#weather-condition');
const table = document.querySelector('table');


weatherImg.src = Else;
table.classList.add('hide')



searchBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const search = document.querySelector('#search').value;
  getData(search).then(()=>{
    cityName.classList.add('text-primary')
    cityName.classList.remove('text-danger');
    weatherCond.classList.remove('hide');
    weatherCond.classList.add('show');
    table.classList.remove('hide');
    table.classList.add('show');
    weatherCond.innerHTML = `Weather Condition: ${dataObj['weatherDes']}`;
    cityName.innerHTML =  `City Name: ${dataObj['name']}`;
    tempDisplay.innerHTML = dataObj['temp'];
    feelsLike.innerHTML = dataObj['feels'];
    humidityDisplay.innerHTML = dataObj['humidity'];
    changeBackGrounf(weatherImg)
  }).catch(()=>{
    cityName.innerHTML = 'Wrong City Name !';
    cityName.classList.remove('text-primary')
    cityName.classList.add('text-danger');
    weatherImg.src = Else;
    weatherCond.classList.add('hide');
    weatherCond.classList.remove('show');
    table.classList.add('hide');
    table.classList.remove('show');
  })
})

// clsBtn.addEventListener('click' ,  )
