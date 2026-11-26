
console.log("Administración del Transporte Público de Quito: Funciones en JavaScript");


function iniciarRecorridoTrolebus() {
    console.log("Trolebús habilitado. Iniciando recorrido desde la terminal.");
}

iniciarRecorridoTrolebus();
iniciarRecorridoTrolebus();
iniciarRecorridoTrolebus();
iniciarRecorridoTrolebus();


function asignarOperador(nombre) {
    console.log("El operador " + nombre + " ha sido asignado a una unidad de la Ecovía.");
}

asignarOperador("Andrés Castillo");
asignarOperador("María Fernanda López");


function recargarUnidadElectrica(cargaActual, recarga) {
    let cargaTotal = cargaActual + recarga;

    if (cargaTotal > 100) {
        cargaTotal = 100;
    }

    console.log("Carga de la unidad eléctrica actualizada: " + cargaTotal + "%");

    return cargaTotal;
}

let bateriaTrolebus = 35;

bateriaTrolebus = recargarUnidadElectrica(bateriaTrolebus, 25);
bateriaTrolebus = recargarUnidadElectrica(bateriaTrolebus, 50);


console.log("Cálculo de tarifas para pasajeros");

function calcularTarifaEstudiante(tarifa, descuento) {
    let tarifaFinal = tarifa - (tarifa * (descuento / 100));
    return tarifaFinal;
}

let tarifaNormal = 0.35;
let descuentoEstudiante = 50;

let tarifaEstudiante = calcularTarifaEstudiante(tarifaNormal, descuentoEstudiante);

console.log("Tarifa normal: $" + tarifaNormal);
console.log("Tarifa con descuento para estudiantes: $" + tarifaEstudiante.toFixed(2));


function evaluarUnidadTransporte(bateria, pasajeros, capacidad) {
    let porcentajeOcupacion = (pasajeros / capacidad) * 100;

    if (bateria < 20) {
        console.log("Advertencia: La unidad necesita recargar su batería. Nivel actual: " + bateria + "%");
    }

    if (porcentajeOcupacion >= 70) {
        console.log("Unidad con alta demanda. Ocupación: " + porcentajeOcupacion.toFixed(2) + "%");
    } else {
        console.log("Unidad con capacidad disponible. Ocupación: " + porcentajeOcupacion.toFixed(2) + "%");
    }
}

evaluarUnidadTransporte(15, 90, 120);
evaluarUnidadTransporte(80, 40, 120);


let pasajerosPorEstacion = [120, 85, 150, 95, 110];

function sumarPasajerosEstaciones(arregloPasajeros) {
    let total = 0;

    for (let i = 0; i < arregloPasajeros.length; i++) {
        total += arregloPasajeros[i];
    }

    return total;
}

let totalPasajeros = sumarPasajerosEstaciones(pasajerosPorEstacion);

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
