const stickerMax = 10
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const boton = document.getElementById('btn')
let mensajeConfirmacion = document.getElementById('parrafo')


boton.addEventListener('click', () => {
    const sumaStickers = Number(input1.value) + Number(input2.value) + Number(input3.value)
    if (
        sumaStickers > stickerMax) {
        mensajeConfirmacion.innerHTML = ('Excede el número máximo de stickers disponibles')
    } else { mensajeConfirmacion.innerHTML = ('Usted lleva ' + sumaStickers + ' stickers') }
})

