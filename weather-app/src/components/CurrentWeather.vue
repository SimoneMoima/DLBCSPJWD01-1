<!--This file includes the component for displaying the current weather -->
<!--Router view through TravelNow -->

<template>
  <!--HTML CODE -->

  <!--Includes the sidebar component -->
  <div class="row main-display">
    <div class="col sidebar">
      <Sidebar />
    </div>
    <!--Input field to collect the information from the user. (Continent, Temperature preference) -->
    <div class="col-md-5 col-sm-12 mb-3 question-field">
      <div class="input-field">
        <h5 class="question mb-4 mt-3">{{ question1 }}</h5>
        <!--Call to action 1 -->
        <h4 class="question mb-3">{{ cta1 }}</h4>
        <!--Input field for continent checkboxes-->
        <div class="continents mb-3">
          <div class="row">
            <!--Africa checkbox -->
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox1"
                  value="Africa"
                  v-model="checkedContinents"
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  Africa
                </label>
              </div>
            </div>
            <!--Asia checkbox -->
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox2"
                  value="Asia"
                  v-model="checkedContinents"
                /><label class="form-check-label" for="inlineCheckbox2">
                  Asia
                </label>
              </div>
            </div>
            <!--Australia checkbox -->
            <div class="col col-checkbox">
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
            </div>
          </div>
          <!--Europe checkbox -->
          <div class="row">
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox4"
                  value="Europe"
                  v-model="checkedContinents"
                /><label class="form-check-label" for="inlineCheckbox4">
                  Europe
                </label>
              </div>
            </div>
            <!--North America checkbox -->
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox5"
                  value="North America"
                  v-model="checkedContinents"
                /><label class="form-check-label" for="inlineCheckbox5">
                  North - America
                </label>
              </div>
            </div>
            <!--South America checkbox -->
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox6"
                  value="South America"
                  v-model="checkedContinents"
                /><label class="form-check-label" for="inlineCheckbox6">
                  South - America
                </label>
              </div>
            </div>
          </div>
        </div>
        <!--Call to action 2 -->
        <div>
          <h4 class="question mb-2">{{ cta2 }}</h4>
        </div>
        <!--Input field for temperature preference checkboxes-->
        <div class="temperatures mb-3">
          <div class="row">
            <!--Very Hot checkbox -->
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox1"
                  value="very hot"
                  v-model="checkedWeather"
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  Very Hot
                </label>
              </div>
            </div>
            <!--Hot checkbox -->
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox2"
                  value="hot"
                  v-model="checkedWeather"
                />
                <label class="form-check-label" for="inlineCheckbox">
                  Hot
                </label>
              </div>
            </div>
            <!--Warm checkbox -->
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox3"
                  value="warm"
                  v-model="checkedWeather"
                />
                <label class="form-check-label" for="inlineCheckbox3">
                  Warm
                </label>
              </div>
            </div>
          </div>
          <!--Cooler checkbox -->
          <div class="row">
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox4"
                  value="cooler"
                  v-model="checkedWeather"
                />
                <label class="form-check-label" for="inlineCheckbox4">
                  Cooler
                </label>
              </div>
            </div>
            <!--Cold checkbox -->
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox5"
                  value="cold"
                  v-model="checkedWeather"
                />
                <label class="form-check-label" for="inlineCheckbox5">
                  Cold
                </label>
              </div>
            </div>
            <!--Freezing checkbox -->
            <div class="col col-checkbox">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="inlineCheckbox6"
                  value="freezing"
                  v-model="checkedWeather"
                />
                <label class="form-check-label" for="inlineCheckbox6">
                  Freezing
                </label>
              </div>
            </div>
          </div>
        </div>
        <!--Submit button -->
        <div class="submit">
          <div class="button">
            <button type="button" class="btn btn-primary" @click="load()">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--Output field for the results -->
    <div class="col-md-4 response-field">
      <div class="response overflow-auto">
        <!--Display in case of error -->
        <div v-if="chosenWeatherData == 0">
          <!--Display message before results are searched for-->
          <div v-if="!noCheck && !notFound">
            <h4>The results will display here....</h4>
            <!--Spinner while loading -->
            <div class="spinner" v-show="loading">
              <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <!--Error message if a checkbox is missing -->
          <div v-if="noCheck">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-exclamation-lg"
              viewBox="0 0 16 16"
              color="red"
            >
              <path
                d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
              />
            </svg>
            <h4>
              Please make sure you check at least one continent and one
              preferred temperature.
            </h4>
          </div>
          <!--Error message if weather-continent combination is not found -->
          <div v-show="notFound">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-exclamation-lg"
              viewBox="0 0 16 16"
              color="red"
            >
              <path
                d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
              />
            </svg>
            <h3>
              Sorry, no such weather found... Please try a different combination
              of continent and temperature preference.
            </h3>
          </div>
        </div>
        <!--Display results -->
        <div v-if="chosenWeatherData != 0">
          <h2 class="mb-3">
            <strong>Results: </strong>
          </h2>
          <dl
            class="row"
            v-for="item in chosenWeatherData"
            :value="item.name"
            :key="item.name"
          >
            <dt class="col-xs-6">
              <strong>{{ item.name }}</strong>
              <small> ({{ item.continent }})</small>
            </dt>

            <dd class="col-xs-6">
              <strong>{{ item.temp }} C°</strong>
            </dd>
          </dl>
        </div>
      </div>
      <!--Button to clear all data -->
      <div class="button">
        <button type="button" class="btn btn-outline-primary" @click="clear()">
          Clear
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import of Json Files with data
import Africa from "./africanPlaces.json";
import Europe from "./europeanPlaces.json";
import Asia from "./asianPlaces.json";
import Australia from "./australianPlaces.json";
import NorthAmerica from "./northAmerica.json";
import SouthAmerica from "./southAmerica.json";
import Cities from "./cities.json";
//import Sidebar component
import Sidebar from "./SidebarComponent.vue";
//Initialized variables:
export default {
  data() {
    return {
      url: "http://pro.openweathermap.org/data/2.5/",
      apikey: import.meta.env.VITE_API_KEY,
      notFound: false,
      noCheck: false,
      loading: false,
      allWeatherData: [],
      chosenWeatherData: [],
      checkedContinents: [],
      checkedWeather: [],
      chosenPlaces: [],
      continent: String,
      africa: Africa,
      asia: Asia,
      australia: Australia,
      europe: Europe,
      northAmerica: NorthAmerica,
      southAmerica: SouthAmerica,
      cities: Cities,
      city_name: {},
      question1: "Find your destination based on  the current temperature",
      cta1: "Choose your destinations: ",
      cta2: "How do you like your Temperature?",
    };
  },
  //Load components:
  components: {
    Sidebar,
  },
  //All function declarations:
  methods: {
    //Function that makes API calls to openWeatherMap API
    getData() {
      const promises = [];

      this.chosenPlaces.forEach((e) => {
        promises.push(
          fetch(`${this.url}weather?q=${e}&units=metric&appid=${this.apikey}`)
            .then((response) => {
              return response.json();
            })
            .then(this.setResults)
        );
      });

      Promise.all(promises)
        .then(this.loadWeather)
        .then(this.checkForData)
        .then(this.sort)
        .catch((err) => console.log(err));

      console.log(this.allWeatherData);
    },

    //Function that saves the results of the API calls in the allWeatherData array
    setResults(res) {
      console.log("Inside set Results");
      this.allWeatherData.push(res);
    },

    /*Function that iniates the scanner, 
    checks if the weather data is loaded,
    calls the functions getPlaces and get Data
    */
    load() {
      this.loading = true;
      this.notFound = false;
      this.chosenWeatherData = [];
      this.allWeatherData = [];
      this.chosenPlaces = [];
      if (this.checkedContinents == 0 || this.checkedWeather == 0) {
        console.log("No continent or temperature checked ");
        this.loading = false;
        this.noCheck = true;
        this.noMonth = false;
        return 0;
      } else {
        console.log("Load data normally");
        this.noCheck = false;
        this.getPlaces();
        this.getData();
      }
    },

    //Function that saves the results of the checked boxes into the chosenPlaces array
    getPlaces() {
      //console.log('Inside getPlaces')
      this.checkedContinents.forEach((e) => {
        if (e === "Africa") {
          this.africa.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "Asia") {
          this.asia.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "Australia") {
          this.australia.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "Europe") {
          this.europe.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "North America") {
          this.northAmerica.forEach((e) => this.chosenPlaces.push(e));
        } else if (e === "South America") {
          this.southAmerica.forEach((e) => this.chosenPlaces.push(e));
        }
      });
    },

    //Function that calls the functions of the checked weather intervalls through a switch statement
    loadWeather() {
      this.checkedWeather.forEach((e) => {
        switch (e) {
          case "very hot":
            this.veryhot();
            break;
          case "hot":
            this.hot();
            break;
          case "warm":
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

    /*Functions that iterate through the allWeatherData array and call the saveData function if the temperature fits the if-statement */
    freezing() {
      this.allWeatherData.forEach((e) => {
        if (e.main.temp <= 0) {
          this.saveData(e);
        }
      });
    },
    cold() {
      this.allWeatherData.forEach((e) => {
        if (e.main.temp > 1 && e.main.temp <= 10) {
          this.saveData(e);
        }
      });
    },
    cooler() {
      this.allWeatherData.forEach((e) => {
        if (e.main.temp > 10 && e.main.temp <= 18) {
          this.saveData(e);
        }
      });
    },
    warm() {
      this.allWeatherData.forEach((e) => {
        if (e.main.temp > 18 && e.main.temp <= 25) {
          this.saveData(e);
        }
      });
    },
    hot() {
      this.allWeatherData.forEach((e) => {
        if (e.main.temp > 25 && e.main.temp <= 33) {
          this.saveData(e);
        }
      });
    },
    veryhot() {
      this.allWeatherData.forEach((e) => {
        if (e.main.temp > 33) {
          this.saveData(e);
        }
      });
    },

    /*Function that calls the findCityName function,
    saves the name, temperature and continent in an Entry oject,
    checks if the data in the Entry object already exists,
    if not, it is saved in the chosenWeatherData array
    */
    saveData(e) {
      this.findCityName(e.id);
      const Entry = {
        name: this.city_name.name,
        temp: Math.round(e.main.temp),
        continent: this.city_name.continent,
      };

      //This code snipet was taken from https://stackoverflow.com/questions/1988349/array-push-if-does-not-exist

      var index = this.chosenWeatherData.findIndex(
        (e) => e.name === Entry.name
      );

      index === -1
        ? this.chosenWeatherData.push(Entry)
        : console.log("object already exists");

      //End of code snipet
    },

    //Function that searches cities.json to find the city and continent name of the current Entry object in the saveData function
    findCityName(e) {
      // console.log(this.allWeatherData);
      this.cities.forEach((element) => {
        if (element.id === e) {
          this.city_name.name = element.name;
          this.city_name.continent = element.continent;
        }
      });
    },

    checkForData() {
      if (this.chosenWeatherData.length === 0) {
        console.log("No results ");
        this.loading = false;
        this.notFound = true;
        return 0;
      }
    },
    //Function that clears all current data
    clear() {
      this.checkedContinents = [];
      this.checkedWeather = [];
      this.chosenPlaces = [];
      this.chosenWeatherData = [];
      this.allWeatherData = [];
      this.noCheck = false;
      this.notFound = false;
      this.id = 1;
      this.loading = false;
    },

    //Function that sorts the chosenWeatherData array from highest temperature to lowest
    sort() {
      this.chosenWeatherData.sort((a, b) => b.temp - a.temp);
    },
  },
};
</script>

<style>
/*results display style*/
.results {
  text-align: center;
}
/*Sumbit button style*/
.submit {
  text-align: center;
}
</style>
