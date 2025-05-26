
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
				opciones: [
					"Crear un contenedor de bloque",
					"Insertar texto en negrita",
					"Agregar comentarios",
					"Mostrar imágenes",
				],
				respuesta: 0,
			},
			{
				pregunta:
					"¿Cuál es la forma correcta de cerrar una etiqueta autocontenida como <img>?",
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
				pregunta:
					"¿Qué elemento define información de contacto en el pie de página?",
				opciones: ["<address>", "<contact>", "<footer>", "<info>"],
				respuesta: 0,
			},
			{
				pregunta:
					"¿Qué atributo se usa para asociar un label con un input a través de su id?",
				opciones: ["for", "id", "label", "input-id"],
				respuesta: 0,
			},
			{
				pregunta:
					"¿Cuál es la etiqueta correcta para resaltar texto importante?",
				opciones: ["<strong>", "<bold>", "<highlight>", "<em>"],
				respuesta: 0,
			},
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
					"Para ocultar elementos",
				],
				respuesta: 0,
			},
			{
				pregunta:
					"¿Cuál propiedad controla el espacio entre el contenido y el borde de un elemento?",
				opciones: ["padding", "margin", "border", "spacing"],
				respuesta: 0,
			},
			{
				pregunta:
					"¿Qué valor de position mantiene el elemento en relación a la ventana del navegador?",
				opciones: ["fixed", "absolute", "relative", "sticky"],
				respuesta: 0,
			},
			{
				pregunta:
					"¿Qué unidad CSS se basa en el tamaño de fuente del elemento raíz?",
				opciones: ["rem", "em", "%", "px"],
				respuesta: 0,
			},
			{
				pregunta: "¿Qué propiedad se usa para aplicar sombras a textos?",
				opciones: ["text-shadow", "box-shadow", "shadow-text", "font-shadow"],
				respuesta: 0,
			},
			{
				pregunta:
					"¿Cuál es la sintaxis correcta para importar una hoja de estilo CSS?",
				opciones: [
					"@import 'estilo.css';",
					"import 'estilo.css';",
					"<link rel='stylesheet' href='estilo.css'>",
					"Ambas primeras son correctas",
				],
				respuesta: 0,
			},
			{
				pregunta: "¿Qué hace la propiedad z-index?",
				opciones: [
					"Controla el orden de apilamiento de elementos",
					"Ajusta el tamaño de los elementos",
					"Cambia el color de fondo",
					"Establece el tiempo de transición",
				],
				respuesta: 0,
			},
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
      {
            pregunta: "¿Cómo se declara una variable?",
            opciones: ["let x;", "var x;", "const x;", "Todas las anteriores"],
            respuesta: 3,
        },
        {
            pregunta: "¿Qué palabra clave se usa para definir una función?",
            opciones: ["function", "def", "func", "method"],
            respuesta: 0,
        },
        {
            pregunta: "¿Cuál es el resultado de typeof '123'?",
            opciones: ["string", "number", "NaN", "undefined"],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué método convierte un JSON string en un objeto?",
            opciones: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "Stringify.JSON()"],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué operador compara valor y tipo?",
            opciones: ["===", "==", "=", "!=="],
            respuesta: 0,
        },
        {
            pregunta: "¿Cómo se llama la función que se ejecuta cuando termina una operación asíncrona?",
            opciones: ["callback", "async", "await", "function"],
            respuesta: 0,
        },
        {
            pregunta: "¿Cuál de estos NO es un bucle en JavaScript?",
            opciones: ["loop", "for", "while", "do...while"],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué evento se dispara cuando se envía un formulario?",
            opciones: ["submit", "change", "click", "input"],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué propiedad devuelve el número de elementos en un array?",
            opciones: ["length", "size", "count", "index"],
            respuesta: 0,
        },
        {
            pregunta: "¿Para qué se usa el método .map() en arrays?",
            opciones: [
                "Crear un nuevo array transformando los elementos",
                "Eliminar elementos del array",
                "Ordenar el array",
                "Filtrar elementos"
            ],
            respuesta: 0,
        }
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
      {
            pregunta: "¿Qué ratio cumple WCAG 2.1 nivel AA?",
            opciones: ["4.5:1", "3:1", "2.5:1", "5:1"],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué significa ARIA?",
            opciones: [
                "Accessible Rich Internet Applications",
                "Application for Rich Interfaces",
                "Accessible Real Internet Apps",
                "All Responsive Interfaces"
            ],
            respuesta: 0,
        },
        {
            pregunta: "¿Para qué se usa la propiedad aria-label?",
            opciones: [
                "Proporcionar una etiqueta accesible a un elemento",
                "Cambiar el color del texto",
                "Ocultar contenido visualmente",
                "Definir un título alternativo"
            ],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué debe tener siempre una imagen para ser accesible?",
            opciones: ["Texto alternativo (alt)", "Un borde visible", "Una descripción larga", "Un tamaño fijo"],
            respuesta: 0,
        },
        {
            pregunta: "¿Cuál es uno de los principios fundamentales de la accesibilidad según WCAG?",
            opciones: [
                "Perceptible",
                "Visible",
                "Dinámico",
                "Animado"
            ],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué herramienta permite navegar por una página web sin usar el ratón?",
            opciones: [
                "Teclado",
                "Touchpad",
                "Ratón óptico",
                "Pantalla táctil"
            ],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué indica el orden de tabulación (tabindex) en una página web?",
            opciones: [
                "El orden en que se enfocan los elementos con Tab",
                "El tamaño de fuente",
                "La posición en pantalla",
                "La visibilidad del elemento"
            ],
            respuesta: 0,
        },
        {
            pregunta: "¿Cuál de estas tecnologías ayuda a usuarios con discapacidad visual a navegar por páginas web?",
            opciones: [
                "Lector de pantalla",
                "Zoom del navegador",
                "Modo oscuro",
                "Estilo CSS personalizado"
            ],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué significa hacer un sitio web 'navegable por teclado'?",
            opciones: [
                "Que se puede usar completamente sin mouse",
                "Que tiene atajos de teclado personalizados",
                "Que no requiere scroll",
                "Que solo funciona con comandos de voz"
            ],
            respuesta: 0,
        },
        {
            pregunta: "¿Qué se debe evitar para mejorar la accesibilidad del contenido?",
            opciones: [
                "Usar solo color para transmitir información",
                "Incluir imágenes",
                "Usar encabezados",
                "Escribir en mayúsculas todo el texto"
            ],
            respuesta: 0,
        }
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

	// Mezclar opciones y mantener el índice de la respuesta correcta
	const opcionesOriginales = pregunta.opciones.map((texto, indice) => ({
		texto,
		esCorrecta: indice === pregunta.respuesta
	}));

	const opcionesMezcladas = opcionesOriginales.sort(() => Math.random() - 0.5);

	opcionesMezcladas.forEach((opcion, indice) => {
		const boton = document.createElement("button");
		boton.className = "btn btn-opcion w-100";
		boton.textContent = opcion.texto;
		boton.onclick = () => {
			opcionSeleccionada = opcion.esCorrecta ? "correcta" : "incorrecta";
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
		Swal.fire({//Alerta en dado caso no se haya seleccionado una respuesta
			icon: "warning",
			background: "#000000",
			color: "#f27900",
			title: "No has seleccionado respuesta",
			text: "¡Selecciona una respuesta para continuar con el test!",
			showConfirmButton: false,
			timer: 3000,
		});
		return;
	}

	if (
		opcionSeleccionada === "correcta"

	) {
		puntuacion++;
		const Toast = Swal.mixin({//Mensaje para el caso en donde la respuesta seleccionada es la correcta
			width: "200px",
			background: "#ffffff",
			color:"#000000",
			position: "center",
			text:"¡Respuesta correcta!",
			showConfirmButton: false,
			timer: 1000,
			didOpen: (toast) => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
		Toast.fire({
			icon: "success",
		});
	} else {
		//Mensaje para el caso en donde la respuesta seleccionada es la incorrecta
		const Toast = Swal.mixin({
			width: "200px",
			background: "#ffffff",
			color:"#000000",
			text:"¡Respuesta incorrecta!",
			showConfirmButton: false,
			timer: 1000,
			didOpen: (toast) => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
		Toast.fire({
			icon: "error",
		});
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
