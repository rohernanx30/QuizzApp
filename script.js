   //pdt Rocio: Idea de la estructura que creo que debe llevar, a quien le corresponda esta parte puede ver si le parece
   //y seguir la idea o modificar todo a su gusto
   const cuestionarios = {
  html: {
    nombre: "HTML",
    preguntas: [
        //repetir la siguiente linea de comando hasta completar la cantidad de preguntas deseadas
      { pregunta: "¿Qué etiqueta se usa para crear un enlace?", opciones: ["<a>", "<link>", "<href>", "<button>"], respuesta: 0 },
    // donde dice respuesta esta la posicion en donde se encuentra la respuesta correcta
    // sin embargo tambien se podria agregar una funcion que al mostrarsela al usuario no este siempre en la misma posicion 
    ]
  },
  css: {
    nombre: "CSS",
    preguntas: [
      { pregunta: "¿Qué significa CSS?", opciones: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Syntax", "Compact Style Scripts"], respuesta: 0 },
      
    ]
  },
  js: {
    nombre: "JavaScript",
    preguntas: [
      { pregunta: "¿Cómo se declara una variable?", opciones: ["let x;", "var x;", "const x;", "Todas las anteriores"], respuesta: 3 },
      //otra forma es que nosotros cambiemos el orden y seleccionemos la posicion de la respuesta correcta
    ]
  },
  accesibilidad: {
    nombre: "Accesibilidad",
    preguntas: [
      { pregunta: "¿Qué ratio cumple WCAG 2.1 nivel AA?", opciones: ["4.5:1", "3:1", "2.5:1", "5:1"], respuesta: 0 },
      
    ]
  }
};

//variables inicializadas
let temaActual = "";
let preguntaActual = 0;
let puntuacion = 0;
let opcionSeleccionada = null;

function iniciarCuestionario(tema) {
  temaActual = tema;
  preguntaActual = 0;
  puntuacion = 0;
  opcionSeleccionada = null;

  // cambio entre pantallas
  document.getElementById("pantalla-inicio").classList.add("hidden");
  document.getElementById("pantalla-resultado").classList.add("hidden");
  document.getElementById("pantalla-pregunta").classList.remove("hidden");

  mostrarPregunta();
}

function mostrarPregunta() {
  const cuestionario = cuestionarios[temaActual];
  const pregunta = cuestionario.preguntas[preguntaActual];

  document.getElementById("categoria").textContent = cuestionario.nombre;
  document.getElementById("texto-pregunta").textContent = `Pregunta ${preguntaActual + 1}: ${pregunta.pregunta}`;

  const contenedor = document.getElementById("contenedor-opciones");
  contenedor.innerHTML = "";

  pregunta.opciones.forEach((texto, indice) => {
    const boton = document.createElement("button");
    boton.className = "btn btn-opcion w-100";
    boton.textContent = texto;
    boton.onclick = () => {
      opcionSeleccionada = indice;
      document.querySelectorAll("#contenedor-opciones button").forEach(b => b.classList.remove("active"));
      boton.classList.add("active");
    };
    contenedor.appendChild(boton);
  });
}

function siguientePregunta() {
  if (opcionSeleccionada === null) {
    alert("Por favor selecciona una respuesta");
    return;
  }

  if (opcionSeleccionada === cuestionarios[temaActual].preguntas[preguntaActual].respuesta) {
    puntuacion++;
  }

  opcionSeleccionada = null;
  preguntaActual++;

  if (preguntaActual < cuestionarios[temaActual].preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("pantalla-pregunta").classList.add("hidden");
  document.getElementById("pantalla-resultado").classList.remove("hidden");
  document.getElementById("puntuacion").textContent = puntuacion;
}

function reiniciar() {
  document.getElementById("pantalla-resultado").classList.add("hidden");
  document.getElementById("pantalla-inicio").classList.remove("hidden");
}