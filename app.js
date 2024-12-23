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
    if (inputType === "opcion-1") {
        const inputText = document.createElement("input");
        inputText.type = "text";
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";

        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " estructuras hiperecogénicas redondeadas con dimensiones de ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm";

    } else if (inputType === "opcion-2") {
        const inputText = document.createElement("input");
        inputText.type = "text";
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";

        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += " estructuras hiperecogénicas irregulares con dimensiones de ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

// Función específica para manejar la diferenciación de pared
function agregarDiferenciacionPared(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";

        inputDinamico.innerHTML = "y apariencia hipoecogénica y engrosado con espesor de ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

// Función para yeyuno diferenciacion de pared
function agregarYeyunoPared(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";

        inputDinamico.innerHTML = " y apariencia hipoecogénica, engrosado con espesor de ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

// Función para yeyuno accidentes
function agregarYeyunoAccidentes(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";
    inputDinamico.appendChild(inputNumber);

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
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación hacia oral  y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, ubicada en porción hipogástrica izquierda de yeyuno.";
            break;

        case "opcion-2":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación  hacia oral y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, ubicada en porción mesogástrica izquierda de yeyuno.";
            break;

        case "opcion-3":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y  oral y sin flujo en aboral, con dimensiones de";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, ubicada en porción epigástrica izquierda de yeyuno.";
            break;

        case "opcion-4":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación hacia oral y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, ubicada en porción hipogástrica derecha de yeyuno.";
            break;

        case "opcion-5":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación hacia oral y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, ubicada en porción mesogástrica derecha de yeyuno.";
            break;

        case "opcion-6":
            inputDinamico.innerHTML = " generadora de sombra acústica fuerte, dentro de la luz ,que genera contraflujo y dilatación  hacia oral y sin flujo en aboral, con dimensiones de  ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, ubicada en porción epigástrica derecha de yeyuno.";
            break;
    }
}

function agregarEstomagoDiferenciacion(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputDinamico.innerHTML = " y apariencia hipoecogénica, engrosado con espesor de ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarEstomagoCuerpo(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";
        const inputText = document.createElement("input");
        inputText.type = "text";
        inputDinamico.appendChild(inputText);
        inputDinamico.innerHTML += "con dimensiones de ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm, generadora de sombra acústica fuerte.";
    }
}

function agregarDuodenoPared(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarDuodenoAccidente(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, con pérdida total de diferenciación entre capas y gas en la luz en porción hipogástrica.";
            break;

        case "opcion-2":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, con pérdida total de diferenciación entre capas y gas en la luz en porción mesogástrica.";
            break;

        case "opcion-3":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += "  cm, con pérdida total de diferenciación entre capas y gas en la luz en porción epigástrica.";
            break;
    }
}

function agregarDuodenoDilatacion(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";
    const inputText = document.createElement("input");
    inputText.type = "text";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += ", ubicada en porción hipogátrica con dimensiones de ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += ", ubicada en porción mesogástrica con dimensiones de ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-3":
            inputDinamico.appendChild(inputText);
            inputDinamico.innerHTML += ", ubicada en porción epigátrica con dimensiones de ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarPancrearLesion(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    if (inputType === "opcion-1" ||
        inputType === "opcion-2" ||
        inputType === "opcion-3" ||
        inputType === "opcion-4" ||
        inputType === "opcion-5" ||
        inputType === "opcion-6") {
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarRamaLesion(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    if (inputType === "opcion-1" ||
        inputType === "opcion-2" ||
        inputType === "opcion-3" ||
        inputType === "opcion-4" ||
        inputType === "opcion-5" ||
        inputType === "opcion-6") {
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarBazoLesion(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    switch (inputType) {

        case "opcion-1":
        case "opcion-2":
        case "opcion-3":
        case "opcion-4":
        case "opcion-5":
        case "opcion-6":
            inputDinamico.innerHTML += "de bordes regulares y con dimensiones aproximadas de hasta ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-7":
        case "opcion-8":
        case "opcion-9":
            inputDinamico.innerHTML += "y con dimensiones aproximadas de hasta ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, deformando el contorno del órgano, y  presentando leve señal Doppler.";
            break;

        case "opcion-10":
        case "opcion-11":
        case "opcion-12":
            inputDinamico.innerHTML += "de bordes regulares y con dimensiones aproximadas de hasta ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarHigadoLesion(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

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
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm y con leve señal doppler presente.";
            break;

        case "opcion-13":
        case "opcion-14":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;

    }
}

function agregarVesiculaPared(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2") {
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm";
    }
}

function agregarRinonLesion(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4" || inputType === "opcion-5") {
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarRinonMedula(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4") {
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm";
    }
}

function agregarRinonPelvis(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4") {
        const inputNumber = document.createElement("input");
        inputNumber.type = "number";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm,";
    } else if (inputType === "opcion-5") {
        inputDinamico.innerHTML += " de pelvis renal con material anecogénicos particulado desplazando médula y corteza  hacia cápsula,"
    }
}

function agregarRinonUreter(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm con presencia de material hiperecogénico  sedimentado.";
            break;

        case "opcion-3":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, con estructura  hiperecogénica, redondeada generadora de sombra acústica, con dimensiones de "
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-4":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, con  estructura irregular hiperecogenica generadora de sombra acústica, con dimensiones de ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarUteroMunon(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.innerHTML += " y ecogénica heterogénea, grasa peritoneal reactiva rodeandola y con dimensiones de hasta ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm, y contenido anecogénico particulado dentro de sí."
            break;

    }
}

function agregarUteroLesion(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.innerHTML += "con dimensiones de hasta ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm,";
            break;

        case "opcion-2":
            inputDinamico.innerHTML += "de hasta ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm,";
            break;
    }
}

