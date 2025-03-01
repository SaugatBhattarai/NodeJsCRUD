// SAUGAT BHATTARAI TEST ONE FULL STACK SOFTWARE DEVELOPMENT

const express = require('express')
const app = express()
app.use(express.json());


//Creating Weather data
const cityWeatherData = [
  {
    city: "toronto",
    longitude: "43.7",
    latitude: "-79.42",
    state: "Ontario",
    country: "Canada",
    weather: "sunny",
    temperature: "25",
    humidity: "30",
    windspeed: "10",
    direction:"E"
},
{
  city: "vancover",
  longitude: "43.7",
  latitude: "-79.42",
  state: "Ontario",
  country: "Canada",
  weather: "sunny",
  temperature: "25",
  humidity: "30",
  windspeed: "10",
  direction:"E"
},
{
  city: "ottawa",
  longitude: "43.7",
  latitude: "-79.42",
  state: "Ontario",
  country: "Canada",
  weather: "sunny",
  temperature: "25",
  humidity: "30",
  windspeed: "10",
  direction:"E"
}
]

//Default Route /
app.get('/', function (req, res) {
  res.send('Hello Saugat Bhattarai. Test 1 for FullStack Software Development')
})

// get weather of all cities
app.get('/api/weather', function (req, res){
    res.status(200).send(cityWeatherData);
})

//get weather of a city
app.get('/api/weather/:city',function(req,res){
   const city = cityWeatherData.find(c=>c.city.toLowerCase() === req.params.city.toLowerCase());
   if(!city) {
    return res.status(400).send("Please Enter Valid City Name.");
   }
   res.status(200).send(city);
})

//post weather of new city (ADD CITY) with city name
app.post('/api/weather', function(req,res){
  const {city,longitude,latitude,state,country,weather,temperature,humidity,windspeed,direction } = req.body;
  const newCityWeather = {city,longitude,latitude,state,country,weather,temperature,humidity,windspeed,direction } 

  // validating the empty string
  if (!city || !longitude || !latitude || !state || !country || !weather || !temperature || !humidity || !windspeed || !direction){
     return res.status(400).send("Something is missing with the data. Please enter all data.");
  }
  cityWeatherData.push(newCityWeather);
  res.status(200).send(newCityWeather);
})

//put weathe of a city (UPDATE CITY) with city name
app.put('/api/weather/:city', function(req,res){
  const toUpdateCity = cityWeatherData.find(c=>c.city.toLowerCase() === req.params.city.toLowerCase());
  if(!toUpdateCity) {
   return res.status(400).send("Please Enter Valid City Name.");
  }
  //validating and updating the specific city
  const {city,longitude,latitude,state,country,weather,temperature,humidity,windspeed,direction } = req.body;
  if (city) toUpdateCity.city = city;                                                              
  if (longitude) toUpdateCity.longitude = longitude;                          
  if (latitude) toUpdateCity.latitude = latitude;
  if (state) toUpdateCity.state = state;
  if (country) toUpdateCity.country = country;
  if (weather) toUpdateCity.weather = weather;
  if (temperature) toUpdateCity.temperature = temperature;
  if (humidity) toUpdateCity.humidity = humidity;
  if (windspeed) toUpdateCity.windspeed = windspeed;
  if (direction) toUpdateCity.direction = direction;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  res.status(200).send(toUpdateCity);
})

//delete weather of a city (DELETE CITY) with city name
app.delete('/api/weather/:city', function (req,res){
  const toDeleteCity = cityWeatherData.find(c=>c.city.toLowerCase() === req.params.city.toLowerCase());
  if(!toDeleteCity){
    return res.status(400).send("Please Enter Valid City Name.");
   }
   cityIndex = cityWeatherData.indexOf(toDeleteCity);
   deletedCity = cityWeatherData.splice(cityIndex,1);
   res.status(200).send(deletedCity);
});

app.listen(3000,() =>{
  console.log('Server is running on port 3000');
})