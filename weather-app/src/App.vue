<script setup>
import { RouterLink, RouterView } from "vue-router";
import ConstantView from "./components/ConstantView.vue"
</script>

<template>
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
  
  <div class="container-fluid d-grid">
    <div class="row">
      <div class="col-md-3 constant-view">
      <ConstantView />
      </div>
      <div class="col-md-8 p-2 col-sm-12 routers">
        <RouterView />
      </div>
    </div>
  </div>
  <footer></footer>
</template>

<style scoped>
.row{

}
.constant-view{
  
}
a:hover {
  color: darkcyan;
}
.navbar-brand {
  font-size: medium;
}

a {
  text-decoration: none;
  color: black;
}



@media (min-width: 1024px) {
  .navbar-brand {
    font-size: large;
  }
}
</style>
