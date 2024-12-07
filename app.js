// // Función para manejar el cambio en un select y agregar los inputs dinámicamente
// function agregarInputDinamico(selectId, inputDinamicoId) {
//     const selectElement = document.getElementById(selectId);
//     const inputDinamico = document.getElementById(inputDinamicoId);

//     selectElement.addEventListener("change", () => {
//         // Selecciono la opcion
//         const opcionSeleccionada = selectElement.options[selectElement.selectedIndex];
//         // El input que se crea
//         const inputType = opcionSeleccionada.dataset.inputType;

//         // Limpiar cualquier input existente
//         inputDinamico.innerHTML = "";

//         // Agregar los inputs solo si la opción lo requiere
//         if (inputType) {
//             // Crear los campos
//             const inputText = document.createElement("input");
//             inputText.type = "text";  // Para el primer "X", texto libre
//             const inputNumber = document.createElement("input");
//             inputNumber.type = "number";  // Para el segundo "X", número

//             // Ajustar el texto y los placeholders según el tipo de opción seleccionada
//             if (inputType === "estructuras-redondeadas") {
//                 inputDinamico.innerHTML = "Con presencia de "; 
//                 inputDinamico.appendChild(inputText);
//                 inputDinamico.innerHTML += " estructuras hiperecogénicas redondeadas con dimensiones de "; 
//                 inputDinamico.appendChild(inputNumber);
//             } else if (inputType === "estructuras-irregulares") {
//                 inputDinamico.innerHTML = "Con presencia de "; 
//                 inputDinamico.appendChild(inputText);
//                 inputDinamico.innerHTML += " estructuras hiperecogénicas irregulares con dimensiones de "; 
//                 inputDinamico.appendChild(inputNumber);
//             }
//             inputDinamico.innerHTML += " cm"; 
//         }
//     });
// }

// function agregarDiferenciacionPared(selectId, inputDinamicoId) {
//     seleccionarOpcion(selectId, inputDinamicoId);

//     if (inputType) {
//         const inputNumber = document.createElement("input");

//         if (inputType === "opcion-1") {
//             inputDinamico.innerHTML = "y apariencia hipoecogénica y engrosado con espesor de ";
//             inputDinamico.appendChild(inputNumber);
//         }

//         inputDinamico.innerHTML += " cm";
//     }
// }

// function seleccionarOpcion(selectId, inputDinamicoId) {

//     const selectElement = document.getElementById(selectId);
//     const inputDinamico = document.getElementById(inputDinamicoId);

//     selectElement.addEventListener("change", () => {
//         const opcionSeleccionada = selectElement.options[selectElement.selectedIndex];
//         const inputType = opcionSeleccionada.dataset.inputType;
//     })

//     // Limpiar cualquier input existente
//     inputDinamico.innerHTML = "";
// }



// // Llamar a la función para el primer select
// agregarInputDinamico("urinario-select-opciones", "input-dinamico");

// // Llamar a la función para el colon
// agregarDiferenciacionPared("colon-select-opciones", "input-dinamico");

// // Puedes llamar a la misma función para otros selects si los necesitas
// // agregarInputDinamico("otro-select-id", "otro-input-dinamico-id");



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



// Inicializar los selects con sus respectivas funciones específicas
iniciarSelectDinamico("urinario-select-opciones", "input-dinamico", agregarMaterialEnLuz);
iniciarSelectDinamico("colon-select-opciones", "input-diferenciacion-pared", agregarDiferenciacionPared);
iniciarSelectDinamico("yeyuno-select-paredes", "input-yeyuno-pared", agregarYeyunoPared);

