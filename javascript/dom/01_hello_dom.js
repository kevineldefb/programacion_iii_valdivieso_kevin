const estado = document.getElementById("estado");
const boton = document.getElementById("botonPortal");
const botonDesactivar = document.getElementById("botonDesactivar");

boton.addEventListener("click", function(){
    console.log("Ejecutando click");
    estado.textContent = "¡Portal Activado!";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de activación del Portal Terminado");
});

botonDesactivar.addEventListener("click", function(){
    console.log("Ejecutando click para desactivar");
    estado.textContent = "¡Portal Desactivado!";
    console.log("Texto cambiado en el elemento estado");
    alert("El portal ha sido desactivado");
});