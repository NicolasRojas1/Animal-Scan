// Función genérica para configurar el evento y delegar lógica
function iniciarSelectDinamico(selectId, inputDinamicoId, callback) {
    const selectElement = document.getElementById(selectId);
    const inputDinamico = document.getElementById(inputDinamicoId);

    selectElement.addEventListener("change", () => {
        // Selecciono la opción
        const opcionSeleccionada = selectElement.options[selectElement.selectedIndex];
        const inputType = opcionSeleccionada.dataset.inputType;

        // Limpiar cualquier contenido existente en el contenedor
        inputDinamico.innerHTML = "";

        // Delegar lógica específica a través del callback
        if (callback) {
            callback(inputType, inputDinamico);
        }
    });
}




// Función específica para manejar el input dinámico
function agregarMaterialEnLuz(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    if (inputType === "opcion-1") {
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " estructuras hiperecogénicas redondeadas con dimensiones de ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";

    } else if (inputType === "opcion-2") {
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " estructuras hiperecogénicas irregulares con dimensiones de ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

// Función específica para manejar la diferenciación de pared
function agregarDiferenciacionPared(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";

        inputDinamico.innerHTML = "y apariencia hipoecogénica y engrosado con espesor de ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

// Función para yeyuno diferenciacion de pared
function agregarYeyunoPared(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";

        inputDinamico.innerHTML = " y apariencia hipoecogénica, engrosado con espesor de ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

// Función para yeyuno accidentes
function agregarYeyunoAccidentes(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.innerHTML += " cm conectada a porción yeyunal, con pérdida total de diferenciación entre capas y gas en la luz, ubicada en porción hipogástrica izquierda de yeyuno";
            break;

        case "opcion-2":
            inputDinamico.innerHTML += " cm conectada a porción yeyunal, con pérdida total de diferenciación entre capas y gas en la luz, ubicada en porción mesogástrica izquierda de yeyuno";
            break;

        case "opcion-3":
            inputDinamico.innerHTML += " cm conectada a porción yeyunal, con pérdida total de diferenciación entre capas y gas en la luz, ubicada en porción epigástrica izquierda de yeyuno";
            break;

        case "opcion-4":
            inputDinamico.innerHTML += " cm conectada a porción yeyunal, con pérdida total de diferenciación entre capas y gas en la luz, ubicada en porción hipogástrica derecha de yeyuno";
            break;

        case "opcion-5":
            inputDinamico.innerHTML += " cm conectada a porción yeyunal, con pérdida total de diferenciación entre capas y gas en la luz, ubicada en porción mesogástrica derecha de yeyuno";
            break;

        case "opcion-6":
            inputDinamico.innerHTML += " cm conectada a porción yeyunal, con pérdida total de diferenciación entre capas y gas en la luz, ubicada en porción epigástrica derecha de yeyuno";
            break;
    }
}

// Función para yeyuno accidentes
function agregarYeyunoDilatacion(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación hacia oral  y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, ubicada en porción hipogástrica izquierda de yeyuno.";
            break;

        case "opcion-2":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación  hacia oral y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, ubicada en porción mesogástrica izquierda de yeyuno.";
            break;

        case "opcion-3":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y  oral y sin flujo en aboral, con dimensiones de";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, ubicada en porción epigástrica izquierda de yeyuno.";
            break;

        case "opcion-4":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación hacia oral y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, ubicada en porción hipogástrica derecha de yeyuno.";
            break;

        case "opcion-5":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación hacia oral y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, ubicada en porción mesogástrica derecha de yeyuno.";
            break;

        case "opcion-6":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación  hacia oral y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, ubicada en porción epigástrica derecha de yeyuno.";
            break;
    }
}

function agregarEstomagoDiferenciacion(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.innerHTML = " y apariencia hipoecogénica, engrosado con espesor de ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarEstomagoCuerpo(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += "con dimensiones de ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm, generadora de sombra acústica fuerte.";
    }
}

function agregarDuodenoPared(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarDuodenoAccidente(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, con pérdida total de diferenciación entre capas y gas en la luz en porción hipogástrica.";
            break;

        case "opcion-2":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, con pérdida total de diferenciación entre capas y gas en la luz en porción mesogástrica.";
            break;

        case "opcion-3":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += "  cm, con pérdida total de diferenciación entre capas y gas en la luz en porción epigástrica.";
            break;
    }
}

function agregarDuodenoDilatacion(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += ", ubicada en porción hipogátrica con dimensiones de ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += ", ubicada en porción mesogástrica con dimensiones de ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-3":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += ", ubicada en porción epigátrica con dimensiones de ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarPancrearLesion(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    if (inputType === "opcion-1" ||
        inputType === "opcion-2" ||
        inputType === "opcion-3" ||
        inputType === "opcion-4" ||
        inputType === "opcion-5" ||
        inputType === "opcion-6") {
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarRamaLesion(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    if (inputType === "opcion-1" ||
        inputType === "opcion-2" ||
        inputType === "opcion-3" ||
        inputType === "opcion-4" ||
        inputType === "opcion-5" ||
        inputType === "opcion-6") {
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarBazoLesion(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
        case "opcion-2":
        case "opcion-3":
        case "opcion-4":
        case "opcion-5":
        case "opcion-6":
            inputDinamico.innerHTML += "de bordes regulares y con dimensiones aproximadas de hasta ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-7":
        case "opcion-8":
        case "opcion-9":
            inputDinamico.innerHTML += "y con dimensiones aproximadas de hasta ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, deformando el contorno del órgano, y  presentando leve señal Doppler.";
            break;

        case "opcion-10":
        case "opcion-11":
        case "opcion-12":
            inputDinamico.innerHTML += "de bordes regulares y con dimensiones aproximadas de hasta ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarHigadoLesion(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
        case "opcion-2":
        case "opcion-3":
        case "opcion-4":
        case "opcion-5":
        case "opcion-6":
        case "opcion-7":
        case "opcion-8":
        case "opcion-9":
        case "opcion-10":
        case "opcion-11":
        case "opcion-12":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm y con leve señal doppler presente.";
            break;

        case "opcion-13":
        case "opcion-14":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;

    }
}

function agregarVesiculaPared(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm";
    }
}

function agregarRinonLesion(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4" || inputType === "opcion-5") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarRinonMedula(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm";
    }
}

function agregarRinonPelvis(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm,";
    } else if (inputType === "opcion-5") {
        inputDinamico.innerHTML += " de pelvis renal con material anecogénicos particulado desplazando médula y corteza  hacia cápsula,"
    }
}

function agregarRinonUreter(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm con presencia de material hiperecogénico  sedimentado.";
            break;

        case "opcion-3":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, con estructura  hiperecogénica, redondeada generadora de sombra acústica, con dimensiones de "
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-4":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, con  estructura irregular hiperecogenica generadora de sombra acústica, con dimensiones de ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarUteroMunon(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.innerHTML += " y ecogénica heterogénea, grasa peritoneal reactiva rodeandola y con dimensiones de hasta ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm, y contenido anecogénico particulado dentro de sí."
            break;

    }
}

function agregarUteroLesion(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.innerHTML += "con dimensiones de hasta ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm,";
            break;

        case "opcion-2":
            inputDinamico.innerHTML += "de hasta ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm,";
            break;
    }
}

