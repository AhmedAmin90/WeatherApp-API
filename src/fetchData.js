const test = document.querySelector('#test')

async function getData(){
  const fet = await fetch('http://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=87661441a138699d2c9a259ebfb1c52f');
  const res = await fet.json();
  console.log(res)
}