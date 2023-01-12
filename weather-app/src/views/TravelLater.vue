<script setup>
import AverageWeather from "../components/AverageWeather.vue"
</script>

<template>
    <main>
    <AverageWeather/>
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