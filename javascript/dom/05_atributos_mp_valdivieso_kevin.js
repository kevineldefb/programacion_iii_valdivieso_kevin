
const unidad = document.getElementById("unidad");
const cambiar = document.getElementById("cambiar");
const verRuta = document.getElementById("verRuta");
const ruta = document.getElementById("ruta");

cambiar.addEventListener("click", function() {
    if (unidad.getAttribute("title") == "Trolebús de Quito") {
        unidad.setAttribute("src", "bus_alimentador_quito.jpeg");
        unidad.setAttribute("title", "Bus Alimentador de Quito");
        unidad.dataset.ruta = "Terminal Quitumbe - Barrio Quitumbe";
    } else {
        unidad.setAttribute("src", "trolebus_quito.jpeg");
        unidad.setAttribute("title", "Trolebús de Quito");
        unidad.dataset.ruta = "El Recreo - La Y";
    }
});

verRuta.addEventListener("click", function() {
    ruta.textContent = "Ruta asignada: " + unidad.dataset.ruta;
});

const despacho = document.getElementById("despacho");
const activarDespacho = document.getElementById("activarDespacho");

activarDespacho.addEventListener("click", function() {
    if (despacho.textContent == "Despacho del Trolebús Inactivo") {
        despacho.style.backgroundColor = "green";
        despacho.style.color = "white";
        despacho.textContent = "Despacho del Trolebús Activado";
    } else {
        despacho.style.backgroundColor = "red";
        despacho.style.color = "white";
        despacho.textContent = "Despacho del Trolebús Inactivo";
    }
});
