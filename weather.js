$(document).ready(function() {
	var temp = {
		number: null,
		unit: null
	};

	var myLocation = {
		latitude: null,
		longitude: null
	}

	var weatherIcon = document.querySelector("#weatherIcon div img");
	var location = document.querySelector("#location div");
	var weatherInfo = document.querySelector("#weatherInfo div");
	var temperature = document.querySelector("#temperature div");
	var convert = document.querySelector("#convert div");
	var description = document.querySelector("#description");

	function toCelsius(temp) {
		if (temp.unit === "kelvin") {
			temp.unit = "celsius";
			temp.number = (temp.number - 273.15).toPrecision(2);
		} else if (temp.unit === "fahrenheit") {
			temp.unit = "celsius";
			temp.number = ((temp.number - 32) * (5/9)).toPrecision(2);
		} else {
			console.log("NO UNIT SPECIFIED!");
		}
	}

	function toFahrenheit(temp) {
		if (temp.unit === "kelvin") {
			temp.unit = "fahrenheit";
			temp.number = ((temp.number - 273.15) * (9/5) + 32).toPrecision(2);
		} else if (temp.unit === "celsius") {
			temp.unit = "fahrenheit";
			temp.number = ((temp.number * (9/5)) + 32).toPrecision(2);
		} else {
			console.log("NO UNIT SPECIFIED!");
		}
	}

	var getLocation = function() {
		return new Promise(function(resolve, reject) {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	}

	var populateInfo = function(data) {
		location.innerHTML = data.name;
		temp.number = data.main.temp;
		weatherIcon.setAttribute("src", data.weather[0].icon);
		temp.number = data.main.temp;
		temp.unit = "celsius";
		toFahrenheit(temp);
		temperature.innerHTML = temp.number +
			(temp.unit === "celsius" ? "&deg; C" : "&deg; F");
		description.innerHTML = data.weather[0].description;
	}

	function getWeather(position) {
		myLocation.latitude = position.coords.latitude.toPrecision(4);
		myLocation.longitude = position.coords.longitude.toPrecision(4);

		var query = "https://fcc-weather-api.glitch.me/api/current?lat=" + myLocation.latitude + "&lon=" + myLocation.longitude;
		query += "&units=metric";

		$.ajax({
			url: query,
			error: function() {
				alert("Request failed!");
			},
			success: function(data) {
				populateInfo(data);
				console.log(data);
			}
		});
	}

	if (navigator.geolocation) {
		getLocation().then((position) => {
			getWeather(position);
		},
		function(err) {
			document.body.innerHTML = "Failed!";
		});
	} else {
		alert("Geolocation disabled!");
	}
});

// Get location
// Round coords & build query string
// Get JSON weather data via query
// Populate page with data info