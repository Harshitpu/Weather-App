const inputBox=document.querySelector(".input-box");
const searchbtn=document.getElementById('searchbtn');
const weather_img=document.querySelector(".weather-img");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const error=document.querySelector('.locationnotfound');
const wbody=document.querySelector('.weather-body');



async function checkweather(city){
   const api_key="2e509f9143b5fd701cfa0aaed615c";
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

   const weather_data = await fetch(`${url}`).then(response => response.json());
   
   if(weather_data.cod=='404')
   {
    error.style.display="flex";
    wbody.style.display="none";
   }
   else{
    error.style.display="none";
    wbody.style.display="flex";
   }
   temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
   description.innerHTML=`${weather_data.weather[0].description}`;
   humidity.innerHTML=`${weather_data.main.humidity}`;
   wind_speed.innerHTML=`${weather_data.wind.speed}km/H`;
   console.log(weather_data);

   switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src="/assets/cloud.png";
        break;
   
   case 'Clear':
         weather_img.src="/assets/clear.png";
         break;

   case 'Rain':
        weather_img.src="/assets/rain.png";
        break;

    case 'Mist':
        weather_img.src="/assets/mist.png";
        break;

    case 'Snow':
        weather_img.src="/assets/snow.png";
        break;
        
    case 'Smoke':
         weather_img.src="/assets/smoke.png";
         break;

     case 'Haze':
         weather_img.src="/assets/haze.png";
         break;
         

}
}
searchbtn.addEventListener('click',()=>{
      checkweather(inputBox.value);
});
