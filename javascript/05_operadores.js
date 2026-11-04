console.log('Operadores Aritméticos');
let a = 10;
let b = 5;

console.log('Suma:', a + b);
console.log('Resta:', a - b);
console.log('Multiplicación:', a * b);
console.log('División:', a / b);
console.log('Módulo:', a % b);

console.log('Operadores de Comparación');
console.log('a es igual a b:', a == b);
console.log('a es diferente de b:', a != b);
console.log('a es mayor que b:', a > b);
console.log('a es menor que b:', a < b);
console.log('a es mayor o igual que b:', a >= b);
console.log('a es menor o igual que b:', a <= b);

console.log('Operadores Lógicos');
let x = true;
let y = false;

console.log('x AND y:', x && y);
console.log('x OR y:', x || y);
console.log('NOT x:', !x);

console.log('Operadores de Asignación');
let c = 10;
console.log('Valor inicial de c:', c);

c += 5; // c = c + 5
console.log('Después de c += 5:', c);
c -= 3; // c = c - 3
console.log('Después de c -= 3:', c);
c *= 2; // c = c * 2
console.log('Después de c *= 2:', c);
c /= 4; // c = c / 4
console.log('Después de c /= 4:', c);
c %= 3; // c = c % 3
console.log('Después de c %= 3:', c);
console.log('Operadores de Incremento y Decremento');
let d = 5;
console.log('Valor inicial de d:', d);
d++; // Incremento
console.log('Después de d++:', d);
d--; // Decremento
console.log('Después de d--:', d);

console.log('Operadores de Concatenación');
let nombre = 'Rick';
let apellido = 'Sanchez';
let nombreCompleto = nombre + ' ' + apellido;
console.log('Nombre completo:', nombreCompleto);

console.log('Operadores de comparación estricta');
let e = 10;
let f = '10';

console.log('e es estrictamente igual a f:', e === f);
console.log('e es estrictamente diferente de f:', e !== f);

console.log('Operadores Ternarios');
let edad = 20;
let mensaje = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje);