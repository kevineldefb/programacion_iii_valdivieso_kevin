
console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Centro de Control del Transporte de Quito";

const estado = document.getElementById("estado");
const boton = document.getElementById("botonPortal");

boton.addEventListener("click", function() {
    console.log("Activando recorrido de la unidad");
    estado.textContent = "¡Unidad en circulación!";
    console.log("Estado de la ruta actualizado");
    alert("La unidad ha iniciado su recorrido correctamente");
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");

botonMensaje.addEventListener("click", function() {
    mensaje.textContent = "Unidad lista para iniciar el recorrido";
});

let viajes = 0;
const contador = document.getElementById("contador");
const nuevoViaje = document.getElementById("nuevoViaje");

nuevoViaje.addEventListener("click", function() {
    viajes += 1;
    contador.textContent = viajes;
});