function agregarUteroMaterial(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4" || inputType === "opcion-5" || inputType === "opcion-6") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputNumber.type = " con distensión de la luz de ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " y grosor de pared de ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarOvarioLesion(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.innerHTML += " dentro del parénquima con dimensiones de hasta ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
            inputDinamico.innerHTML += " dentro del parénquima con dimensiones de ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarProstataLesion(inputType, inputDinamico) {
    const inputText = document.createElement("input");
    inputText.classList.add("input-dynamic-width")
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
        case "opcion-3":
        case "opcion-4":
            inputDinamico.innerHTML += " distribuidas en todo el parénquima, con dimensiones de hasta ";
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarTesticuloLesion(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.innerHTML += " con dimensiones de ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    } else if (inputType === "opcion-5" || inputType === "opcion-6") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.innerHTML += " con dimensiones de hasta ";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarEcotexturaGlandula(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm en polo craneal,";
    } else if (inputType === "opcion-2") {
        const inputText = document.createElement("input");
        inputText.classList.add("input-dynamic-width")
        inputText.type = "text";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " cm en polo caudal,";
    }
}

// ------------------ FUNCION DISPLAY SEXO -------------------
document.getElementById("sexo").addEventListener("change", function () {
    const value = this.value;
    const infoHembra = document.getElementById("informacion-hembra");
    const infoMacho = document.getElementById("informacion-macho");

    // Ocultar divs
    infoMacho.classList.add("hidden");
    infoHembra.classList.add("hidden");

    // Agregar la clase segun la seleccion
    if (value === "macho") {
        infoMacho.classList.remove("hidden");

    } else if (value === "hembra") {
        infoHembra.classList.remove("hidden")
    }
});

