const digitoSecreto1 = '911'
const digitoSecreto2 = '714'

const select1 = document.getElementById('select1')
const select2 = document.getElementById('select2')
const select3 = document.getElementById('select3')
const boton = document.querySelector('#btn')
const mensajeConfirmacion = document.getElementById('confirmacion')


for (let i = 1; i <= 9; i++) {
    const option1 = document.createElement('option');
    option1.value = i;
    option1.text = i;
    select1.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = i;
    option2.text = i;
    select2.appendChild(option2);

    const option3 = document.createElement('option');
    option3.value = i;
    option3.text = i;
    select3.appendChild(option3);
}

boton.addEventListener('click', () => {
    const valor1 = select1.value;
    const valor2 = select2.value;
    const valor3 = select3.value;
    const resultado = valor1 + valor2 + valor3;

    if (resultado == digitoSecreto1) {
        mensajeConfirmacion.innerHTML = 'Contraseña 1 correcta'
    } else if (resultado == digitoSecreto2) {
        mensajeConfirmacion.innerHTML = 'Contraseña 2 correcta'
    } else {
        mensajeConfirmacion.innerHTML = 'Constraseña incorrecta'
    }
})