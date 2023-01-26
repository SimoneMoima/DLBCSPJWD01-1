<script setup>
import { RouterLink, RouterView } from "vue-router";
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

  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-3 col-sm-12 nav-image">
        <h3 class="c-header fst-italic shadow-lg intro-header mt-5">
          Choose your next holiday destination
        </h3>

        <div class="d-grid gap-2 ps-5 col-md-block col-sm-block mx-auto">
          <div class="row">
            <div class="col col-md-6 ">
              <RouterLink to="/TravelNow"
                ><button class="btn btn-primary" type="button">
                  Travel now
                </button>
              </RouterLink>
            </div>
            <div class="col col-md-6 ">
              <RouterLink to="/TravelLater"
                ><button class="btn btn-primary" type="button">
                  Travel later
                </button></RouterLink
              >
            </div>
          </div>
        </div>
        <div class="d-grid col-md-12 mt-5">
          <button
            class="btn btn-warning opacity-75"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Temperature Glossary
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">
                <strong>Temperature Glossary: </strong>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body small">
              <p>
                <strong>Very Hot:</strong> above 33 C°, <br />
                <strong>Hot:</strong> between 26 C° and 33 C°, <br />
                <strong>Warm:</strong> between 19 C° and 25 C°, <br />
                <strong>Cooler:</strong> between 11 C° and 18 C°, <br />
                <strong>Cold:</strong> between 1 C° and 10 C°, <br />
                <strong>Freezing:</strong> below 1 C° <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8 col-sm-12 routers">
        <RouterView />
      </div>
    </div>
  </div>
  <footer></footer>
</template>

<style scoped>

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

h1 {
  text-align: center;
}

.nav-image {
  background-image: url("./assets/pexels-nastyasensei-335393.jpg");
  background-position: center;
  background-size: cover;
  box-shadow: 5px 5px lightgrey;
  max-width: 500px;
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
}

@media (min-width: 1024px) {
  .navbar-brand {
    font-size: large;
  }
}
</style>
