const axios = require("axios");

const fetchWeatherData = async () => {
  try{
  const response = await axios(
    "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
  );
  // console.log({response});
  //extract the revelent data
  const {latitude,longitude, ...rest}=response.data;
  return{latitude};
}
  catch(error){
  throw new Error("failed to fetch weather");
  }
};

async function getWeather() {
  const data =await fetchWeatherData();
  console.log(data);
}
getWeather();
