const axios = require("axios");

const fetchWeatherData= async()=> {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto');
    console.log(response);

}
 async function getWeather(){
        try {
        const response = await axios.get('/https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
 }

 getWeather();