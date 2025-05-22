//pdt Rocio: Idea de la estructura que creo que debe llevar, a quien le corresponda esta parte puede ver si le parece
//y seguir la idea o modificar todo a su gusto
const cuestionarios = {
    // Preguntas de HTML (1 al 10)
  html: {
    nombre: "HTML",
    preguntas: [      
      {
        pregunta: "¿Qué etiqueta se usa para crear un enlace?",
        opciones: ["<a>", "<link>", "<href>", "<button>"],
        respuesta: 0,
      },      
      {
        pregunta: "¿Cuál es la etiqueta correcta para insertar una imagen?",
        opciones: ["<img>", "<image>", "<pic>", "<source>"],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué atributo se usa para especificar la URL de un enlace?",
        opciones: ["href", "src", "link", "url"],
        respuesta: 0,
      },
      {
        pregunta: "¿Para qué se usa la etiqueta <div>?",
        opciones: ["Crear un contenedor de bloque", "Insertar texto en negrita", "Agregar comentarios", "Mostrar imágenes"],
        respuesta: 0,
      },
      {
        pregunta: "¿Cuál es la forma correcta de cerrar una etiqueta autocontenida como <img>?",
        opciones: ["No necesita cerrarse", "</img>", "<img/>", "<img>\n"],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué etiqueta se usa para definir una lista desordenada?",
        opciones: ["<ul>", "<ol>", "<li>", "<list>"],
        respuesta: 0,
      },
      {
        pregunta: "¿Cuál de estos elementos crea un salto de línea?",
        opciones: ["<br>", "<lb>", "<hr>", "<break>"],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué elemento define información de contacto en el pie de página?",
        opciones: ["<address>", "<contact>", "<footer>", "<info>"],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué atributo se usa para asociar un label con un input a través de su id?",
        opciones: ["for", "id", "label", "input-id"],
        respuesta: 0,
      },
      {
        pregunta: "¿Cuál es la etiqueta correcta para resaltar texto importante?",
        opciones: ["<strong>", "<bold>", "<highlight>", "<em>"],
        respuesta: 0,
      }
    ],
  },
  // Preguntas de CSS (1 a la 10)
  css: {
  nombre: "CSS",
  preguntas: [
    
    {
      pregunta: "¿Qué significa CSS?",
      opciones: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Creative Style Syntax",
        "Compact Style Scripts",
      ],
      respuesta: 0,
    },    
    {
      pregunta: "¿Cómo se selecciona un elemento por su ID en CSS?",
      opciones: ["#id", ".id", "id", "*id"],
      respuesta: 0,
    },
    {
      pregunta: "¿Cuál de estos NO es un tipo de selector en CSS?",
      opciones: [".clase", "#id", "@media", "/element"],
      respuesta: 3,
    },
    {
      pregunta: "¿Para qué se usa la propiedad display: flex;?",
      opciones: [
        "Para crear un contenedor flexible",
        "Para centrar elementos verticalmente",
        "Para activar el modo diseño responsivo",
        "Para ocultar elementos"
      ],
      respuesta: 0,
    },
    {
      pregunta: "¿Cuál propiedad controla el espacio entre el contenido y el borde de un elemento?",
      opciones: ["padding", "margin", "border", "spacing"],
      respuesta: 0,
    },
    {
      pregunta: "¿Qué valor de position mantiene el elemento en relación a la ventana del navegador?",
      opciones: ["fixed", "absolute", "relative", "sticky"],
      respuesta: 0,
    },
    {
      pregunta: "¿Qué unidad CSS se basa en el tamaño de fuente del elemento raíz?",
      opciones: ["rem", "em", "%", "px"],
      respuesta: 0,
    },
    {
      pregunta: "¿Qué propiedad se usa para aplicar sombras a textos?",
      opciones: ["text-shadow", "box-shadow", "shadow-text", "font-shadow"],
      respuesta: 0,
    },
    {
      pregunta: "¿Cuál es la sintaxis correcta para importar una hoja de estilo CSS?",
      opciones: [
        "@import 'estilo.css';",
        "import 'estilo.css';",
        "<link rel='stylesheet' href='estilo.css'>",
        "Ambas primeras son correctas"
      ],
      respuesta: 0,
    },
    {
      pregunta: "¿Qué hace la propiedad z-index?",
      opciones: [
        "Controla el orden de apilamiento de elementos",
        "Ajusta el tamaño de los elementos",
        "Cambia el color de fondo",
        "Establece el tiempo de transición"
      ],
      respuesta: 0,
    }
  ],
},
  js: {
    nombre: "JavaScript",
    preguntas: [
      {
        pregunta: "¿Cómo se declara una variable?",
        opciones: ["let x;", "var x;", "const x;", "Todas las anteriores"],
        respuesta: 3,
      },
      //otra forma es que nosotros cambiemos el orden y seleccionemos la posicion de la respuesta correcta
    ],
  },
  accesibilidad: {
    nombre: "Accesibilidad",
    preguntas: [
      {
        pregunta: "¿Qué ratio cumple WCAG 2.1 nivel AA?",
        opciones: ["4.5:1", "3:1", "2.5:1", "5:1"],
        respuesta: 0,
      },
    ],
  },
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
  document.getElementById("texto-pregunta").textContent = `Pregunta ${
    preguntaActual + 1
  }: ${pregunta.pregunta}`;

  const contenedor = document.getElementById("contenedor-opciones");
  contenedor.innerHTML = "";

  pregunta.opciones.forEach((texto, indice) => {
    const boton = document.createElement("button");
    boton.className = "btn btn-opcion w-100";
    boton.textContent = texto;
    boton.onclick = () => {
      opcionSeleccionada = indice;
      document
        .querySelectorAll("#contenedor-opciones button")
        .forEach((b) => b.classList.remove("active"));
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

  if (
    opcionSeleccionada ===
    cuestionarios[temaActual].preguntas[preguntaActual].respuesta
  ) {
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
