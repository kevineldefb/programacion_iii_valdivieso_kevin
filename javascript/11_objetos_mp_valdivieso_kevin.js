
let conductor = "Andrés Castillo";
let edad = 38;
let rutaBase = "El Recreo - La Y";
let energia = 100;
let averia = false;

let unidad = {
    conductor: "Andrés Castillo",
    edad: 38,
    rutaBase: "El Recreo - La Y",
    energia: 100,
    averia: false
};

console.log("Información de la unidad del Trolebús:");
console.log("Nombre del conductor: " + unidad.conductor);
console.log("Edad del conductor: " + unidad["edad"]);
console.log("Ruta asignada: " + unidad["rutaBase"]);
console.log("Nivel de batería: " + unidad.energia + "%");
console.log("Estado de la unidad: " + (unidad.averia ? "Fuera de servicio" : "Operativa"));


console.log("Agregar nuevas características a la unidad");

unidad.modelo = "Trolebús eléctrico articulado";
console.log("Modelo de la unidad: " + unidad.modelo);

unidad["capacidadPasajeros"] = 160;
console.log("Capacidad de pasajeros: " + unidad["capacidadPasajeros"]);

console.log("Información completa de la unidad:", unidad);


console.log("Actualizar información de la unidad");

unidad.energia = 75;
console.log("Nuevo nivel de batería: " + unidad.energia + "%");

unidad["averia"] = true;
console.log("Nuevo estado de la unidad: " + (unidad.averia ? "Fuera de servicio" : "Operativa"));

console.log("Información actualizada de la unidad:", unidad);


console.log("Eliminar una propiedad de la unidad");

delete unidad.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada.");

console.log("Información de la unidad después de eliminar la propiedad:", unidad);


console.log("Recorrer las propiedades de la unidad");

for (let propiedad in unidad) {
    console.log(propiedad + ": " + unidad[propiedad]);
}


let inventario = {
    tarjetasElectronicas: 25,
    chalecosReflectivos: 12,
    extintores: 8
};

let total = 0;

for (let objeto in inventario) {
    total += inventario[objeto];
}

console.log("Total de implementos de seguridad y operación: " + total);
