
let unidades = ["Trolebús", "Ecovía", "Metro de Quito", "Bus Alimentador", "Ruta El Recreo - La Y", "Ruta Río Coca - Playón de La Marín"];

console.log("Elemento 0:", unidades[0]);
console.log("Elemento 2:", unidades[2]);
console.log("Elemento 5:", unidades[5]);
console.log("Elemento 4:", unidades[4]);
console.log("Tamaño del arreglo:", unidades.length);
console.log("Sistemas y rutas de transporte:", unidades);


console.log("Agregar rutas y unidades al arreglo con Push");

unidades.push("Ruta Quitumbe - El Labrador");
console.log("Sistemas y rutas de transporte:", unidades);


unidades.unshift("Terminal Quitumbe");
console.log("Sistemas y rutas de transporte:", unidades);


console.log("Modificar elementos del arreglo");

unidades[0] = "Terminal El Recreo";
console.log("Sistemas y rutas de transporte:", unidades);


console.log("Eliminar el último elemento del arreglo:");

unidades.pop();
console.log("Sistemas y rutas de transporte:", unidades);


console.log("Eliminar el primer elemento del arreglo:");

unidades.shift();
console.log("Sistemas y rutas de transporte:", unidades);


console.log("Eliminar un elemento específico del arreglo con Splice:");

unidades.splice(1, 1);
console.log("Sistemas y rutas de transporte:", unidades);
