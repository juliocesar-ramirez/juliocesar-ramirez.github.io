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
var b331 = document.getElementById("b331");
var b3312 = document.getElementById("b3312");
var b3313 = document.getElementById("b3313");
var b3314 = document.getElementById("b3314");
var b3315 = document.getElementById("b3315");
var b3316 = document.getElementById("b3316");
var b3317 = document.getElementById("b3317");
var b3318 = document.getElementById("b3318");
var b3319 = document.getElementById("b3319");
var b33110 = document.getElementById("b33110");
var b332 = document.getElementById("b332");
var b3321 = document.getElementById("b3321");
var b3322 = document.getElementById("b3322");
var b3323 = document.getElementById("b3323");

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
    b331.textContent = data[idioma].b331;
    b3312.textContent = data[idioma].b3312;
    b3313.textContent = data[idioma].b3313;
    b3314.textContent = data[idioma].b3314;
    b3315.textContent = data[idioma].b3315;
    b3316.textContent = data[idioma].b3316;
    b3317.textContent = data[idioma].b3317;
    b3318.textContent = data[idioma].b3318;
    b3319.textContent = data[idioma].b3319;
    b33110.textContent = data[idioma].b33110;
    b332.textContent = data[idioma].b332;
    b3321.textContent = data[idioma].b3321;
    b3322.textContent = data[idioma].b3322;

    b44.textContent=data[idioma].b44;
    b55.textContent=data[idioma].b55;
    subtitulo.textContent=data[idioma].subtitulo;
}

