const test = document.querySelector('#test');

const searchBtn = document.querySelector('#searchBtn');
const weatherImg = document.querySelector('#weather-img');

async function getData(city) {
  const fet = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87661441a138699d2c9a259ebfb1c52f`);
  const data = await fet.json();
   test.innerHTML = data.main.temp;
  if (data.main.temp - 273 > 10) {
     weatherImg.src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'
   } 
   else {
     weatherImg.src = 'https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
   }
}

searchBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const search = document.querySelector('#search').value;
  getData(search);
} )
