var fondo = document.querySelector(".fondo");
window.addEventListener("load", function() {
    console.log("DOM fully loaded and parsed");
	document.body.style.display = none;
	fondo.classList.add("desactive");
});


var b1 = document.getElementById("b1");
var b11 = document.getElementById("b11");
var b111 = document.getElementById("b111");
var b1121 = document.getElementById("b1121");
var b1122 = document.getElementById("b1122");
var b2 = document.getElementById("b2");
var b22 = document.getElementById("b22");
var b221 = document.getElementById("b221");
var b222 = document.getElementById("b222");
var b223 = document.getElementById("b223");
var b3 = document.getElementById("b3");
var b33 = document.getElementById("b33");
var b4 = document.getElementById("b4");
var b44 = document.getElementById("b44");
var b55 = document.getElementById("b55");
var subtitulo = document.getElementById("subtitulo");

menu_link = document.querySelectorAll('menu_li');
allarticle = document.querySelectorAll('allarticle');

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
var header1=document.querySelector("header");
var article1=document.querySelectorAll("article");

// idioma=document.getElementById("list").value;

function getSelectValue(){
    idioma = document.querySelector(".idioma").value;
    
    b11.textContent=data[idioma].b11;
    b111.textContent=data[idioma].b111;
    b1121.textContent=data[idioma].b1121;
    b1122.textContent=data[idioma].b1122;
    b22.textContent=data[idioma].b22;
    b221.textContent=data[idioma].b221;
    b222.textContent=data[idioma].b222;
    b223.textContent=data[idioma].b223;
    b33.textContent=data[idioma].b33;
    b44.textContent=data[idioma].b44;
    b55.textContent=data[idioma].b55;
    subtitulo.textContent=data[idioma].subtitulo;
}

var data={
    "es":
    {
	"b11":"Sobre m??",
	"b111":"Sobre m??",
	"b1121":"Bach. Julio Ramirez es un apasionado en temas de din??mica de fluidos computacional y en lenguajes de programaci??n. Cuenta con 2 a??os de experiencia en investigaci??n en temas de modelamiento y simulaci??n de fluidos ambientales.",
	"b1122":"Culmin?? el bachillerato de ingenier??a civil en la Pontificia Universidad Cat??lica del Per?? en el a??o 2019.",
	"b22":"Proyectos",
	"b221":"Proyectos",
	"b222":"Velocidad parab??lica con seudo pertubaciones: Desarrollo de una nueva condici??n de borde en la librer??a Openfoam, basado en c++. Perfil vertical de velocidad par??bolico con variaci??n aleatoria en el tiempo, las pertubaciones permitien trabajar con simulaciones con modelo de turbulencia DES.",
	"b223":"Ecuaci??n de transporte escalar con el n??mero turbulento de Schmidt: Implementaci??n la ecuaci??n de disipaci??n escalar para un contaminante con par??metros del n??mero de Schmidt y Prandtl. C??digo en Openfoam, basado en c++.",
	"b33":"Cursos",
	"b44":"Research",
	"b55":"Curriculum",
	"subtitulo":"Din??mica de Fluidos Computacional"
    },
    "in":
    {
	"b11":"About me",
	"b111":"About me",
	"b1121":"Bachelor Julio Ramirez is passionate of computational fluid dynamics and programming languages. Two years of experiences in modelling and simulation in ambiental fluid topics.",
	"b1122":"He completed his bachelor's degree in civil engineering in 2019 at Pontificia Universidad Cat??lica de Per??.",
	"b22":"Proyects",
	"b221":"Proyects",
	"b222":"Turbulent parabolic velocity: Development of a new boundary condition in the openfoam library, based on c++. Vertical profile from a predefined parabolic velocity with randoms fluctuations over the time. This pertubations allow to work with LES and DES in unsteady flows.",
	"b223":"Turbulent schmidt number with scalar transport equation: Implementation of the scalar dissipation equation for a pollutnat with the parameters of the schmidt y prandtl number. Code in openfoam, based on c++.",
	"b33":"Courses",
	"b44":"Research",
	"b55":"Resume",
	"subtitulo":"Computational Fluid Dynamics"
    },
    "fr":
    {
	"b11":"?? propos de moi",
	"b111":"?? propos de moi",
	"b1121":"Le baccalaur??at Julio Ramirez est passionn?? par la dynamique des fluides computationnelle et les langages de programmation. Il a 2 ans d'exp??rience dans la recherche sur les probl??matiques de mod??lisation et de simulation des fluides environnementaux.",
	"b1122":"Il a obtenu son baccalaur??at en g??nie civil ?? la Pontificia Universidad Cat??lica del Per?? en 2019.",
	"b22":"Projets",
	"b221":"Projets",
	"b222":"Vitesse parabolique avec pseudo perturbations : D??veloppement d'une nouvelle condition de bord dans la librairie Openfoam, bas??e sur c++. Profil de vitesse parabolique verticale ?? variation al??atoire dans le temps, les perturbations permettent de travailler avec des simulations avec le mod??le de turbulence DES.",
	"b223":"Equation scalaire de transport ?? nombre de Schmidt turbulent : Impl??mentation de l'??quation scalaire de dissipation pour un polluant ?? nombre de Schmidt et Prandtl. Code en Openfoam, bas?? sur c++.",
	"b33":"Cours",
	"b44":"Recherche",
	"b55":"Reprendre",
	"subtitulo":"Dynamique des fluides num??rique"
    }



};