var data={
    "es":
    {
	"b11":"Sobre mí",
	"b111":"Sobre mí",
	"b1121":"Bach. Julio Ramirez es un apasionado en temas de dinámica de fluidos computacional y en lenguajes de programación. Cuenta con 2 años de experiencia en investigación en temas de modelamiento y simulación de fluidos ambientales.",
	"b1122":"Culminó el bachillerato de ingeniería civil en la Pontificia Universidad Católica del Perú en el año 2019.",
	"b22":"Proyectos",
	"b221":"Proyectos",
	"b222":"Velocidad parabólica con seudo pertubaciones: Desarrollo de una nueva condición de borde en la librería Openfoam, basado en c++. Perfil vertical de velocidad parábolico con variación aleatoria en el tiempo, las pertubaciones permitien trabajar con simulaciones con modelo de turbulencia DES.",
	"b223":"Ecuación de transporte escalar con el número turbulento de Schmidt: Implementación la ecuación de disipación escalar para un contaminante con parámetros del número de Schmidt y Prandtl. Código en Openfoam, basado en c++.",
	"b33":"Cursos",
	"b331": "Cursos",
	"b3312": "Master en ciencia de datos con python - inLearning 2021",
	"b3313": "Programación CFD en OpenFOAM - CFD Direct 2021",
	"b3314": "Modelamiento de fuego en OpenFoam - OpenFOAM 2020",
	"b3315": "OpenFOAM turbulencia - CFD Support 2019",
	"b3316": "OpenFOAM avanzado - CFD Support 2019",
	"b3317": "Preprocesamiento en OpenFOAM  - CFD Support 2019",
	"b3318": "OpenFOAM básico - CFD Support 2019",
	"b3319": "Modelamiento hidráulico en superficie libre con código libre y abierto - Laboratorio Nacional de Hidráulica de la Universidad Nacional de Ingeniería 2018",
	"b33110": "Autocad 2018 avanzando - Centro de Cómputo UNIMASTER 2018",
	"b332": "Dictados",
	"b3321": "Hidráulica computacional con interFoam - UPC 2023",
	"b3322": "Flujo secundario en canal curvo con Telemac-2D - Privado 2022",
	"b3323": "Modelamiento hidráulico para superficie libre con Telemac-2D - PUCP 2019",
	"b44": "Research",
	"b55": "Curriculum",
	"subtitulo": "Dinámica de Fluidos Computacional"
    },
    "in":
    {
	"b11":"About me",
	"b111":"About me",
	"b1121":"Bachelor Julio Ramirez is passionate about computational fluid dynamics and programming languages. Two years of experiences in modelling and simulation in ambiental fluid topics.",
	"b1122":"He completed his bachelor's degree in civil engineering in 2019 at Pontificia Universidad Católica de Perú.",
	"b22":"Proyects",
	"b221":"Proyects",
	"b222":"Turbulent parabolic velocity: Development of a new boundary condition in the openfoam library, based on c++. Vertical profile from a predefined parabolic velocity with randoms fluctuations over the time. This pertubations allow to work with LES and DES in unsteady flows.",
	"b223":"Turbulent schmidt number with scalar transport equation: Implementation of the scalar dissipation equation for a pollutnat with the parameters of the schmidt y prandtl number. Code in openfoam, based on c++.",
	"b33":"Courses",
	"b331": "Courses",
	"b3312": "Master python for data science - inLearning 2021",
	"b3313": "Programing CFD OpenFOAM - CFD Direct 2021",
	"b3314": "Fire modelling with OpenFOAM - OpenFOAM 2020",
	"b3315": "OpenFOAM turbulence - CFD Support 2019",
	"b3316": "OpenFOAM advanced - CFD Support 2019",
	"b3317": "Preprocessing Openfoam  - CFD Support 2019",
	"b3318": "OpenFOAM basic - CFD Support 2019",
	"b3319": "Open source hydraulic modelling of shallow water flow - Universidad Nacional de Ingeniería National Hydraulics Laboratory 2018",
	"b33110": "Autocad 2018 advanced - Centro de Cómputo UNIMASTER 2018",
	"b332": "Dictados",
	"b3321": "Computational hydraulics with interFoam - PUCP 2023",
	"b3322": "Secondary flow in curved channel with Telemac-2D - Private 2022",
	"b3323": "Hydraulic modelling of free surface flow with Telemac-2D - PUCP 2019",
	"b44": "Research",
	"b55": "Resume",
	"subtitulo": "Computational Fluid Dynamics"
    },
    "fr":
    {
	"b11":"À propos de moi",
	"b111":"À propos de moi",
	"b1121":"Le baccalauréat Julio Ramirez est passionné par la dynamique des fluides computationnelle et les langages de programmation. Il a 2 ans d'expérience dans la recherche sur les problématiques de modélisation et de simulation des fluides environnementaux.",
	"b1122":"Il a obtenu son baccalauréat en génie civil à la Pontificia Universidad Católica del Perú en 2019.",
	"b22":"Projets",
	"b221":"Projets",
	"b222":"Vitesse parabolique avec pseudo perturbations : Développement d'une nouvelle condition de bord dans la librairie Openfoam, basée sur c++. Profil de vitesse parabolique verticale à variation aléatoire dans le temps, les perturbations permettent de travailler avec des simulations avec le modèle de turbulence DES.",
	"b223":"Equation scalaire de transport à nombre de Schmidt turbulent : Implémentation de l'équation scalaire de dissipation pour un polluant à nombre de Schmidt et Prandtl. Code en Openfoam, basé sur c++.",
	"b33":"Cours",
	"b331": "Cours",
	"b3312": "Maîtriser python pour la science des données - inLearning 2021",
	"b3313": "Programmation CFD dans OpenFOAM - CFD Direct 2021",
	"b3314": "Modélisation du feu dans OpenFOAM - OpenFOAM 2020",
	"b3315": "OpenFOAM turbulence - CFD Support 2019",
	"b3316": "OpenFOAM avancé - CFD Support 2019",
	"b3317": "Prétraitement dans OpenFOAM  - CFD Support 2019",
	"b3318": "OpenFOAM basique - CFD Support 2019",
	"b3319": "Modélisation hydraulique open source de surface libre -Laboratoire national d'hydraulique Universidad Nacional de Ingeniería 2018",
	"b33110": "Autocad 2018 avancé - Centro de Cómputo UNIMASTER 2018",
	"b332": "Dictados",
	"b3321": "L'hydraulique numérique avec interFoam - UPC 2023",
	"b3322": "Flux secondaire en canal courbe avec Telemac-2D - Private 2022",
	"b3323": "Modélisation hydraulique de l'écoulement à surface libre avec Telemac-2D - PUCP 2019",
	"b44": "Recherche",
	"b55": "Reprendre",
	"subtitulo": "Dynamique des fluides numérique"
    }



};

function getpdf() {
	idioma = document.getElementById("list").value;
	if (idioma == "in") {
		location.href = "https://juliocesar-ramirez.github.io/resume-julioramirez.pdf";
	}
	else if (idioma == "fr") {
		location.href = "https://juliocesar-ramirez.github.io/reprendre-julioramirez.pdf";
	}
	else {
		location.href = "https://juliocesar-ramirez.github.io/curriculum-julioramirez.pdf";
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
		document.getElementById("a2").scrollIntoView({ behavior: 'smooth' });
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
else {
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
	function funcion3() {
		// a1.classList.remove("apagar");
		a3.classList.add("active");
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
	function funcion3x() {
		a3.classList.remove("active");
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
b3.addEventListener("click", funcion3);
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


