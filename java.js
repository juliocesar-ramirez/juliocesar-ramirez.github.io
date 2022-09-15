var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");

var b1x = document.getElementById("c1");
var b2x = document.getElementById("c2");
var b3x = document.getElementById("c3");
var b4x = document.getElementById("c4");

// var a1 = document.querySelector(".a1");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");

var container = document.querySelector(".container");
var fondo = document.querySelector(".fondo");

b1.addEventListener("click", funcion1);
b2.addEventListener("click", funcion2);
b3.addEventListener("click", funcion3);
b4.addEventListener("click", funcion4);

b1x.addEventListener("click", function () {
	a1.classList.add("apagar");
	setTimeout(funcion1x, 326);
});
b2x.addEventListener("click", function () {
    a2.classList.add("apagar");
	setTimeout(funcion2x, 326);
});
b3x.addEventListener("click", function () {
	a3.classList.add("apagar");
	setTimeout(funcion3x, 326);
});
b4x.addEventListener("click", function () {
	a4.classList.add("apagar");
	setTimeout(funcion4x, 326);
});

function funcion1() {
	a1.classList.remove("apagar");
	a1.classList.add("active");
	container.classList.add("desactive");
	a1.classList.add("prender");
}

function funcion2() {
	a2.classList.remove("apagar");
	a2.classList.add("active");
	container.classList.add("desactive");
	a2.classList.add("prender");
}

function funcion3() {
	a3.classList.remove("apagar");
	a3.classList.add("active");
    container.classList.add("desactive");
    a3.classList.add("prender");
}

function funcion4() {
	a4.classList.remove("apagar");
	a4.classList.add("active");
    container.classList.add("desactive");
	a3.classList.add("prender");
}

function funcion1x() {
	a1.classList.remove("active");
	container.classList.remove("desactive");
	fondo.classList.add("zoom");
	fondo.classList.add("zoomf");
}

function funcion2x() {
	a2.classList.remove("active");
	container.classList.remove("desactive");
}

function funcion3x() {
	a3.classList.remove("active");
	container.classList.remove("desactive");
}

function funcion4x() {
    a4.classList.remove("active");
    container.classList.remove("desactive");
}
