
console.log("Operadores Aritméticos - Transporte Público de Quito");

let pasajerosSuben = 18;
let pasajerosBajan = 7;

console.log("Total de movimientos de pasajeros:", pasajerosSuben + pasajerosBajan);
console.log("Diferencia de pasajeros:", pasajerosSuben - pasajerosBajan);
console.log("Proyección de pasajeros en 2 recorridos:", pasajerosSuben * 2);
console.log("Promedio de pasajeros por puerta:", pasajerosSuben / 2);
console.log("Pasajeros sobrantes al distribuir en grupos de 2:", pasajerosSuben % 2);

console.log("\nOperadores de Comparación");

console.log("Subieron los mismos que bajaron:", pasajerosSuben == pasajerosBajan);
console.log("Difieren pasajeros que suben y bajan:", pasajerosSuben != pasajerosBajan);
console.log("Subieron más de los que bajaron:", pasajerosSuben > pasajerosBajan);
console.log("Subieron menos de los que bajaron:", pasajerosSuben < pasajerosBajan);
console.log("Subieron al menos la misma cantidad:", pasajerosSuben >= pasajerosBajan);
console.log("Subieron como máximo la misma cantidad:", pasajerosSuben <= pasajerosBajan);

console.log("\nOperadores Lógicos");

let troleEnServicio = true;
let bateriaOperativa = false;

console.log("¿Unidad lista para operar? (AND):", troleEnServicio && bateriaOperativa);
console.log("¿Unidad puede circular con alguna condición operativa? (OR):", troleEnServicio || bateriaOperativa);
console.log("¿Unidad fuera de servicio? (NOT):", !troleEnServicio);
console.log("¿Sistema de batería no operativo? (NOT):", !bateriaOperativa);

console.log("\nOperadores de Asignación");

let unidadesTrolebus = 12;
console.log("Cantidad inicial de trolebuses:", unidadesTrolebus);

unidadesTrolebus += 4;
console.log("Después de incorporar 4 trolebuses (+=):", unidadesTrolebus);

unidadesTrolebus -= 2;
console.log("Después de enviar 2 al mantenimiento (-=):", unidadesTrolebus);

unidadesTrolebus *= 2;
console.log("Después de duplicar la flota (*=):", unidadesTrolebus);

unidadesTrolebus /= 4;
console.log("Después de distribuir en 4 terminales (/=):", unidadesTrolebus);

unidadesTrolebus %= 3;
console.log("Unidades sobrantes al organizar grupos de 3 (%=):", unidadesTrolebus);

console.log("\nOperadores de Incremento y Decremento");

let contadorPasajeros = 18;
console.log("Cantidad inicial de pasajeros:", contadorPasajeros);

contadorPasajeros++;
console.log("Pasajero ingresa en la estación El Recreo (++):", contadorPasajeros);

contadorPasajeros--;
console.log("Pasajero sale en la estación La Magdalena (--):", contadorPasajeros);

console.log("\nOperadores de Concatenación");

let codigoBus = "TROLE-015";
let rutaAsignada = "El Recreo - La Y";

let registroBus = codigoBus + " en la ruta " + rutaAsignada;
console.log("Registro de operación:", registroBus);

console.log("\nOperadores de Comparación Estricta");

let pasajerosRegistrados = 18;
let pasajerosTexto = "18";

console.log("Cantidad estrictamente igual (===):", pasajerosRegistrados === pasajerosTexto);
console.log("Cantidad estrictamente diferente (!==):", pasajerosRegistrados !== pasajerosTexto);

console.log("\nOperadores Ternarios");

let velocidadActual = 45;
let estadoVelocidad = (velocidadActual > 40) ? "Alerta: Velocidad elevada en zona urbana" : "Velocidad adecuada para la ruta";
console.log("Estado de la unidad:", estadoVelocidad);

console.log("\nCálculo de Recaudación por Tarifa ($0.35)");

let tarifa = 0.35;
console.log(`1 pasajero x $0.35 = $${(tarifa * 1).toFixed(2)}`);
console.log(`2 pasajeros x $0.35 = $${(tarifa * 2).toFixed(2)}`);
console.log(`3 pasajeros x $0.35 = $${(tarifa * 3).toFixed(2)}`);
console.log(`4 pasajeros x $0.35 = $${(tarifa * 4).toFixed(2)}`);
console.log(`5 pasajeros x $0.35 = $${(tarifa * 5).toFixed(2)}`);
console.log(`6 pasajeros x $0.35 = $${(tarifa * 6).toFixed(2)}`);
console.log(`7 pasajeros x $0.35 = $${(tarifa * 7).toFixed(2)}`);
console.log(`8 pasajeros x $0.35 = $${(tarifa * 8).toFixed(2)}`);
console.log(`9 pasajeros x $0.35 = $${(tarifa * 9).toFixed(2)}`);
console.log(`10 pasajeros x $0.35 = $${(tarifa * 10).toFixed(2)}`);

console.log("\nDistribución de Pasajeros por Fila (4 asientos)");

let capacidadFila = 4;
console.log(`4 pasajeros / 4 por fila = ${4 / capacidadFila} fila completa`);
console.log(`8 pasajeros / 4 por fila = ${8 / capacidadFila} filas completas`);
console.log(`12 pasajeros / 4 por fila = ${12 / capacidadFila} filas completas`);
console.log(`16 pasajeros / 4 por fila = ${16 / capacidadFila} filas completas`);
console.log(`20 pasajeros / 4 por fila = ${20 / capacidadFila} filas completas`);
console.log(`24 pasajeros / 4 por fila = ${24 / capacidadFila} filas completas`);
console.log(`28 pasajeros / 4 por fila = ${28 / capacidadFila} filas completas`);
console.log(`32 pasajeros / 4 por fila = ${32 / capacidadFila} filas completas`);
console.log(`36 pasajeros / 4 por fila = ${36 / capacidadFila} filas completas`);
console.log(`40 pasajeros / 4 por fila = ${40 / capacidadFila} filas completas`);
