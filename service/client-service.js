export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        input.parentElement.querySelector('.input-message-error').innerHTML = "";
    } else {
        input.parentElement.querySelector('.input-message-error').innerHTML = mostarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo no puede estar vacio"
    },
    email: {
        valueMissing: "El campo no puede estar vacio",
        typeMissmatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "El asunto debe contener entre 4 a 25 caracteres"
    },
    message: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "El asunto debe contener entre 4 a 40 caracteres"
    }
};

function mostarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";

    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}