function agregarUteroMaterial(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4" || inputType === "opcion-5" || inputType === "opcion-6") {
        const inputNumber = document.createElement("input");
        inputNumber.type = " con distensión de la luz de ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " y grosor de pared de ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarOvarioLesion(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.innerHTML += " dentro del parénquima con dimensiones de hasta ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
            inputDinamico.innerHTML += " dentro del parénquima con dimensiones de ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarProstataLesion(inputType, inputDinamico) {
    const inputNumber = document.createElement("input");
    inputNumber.type = "number";

    switch (inputType) {

        case "opcion-1":
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;

        case "opcion-2":
        case "opcion-3":
        case "opcion-4":
            inputDinamico.innerHTML += " distribuidas en todo el parénquima, con dimensiones de hasta ";
            inputDinamico.appendChild(inputNumber);
            inputDinamico.innerHTML += " cm.";
            break;
    }
}

function agregarTesticuloLesion(inputType, inputDinamico) {
    if (inputType === "opcion-1" || inputType === "opcion-2" || inputType === "opcion-3" || inputType === "opcion-4") {
        const inputNumber = document.createElement("input");
        inputDinamico.innerHTML += " con dimensiones de ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    } else if (inputType === "opcion-5" || inputType === "opcion-6") {
        const inputNumber = document.createElement("input");
        inputDinamico.innerHTML += " con dimensiones de hasta ";
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm.";
    }
}

function agregarEcotexturaGlandula(inputType, inputDinamico) {
    if (inputType === "opcion-1") {
        const inputNumber = document.createElement("input");
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm en polo craneal,";
    } else if (inputType === "opcion-2") {
        const inputNumber = document.createElement("input");
        inputDinamico.appendChild(inputNumber);
        inputDinamico.innerHTML += " cm en polo caudal,";
    }
}

// ------------------ FUNCION DISPLAY -------------------
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

// // Generando PDF
// document.getElementById('download').addEventListener('click', () => {
//     const element = document.querySelector('.contenedor');
//     const options = {
//         margin: 0.5,
//         filename: 'contenido-completo.pdf',
//         html2canvas: { scale: 4, scrollX: 0, scrollY: 0 }, // Ajuste de resolución y scroll
//         jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' } // Tamaño A4 fijo
//     };
//     html2pdf().set(options).from(element).save();

// });

function prepararHTMLParaPDF() {
    const originalContent = document.querySelector('.contenedor').cloneNode(true);

    // Reemplazar select por su valor
    const selects = originalContent.querySelectorAll("select");
    selects.forEach(select => {
        const selectedOption = select.options[select.selectedIndex]?.text || "sin seleccionar";
        console.log(selectedOption);

        const span = document.createElement("span");
        span.textContent = selectedOption;
        select.replaceWith(span);
    });

    // Reemplazar input de tipo número por su valor
    const inputs = originalContent.querySelectorAll("input[type='number']");
    inputs.forEach(input => {
        const value = input.value || "sin valor";
        const span = document.createElement("span");
        span.textContent = `${value}`;
        input.replaceWith(span);
    });

    // Imprimir en consola el contenido para depuración
    console.log(originalContent);

        // Asegúrate de aplicar el CSS directamente en el HTML
        const style = document.createElement("style");
        style.textContent = `
            .seccion {
                page-break-before: always;
            }
            .contenedor {
                page-break-inside: avoid;
            }
            p {
                page-break-inside: avoid;
            }
            table {
                page-break-after: always;
            }
            img {
                page-break-inside: avoid;
            }
        `;
        document.head.appendChild(style);
    
        return originalContent;
}

function esperarRecursos(callback) {
    const images = document.querySelectorAll('img');
    const promises = Array.from(images).map(img => {
        return new Promise(resolve => {
            if (img.complete) resolve();
            else img.onload = img.onerror = resolve;
        });
    });

    Promise.all(promises).then(callback);
}

function generarPDF() {
    const element = prepararHTMLParaPDF(); // Llama a la función antes de generar el PDF
    const options = {
        margin: [10, 10, 10, 10], // Márgenes
        filename: 'reporte_completo.pdf', // Nombre del archivo
        html2canvas: {
            scale: 3, // Mejorar calidad
            useCORS: true, // Usar CORS para fuentes externas y recursos
            logging: true, // Habilitar logs para depuración
            scrollX: 0, // Evitar desplazamiento horizontal
            scrollY: 0 // Evitar desplazamiento vertical
        },
        jsPDF: {
            unit: 'mm', // Unidad de medida
            format: 'a4', // Formato de página
            orientation: 'portrait', // Orientación vertical
            compress: true, // Comprimir el PDF generado
            autoPaging: true, // Activar el auto-paginado
            pageBreak: true // Configurar saltos de página automáticos
        }
    };

    html2pdf().from(element).set(options).save();
}


function generarPDFConRecursos() {
    esperarRecursos(() => {
        generarPDF();
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const botonGenerarPDF = document.getElementById('generar-pdf');
    botonGenerarPDF.addEventListener('click', generarPDF);
});


function ajustarAnchoSelect(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    
    // Crear un elemento invisible que contiene el texto de la opción seleccionada
    const tempSpan = document.createElement('span');
    tempSpan.style.position = 'absolute';
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.whiteSpace = 'nowrap'; // Evitar el salto de línea
    tempSpan.textContent = selectedOption.textContent;
    
    // Agregar el span al body para medir su ancho
    document.body.appendChild(tempSpan);
    
    // Obtener el ancho del texto de la opción seleccionada
    const optionWidth = tempSpan.offsetWidth;
  
    // Eliminar el span temporal del DOM
    document.body.removeChild(tempSpan);
  
    // Establecer el ancho del select en base al ancho de la opción seleccionada
    selectElement.style.width = `${Math.max(optionWidth + 20, 150)}px`; // Ajusta el ancho con algo de margen
  }
  
  // Aplica la función a todos los selects con la clase 'ajustar-ancho'
  document.querySelectorAll('.ajustar-ancho').forEach(function(selectElement) {
    // Llama a la función cuando se cambie la opción seleccionada
    selectElement.addEventListener('change', function() {
      ajustarAnchoSelect(this);
    });
  
    // Inicializa el tamaño cuando se carga la página
    ajustarAnchoSelect(selectElement);
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