<!--This file includes the component to display the monthly average temperature -->
<!--Router view through TravelLater -->
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
        <!--Select bar to select the month -->
        <select class="form-select mt-2 mb-4" v-model="selected" required>
          <option disabled value="">Select here...</option>
          <option v-for="option in options" :value="option.id" :key="option.id">
            {{ option.text }}
          </option>
        </select>
        <!--Call to action 2 -->
        <div>
          <h4 class="question mb-2">{{ cta2 }}</h4>
        </div>
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
        <!--Call to action 4 -->
        <div>
          <h4 class="question mb-2">{{ cta3 }}</h4>
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
        <button type="submit" @click="load()" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
    <!--Output field for the results -->
    <div class="col-md-4 response-field">
      <div class="response overflow-auto">
        <!--Display in case of error -->
        <div v-if="chosenWeatherData == 0">
          <!--Display message before results are searched for-->
          <div v-if="!noCheck && !notFound && !noMonth">
            <h4>The results will display here....</h4>
            <!--Spinner while loading -->
            <div class="spinner" v-show="loading">
              <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <!--Error message if no month was chosen -->
          <div v-if="noMonth">
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
            <h3>Please select a month</h3>
            <div class="spinner" v-show="loading">
              <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <!--Error message if a checkbox is missing -->
          <div v-if="noCheck && !noMonth">
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
            <h2>
              Please make sure you check at least one continent and one
              preferred temperature.
            </h2>
            <div class="spinner" v-show="loading">
              <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <!--Error message if weather-continent combination is not found -->
          <div v-if="notFound && !noMonth">
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
            <h2>
              Sorry, no such weather found... Please try a different combination
              of continent and temperature preference.
            </h2>
            <div class="spinner" v-show="loading">
              <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <!--Display results -->
        <div v-if="chosenWeatherData != 0">
          <h1 class="mb-1">
            <strong>{{ month }}:</strong>
          </h1>
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
          <div class="spinner" v-show="loading">
            <div class="spinner-border text-info" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
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

