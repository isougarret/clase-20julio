function resultado (ganador) {

	if (ganador == "empate") {
		var elemento = document.createElement("h1")
		var texto = "Hubo un empate"
		texto = document.createTextNode(texto)
		elemento.appendChild(texto)
		document.body.appendChild(elemento)
	}

	else if (ganador == "tu") {
	var elemento = document.createElement("h1")
	var texto = "El ganador eres " + ganador
	texto = document.createTextNode(texto)
	elemento.appendChild(texto)
	document.body.appendChild(elemento)
	}

	else if (ganador == "computador") {
	var elemento = document.createElement("h1")
	var texto = "El ganador es el " + ganador
	texto = document.createTextNode(texto)
	elemento.appendChild(texto)
	document.body.appendChild(elemento)
	}
}

function evaluar(opcion,aleatorio){
	if (opcion == aleatorio) {
	resultado("empate")
	}

	else if (opcion == 1 && aleatorio == 2) {
		resultado("computador")

	}

	else if (opcion == 1 && aleatorio == 3) {
		resultado("tu")

	}

	else if (opcion == 2 && aleatorio == 1) {
		resultado("tu")

	}

	else if (opcion == 2 && aleatorio == 3) {
		resultado("computador")

	}

	else if (opcion == 3 && aleatorio == 1) {
		resultado("computador")

	}

	else if (opcion == 3 && aleatorio == 2) {
		resultado("tu")

	}
}

var imagenes = document.getElementsByTagName("img");
var aleatorio = parseInt(Math.random()*3+1);
var opcion = 0


imagenes[0].onclick = function() {
	var elemento = document.createElement("p")
	var texto = "Elegiste piedra"
	texto = document.createTextNode(texto)
	elemento.appendChild(texto)
	document.body.appendChild(elemento)
	var opcion = 1
	evaluar(opcion,aleatorio)
}
imagenes[1].onclick = function() {
	var elemento = document.createElement("p")
	var texto = "Elegiste papel"
	texto = document.createTextNode(texto)
	elemento.appendChild(texto)
	document.body.appendChild(elemento)
	var opcion = 2
	evaluar(opcion,aleatorio)
}
imagenes[2].onclick = function() {
	var elemento = document.createElement("p")
	var texto = "Elegiste tijera"
	texto = document.createTextNode(texto)
	elemento.appendChild(texto)
	document.body.appendChild(elemento)
	var opcion = 3
	evaluar(opcion,aleatorio)
}

