console.log("Condicional if");
let energia = 50;
console.log("Condicional simple if");
if (energia >= 0) {
    console.log("Tienes suficiente energía");
}
console.log("Condicional if-else dos caminos");
let combustible = 400;
if (combustible >= 0) {
    console.log("Tienes suficiente combustible");
} else {
    console.log("No tienes suficiente combustible");
}
console.log("Condicional if-else If multiples caminos");
let dimension = "C-137";
if (dimension === "C-137") {
    console.log("Estás en la dimensión original");
} else if (dimension === "C-140") {
    console.log("Estás en la dimensión alternativa");
} else {
    console.log("Estás en la dimensión desconocida");
}

console.log("Condicional If anidado");
let energia2 = 50;
let combustible2 = 400;
if (energia2 >= 0) {
    if (combustible2 >= 0) {
        console.log("Tienes suficiente energía y combustible");
    } else {
        console.log("Tienes suficiente energía pero no suficiente combustible");
    }
}

console.log("Condicional If con Operadores Lógicos");
let energia3 = 50;
let combustible3 = 400;

if (energia3 > 0 && combustible3 > 0) {
    console.log("Tienes suficiente energía y combustible");
} else {
    console.log("No tienes suficiente energía o combustible");
}
console.log("Control de viajes interdimensionales");
let combustible4 = 400;
let energia4 = 50;
let rick_disponible = "no";
let summer_disponible = "no";
let nave_averiada = "no";

if (
    combustible4 > 0 &&
    energia4 > 0 &&         
(rick_disponible === "si" ||
summer_disponible === "si") &&
!(nave_averiada === "si"))
{
    console.log("Viaje Autorizado");
} else {
    if (combustible4 <50)
    {
        console.log("No tienes suficiente combustible");
    }
    if (energia4 < 50)
    {
        console.log("No tienes suficiente energía");
    }
    if (rick_disponible === "no")
    {
        console.log("No esta rick disponible");
    }
    if (summer_disponible === "no")
    {
        console.log("No esta summer disponible");
    }
    if (nave_averiada === "si")
    {
        console.log("La nave esta averiada");
    }
    if (rick_disponible === "no" && summer_disponible === "no")
    {
        console.log("No hay tripulación disponible");
    }
}

console.log("Mision Interdimensional");
let cristalesObjetivos = 200;
let cristalesRecolectados = 150;
let combustibleInicial = 1000;
let combustibleConsumido = 850;
let mortyHerido = "si";
let naveAveriada = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (cristalesRecolectados / cristalesObjetivos) * 100;
let combustibleRestante = combustibleInicial - combustibleConsumido;
console.log("RESULTADOS DE LA MISION: ");
if (porcentajeCumplimiento >= 90){
    console.log("Misio Cumplida con exito");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90){
    console.log("Mision Cumplida parcialmente");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70){
    console.log("Mision Regular, se requiere mejorar");
} else {
    console.log("Mision Fallida, peligro de Extincion");
}

console.log("Evaluacion de bonificacion por desempeño");
if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200){
    bonificacion = 1000;
    console.log("Bonificacion por desempeño: ", bonificacion);
} else {
    console.log("No hay bonificacion por desempeño");
}

console.log("Regreso seguro a la dimension original");
if (mortyHerido === "no" && naveAveriada === "no"){
    console.log("Regreso seguro a la dimension original");
} else if (mortyHerido === "si" && naveAveriada === "no"){
    console.log("Regreso con heridos a la dimension original");
} else if (mortyHerido === "no" && naveAveriada === "si"){
    console.log("Regreso con nave averiada a la dimension original");
} else {
    console.log("Regreso con heridos y nave averiada a la dimension original");
}

console.log("Evaluacion de la mision");
console.log("Cristales objetivos:", cristalesObjetivos);
console.log("Cristales recolectados:", cristalesRecolectados);
console.log("Porcentaje de cumplimiento:", porcentajeCumplimiento + "%");
console.log("Combustible inicial:", combustibleInicial);
console.log("Combustible consumido:", combustibleConsumido);
console.log("Combustible restante:", combustibleRestante);
console.log("Morty herido:", mortyHerido);
console.log("Nave averiada:", naveAveriada);
console.log("Bonificacion por desempeño:", bonificacion);