console.log('Ciclo For');
for (let i = 0; i < 5; i++) {
    console.log('Iteración', i);
}

console.log('Cuenta regresiva después de la nave de Morty');
for (let i = 10; i >= 0; i--) {
    console.log('Faltan ' + i + ' segundos para el despegue');
}

console.log('Cuenta regresiva despegue de la nave de Morty con mensaje final');
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log('¡Despegue!');
    } else {
        console.log('Faltan ' + i + ' segundos para el despegue');
    }
}

console.log('Nivel de energía de Rick');
let energia = 50;
for (let i = 0; i <= 100; i+= 10) {
    if (energia >= i) {
        console.log('Nivel de energía: ' + i + "%");
    }
}

const consumoPorViaje = 10;
let totalConsumido = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorViaje;
    console.log('Viaje ' + viaje);
    console.log('Total consumido hasta ahora: ' + totalConsumido + ' unidades de combustible.');
}
console.log('Total consumido: ' + totalConsumido + ' unidades.');

console.log('Promedio de los cristales');
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia *5+5;
    totalCristales += cristales;
    console.log('Día ' + dia + ': ' + cristales + ' cristales recolectados.');
}
console.log('Total de cristales recolectados: ' + totalCristales);
console.log('Promedio de cristales por día: ' + (totalCristales / dias).toFixed(2));

console.log('Dimensiones Peligrosas');
let seguras = 0;
let peligrosas = 0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log('Dimensión ' + dimension + ' es peligrosa.');
        peligrosas++;
    } else {
        console.log('Dimensión ' + dimension + ' es segura.');
        seguras++;
    }
}

console.log('Recolección de cristales de Morty');
let cristales = [35,60,45,80,70,90,55];
let total = 0;
let viajesExitosos = 0;
for (let i = 0; i < cristales.length; i++) {
    total += cristales[i];
    console.log('Viaje ' + (i + 1) + ': ' + cristales[i] + ' cristales recolectados.');
    if (cristales[i] >= 50) {
        viajesExitosos++;
    }
    else {
        console.log('Viaje ' + (i + 1) + ' no fue exitoso, se recolectaron menos de 50 cristales.');
    }
}
console.log('Total de cristales recolectados: ' + total);
console.log('Viajes exitosos: ' + viajesExitosos);
for (let cristal of cristales) {
    if (cristal < 50) {
        console.log('Se recolectaron menos de 50 cristales en un viaje');
    }
}
console.log('Recorrer personajes con for...of');
const personajes = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];
for (const personaje of personajes) {
    console.log('Personaje: ' + personaje);
}

let nave ={
    nombre: 'Nave de Rick',
    combustible: 100,
    velocidad: 500,
    tripulantes: ['Rick', 'Morty', 'Summer'],
};
console.log('Recorrer Propiedad de la Nave con for...in');
for (let propiedad in nave) {
    console.log(propiedad + ': ' + nave[propiedad]);
    if (propiedad === 'tripulantes') {
        console.log('Tripulantes de la nave:');
        for (let tripulante of nave[propiedad]) {
            console.log('- ' + tripulante);
        }
    }
}

let misiones = [
    { nombre: 'Misión 1', cristales: 90, meta: 100, personaje: "Rick" },
    { nombre: 'Misión 2', cristales: 45, meta: 50, personaje: "Morty" },
    { nombre: 'Misión 3', cristales: 70, meta: 80, personaje: "Summer" },
];

let exitosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + ' completada por' + mision.personaje + ', con un ' + porcentaje.toFixed(2) + '%');
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(mision.nombre + ' no fue exitosa, se recolectaron menos del 90% de los cristales.');
    }
}
console.log('Número de misiones exitosas: ' + exitosas);

console.log('Uso de break y continue en un ciclo for');
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log('Se encontró el número 5, se detiene el ciclo.');
        break;
    }
    if (i % 2 === 0) {
        console.log('Número par encontrado: ' + i + ', se omite este número.');
        continue;
    }
    console.log('Número impar: ' + i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log('Se encontró el número 7, se detiene el ciclo.');
        break;
    }
    if (i % 2 === 0) {
        console.log('Número par encontrado: ' + i + ', se omite este número.');
        continue;
    }
    console.log('Número impar: ' + i);
}