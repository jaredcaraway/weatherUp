$(document).ready(function() {
	var temp = {
		number: null,
		unit: null
	};
	var weatherIcon = document.querySelector("#weatherIcon div");
	var location = document.querySelector("#location div");
	var weatherInfo = document.querySelector("#weatherInfo div");
	var temperature = document.querySelector("#temperature div");
	var convert = document.querySelector("#convert div");
	var description = document.querySelector("#description div");

	function toCelsius(temp) {
		if (temp.unit === "kelvin") {
			temp.unit = "celsius";
			return (temp.number - 273.15).toPrecision(2);
		} else if (temp.unit === "fahrenheit") {
			temp.unit = "celsius";
			return ((temp.number - 32) * (5/9)).toPrecision(2);
		} else {
			return "NO UNIT SPECIFIED!";
		}
	}

	function toFahrenheit(temp) {
		if (temp.unit === "kelvin") {
			temp.unit = "fahrenheit";
			return ((temp.number - 273.15) * (9/5) + 32).toPrecision(2);
		} else if (temp.unit === "celsius") {
			temp.unit = "fahrenheit";
			return ((temp.number * (9/5)) + 32).toPrecision(2);
		} else {
			return "NO UNIT SPECIFIED!";
		}
	}

	$.ajax({
		url: "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139",
		error: function() {
			alert("Request failed!");
		},
		success: function(data) {
			// alert("Reached API!");
			// alert(data);
		}
	});
});