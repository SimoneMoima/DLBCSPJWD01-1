<template>
  <div class="container-md">
    <div class="input-month">
      <h3 class="question">When would you like to travel?</h3>
      <h5 class="question">Please select the month of travel:</h5>
      <div class="select-month">
        <select v-model="selected" default="January">
          <option v-for="option in options" :value="option.id" :key="option.id">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>

    <div>
      <h3 class="question">{{ message1 }}</h3>
    </div>

    <div class="continents">
      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox1"
          value="Africa"
          v-model="checkedContinents"
        />
        <label class="form-check-label" for="inlineCheckbox1"> Africa </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox2"
          value="Asia"
          v-model="checkedContinents"
        /><label class="form-check-label" for="inlineCheckbox2"> Asia </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox3"
          value="Australia"
          v-model="checkedContinents"
        /><label class="form-check-label" for="inlineCheckbox3">
          Australia
        </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox4"
          value="Europe"
          v-model="checkedContinents"
        /><label class="form-check-label" for="inlineCheckbox4"> Europe </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox5"
          value="North America"
          v-model="checkedContinents"
        /><label class="form-check-label" for="inlineCheckbox5">
          North America
        </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox6"
          value="South America"
          v-model="checkedContinents"
        /><label class="form-check-label" for="inlineCheckbox6">
          South America
        </label>
      </div>
    </div>

    <div>
      <h3 class="question">{{ message2 }}</h3>
    </div>

    <div class="temperatures">
      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox1"
          value="very hot"
          v-model="checkedWeather"
        />
        <label class="form-check-label" for="inlineCheckbox1"> Very Hot </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox2"
          value="hot"
          v-model="checkedWeather"
        />
        <label class="form-check-label" for="inlineCheckbox"> Hot </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox3"
          value="warm"
          v-model="checkedWeather"
        />
        <label class="form-check-label" for="inlineCheckbox3"> Warm </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox4"
          value="cooler"
          v-model="checkedWeather"
        />
        <label class="form-check-label" for="inlineCheckbox4"> Cooler </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox5"
          value="cold"
          v-model="checkedWeather"
        />
        <label class="form-check-label" for="inlineCheckbox5"> Cold </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          type="checkbox"
          class="form-check-input"
          id="inlineCheckbox6"
          value="freezing"
          v-model="checkedWeather"
        />
        <label class="form-check-label" for="inlineCheckbox6"> Freezing </label>
      </div>
    </div>

 <div class="submit">
        <button type="button" class="btn btn-outline-primary" @click="load()">
          Submit
        </button>
        <h3 v-if="noCheck">
          Please make sure you check at least one continent and one preferred
          temperature.
        </h3>
        <ul>
          <li
            v-for="item in chosenWeatherData"
            :value="item.name"
            :key="item.name"
          >
            {{ item.name }} Temperature: {{ item.temp }} C°
          </li>
        </ul>

        <h1 v-if="notFound">
          Sorry, no such weather to be found! Please try a different combination
          of continent and temperature preference.
        </h1>

        <button type="button" class="btn btn-primary" @click="tryAgain()">
          Try again
        </button>
      </div>
  </div>
</template>

<script>
import Africa from "./africanPlaces.json";
import Europe from "./europeanPlaces.json";
import Asia from "./asianPlaces.json";
import Australia from "./australianPlaces.json";
import NorthAmerica from "./northAmerica.json";
import SouthAmerica from "./southAmerica.json";
import Cities from "./cities.json";
let id = 1;

