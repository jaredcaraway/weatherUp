var temp = {
	number: null
	unit: null
}

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

$.ajax();