
console.log("Ciclo For - Control de Unidades de Transporte");

for (let i = 1; i <= 5; i++) {
    console.log("Unidad del Trolebús número:", i);
}

console.log("Fin del ciclo For");


console.log("Cuenta regresiva para la salida de una unidad del Trolebús");

for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡La unidad sale de la terminal El Recreo!");
    } else {
        console.log("Faltan " + i + " segundos para la salida de la unidad");
    }
}


console.log("Nivel de batería de una unidad eléctrica");

let energia = 50;

for (let i = 0; i <= 100; i += 10) {
    if (energia + i <= 100) {
        console.log("Nivel de carga actual: " + (energia + i) + "%");
    }
}


let consumoPorRuta = 10;
let totalConsumido = 0;

for (let viaje = 1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorRuta;
    console.log("Recorrido número " + viaje);
    console.log("Energía consumida: " + totalConsumido + " unidades");
}

console.log("Total de energía consumida: " + totalConsumido + " unidades");


console.log("Promedio de pasajeros transportados por semana");

let totalPasajeros = 0;
let dias = 7;

for (let dia = 1; dia <= dias; dia++) {
    let pasajeros = dia * 50 + 50;
    totalPasajeros += pasajeros;
    console.log("Día " + dia + ": " + pasajeros + " pasajeros transportados");
}

console.log("Total de pasajeros transportados: " + totalPasajeros);
console.log("Promedio de pasajeros por día: " + (totalPasajeros / dias).toFixed(2));


console.log("Unidades del Trolebús en Mantenimiento o Servicio");

let enServicio = 0;
let enTaller = 0;

for (let unidad = 1; unidad <= 10; unidad++) {
    if (unidad % 2 === 0) {
        console.log("Unidad TROLE-" + unidad + " está en mantenimiento");
        enTaller++;
    } else {
        console.log("Unidad TROLE-" + unidad + " está en servicio");
        enServicio++;
    }
}

console.log("Total de unidades en servicio: " + enServicio);
console.log("Total de unidades en mantenimiento: " + enTaller);


console.log("Recaudación de Pasajes del Transporte Público");

let pasajesRecolectados = [120, 180, 150, 200, 90, 220, 160];
let total = 0;
let viajesExitosos = 0;

for (let i = 0; i < pasajesRecolectados.length; i++) {
    total += pasajesRecolectados[i];

    if (pasajesRecolectados[i] >= 150) {
        viajesExitosos++;
    }

    console.log("Día " + (i + 1) + ": " + pasajesRecolectados[i] + " pasajeros registrados");
}

console.log("Total de pasajeros registrados: " + total);
console.log("Número de días con alta demanda: " + viajesExitosos);


console.log("Recorrer Unidades con for ... of");

const flota = ["TROLE-015", "TROLE-020", "ECO-101", "ECO-102", "METRO-001"];

for (let unidad of flota) {
    console.log("Unidad de transporte: " + unidad);
}


let bus = {
    codigo: "TROLE-015",
    bateria: 100,
    velocidad: 40,
    personal: ["Carlos Mendoza", "Ana Torres", "Luis Paredes"]
};

console.log("Recorrer propiedades de un objeto con for ... in");

for (let propiedad in bus) {
    console.log(propiedad + ": " + bus[propiedad]);

    if (propiedad === "personal") {
        console.log("Personal asignado a la unidad:");

        for (let miembro of bus[propiedad]) {
            console.log("- " + miembro);
        }
    }
}

for (let operador of bus.personal) {
    console.log("Operador de transporte: " + operador);
}


let rutas = [
    { nombre: "Trolebús El Recreo - La Y", pasajes: 180, meta: 200, operador: "Carlos Mendoza" },
    { nombre: "Ecovía Río Coca - Playón de La Marín", pasajes: 160, meta: 200, operador: "Ana Torres" },
    { nombre: "Metro Quitumbe - El Labrador", pasajes: 195, meta: 200, operador: "Luis Paredes" }
];

let exitosas = 0;

for (let ruta of rutas) {
    let porcentaje = (ruta.pasajes / ruta.meta) * 100;

    console.log(ruta.nombre + " operada por " + ruta.operador + " con un " + porcentaje.toFixed(2) + "% de cumplimiento");

    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(ruta.nombre + " no alcanzó la meta de pasajeros transportados.");
    }
}

console.log("Número de rutas con cumplimiento exitoso: " + exitosas);
