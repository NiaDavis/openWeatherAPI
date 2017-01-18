$(document).ready(function() {
  var currentWeather;
   $("#button").click(function() {
       currentWeather = $('#search').val()
       console.log(currentWeather)
   });
   $.getJSON(  
      "https://api.giphy.com/v1/gifs/search?q=" + currentWeather + "&api_keyd446b2c94cf665204255f1c82af6c0e6",
     
      function(response) {
        
        console.log(response.data[0].images);
          
        for (var i = 1; i < 6; i++) {
          console.log(i);
          $("#").append("<img src=" + response.data[i].images.fixed_width_downsampled.url + ">");
        }
      }); 
  });