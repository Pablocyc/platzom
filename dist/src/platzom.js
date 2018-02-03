"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var traslation = str;

	// Si la palabra termina en "ar", se le quita esos dos caracteres.
	if (str.toLowerCase().endsWith("ar")) {
		traslation = str.slice(0, -2);
	}

	// Si la palabra inicia con Z, se le añade "pe" al final.
	if (str.toUpperCase().startsWith("Z")) {
		traslation += "pe";
	}

	// Si la palabra traducida tiene 10 o mas letras se debe partir a la 
	// mitad y se debe unir con un guion del medio	
	var length = traslation.length;
	if (length >= 10) {
		var firstHalf = traslation.slice(0, Math.round(length / 2));
		var secondHalf = traslation.slice(Math.round(length / 2));
		traslation = firstHalf + "-" + secondHalf;
	}

	// Por último, si la palabra original es un palindromo, ninguna regla anterior
	// cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};
	function minMay(str) {
		var length = str.length;
		var traslation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			traslation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return traslation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return traslation;
}

// platzom("Programar")		// Program
// platzom("Zorro")			// Zorrope
// platzom("Zarpar")		// Zarppe
// platzom("abecedario")	// abece-dario
// platzom("sometemos")		// SoMeTeMoS