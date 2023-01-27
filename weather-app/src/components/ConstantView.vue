<template>
  <div class="col nav-image">
    <h3 class="c-header fst-italic shadow-lg intro-header mt-5">
      Choose your next holiday destination
    </h3>

    <div class="d-grid gap-2 ps-5 col-md-block col-sm-block mx-auto">
      <div class="row">
        <div class="col col-md-6">
          <RouterLink to="/TravelNow"
            ><button class="btn btn-primary" type="button">Travel now</button>
          </RouterLink>
        </div>
        <div class="col col-md-6">
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
</template>

<style>

.nav-image {
  background-image: url("../assets/pexels-nastyasensei-335393.jpg");
  background-position: center;
  background-size: cover;
  box-shadow: 5px 5px lightgrey;
  height: 100%;
  width: 100%;
  padding: 10px;
}

h1 {
  text-align: center;
}

</style>