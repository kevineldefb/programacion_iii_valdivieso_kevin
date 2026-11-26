
console.log("Evaluación de Operación del Trolebús de Quito");

let pasajerosObjetivo = 300;
let pasajerosRegistrados = 270;
let combustibleInicial = 120;
let combustibleGastado = 85;
let conductorHerido = "no";
let unidadAveriada = "no";
let bonificacion = 0;

let porcentajeCumplimiento = (pasajerosRegistrados / pasajerosObjetivo) * 100;
let combustibleRestante = combustibleInicial - combustibleGastado;

console.log("Resultados de la operación:");

if (porcentajeCumplimiento >= 90) {
    console.log("Servicio cumplido satisfactoriamente en la ruta asignada");
} else if (porcentajeCumplimiento >= 70) {
    console.log("Servicio cumplido parcialmente, se requiere mejorar");
} else if (porcentajeCumplimiento >= 50) {
    console.log("Servicio regular, se necesita optimizar la operación");
} else {
    console.log("Servicio deficiente, se requiere revisión operativa");
}

console.log("Evaluación de bonificación por desempeño");

if (porcentajeCumplimiento >= 90 && combustibleRestante >= 30) {
    bonificacion = 50;
    console.log("Bonificación otorgada por buen desempeño de la unidad.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Retorno a la terminal de El Recreo");

if (conductorHerido === "no" && unidadAveriada === "no") {
    console.log("Retorno seguro a la terminal de El Recreo.");
} else if (conductorHerido === "si" && unidadAveriada === "no") {
    console.log("Retorno con precaución, el conductor requiere atención médica.");
} else if (conductorHerido === "no" && unidadAveriada === "si") {
    console.log("Retorno con precaución, la unidad requiere mantenimiento.");
} else {
    console.log("Retorno con precaución, el conductor requiere atención médica y la unidad mantenimiento.");
}

console.log("Resumen del turno de operación");

console.log("Pasajeros Objetivo:", pasajerosObjetivo);
console.log("Pasajeros Registrados:", pasajerosRegistrados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Energía Inicial:", combustibleInicial);
console.log("Energía Consumida:", combustibleGastado);
console.log("Energía Restante:", combustibleRestante);
console.log("Conductor Requiere Atención:", conductorHerido);
console.log("Unidad Averiada:", unidadAveriada);
console.log("Bonificación Otorgada:", bonificacion);
