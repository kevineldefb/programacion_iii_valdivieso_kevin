let personajes = ["Rick", "Morty", "Summer", "Jerry", "Kevin", "Valdivieso"];
console.log("Elemento 0", personajes[0]);
console.log("Elemento 2", personajes[2]);
console.log("Elemento 5", personajes[5]);
console.log("Elemento 4", personajes[4]);
console.log("Tamaño del arreglo", personajes.length);
console.log("Personajes : ", personajes)
console.log("Incluir elementos a un arreglo con Push");
console.log("Personajes : ", personajes);
personajes.push("Gavilanez");
personajes.unshift("Patrick");
console.log("Personajes : ", personajes)
console.log("modificar elemntos de un arreglo");
personajes.push("Patrick");
console.log("Personajes : ", personajes);
console.log("Eliminar un elemento de arreglo");
personajes.pop();
console.log("Personajes : ", personajes);
personajes.shift();
console.log("Personajes : ", personajes);
personajes.splice(1,1);
console.log("Personajes : "+ personajes);