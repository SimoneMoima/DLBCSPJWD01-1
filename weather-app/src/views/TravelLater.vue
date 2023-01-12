<script setup>
import monthlyAverage from "../components/MonthlyAverage.vue";
</script>

<template>
  <main>
    <monthlyAverage />
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
