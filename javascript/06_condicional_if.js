const prompt = require('prompt-sync')({ sigint: true });
console.log('condicional if');
let energia = Number(prompt('rick, ¿cuánta energía tienes?'));
console.log('condicional simple if');
if (energia > 0) {
    console.log(
        'rick, tiene energía suficiente para continuar la aventura');
}

console.log('condicional if else dos caminos');
let combustible = Number(prompt('rick, ¿cuánto combustible tienes?'));
if (combustible > 0) {
    console.log('rick, tiene combustible suficiente para continuar la aventura');
} else {
    console.log('rick, no tiene combustible suficiente para continuar la aventura');
}

console.log('condicional if else if multiples caminos');
let dimension = prompt('rick, ¿en qué dimensión estás?');
if (dimension === 'c-137') {
    console.log('rick, estás en la dimensión correcta para continuar la aventura');
} else if (dimension === 'c-140') {
    console.log('rick, estás en la dimensión incorrecta, pero puedes continuar la aventura');
} else {
    console.log('rick, estás en una dimensión desconocida, no puedes continuar la aventura');
}