// --------------------- FUNCIÓN ESTERILIZADO ----------------------
document.getElementById("estado-reproductivo").addEventListener("change", function () {
    const value = this.value; // Obtener el valor seleccionado
    const esterilizados = document.querySelectorAll(".esterilizado"); // Seleccionar todos los elementos con la clase 'esterilizado'

    esterilizados.forEach(elemento => {
        if (value === "esterilizado") {
            elemento.classList.add("hidden"); // Aplicar clase 'hidden' a cada elemento
        } else {
            elemento.classList.remove("hidden"); // Quitar clase 'hidden' si no es 'esterilizado'
        }
    });
});


// -------------------- FUNCION DISPLAY FELINO  ---------------------
document.getElementById("especie").addEventListener("change", function () {
    const value = this.value;

    // Manejar la visibilidad de la sección Vascular
    const seccionVascular = document.getElementById("vascular");
    if (value === "felino") {
        seccionVascular.classList.add("hidden");
    } else {
        seccionVascular.classList.remove("hidden");
    }

    // Manejar la visibilidad de los elementos con la clase .indice-aorto
    const seccionAorto = document.querySelectorAll(".indice-aorto");
    seccionAorto.forEach(function(element) {
        if (value === "felino") {
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    });
});


//------------------------------- ANCHO DE OPTIONS ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const adjustWidth = () => {
        const elements = document.querySelectorAll(".dynamic-width");

        elements.forEach(el => {
            // Crear el span para medir
            const span = document.createElement("span");
            span.style.visibility = "hidden";
            span.style.whiteSpace = "nowrap";
            span.style.position = "absolute";
            span.style.font = getComputedStyle(el).font; // Fuente igual al elemento

            if (el.tagName === "SELECT") {
                // Medir el texto de la opción seleccionada
                const selectedOption = el.options[el.selectedIndex];
                span.textContent = selectedOption ? selectedOption.text : "";
            }

            // Añadir el span al body para calcular el ancho
            document.body.appendChild(span);

            requestAnimationFrame(() => {
                const newWidth = span.offsetWidth; // Añadir margen de seguridad
                el.style.width = `${newWidth}px`; // Aplicar ancho dinámico
                document.body.removeChild(span); // Eliminar span del DOM
            });
        });
    };

    // Ajuste inicial
    adjustWidth();

    // Reajustar el tamaño al modificar el contenido
    document.addEventListener("input", (e) => {
        if (e.target.matches(".dynamic-width")) {
            adjustWidth();
        }
    });

});

//------------------------ AJUSTAR ANCHOS DE INPUTS ---------------------------
document.addEventListener("DOMContentLoaded", () => {
    const ajustarAnchosInputs = () => {
        const inputs = document.querySelectorAll(".input-dynamic-width");

        inputs.forEach(input => {
            // Crear el span para medición
            const span = document.createElement("span");
            span.style.visibility = "hidden";
            span.style.whiteSpace = "nowrap";
            span.style.position = "absolute";
            span.style.font = getComputedStyle(input).font; // Asegúrate de que la fuente sea la misma
            span.textContent = input.value || input.placeholder || ""; // Medir texto o placeholder

            // Añadir el span al body para medir su ancho
            document.body.appendChild(span);

            // Forzar un redibujo y luego medir el ancho
            requestAnimationFrame(() => {
                const newWidth = span.offsetWidth + 1; // Añadir un margen de 1px

                //console.log(`Calculated width for INPUT: ${newWidth}px`); // Para depuración

                // Establecer el ancho calculado sin restricciones
                input.style.width = `${newWidth}px`;

                // Eliminar el span del DOM después de la medición
                document.body.removeChild(span);
            });
        });
    };

    // Ajuste inicial
    ajustarAnchosInputs();

    // Reajustar el tamaño al modificar el contenido
    document.addEventListener("input", (e) => {
        if (e.target.matches(".input-dynamic-width")) {
            ajustarAnchosInputs();
        }
    });
});