export default {
  data() {
    return {
      url: "https://history.openweathermap.org/data/2.5/aggregated/",
      apikey: import.meta.env.VITE_API_KEY,
      notFound: false,
      noCheck: false,
      loading: false,
      noMonth: false,
      allWeatherData: [],
      chosenWeatherData: [],
      checkedContinents: [],
      checkedWeather: [],
      chosenPlaces: [],
      checkedContinents2: [],
      options: [
        { text: "January", id: 1 },
        { text: "February", id: 2 },
        { text: "March", id: 3 },
        { text: "April", id: 4 },
        { text: "May", id: 5 },
        { text: "June", id: 6 },
        { text: "July", id: 7 },
        { text: "August", id: 8 },
        { text: "September", id: 9 },
        { text: "October", id: 10 },
        { text: "November", id: 11 },
        { text: "December", id: 12 },
      ],
      continent: String,
      selected: "",
      africa: Africa,
      asia: Asia,
      australia: Australia,
      europe: Europe,
      northAmerica: NorthAmerica,
      southAmerica: SouthAmerica,
      cities: Cities,
      month: "",
      city_name: {},
      question1: "Find the average monthly temperature",
      cta1: "Select the month of travel:",
      cta2: "Choose your destinations:",
      cta3: "Choose your temperature prefferences:",
    };
  },
  components: {
    Sidebar,
  },
  methods: {
    //Function that prints the month that was chosen in select menu
    printMonth() {
      //console.log('Inside printMonth ')
      this.options.forEach((e) => {
        if (e.id === this.selected) {
          this.month = e.text;
        }
        this.loading = false;
      });
    },
    //Function that makes API calls to openWeatherMap API
    getData() {
      console.log("inside getData ");
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

      //console.log(this.allWeatherData);

      //When the promise is returned, the function to load the chosen weather is called, then the sort function is called
      Promise.all(promises)
        .then(this.loadWeather)
        .then(this.checkForData)
        .then(this.sort)
        .catch((err) => console.log(err));

      //Make sure the weather data existis
    },
    //Function that saves the results of the API calls in the allWeatherData array
    setResults(res) {
      // console.log('Inside setResults ')
      this.allWeatherData.push(res);
    },
    /*Function that iniates the scanner, 
    checks if the month is selected and at least one continent and temperature interval is chosen
    calls the functions getPlaces and get Data
    */
    load() {
      this.loading = true;
      this.notFound = false;
      this.chosenWeatherData = [];
      this.allWeatherData = [];
      this.chosenPlaces = [];

      console.log("Submit was clicked " + this.chosenWeatherData);
      this.checkedContinents2 = [];
      this.checkedContinents2 = this.checkedContinents;
      console.log("Checked continents" + this.checkedContinents);
      console.log("Checked continents2" + this.checkedContinents2);
      console.log("Inside loading ");
      this.loading = true;
      if (this.selected === "") {
        console.log("No month selected");
        this.noMonth = true;
        this.loading = false;
        return 0;
      } else if (this.checkedContinents == 0 || this.checkedWeather == 0) {
        console.log("No continent or temperature checked ");
        this.noCheck = true;
        this.noMonth = false;
        this.loading = false;
        return 0;
      } else {
        console.log("Load data normally");
        this.noCheck = false;
        this.noMonth = false;
        this.getPlaces();
        this.getData();
      }
    },
    //Function that saves the results of the checked boxes into the chosenPlaces array
    getPlaces() {
      //console.log('Inside getPlaces ')
      this.checkedContinents2.forEach((e) => {
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
      // console.log("Inside loadWeather");
      // console.log(this.checkedWeather)
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
    //converts the temperature from Kelvin to Celsius
    converter(e) {
      // console.log('Inside converter ')
      return Math.round(e - 273.15);
    },
    /*Functions that iterate through the allWeatherData array and call the saveData function if the temperature fits the if-statement */
    freezing() {
      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.median);
        if (temp <= 0) {
          this.saveData(e, temp);
        }
      });
    },
    cold() {
      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.median);
        if (temp > 0 && temp <= 10) {
          this.saveData(e, temp);
        }
      });
    },
    cooler() {
      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.median);
        if (temp > 10 && temp <= 18) {
          this.saveData(e, temp);
        }
      });
    },
    warm() {
      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.median);
        if (temp > 18 && temp <= 25) {
          this.saveData(e, temp);
        }
      });
    },
    hot() {
      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.median);
        if (temp > 25 && temp <= 33) {
          this.saveData(e, temp);
        }
      });
    },
    veryhot() {
      this.allWeatherData.forEach((e) => {
        let temp = this.converter(e.result.temp.median);
        if (temp > 33) {
          this.saveData(e, temp);
        }
      });
    },

    /*Function that calls the findCityName function,
    saves the name, temperature and continent in an Entry oject,
    checks if the data in the Entry object already exists,
    if not, it is saved in the chosenWeatherData array
    */
    saveData(e, temp) {
      //console.log('Inside saveData' )
      this.findCityName(e.city_id);

      const Entry = {
        name: this.city_name.name,
        temp: temp,
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

      this.printMonth();
    },
    //Function that searches cities.json to find the city and continent name of the current Entry object in the saveData function
    findCityName(e) {
      // console.log('Inside findCityName ')
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
      this.month = "";
      this.selected = "";
      this.loading = false;
      this.noMonth = false;
    },
    //Function that sorts the chosenWeatherData array from highest temperature to lowest
    sort() {
      this.chosenWeatherData.sort((a, b) => b.temp - a.temp);
    },
  },
};
</script>

<style>
/*button style*/
.button {
  padding: 10px;
}
/*submit button style*/
.submit {
  text-align: center;
}
/*selecter style*/
.select-month {
  text-align: center;
}
</style>
