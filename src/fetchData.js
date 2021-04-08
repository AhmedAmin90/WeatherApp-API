// import defaultDisplay from './index';
import Snow from './img/snow.jpg';
import Sun from './img/sun.jpg';
import Rain from './img/rain.jpg';
import Clouds from './img/clouds.jpg';
import Else from './img/else.jpg';


export  const dataObj = {}

export async function getData(city) {
  const fet = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=87661441a138699d2c9a259ebfb1c52f`);
  const data = await fet.json();
    dataObj['name'] = data.name;
    dataObj['temp'] = data.main.temp;
    dataObj['feels'] = data.main.feels_like;
    dataObj['humidity'] = data.main.humidity;
    dataObj['weatherDes'] = data.weather[0].main;
    console.log(dataObj);
    
}


export function changeBackGround(img){
  if (dataObj['weatherDes'] === 'Snow') {
    img.src = Snow;
  } else if (dataObj['weatherDes'] === 'Clouds'){
    img.src = Clouds;
  }
  else if (dataObj['weatherDes'] === 'Clear') {
    img.src = Sun;
  }
  else if (dataObj['weatherDes'] === 'Rain') {
    img.src = Rain;
  }
  else  {
    img.src = Else;
  }
}