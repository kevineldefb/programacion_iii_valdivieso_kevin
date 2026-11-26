
const energia = document.getElementById("energia");
const dimension = document.getElementById("dimension");
const portal = document.getElementById("portal");

energia.textContent = "Batería de la unidad: 100%";
dimension.textContent = "Ruta: El Recreo - La Y";
portal.textContent = "Estado del recorrido: activado";

// Selección a través del nombre de la clase
const conductor = document.querySelector(".conductor");
conductor.textContent = "Carlos Mendoza (Supervisor)";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando Unidad de Transporte";

const trolebus = document.querySelector("#trolebus");
trolebus.textContent = "Preparando Trolebús para su recorrido";

const estadoUnidad = document.querySelector("#trolebus .estado");
estadoUnidad.textContent = "Listo para iniciar ruta";

// Selección de estaciones y terminales
const estaciones = document.querySelectorAll(".estaciones");
console.log(estaciones);
console.log(estaciones.length);

console.log(estaciones[0].textContent);
console.log(estaciones[1].textContent);
console.log(estaciones[2].textContent);
console.log(estaciones[3].textContent);

for (let i = 0; i < estaciones.length; i++) {
    console.log(estaciones[i].textContent);
}

console.log("Con forEach");
estaciones.forEach(function(estacion) {
    console.log(estacion.textContent);
});

console.log("Con for of");
for (let estacion of estaciones) {
    console.log(estacion.textContent);
}
