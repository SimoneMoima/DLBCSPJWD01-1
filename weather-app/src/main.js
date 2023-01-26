import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import boostrap from "bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App);

app.use(router).use(boostrap);

app.mount("#app");
