$(document).ready(function(){

var lat;
  var long;
    $.getJSON("http://ip-api.com/json",function(data2){
      lat=data2.lat;
      long= data2.lon;
       var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=b86d21440d8c9a110912a2eb0845abb4'; 
    
$.getJSON(api, function(data){
       var fTemp;
  var cTemp;
  var kTemp;
      var tempSwap=true;
    //JSON call for Open Weather API
   var weatherType= data.weather[0].description;
        kTemp = data.main.temp;
       var windSpeed= data.wind.speed;
    var city = data.name;
    //Temperture in Kelvin
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    //Temp in F
    //City name
    cTemp = (kTemp-273).toFixed(1);
      console.log(city);
     $("#city").html(city);
      $("#weatherType").html(weatherType);
      $("#fTemp").html(fTemp + " &#8457;");
      $("#fTemp").click(function(){
        if(tempSwap===false){
          $("#fTemp").html(fTemp + " &#8457;"); 
          tempSwap=true;
        }
        else{
          $("#fTemp").html(cTemp + " &#8451;");
          tempSwap=false;
        }   
      });
windSpeed = (2.237*(windSpeed)).toFixed(1);
       $("#windSpeed").html(windSpeed + " mph");
  
    if(fTemp>80){
     $('body').css('background-image','url(https://dl.dropboxusercontent.com/u/72930041/weather%20Icons/Untitled-1-01.png)');
    }
     else if(fTemp>70){
         $('body').css('background-image','url(https://dl.dropboxusercontent.com/u/72930041/weather%20Icons/Untitled-1-03.png)');
     }
       else if(fTemp>60){
         $('body').css('background-image','url(https://dl.dropboxusercontent.com/u/72930041/weather%20Icons/Untitled-1-02.png)');
     }
      else if(fTemp>50){
        $('body').css('background-image','url(https://dl.dropboxusercontent.com/u/72930041/weather%20Icons/Untitled-1-04.png)');
      } 
  });
    });
 //API URL with geolocation

});

/* Bg colors

$('body').css('background-color:#25373D');

background image

$('body').css('background-image','url()');

*/