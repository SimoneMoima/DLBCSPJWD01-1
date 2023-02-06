<!--Entry point of the application -->
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!--Navigation bar, sticks to the top -->
  <header>
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand">by Simone Moima</a>
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
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><RouterLink to="/">Home</RouterLink></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"
                ><RouterLink to="/TravelNow">Travel now</RouterLink></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#"
                ><RouterLink to="/TravelLater">Travel later</RouterLink></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!--Router Views - Home, Travel now, Travel later -->
  <RouterView />
  <footer></footer>
</template>

<style scoped>
/*Style when hover */
a:hover {
  color: darkcyan;
}
/*Navbar logo */
.navbar-brand {
  font-size: medium;
}
/*Text decoration */
a {
  text-decoration: none;
  color: black;
}
/*Change navbar font size when large display */
@media (min-width: 1024px) {
  .navbar-brand {
    font-size: large;
  }
}
</style>