function getpdf(){
    idioma=document.getElementById("list").value;
    if(idioma=="in"){
	location.href= "https://juliocesar-ramirez.github.io/resume-ramirez-en.pdf";
    }
    else if(idioma=="fr"){
	location.href= "https://juliocesar-ramirez.github.io/resume-ramirez-fr.pdf";
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
const mql = window.matchMedia('(max-width: 480px)');

if (mql.matches) {
    console.log('Media Query Matched!');
    console.log("DOM fully loaded and parsed");
    function funcion1() {
	// a1.classList.remove("apagar");
	// a1.classList.add("active");
	// a2.classList.add("active");
	article1.forEach(el => {
	    el.classList.add("active");
	});
	// document.getElementById("a1").scrollIntoView({behavior: 'smooth'});
	container.classList.add("desactive");
	header1.classList.add("desactive");
	header.classList.add("desactive");
	// a1.classList.add("prender");
	fondo.classList.remove("zoomout");
	fondo.classList.remove("zoomoutf");
	fondo.classList.add("zoomin");
	fondo.classList.add("zoominf");
	// a1.classList.add("prueba");
    }
    function funcion1x() {
	article1.forEach(el => {
	    el.classList.remove("active");
	});
	// a1.classList.remove("active");
	container.classList.remove("desactive");
	header1.classList.remove("desactive");
	header.classList.add("prender");
	header1.classList.add("prender");
	fondo.classList.remove("zoomin");
	fondo.classList.remove("zoominf");
	container.classList.add("prender");
	fondo.classList.add("zoomout");
	fondo.classList.add("zoomoutf");
    }
    function funcion2() {
	article1.forEach(el => {
	    el.classList.add("active");
	});
	document.getElementById("a2").scrollIntoView({behavior: 'smooth'});
	// a2.classList.remove("apagar");
	container.classList.add("desactive");
	header1.classList.add("desactive");
	header.classList.add("desactive");
	// a2.classList.add("prender");
	fondo.classList.remove("zoomout");
	fondo.classList.remove("zoomoutf");
	fondo.classList.add("zoomin");
	fondo.classList.add("zoominf");
	// a2.classList.add("prueba");
	// a1.classList.add("prueba");
    }
    function funcion2x() {
	article1.forEach(el => {
	    el.classList.remove("active");
	});
	// a2.classList.remove("active");
	// a1.classList.remove("active");
	container.classList.remove("desactive");
	header1.classList.remove("desactive");
	header1.classList.add("prender");
	header.classList.add("prender");
	fondo.classList.remove("zoomin");
	fondo.classList.remove("zoominf");
	container.classList.add("prender");
	fondo.classList.add("zoomout");
	fondo.classList.add("zoomoutf");
    }
}
else{
    console.log('Media Query Matched1!');
    function funcion1() {
	// a1.classList.remove("apagar");
	a1.classList.add("active");
	// a2.classList.add("active");
	// document.getElementById("a1").scrollIntoView({behavior: 'smooth'});
	container.classList.add("desactive");
	header1.classList.add("desactive");
	header.classList.add("desactive");
	// a1.classList.add("prender");
	fondo.classList.remove("zoomout");
	fondo.classList.remove("zoomoutf");
	fondo.classList.add("zoomin");
	fondo.classList.add("zoominf");
	// a1.classList.add("prueba");
    }
    function funcion1x() {
	a1.classList.remove("active");
	container.classList.remove("desactive");
	header1.classList.remove("desactive");
	header.classList.add("prender");
	header1.classList.add("prender");
	fondo.classList.remove("zoomin");
	fondo.classList.remove("zoominf");
	container.classList.add("prender");
	fondo.classList.add("zoomout");
	fondo.classList.add("zoomoutf");
    }
    function funcion2() {
	// a2.classList.remove("apagar");
	a2.classList.add("active");
	// a2.classList.remove("apagar");
	container.classList.add("desactive");
	header1.classList.add("desactive");
	header.classList.add("desactive");
	// a2.classList.add("prender");
	fondo.classList.remove("zoomout");
	fondo.classList.remove("zoomoutf");
	fondo.classList.add("zoomin");
	fondo.classList.add("zoominf");
	// a2.classList.add("prueba");
	// a1.classList.add("prueba");
    }
    function funcion2x() {
	a2.classList.remove("active");
	container.classList.remove("desactive");
	header1.classList.remove("desactive");
	header1.classList.add("prender");
	header.classList.add("prender");
	fondo.classList.remove("zoomin");
	fondo.classList.remove("zoominf");
	container.classList.add("prender");
	fondo.classList.add("zoomout");
	fondo.classList.add("zoomoutf");
    }
}




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
// b3x.addEventListener("click", function () {
// 	a3.classList.add("apagar");
// 	setTimeout(funcion3x, 326);
// });
// b4x.addEventListener("click", function () {
// 	a4.classList.add("apagar");
// 	setTimeout(funcion4x, 326);
// });



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



function funcion3x() {
	a3.classList.remove("active");
	container.classList.remove("desactive");
}

function funcion4x() {
	a4.classList.remove("active");
	container.classList.remove("desactive");
}

sel = document.getElementById('selector');


