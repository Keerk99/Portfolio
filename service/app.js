import { valida } from "./client-service.js";

const inputs = document.querySelectorAll('input');
const textarea = document.querySelectorAll('textarea');

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
});

textarea.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
});