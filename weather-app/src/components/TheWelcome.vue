<script setup></script>

<template>
  <div class="result-container">
    <h4 class="intro-h"> <i class="fa fa-medium" aria-hidden="true">This app will help you find a destination based on your temperature
      preferences.</i>
      
    </h4>

    <p>  If you like to travel now, please go to
      <strong><RouterLink to="/TravelNow">Travel now</RouterLink></strong
      >. If you like to travel at a later time, please click
      <strong><RouterLink to="/TravelLater">Travel later</RouterLink></strong>
     
    </p>

    
    
    <div class="important-note">
      <p>
        <small
          ><strong>Important: </strong> Please be aware that if you use
          <strong><RouterLink to="/TravelNow">Travel now</RouterLink></strong> ,
          the results will be based on the current temperature. This can affect
          the result based on the time of the day. At night temperatures usually
          fall and you will get a different result then during the day.</small
        >
      </p></div>
    
  </div>
</template>

<style>
.intro-h{
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
  text-align: center;
  margin-top: 80px;
  margin-bottom: 0px;

  
 
}
</style>
