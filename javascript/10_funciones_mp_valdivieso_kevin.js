
console.log("Gestión del Transporte Público de Quito: Funciones en JavaScript");


function despacharTrolebus() {
    console.log("Trolebús habilitado. Iniciando recorrido desde la terminal.");
}

despacharTrolebus();
despacharTrolebus();
despacharTrolebus();
despacharTrolebus();


function asignarConductor(nombre) {
    console.log("El conductor " + nombre + " fue asignado a una unidad de la Ecovía.");
}

asignarConductor("Carlos Mendoza");
asignarConductor("Ana Torres");


function recargarBateria(cargaActual, recarga) {
    let cargaTotal = cargaActual + recarga;

    if (cargaTotal > 100) {
        cargaTotal = 100;
    }

    console.log("Carga de la unidad eléctrica actualizada: " + cargaTotal + "%");

    return cargaTotal;
}

let bateriaTrolebus = 35;

bateriaTrolebus = recargarBateria(bateriaTrolebus, 25);
bateriaTrolebus = recargarBateria(bateriaTrolebus, 50);


console.log("Cálculo de tarifas para pasajeros");

function calcularTarifaReducida(tarifa, descuento) {
    let tarifaFinal = tarifa - (tarifa * (descuento / 100));
    return tarifaFinal;
}

let tarifaNormal = 0.35;
let descuentoEstudiante = 50;

let tarifaEstudiante = calcularTarifaReducida(tarifaNormal, descuentoEstudiante);

console.log("Tarifa normal: $" + tarifaNormal);
console.log("Tarifa para estudiantes: $" + tarifaEstudiante.toFixed(2));


function evaluarEstadoUnidad(bateria, pasajeros, capacidad) {
    let porcentajeOcupacion = (pasajeros / capacidad) * 100;

    if (bateria < 20) {
        console.log("Advertencia: La unidad necesita recargar su batería. Nivel actual: " + bateria + "%");
    }

    if (porcentajeOcupacion >= 70) {
        console.log("Unidad con alta demanda. Ocupación del " + porcentajeOcupacion.toFixed(2) + "%.");
    } else {
        console.log("Unidad con capacidad disponible. Ocupación del " + porcentajeOcupacion.toFixed(2) + "%.");
    }
}

evaluarEstadoUnidad(15, 90, 120);
evaluarEstadoUnidad(80, 40, 120);


let pasajerosPorEstacion = [120, 85, 150, 95, 110];

function calcularTotalPasajeros(arregloPasajeros) {
    let total = 0;

    for (let i = 0; i < arregloPasajeros.length; i++) {
        total += arregloPasajeros[i];
    }

    return total;
}

let totalPasajeros = calcularTotalPasajeros(pasajerosPorEstacion);

console.log("Total de pasajeros registrados en las estaciones: " + totalPasajeros);


let pasajerosPorRecorrido = [45, 80, 35, 95, 65];

function contarRecorridosAltaDemanda(arregloViajes) {
    let viajesExitosos = 0;

    for (let i = 0; i < arregloViajes.length; i++) {
        if (arregloViajes[i] > 50) {
            viajesExitosos++;
        }
    }

    return viajesExitosos;
}

let recorridosExitosos = contarRecorridosAltaDemanda(pasajerosPorRecorrido);

console.log("Cantidad de recorridos con más de 50 pasajeros: " + recorridosExitosos);
