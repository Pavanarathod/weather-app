const geocode = require("./utils/geocode");
const geocost = require("./utils/geocost");

const address = process.argv[2];

if (!address) {
  console.log("please provide an address...");
} else {
  geocode(address, (error, { lat, lang, place_name }) => {
    if (error) {
      return console.log(error);
    }
    geocost(place_name, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(place_name);
      console.log(
        `Currently temprature in ${forecastData.name} is ${forecastData.temp} and weather is ${forecastData.weather}`
      );
    });
  });
}