export default {
  name: "WeatherInfo",

  data() {
    return {
      url: "https://history.openweathermap.org/data/2.5/aggregated/",
      apikey: "7a9d88d2c029fb0cdfcf837b5b21d116",
      notFound: false,
      noCheck: false,
      allWeatherData: [],
      chosenWeatherData: [],
      checkedContinents: [],
      checkedWeather: [],
      chosenPlaces: [],
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
      continent: String,
      selected: "1",
      africa: Africa,
      asia: Asia,
      australia: Australia,
      europe: Europe,
      northAmerica: NorthAmerica,
      southAmerica: SouthAmerica,
      cities: Cities,
      message1: "Where would you like to go?",
      message2: "How do you like your weather?",
    };
  },

  methods: {
    getData() {
      console.log("Inside getData");
      const promises = [];

      this.chosenPlaces.forEach((e) => {
        promises.push(
          fetch(
            `${this.url}month?q=${e}&month=${this.selected}&appid=${this.apikey}`
          )
            .then((response) => {
              return response.json();
            })
            .then(this.setResults)
        );
      });
      console.log("all Weather data ");
      console.log(this.allWeatherData);
      Promise.all(promises)
        .then(this.loadWeather)
        .then(this.checkData)
        .catch((err) => console.log(err));
    },

    setResults(res) {
      console.log("Inside set Results");
      this.allWeatherData.push(res);
    },

    load() {
      console.log("Inside load");
      this.getPlaces();
      this.getData();
    },

    getPlaces() {
      console.log("Inside getPlaces");

      this.checkedContinents.forEach((e) => {
        if (e === "Africa") {
          console.log("Inside Africa");
          this.africa.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "Asia") {
          console.log("Inside Asia");
          this.asia.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "Australia") {
          console.log("Inside Australia");
          this.australia.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "Europe") {
          console.log("Inside Europe");
          this.europe.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "North America") {
          console.log("Inside North America");
          this.northAmerica.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "South America") {
          console.log("Inside South America");
          this.southAmerica.forEach((e) => this.chosenPlaces.push(e));
        }
      });
    },

    loadWeather() {
      console.log("Inside loadWeather");
      // console.log(this.checkedWeather)
      this.checkedWeather.forEach((e) => {
        switch (e) {
          case "very hot":
            //console.log('Inside switch very hot')
            this.veryhot();
            break;
          case "hot":
            //console.log('Inside switch hot')
            this.hot();
            //console.log()
            break;
          case "warm":
            console.log("Inside switch warm");
            this.warm();
            break;
          case "cooler":
            this.cooler();
            break;
          case "cold":
            this.cold();
            break;
          case "freezing":
            this.freezing();
            break;
        }
      });
    },

    converter(e) {
      console.log("inside converter");
      return Math.round(e - 273.15);
    },
    //Functions to sort Cities by Temperature
    freezing() {
      console.log("inside freezing");

      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.average_max);
        if (temp < 10) {
          this.saveData(e, temp);
        }
      });
    },
    cold() {
      console.log("Inside cold");
      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.average_max);
        if (temp >= 10 && temp < 15) {
          this.saveData(e, temp);
        }
      });
    },
    cooler() {
      console.log("inside cooler");

      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.average_max);
        if (temp >= 15 && temp < 20) {
          this.saveData(e, temp);
        }
      });
    },
    warm() {
      console.log("inside warm");
      this.allWeatherData.forEach((e) => {
        console.log("inside warm for Each loop");
        let temp = this.converter(e.result.temp.average_max);
        console.log("Converted Temperature: " + temp);
        if (temp >= 20 && temp < 30) {
          console.log("Inside if");
          this.saveData(e, temp);
        }
      });
    },
    hot() {
      console.log("inside hot");
      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.average_max);
        if (temp >= 30 && temp < 35) {
          this.saveData(e, temp);
        }
      });
    },
    veryhot() {
      console.log("inside veryhot");
      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.average_max);
        if (temp >= 35) {
          console.log("I got into the if statement");
          this.saveData(e, temp);
        }
      }, console.log(this.notFound));
    },

    saveData(element, temp) {
      console.log("Inside saveData");
      let city_name = this.findCityName(element.city_id);
      console.log("The city name: " + city_name);
      console.log("The temperature is " + temp);
      const Entry = {
        name: city_name,
        temp: temp,
      };
      this.chosenWeatherData.push(Entry);
    },
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

    checkData() {
      console.log("Inside checkData");
      if (
        this.checkedWeather.length === 0 ||
        this.checkedContinents.length === 0
      ) {
        this.noCheck = true;
      }
      if (this.chosenWeatherData.length === 0 && this.noCheck === false)
        this.notFound = true;
    },

    tryAgain() {
      console.log("Inside tryAgain");
      this.checkedContinents = [];
      this.checkedWeather = [];
      this.chosenPlaces = [];
      this.chosenWeatherData = [];
      this.allWeatherData = [];
      this.noCheck = false;
      this.notFound = false;
    },
  },
};
</script>

<style>
.container-md {
  border-style: dotted;
}
.continents {
  color: black;
  width: auto;
  padding: 10px;
  text-align: center;
}

.temperatures {
  color: black;
  padding: 10px;
  text-align: center;
}

.question {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-align: center;
}
.submit {
  text-align: center;
}
.input-month {
  padding: 5px;
}
.select-month {
  text-align: center;
}
</style>
