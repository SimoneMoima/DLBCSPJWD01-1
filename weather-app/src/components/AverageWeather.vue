<template>
  <div class="Average">
    <div class="InputMonth">
      When would you like to travel?
      <div>Please select the month of travel:</div>

      <select v-model="selected">
        <option v-for="option in options" :value="option.id" :key="option.id">
          {{ option.text }}
        </option>
      </select>
    </div>
    Where would you like to travel to?
    <form class="Continents">
      <div class="Europe">
        <button @click="getAverage('Europe')">Europe</button>
      </div>

      <div class="Asia">
        <button @click="getAverage('Asia')">Asia</button>
      </div>

      <div class="Australia">
        <button @click="getAverage('Australia')">Australia - Ozeania</button>
      </div>

      <div class="North America">
        <button @click="getAverage('North America')">North America</button>
      </div>

      <div class="South America">
        <button @click="getAverage('South America')">South America</button>
      </div>

      <button @click="getAverage('Africa')">Africa</button>
    </form>

    How do you like your temperatur?
    <div class="hotWeather">
      <button @click="hot()">I like it hot</button>
    </div>

    <div class="warmWeather">
      <button @click="warm()">I like it warm</button>
    </div>

    <div class="coolerWeather">
      <button @click="cooler()">I like it cooler</button>
    </div>

    <form class="coldWeather">
      <button @click="cold()">I like it cold</button>
    </form>

    <div class="freezingWeather">
      <button @click="freezing()">I like it freezing</button>
    </div>
    We recommend these places:
    <ul>
      <li v-for="item in ChoosenData" :value="item.name" :key="item.name">
        {{ item.name }} Average temperature: {{ item.temp }} C°
      </li>
    </ul>
  </div>
</template>

<script>
import Cities from "./cities.json";
import Africa from "./africanPlaces.json";
import Europe from "./europeanPlaces.json";
import Asia from "./asianPlaces.json";
import Australia from "./australianPlaces.json";
import NorthAmerica from "./northAmerica.json";
import SouthAmerica from "./southAmerica.json";
let id = 1;

export default {
  name: "AverageWeather",
  created() {},
  data() {
    return {
      url: "https://history.openweathermap.org/data/2.5/aggregated/",
      apikey: "7a9d88d2c029fb0cdfcf837b5b21d116",
      options: [
        { text: "January", id: id++ },
        { text: "February", id: id++ },
        { text: "March", id: id++ },
        { text: "April", id: id++ },
        { text: "May", id: id++ },
        { text: "June", id: id++ },
        { text: "July", id: id++ },
        { text: "August", id: id++ },
        { text: "September", id: id++ },
        { text: "October", id: id++ },
        { text: "November", id: id++ },
        { text: "Dezember", id: id++ },
      ],
      selected: "1",
      WeatherData: [],
      ChoosenData: [],
      africa: Africa,
      asia: Asia,
      australia: Australia,
      europe: Europe,
      northAmerica: NorthAmerica,
      southAmerica: SouthAmerica,
      cities: Cities,
      continent: String,
    };
  },
  props: {},
  methods: {
    async getAverage(continent) {
      console.log("in getAverage");
      console.log(continent)
      let chosenContinent;
      switch (continent) {
        case "Africa":
          chosenContinent = this.africa;
          //console.log("Africa chosen. ");
          break;
        case "Asia":
          chosenContinent = this.asia;
          //console.log("Asia chosen. ");
          break;
        case "Australia":
          chosenContinent = this.australia;
          //console.log("Australia chosen. ");
          break;
        case "Europe":
          chosenContinent = this.europe;
          //console.log("Europe chosen. ");
          break;
        case "North America":
          chosenContinent = this.northAmerica;
          //console.log("North America chosen. ");
          break;
        case "South America":
          chosenContinent = this.southAmerica;
          //console.log("South America chosen. ");
          break;
      }
      
      chosenContinent.forEach((e) => {
        fetch(
          `${this.url}month?q=${e}&month=${this.selected}&appid=${this.apikey}`
        )
          .then((response) => {
            return response.json();
          })
          .then(this.setResults)
          .catch((err) => console.log(err));
      });
    },
    setResults(res) {
      this.WeatherData.push(res);
      console.log(this.WeatherData);
    },

    //Each function calls the function to finds the name of the city in the json file and checks wether the average temperature
    //falls in the category
    hot() {
      this.WeatherData.forEach((element) => {
        let temperature = this.converter(element.result.temp.average_max);
        if (temperature > 30) {
          this.saveData(element, temperature);
        }
      });
    },
    warm() {
      this.WeatherData.forEach((element) => {
        let temperature = this.converter(element.result.temp.average_max);
        if (temperature > 20 && temperature <= 30) {
          this.saveData(element, temperature);
        }
      });
    },
    cooler() {
      this.WeatherData.forEach((element) => {
        let temperature = this.converter(element.result.temp.average_max);
        if (temperature > 15 && temperature <= 22) {
          this.saveData(element, temperature);
        }
      });
    },
    cold() {
      this.WeatherData.forEach((element) => {
        let temperature = this.converter(element.result.temp.average_max);
        if (temperature > 0 && temperature <= 15) {
          this.saveData(element, temperature);
        }
      });
    },
    freezing() {
      this.WeatherData.forEach((element) => {
        let temperature = this.converter(element.result.temp.average_max);
        if (temperature < 5) {
          this.saveData(element, temperature);
        }
      });
    },

    saveData(element, temp) {
      let city_name = this.findCityName(element.city_id);
      const Entry = {
        name: city_name,
        temp: temp,
      };
      this.ChoosenData.push(Entry);
    },
    /*function that returns all cities with an average monthly temperature of less than 20 C° */
    /*cooler() {
      this.WeatherData.forEach((element) => {
        let city_id = element.city_id;
        let temperature = this.converter(element.result.temp.average_max);

        if (temperature < 20) {
          const Entry = {
            id: city_id,
            name: "",
            temp: temperature,
          };
          this.ChoosenData.push(Entry);
          this.findCityName(city_id);
        }
      });
    },
*/
    //function that finds the city names, mapped through an id number
    /*findCityName(e) {
     // const result = this.ChoosenData.find(({ id }) => id === e);
      const entry = this.cityNames.find(({ id }) => id === e);
      if (entry === undefined) return console.log("No such id");
     // result.name = entry.name;
     return entry.name;
    },*/
    /* takes as a parameter the city ID and looks for the corresponding city name in the cities.json file and returns it
 to the calling function */
    findCityName(e) {
      let name;
      this.cities.forEach((element) => {
        //console.log(element.id);
        if (element.id === e) {
          name = element.name;
        }
      });
      return name;
    },

    //Function that converts Kelvin to Celsius
    converter(e) {
      return Math.round(e - 273.15);
    },
  },
};
</script>

<style>
.Average {
  padding: 20px;
  color: black;
  border-style:dashed;
}
button {
  padding: 5px;
}
</style>
