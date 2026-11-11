console.log("Riky y Morty: Funciones en JavaScript");

function abrirPortal() {
    console.log("Portal abierto");
}

abrirPortal();
abrirPortal();  
abrirPortal();
abrirPortal();

function pilotoNave(nombre) {
    console.log("El piloto " + nombre + " está a bordo de la nave.");
}
pilotoNave("Rick"); 
pilotoNave("Morty");


function recargarpistola(energiaActual, recargar) {
    let energiaTotal = energiaActual + recargar;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("La energia de la pistola es: " + energiaTotal);
    return energiaTotal;
}
let energiapistola = 50;  
energiapistola = recargarpistola(energiapistola, 30);
energiapistola = recargarpistola(energiapistola, 40);


console.log("calcular descuentos intedimensionales");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}
let precioProducto = 100;
let descuentoProducto = 20;
let precioConDescuento = calcularDescuento(precioProducto, descuentoProducto);
console.log("El precio con descuento es: " + precioConDescuento);

function evaluarcombustibleExamen(combustible, correctas, totalPreguntas) {
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (combustible < 20) {
        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + "%");
    }
    if (porcentajeCorrectas >= 70) {
        console.log("Examen aprobado con un porcentaje de: " + porcentajeCorrectas + "%");
    } else {
        console.log("Examen reprobado con un porcentaje de: " + porcentajeCorrectas + "%");
    }
}
evaluarcombustibleExamen(15, 8, 10);
evaluarcombustibleExamen(50, 6, 10);

function calcularTotalCristales(cristales) {
    let total = 0;
    for (let i = 0; i < cristales.length; i++) {
        total = total + cristales[i];
    }
    console.log("Total de cristales recolectados: " + total);
    return total;
}
let cristalesMisiones = [10, 25, 15, 30, 20];
let resultadoFinal = calcularTotalCristales(cristalesMisiones);

function contarMisionesExitosas(cristales) {
    let exitosas = 0;

    for (let i = 0; i < cristales.length; i++) {
        if (cristales[i] > 50) {
            exitosas++;
        }
    }

    console.log("Misiones exitosas: " + exitosas);
    return exitosas;
}

let misiones = [10, 60, 75, 30, 80, 45];

contarMisionesExitosas(misiones);