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

    const articulosSuspension = {
        excepcion: ['17.1', '17.2', '17.4'],
        sitio: ['17', '18.2', '18.3', '19', '20.1 a)', '20.1 d)', '20.5', '21', '28.2', '37.2']
    };

    const generarPreguntaTemaArticulo = () => {
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

    const generarPreguntaArticuloTema = () => {
        if (articulosDisponibles.length === 0) {
            return null;
        }

        const indiceAleatorio = Math.floor(Math.random() * articulosDisponibles.length);
        const articuloCorrecto = articulosDisponibles[indiceAleatorio];

        articulosDisponibles.splice(indiceAleatorio, 1);

        const temaArticulo = articulosConstitucion[articuloCorrecto];
        const todosLosTemas = Object.values(articulosConstitucion);

        const temasIncorrectos = [];
        while (temasIncorrectos.length < 3) {
            const indiceIncorrecto = Math.floor(Math.random() * todosLosTemas.length);
            const temaIncorrecto = todosLosTemas[indiceIncorrecto];

            if (temaIncorrecto !== temaArticulo && !temasIncorrectos.includes(temaIncorrecto)) {
                temasIncorrectos.push(temaIncorrecto);
            }
        }

        const todasLasOpciones = [temaArticulo, ...temasIncorrectos];
        const opcionesMezcladas = todasLasOpciones.sort(() => Math.random() - 0.5);

        return {
            pregunta: `¿De qué habla el artículo ${articuloCorrecto} de la constitución?`,
            opciones: opcionesMezcladas,
            respuestaCorrecta: temaArticulo,
            esArticuloTema: true
        };
    };

    const generarPreguntaSuspension = () => {
        const tiposEstado = ['excepcion', 'sitio'];
        const estadoSeleccionado = tiposEstado[Math.floor(Math.random() * tiposEstado.length)];
        const articulosSuspendidos = articulosSuspension[estadoSeleccionado];

        // Seleccionar artículo correcto
        const articuloCorrecto = articulosSuspendidos[Math.floor(Math.random() * articulosSuspendidos.length)];

        // Generar opciones incorrectas (artículos que NO se suspenden en ese estado)
        const todosLosArticulos = Object.keys(articulosConstitucion);
        const opcionesIncorrectas = [];

        while (opcionesIncorrectas.length < 3) {
            const articuloAleatorio = todosLosArticulos[Math.floor(Math.random() * todosLosArticulos.length)];
            if (!articulosSuspendidos.includes(articuloAleatorio) && !opcionesIncorrectas.includes(articuloAleatorio)) {
                opcionesIncorrectas.push(articuloAleatorio);
            }
        }

        const todasLasOpciones = [articuloCorrecto, ...opcionesIncorrectas];
        const opcionesMezcladas = todasLasOpciones.sort(() => Math.random() - 0.5);

        const nombreEstado = estadoSeleccionado === 'excepcion' ? 'excepción' : 'sitio';

        return {
            pregunta: `¿Qué artículo se suspende en el estado de ${nombreEstado}?`,
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

    let tiposPreguntasConfig = {
        'temaArticulo': { activo: true, frecuencia: 33 },
        'articuloTema': { activo: true, frecuencia: 33 },
        'suspension': { activo: true, frecuencia: 34 }
    };

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const correctAnswersSpan = document.getElementById('correct-answers');
    const startScreen = document.getElementById('start-screen');
    const questionContainer = document.getElementById('question-container');
    const startBtn = document.getElementById('start-btn');

    const iniciarTest = () => {
        const checkboxes = document.querySelectorAll('.question-type-checkbox');
        const validationMessage = document.getElementById('validation-message');
        tiposPreguntasConfig = {};

        checkboxes.forEach(checkbox => {
            const tipo = checkbox.dataset.tipo;
            const frecuenciaInput = document.getElementById(`frecuencia-${tipo}`);

            if (checkbox.checked) {
                tiposPreguntasConfig[tipo] = {
                    activo: true,
                    frecuencia: parseInt(frecuenciaInput.value) || 0
                };
            }
        });

        const tiposActivos = Object.values(tiposPreguntasConfig).filter(t => t.activo);
        if (tiposActivos.length === 0) {
            validationMessage.textContent = 'Debes seleccionar al menos un tipo de pregunta';
            return;
        }

        const totalFrecuencia = tiposActivos.reduce((sum, config) => sum + config.frecuencia, 0);
        if (totalFrecuencia !== 100) {
            validationMessage.textContent = `Los porcentajes deben sumar 100 (actualmente suman ${totalFrecuencia})`;
            return;
        }

        validationMessage.textContent = '';

        const numeroPreguntasInput = document.getElementById('numero-preguntas');
        totalPreguntas = parseInt(numeroPreguntasInput.value) || 15;
        preguntaNumero = 0;
        aciertos = 0;
        articulosDisponibles = Object.keys(articulosConstitucion).slice();
        totalQuestionsSpan.textContent = totalPreguntas;
        correctAnswersSpan.textContent = aciertos;

        startScreen.style.display = 'none';
        questionContainer.style.display = 'block';
        document.querySelector('.controls').style.display = 'flex';
        document.querySelector('.score').style.display = 'block';

        restartBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
        mostrarSiguientePregunta();
    }

    const seleccionarTipoPregunta = () => {
        const tiposActivos = Object.entries(tiposPreguntasConfig)
            .filter(([_, config]) => config.activo);

        if (tiposActivos.length === 0) return null;

        const totalFrecuencia = tiposActivos.reduce((sum, [_, config]) => sum + config.frecuencia, 0);

        let random = Math.random() * totalFrecuencia;

        for (const [tipo, config] of tiposActivos) {
            random -= config.frecuencia;
            if (random <= 0) {
                return tipo;
            }
        }

        return tiposActivos[0][0];
    };

    const mostrarSiguientePregunta = () => {
        if (preguntaNumero >= totalPreguntas) {
            finalizarTest();
            return;
        }

        preguntaNumero++;
        respuestaSeleccionada = null;

        const tipoPregunta = seleccionarTipoPregunta();

        if (tipoPregunta === 'temaArticulo') {
            preguntaActual = generarPreguntaTemaArticulo();
        } else if (tipoPregunta === 'articuloTema') {
            preguntaActual = generarPreguntaArticuloTema();
        } else if (tipoPregunta === 'suspension') {
            preguntaActual = generarPreguntaSuspension();
        }

        if (!preguntaActual) {
            finalizarTest();
            return;
        }

        questionText.textContent = preguntaActual.pregunta;
        currentQuestionSpan.textContent = preguntaNumero;

        optionsContainer.innerHTML = '';
        preguntaActual.opciones.forEach(opcion => {
            const button = document.createElement('div');
            button.className = 'option';

            if (preguntaActual.esArticuloTema) {
                button.textContent = opcion.toString();
            } else {
                button.textContent = `Artículo ${opcion}`;
            }

            button.onclick = () => seleccionarOpcion(opcion, button);
            optionsContainer.appendChild(button);
        });

        nextBtn.disabled = true;
    }

    const seleccionarOpcion = (opcion) => {
        if (respuestaSeleccionada !== null) return;

        respuestaSeleccionada = opcion;
        const opciones = document.querySelectorAll('.option');

        opciones.forEach(opt => {
            opt.onclick = null;

            let valorOpcion;
            if (preguntaActual.esArticuloTema) {
                valorOpcion = opt.textContent;
            } else {
                valorOpcion = opt.textContent.replace('Artículo ', '');
            }

            if (valorOpcion === preguntaActual.respuestaCorrecta) {
                opt.classList.add('correct');
            } else if (valorOpcion === opcion) {
                opt.classList.add('incorrect');
            }
        });

        if (opcion === preguntaActual.respuestaCorrecta) aciertos++;

        correctAnswersSpan.textContent = aciertos;

        nextBtn.disabled = false;
    }

    const finalizarTest = () => {
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

    const volverAlInicio = () => {
        startScreen.style.display = 'block';
        questionContainer.style.display = 'none';
        document.querySelector('.controls').style.display = 'none';
        document.querySelector('.score').style.display = 'none';
    }

    nextBtn.addEventListener('click', mostrarSiguientePregunta);
    restartBtn.addEventListener('click', volverAlInicio);
    startBtn.addEventListener('click', iniciarTest);

    const validarPorcentajes = () => {
        const validationMessage = document.getElementById('validation-message');
        const checkboxes = document.querySelectorAll('.question-type-checkbox');

        let totalFrecuencia = 0;
        let tiposActivos = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const tipo = checkbox.dataset.tipo;
                const frecuenciaInput = document.getElementById(`frecuencia-${tipo}`);
                totalFrecuencia += parseInt(frecuenciaInput.value) || 0;
                tiposActivos++;
            }
        });

        if (tiposActivos === 0) {
            validationMessage.textContent = 'Debes seleccionar al menos un tipo de pregunta';
            validationMessage.style.color = '#f44336';
        } else if (totalFrecuencia !== 100) {
            validationMessage.textContent = `Los porcentajes deben sumar 100 (actualmente suman ${totalFrecuencia})`;
            validationMessage.style.color = '#f44336';
        } else {
            validationMessage.textContent = '✓ Configuración correcta';
            validationMessage.style.color = '#4caf50';
        }
    };

    const checkboxes = document.querySelectorAll('.question-type-checkbox');
    checkboxes.forEach(checkbox => {
        const tipo = checkbox.dataset.tipo;
        const frecuenciaInput = document.getElementById(`frecuencia-${tipo}`);

        checkbox.addEventListener('change', () => {
            frecuenciaInput.disabled = !checkbox.checked;
            if (!checkbox.checked) {
                frecuenciaInput.value = 0;
            }
            validarPorcentajes();
        });

        frecuenciaInput.addEventListener('input', validarPorcentajes);
    });

    validarPorcentajes();

    questionContainer.style.display = 'none';
    document.querySelector('.controls').style.display = 'none';
    document.querySelector('.score').style.display = 'none';
});