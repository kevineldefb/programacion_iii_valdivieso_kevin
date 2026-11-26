let dimension = 4;
switch (dimension) {
    case 1:
        console.log("Estás en la dimensión C-137");
        break;
    case 2:
        console.log("Estás en la dimensión C-140");
        break;
    case 3:
        console.log("Estás en la dimensión C-500");
        break;
    case 4:
        console.log("Dimension Kevin Valdivieso");
        break;  
    default:
        console.log("Estás en una dimensión desconocida");
}

let personaje = "Rick";
switch (personaje) {
    case "Rick":
    case "Morty":
        console.log("Hola Morty");
        break;
    case "Summer":
        console.log("Hola Summer");
        break;
    default:
        console.log("Personaje desconocido");
}

let energia = 50;
switch (true) {
    case energia > 0 && energia <= 25:
        console.log("Nivel de energía bajo");
        break;
    case energia > 25 && energia <= 50:
        console.log("Nivel de energía medio");
        break;
    case energia > 50 && energia <= 75:
        console.log("Nivel de energía alto");
        break;
    case energia > 75 && energia <= 100:
        console.log("Nivel de energía máximo");
        break;
    default:
        console.log("Nivel de energía desconocido");
}

console.log("Calculadora");
let numero1 = 10;
let numero2 = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log("Resultado de la multiplicación:", resultado);
        break;
    case "division":
        resultado = numero1 / numero2;
        console.log("Resultado de la división:", resultado);
        break;
    default:
        console.log("Operación desconocida");
}

if (resultado !== undefined) {
    console.log("El resultado de la operación es:",operacion, ":", resultado);
}