// Inicializar los selects con sus respectivas funciones específicas
iniciarSelectDinamico("urinario-select-opciones", "input-dinamico", agregarMaterialEnLuz);
iniciarSelectDinamico("colon-select-opciones", "input-diferenciacion-pared", agregarDiferenciacionPared);
iniciarSelectDinamico("yeyuno-select-paredes", "input-yeyuno-pared", agregarYeyunoPared);
iniciarSelectDinamico("yeyuno-select-accidentes", "input-yeyuno-accidente", agregarYeyunoAccidentes);
iniciarSelectDinamico("yeyuno-select-dilatacion", "input-yeyuno-dilatacion", agregarYeyunoDilatacion);
iniciarSelectDinamico("estomago-select-diferenciacion", "input-estomago-diferenciacion", agregarEstomagoDiferenciacion);
iniciarSelectDinamico("estomago-select-cuerpo", "input-estomago-cuerpo", agregarEstomagoCuerpo);
iniciarSelectDinamico("duodeno-select-pared", "input-duodeno-pared", agregarDuodenoPared);
iniciarSelectDinamico("duodeno-select-accidentes", "input-duodeno-accidente", agregarDuodenoAccidente);
iniciarSelectDinamico("duodeno-select-dilatacion", "input-duodeno-dilatacion", agregarDuodenoDilatacion);
iniciarSelectDinamico("pancreas-select-lesiones", "input-pancreas-lesion", agregarPancrearLesion);
iniciarSelectDinamico("rama-iz-select-lesiones", "input-rama-iz-lesion", agregarRamaLesion);
iniciarSelectDinamico("rama-select-lesiones", "input-rama-lesion", agregarRamaLesion);
iniciarSelectDinamico("bazo-select-lesiones", "input-bazo-lesion", agregarBazoLesion);
iniciarSelectDinamico("higado-select-lesiones", "input-higado-lesion", agregarHigadoLesion);
iniciarSelectDinamico("vesicula-select-paredes", "input-vesicula-pared", agregarVesiculaPared);
iniciarSelectDinamico("iz-rinon-select-lesiones", "input-iz-rinon-lesion", agregarRinonLesion);
iniciarSelectDinamico("iz-rinon-select-medula", "input-iz-rinon-medula", agregarRinonMedula);
iniciarSelectDinamico("iz-rinon-select-pelvis", "input-iz-rinon-pelvis", agregarRinonPelvis);
iniciarSelectDinamico("der-rinon-select-lesiones", "input-der-rinon-lesion", agregarRinonLesion);
iniciarSelectDinamico("der-rinon-select-medula", "input-der-rinon-medula", agregarRinonMedula);
iniciarSelectDinamico("der-rinon-select-pelvis", "input-der-rinon-pelvis", agregarRinonPelvis);
iniciarSelectDinamico("der-rinon-select-ureter", "input-der-rinon-ureter", agregarRinonUreter);
iniciarSelectDinamico("iz-rinon-select-ureter", "input-iz-rinon-ureter", agregarRinonUreter);
iniciarSelectDinamico("utero-select-munon", "input-utero-munon", agregarUteroMunon);
iniciarSelectDinamico("utero-select-lesiones", "input-utero-lesion", agregarUteroLesion);
iniciarSelectDinamico("utero-select-material", "input-utero-material", agregarUteroMaterial);
iniciarSelectDinamico("ovario-izq-select-lesiones", "input-ovario-izq-lesion", agregarOvarioLesion);
iniciarSelectDinamico("ovario-der-select-lesiones", "input-ovario-der-lesion", agregarOvarioLesion);
iniciarSelectDinamico("prostata-select-lesiones", "input-prostata-lesion", agregarProstataLesion);
iniciarSelectDinamico("testiculo-der-select-lesiones", "input-testiculo-der-lesion", agregarTesticuloLesion);
iniciarSelectDinamico("testiculo-izq-select-lesiones", "input-testiculo-izq-lesion", agregarTesticuloLesion);
iniciarSelectDinamico("glandula-izq-select-ecotextura", "input-glandula-izq-ecotextura", agregarEcotexturaGlandula);
iniciarSelectDinamico("glandula-der-select-ecotextura", "input-glandula-der-ecotextura", agregarEcotexturaGlandula);




