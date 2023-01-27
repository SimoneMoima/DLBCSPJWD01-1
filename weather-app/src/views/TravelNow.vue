<script setup>
import CurrentWeather from "../components/CurrentWeather.vue";
</script>

<template>
  <main>
  <CurrentWeather />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
