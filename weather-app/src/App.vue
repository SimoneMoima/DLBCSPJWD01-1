<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="app-name">
      <h1>WHERE TO GO</h1>
      <h4>Choose your next holiday destination</h4>
    </div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><RouterLink to="/">Home</RouterLink></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" 
                ><RouterLink to="/TravelNow">Travel now</RouterLink></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><RouterLink to="/TravelLater">Travel later</RouterLink></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
*{
  
}
header {
  background-image: url("./assets/pexels-magda-ehlers-2114014.jpg");
  background-position: center;
  background-size: cover;
  background-color: #cccccc;
  font-family: Arial, Helvetica, sans-serif;
  border: double;
  
}
a{
  color: black;
}
.app-name {
  text-align: center;
}
</style>
