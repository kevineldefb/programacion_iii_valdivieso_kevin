
console.log("Control de despacho de unidades del Trolebús");

let unidad = 1;

while (unidad <= 5) {
    console.log("TROLE-0" + unidad + " salió de la terminal El Recreo.");
    unidad++;
}

console.log("Todas las unidades programadas han salido de la terminal.");


console.log("Preparación para la apertura de una estación del Metro de Quito");

let i = 10;

while (i >= 0) {
    if (i === 0) {
        console.log("¡Estación Quitumbe habilitada para recibir pasajeros!");
    } else {
        console.log("La estación abrirá al público en " + i + " segundos.");
    }
    i--;
}


console.log("Verificación de carga de unidades eléctricas");

let bateria = 35;
let recarga = 15;
let totalRecarga = 0;

while (bateria < 100) {
    bateria += recarga;
    totalRecarga += recarga;

    if (bateria > 100) {
        bateria = 100;
    }

    console.log("Unidad eléctrica cargando. Batería disponible: " + bateria + "%");
}

console.log("La unidad está lista para operar. Recarga acumulada: " + totalRecarga + "%");


console.log("Control de recorridos de una unidad alimentadora");

let combustible = 100;
let consumo = 20;
let viajes = 0;

while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;

    console.log("Recorrido número " + viajes + " finalizado.");
    console.log("Combustible disponible: " + combustible + "%");

    if (combustible <= 40 && combustible > 0) {
        console.log("Alerta: La unidad debe regresar a la estación de abastecimiento.");
    }
}

console.log("La unidad debe abastecerse antes de realizar otro recorrido.");
console.log("Recorridos completados durante el turno: " + viajes);


console.log("Control de energía de una unidad del Trolebús");

let energiaUnidad = 60;

do {
    console.log("TROLE-015 circulando por la ruta asignada.");
    console.log("Nivel de batería: " + energiaUnidad + "%");

    energiaUnidad -= 20;

} while (energiaUnidad > 0);

console.log("La unidad finalizó su turno y debe conectarse al sistema de carga.");


console.log("Plan de ahorro para ampliar la flota de transporte de Quito");

let ahorro = 100;
let meta = 1000;
let ahorroMensual = 150;
let meses = 0;

do {
    ahorro += ahorroMensual;
    meses++;

    console.log("Mes " + meses + ": Presupuesto acumulado de $" + ahorro);

} while (ahorro < meta);

console.log("Presupuesto alcanzado en " + meses + " meses.");
console.log("La empresa cuenta con fondos suficientes para adquirir una nueva unidad de transporte.");
