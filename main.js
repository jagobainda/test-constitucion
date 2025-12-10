document.addEventListener("DOMContentLoaded", () => {
    const articulosConstitucion = {
        "1": "Principios básicos",
        "2": "Unidad y autonomía",
        "3": "Idioma",
        "4": "Bandera",
        "5": "Capital del Estado",
        "6": "Partidos políticos",
        "7": "Sindicatos y asociaciones empresariales",
        "8": "Fuerzas armadas",
        "9": "Principios constitucionales",
        "10": "Derechos y deberes fundamentales",
        "11": "Nacionalidad",
        "12": "Mayoría de edad",
        "13": "Derechos de españoles y extranjeros",
        "14": "Principio de igualdad",
        "15": "Derecho a la vida",
        "16": "Libertad ideológica, religiosa y de culto",
        "17": "Derecho a la libertad y a la seguridad",
        "17.1": "Libertad y seguridad",
        "17.2": "Detención preventiva",
        "17.3": "Derechos de las personas detenidas",
        "17.4": "Habeas corpus y prisión provisional",
        "18": "Derecho al honor, a la intimidad personal y familiar y a la propia imagen",
        "18.2": "Inviolabilidad del domicilio",
        "18.3": "Secreto de las comunicaciones",
        "19": "Libertad de residencia y circulación",
        "20": "Libertad de expresión",
        "20.1 a)": "Expresar y difundir librem. pensamientos, ideas y opiniones",
        "20.1 d)": "Comunicar o recibir librem. información veraz por cualquier medio de difusión",
        "20.5": "Secuestro de publicaciones, grabaciones y otros medios de información",
        "21": "Derecho de reunión y manifestación",
        "22": "Derecho de asociación",
        "23": "Derecho de participación en los asuntos públicos",
        "24": "Derecho a la tutela judicial efectiva",
        "25": "Sanciones, condenas y penas privativas de libertad",
        "26": "Prohibición de los tribunales de honor",
        "27": "Derecho a la educación",
        "28": "Libertad sindical. Derecho a huelga",
        "28.2": "Derecho a la huelga",
        "29": "Derecho de petición",
        "30": "Defensa de España",
        "31": "Principio de capacidad económica y no confiscatoriedad",
        "32": "Derecho a contraer matrimonio",
        "33": "Derecho a la propiedad privada y la herencia",
        "34": "Derecho de fundación",
        "35": "Derecho al trabajo",
        "36": "Colegios profesionales",
        "37": "Derecho a la negociación colectiva laboral",
        "37.2": "Derecho a la adopción de medidas de conflicto colectivo",
        "38": "Libertad de empresa",
        "39": "Protección de la familia y de la infancia",
        "40": "Protección del trabajador",
        "41": "Seguridad Social",
        "42": "Protección de los trabajadores españoles en el extranjero",
        "43": "Derecho a la protección de la salud",
        "44": "Acceso a la cultura y promoción de la investigación",
        "45": "Medio ambiente",
        "46": "Conservación del patrimonio histórico, cultural y artístico",
        "47": "Vivienda",
        "48": "Participación de la juventud en el desarrollo político, social, económico y cultural",
        "49": "Personas con discapacidad",
        "50": "Pensiones",
        "51": "Defensa de los consumidores y usuarios",
        "52": "Organizaciones profesionales",
        "53": "Garantías, libertades y derechos fundamentales",
        "54": "Defensor del pueblo",
        "55": "Suspensión de los derechos y libertades"
    };

    const generarPreguntaArticulo = () => {
        if (articulosDisponibles.length === 0) {
            return null;
        }

        const indiceAleatorio = Math.floor(Math.random() * articulosDisponibles.length);
        const articuloCorrecto = articulosDisponibles[indiceAleatorio];

        articulosDisponibles.splice(indiceAleatorio, 1);

        const temaArticulo = articulosConstitucion[articuloCorrecto];
        const todosLosArticulos = Object.keys(articulosConstitucion);

        const opcionesIncorrectas = [];
        while (opcionesIncorrectas.length < 3) {
            const indiceIncorrecto = Math.floor(Math.random() * todosLosArticulos.length);
            const articuloIncorrecto = todosLosArticulos[indiceIncorrecto];

            if (articuloIncorrecto !== articuloCorrecto && !opcionesIncorrectas.includes(articuloIncorrecto)) {
                opcionesIncorrectas.push(articuloIncorrecto);
            }
        }

        const todasLasOpciones = [articuloCorrecto, ...opcionesIncorrectas];
        const opcionesMezcladas = todasLasOpciones.sort(() => Math.random() - 0.5);

        return {
            pregunta: `¿Qué artículo de la constitución habla sobre ${temaArticulo.toLowerCase()}?`,
            opciones: opcionesMezcladas,
            respuestaCorrecta: articuloCorrecto
        };
    };

    let preguntaActual = null;
    let respuestaSeleccionada = null;
    let totalPreguntas = 0;
    let aciertos = 0;
    let preguntaNumero = 0;
    let articulosDisponibles = [];

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const correctAnswersSpan = document.getElementById('correct-answers');

    function iniciarTest() {
        totalPreguntas = 15;
        preguntaNumero = 0;
        aciertos = 0;
        articulosDisponibles = Object.keys(articulosConstitucion).slice();
        totalQuestionsSpan.textContent = totalPreguntas;
        restartBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
        mostrarSiguientePregunta();
    }

    function mostrarSiguientePregunta() {
        if (preguntaNumero >= totalPreguntas) {
            finalizarTest();
            return;
        }

        preguntaNumero++;
        respuestaSeleccionada = null;
        preguntaActual = generarPreguntaArticulo();

        questionText.textContent = preguntaActual.pregunta;
        currentQuestionSpan.textContent = preguntaNumero;

        optionsContainer.innerHTML = '';
        preguntaActual.opciones.forEach(opcion => {
            const button = document.createElement('div');
            button.className = 'option';
            button.textContent = `Artículo ${opcion}`;
            button.onclick = () => seleccionarOpcion(opcion, button);
            optionsContainer.appendChild(button);
        });

        nextBtn.disabled = true;
    }

    function seleccionarOpcion(opcion) {
        if (respuestaSeleccionada !== null) return;

        respuestaSeleccionada = opcion;
        const opciones = document.querySelectorAll('.option');

        opciones.forEach(opt => {
            opt.onclick = null;
            const articulo = opt.textContent.replace('Artículo ', '');

            if (articulo === preguntaActual.respuestaCorrecta) {
                opt.classList.add('correct');
            } else if (articulo === opcion) {
                opt.classList.add('incorrect');
            }
        });

        if (opcion === preguntaActual.respuestaCorrecta) {
            aciertos++;
            correctAnswersSpan.textContent = aciertos;
        }

        nextBtn.disabled = false;
    }

    function finalizarTest() {
        questionText.textContent = '¡Test completado!';
        optionsContainer.innerHTML = `
    <p style="text-align: center; font-size: 20px; padding: 20px;">
      Has acertado ${aciertos} de ${totalPreguntas} preguntas.
      <br><br>
      Porcentaje: ${Math.round((aciertos / totalPreguntas) * 100)}%
    </p>
  `;
        nextBtn.style.display = 'none';
        restartBtn.style.display = 'inline-block';
    }

    nextBtn.addEventListener('click', mostrarSiguientePregunta);
    restartBtn.addEventListener('click', iniciarTest);

    iniciarTest();
});