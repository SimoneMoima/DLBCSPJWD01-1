<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>
    
    <div class="wrapper">
    <h1>WHERE TO GO</h1>
    <h4>Choose your next holiday destination</h4> 
    </div>
    
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/TravelNow">Travel now</RouterLink>
        <RouterLink to="/TravelLater">Travel later</RouterLink>
      </nav>
    
  </header>

  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  font-family: fantasy;
  padding: 45px;
  text-align: center;
  
  color: white;
  font-size: 30px;
 
  transition: 0.4s;
  display: flex;
  place-items: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
