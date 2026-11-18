const energia = document.getElementById("energia");
const dimension = document.getElementById("dimension");
const portal = document.getElementById("portal");

energia.textContent = "Energía: 100";
dimension.textContent = "Dimensión: C-137";
portal.textContent ="Portal: Activado";

// Selección a través del nombre de la clase
const personaje = document.querySelector(".personaje");
personaje.textContent="Rick C-137";

const h2Objeto = document.querySelector(".h2");
h2Objeto.textContent="Preparando nave";

const universo = document.querySelector("#universo");
universo.textContent="Preparando Universo";

const estadoMorty = document.querySelector("#morty .estado");
estadoMorty.textContent="Preparado para viajar";