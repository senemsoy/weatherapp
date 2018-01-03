$(document).ready(function(){

	//initializing all the variables
	var long;
	var lat;
	var fahrenheitTemp;
	var celsiusTemp;
	var weatherType;
	var kelvinTemp;
	var windSpeed;
	var city;
	var api;
	var condition;


	if (navigator.geolocation) {
  
  		//getting the geolocation and updating the longitude and latitude
  		navigator.geolocation.getCurrentPosition(function(position) {
  			long = position.coords.longitude;
  			lat = position.coords.latitude;

  			//setting up the api url with the new latitude and longitude 
   			api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=2be5cf56cc07e9035b59d7766f2e2288";


			$.getJSON(api, function(data){

				kelvinTemp = data.main.temp;
				city = data.name;
				condition = data.weather[0].id;
				$('.wi').addClass("wi-owm-"+condition);

				fahrenheitTemp = (kelvinTemp*(9/5)-459.67).toFixed(1);
				celsiusTemp = (kelvinTemp-273).toFixed(1);

				$("#city").html(city);
				$("#temp").html(celsiusTemp+"°");

		});
  	});
	}

	$('.celsius').on('click', function(event){
		$("#temp").html(celsiusTemp+"°");
	})

	$('.fahrenheit').on('click', function(event){
		$("#temp").html(fahrenheitTemp+"°");
	})
	
	
});