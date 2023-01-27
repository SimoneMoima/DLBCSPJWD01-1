<script setup></script>

<template>
  <div
    id="carouselExampleControls"
    class="carousel slide w-auto"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="../assets/pexels-nastyasensei-335393.jpg"
          class="d-block w-100 c-image"
          alt="..."
        />
      </div>
      <div class="carousel-item c-item">
        <img
         src="../assets/pexels-david-riaño-cortés-975771.jpg"
          class="d-block w-100 c-image"
          alt="..."
        />
      </div>
      <div class="carousel-item c-item">
        <img
          src="../assets/pexels-hendrik-cornelissen-2862070.jpg"
          class="d-block w-100 c-image"
          alt="..."
        />
      </div>
      <div class="carousel-item c-item">
        <img
          src="../assets/pexels-simon-berger-688660.jpg"
          class="d-block w-100 c-image"
          alt="..."
        />
      </div>
    </div>
    
  </div>

  <section class="home-section p-3">
    <h4 class="intro-h">
      <i class="fa fa-medium" aria-hidden="true"
        >This app will help you find a destination based on your temperature
        preferences.
      </i>
    </h4>
    <div class="row row-p">
      <div class="col-md-6 mx-auto" style="width: 600px">
        <p class="text-left">
          If you like to travel now, please go to
          <strong><RouterLink to="/TravelNow">Travel now</RouterLink></strong
          >. <br />
          If you like to travel at a later time, please click
          <strong
            ><RouterLink to="/TravelLater">Travel later</RouterLink></strong
          >
        </p>
      </div>
    </div>

    <p class="important-note">
      <small
        ><strong style="color:">Note: </strong> <br />
        Please be aware that if you use
        <strong><RouterLink to="/TravelNow">Travel now</RouterLink></strong> ,
        the results will be based on the current temperature. This can affect
        the result based on the time of the day. In the evenings, temperatures
        usually fall and you will get a different result then during the
        day.</small
      >
    </p>
  </section>
</template>

<style>
.home-section{
  background-color: darkslategrey;
  color: white;
  opacity: 99%;
}
.c-image {
  height: 100%;
  object-fit: cover;
}

.c-item {
  height: 180px;
}
.intro-h {
  padding: 10px;
}
.result-container {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 0px;

  height: auto;
  width: auto;
}
h4 {
  text-align: center;
}

p {
  text-align: center;
}

.important-note {
  text-align: left;
  margin-top: 15px;
  margin-bottom: 0px;
}
@media (min-width: 768px) {
  .c-image {
    height: 100%;
    object-fit: cover;
  }

  .c-item {
    height: 380px;
  }
}
</style>
