var fondo = document.querySelector(".fondo");
window.addEventListener("load", function() {
    console.log("DOM fully loaded and parsed");
	document.body.style.display = none;
	fondo.classList.add("desactive");
});

var b1 = document.getElementById("b1");
var b11 = document.getElementById("b11");
var b2 = document.getElementById("b2");
var b22 = document.getElementById("b22");
var b3 = document.getElementById("b3");
var b33 = document.getElementById("b33");
var b4 = document.getElementById("b4");
var b44 = document.getElementById("b44");
var b55 = document.getElementById("b55");
var subtitulo = document.getElementById("subtitulo");

menu_link = document.querySelectorAll('menu_li');

var b1x = document.getElementById("c1");
var b2x = document.getElementById("c2");
var b3x = document.getElementById("c3");
var b4x = document.getElementById("c4");

// var a1 = document.querySelector(".a1");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
// var a3 = document.getElementById("a3");
// var a4 = document.getElementById("a4");

var container = document.querySelector(".portada");
var nombre = document.querySelector(".nombre");
var idioma_option = document.querySelectorAll("option");
var titleEl = document.querySelector(".title");
// idioma=document.getElementById("list").value;

function getSelectValue(){
    idioma = document.querySelector(".idioma").value;
    
    b11.textContent=data[idioma].b11;
    b22.textContent=data[idioma].b22;
    b33.textContent=data[idioma].b33;
    b44.textContent=data[idioma].b44;
    b55.textContent=data[idioma].b55;
    subtitulo.textContent=data[idioma].subtitulo;
}

var data={
    "in":
    {
	"b11":"About me",
	"b22":"Proyects",
	"b33":"Courses",
	"b44":"Research",
	"b55":"Resume",
	"subtitulo":"Computational Fluid Dynamics"
    },

    "fr":
    {
	"b11":"À propos de moi",
	"b22":"Projets",
	"b33":"Cours",
	"b44":"Recherche",
	"b55":"Reprendre",
	"subtitulo":"Dynamique des fluides numérique"
    },

    "es":
    {
	"b11":"Sobre mí",
	"b22":"Proyectos",
	"b33":"Cursos",
	"b44":"Research",
	"b55":"Curriculum",
	"subtitulo":"Dinámica de Fluidos Computacional"
    }
};

function getpdf(){
    idioma=document.getElementById("list").value;
    if(idioma=="in"){
    }
    else if(idioma=="fr"){
    }
    else {
    location.href= "https://juliocesar-ramirez.github.io/resume-ramirez.pdf";
    }
}
// idioma_option.forEach(el => {
//     el.addEventListener('click',() => {
// 	console.log('hole');

// 	const attr=el.getAttribute('value');
// 	titleEl.textContent=data[attr].title;
//     });
// });
	

// const changeLanguage = async (language)=>{
//     const requestJson=await fetch('./ingles.json');
//     const texts=await requestJson.json();
//     console.log(texts);
// };

b1.addEventListener("click", funcion1);
// b1.addEventListener("click", function () {
// 	container.classList.add("apagar");
// 	setTimeout(funcion1, 326);
// });

b2.addEventListener("click", funcion2);
// b3.addEventListener("click", funcion3);
// b4.addEventListener("click", funcion4);

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
	fondo.classList.remove("zoomout");
    fondo.classList.remove("zoomoutf");
    fondo.classList.add("zoomin");
    fondo.classList.add("zoominf");

}

function funcion2() {
	a2.classList.remove("apagar");
	a2.classList.add("active");
	container.classList.add("desactive");
	a2.classList.add("prender");
	fondo.classList.remove("zoomout");
	fondo.classList.remove("zoomoutf");
	fondo.classList.add("zoomin");
	fondo.classList.add("zoominf");
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
    fondo.classList.remove("zoomin");
    fondo.classList.remove("zoominf");
	container.classList.add("prender");
	fondo.classList.add("zoomout");
    fondo.classList.add("zoomoutf");
}

function funcion2x() {
	a2.classList.remove("active");
	container.classList.remove("desactive");
	fondo.classList.remove("zoomin");
	fondo.classList.remove("zoominf");
	container.classList.add("prender");
	fondo.classList.add("zoomout");
	fondo.classList.add("zoomoutf");
}

function funcion3x() {
	a3.classList.remove("active");
	container.classList.remove("desactive");
}

function funcion4x() {
	a4.classList.remove("active");
	container.classList.remove("desactive");
}

sel = document.getElementById('selector');
