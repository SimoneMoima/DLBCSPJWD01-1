<!-- Component for the landing page (Homepage)
Router link through HomeView -->

<template>
  <!--HTML CODE -->

  <!--Carousel on the landing page. Shows 4 slides. Only easthetic reasons -->
  <div
    id="carouselExampleControls"
    class="carousel slide w-auto"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img
          src="../assets/pexels-nastyasensei-335393.jpg"
          class="d-block w-100 c-image"
          alt="Image by Nastyasensei"
        />
      </div>
      <div class="carousel-item c-item">
        <img
          src="../assets/pexels-david-riaño-cortés-975771.jpg"
          class="d-block w-100 c-image"
          alt="Image by David Riaño Cortés"
        />
      </div>
      <div class="carousel-item c-item">
        <img
          src="../assets/pexels-hendrik-cornelissen-2862070.jpg"
          class="d-block w-100 c-image"
          alt="Image by Hendrik Cornelissen"
        />
      </div>
      <div class="carousel-item c-item">
        <img
          src="../assets/pexels-simon-berger-688660.jpg"
          class="d-block w-100 c-image"
          alt="Image by Simon Berger"
        />
      </div>
    </div>
  </div>
  <!-- Section that displays all relevant information about the app. Includes router links. -->
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

    <!-- Side note on buttom of screen to display extra information -->
    <p class="important-note">
      <small
        ><strong style="color: ">Note: </strong> <br />
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
/*background styling*/
.home-section {
  background-color: darkslategrey;
  color: white;
  opacity: 99%;
}
/*carousel image*/
.c-image {
  height: 100%;
  object-fit: cover;
}
/*carousel item*/
.c-item {
  height: 180px;
}
/*intro header*/
.intro-h {
  text-align: center;
  padding: 10px;
}

/*paragraph style*/
p {
  text-align: center;
}
/*side note style*/
.important-note {
  text-align: left;
  margin-top: 15px;
  margin-bottom: 0px;
}

/*Styling with a bigger screen size/ responsive styles*/
@media (min-width: 768px) {
  /*carousel image*/
  .c-image {
    height: 100%;
    object-fit: cover;
  }
  /*carousel items*/
  .c-item {
    height: 380px;
  }
}
</style>
