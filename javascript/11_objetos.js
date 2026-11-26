let nombre="Rick";
let edad=70;
let planeta="Tierra C-137";
let energia = 100;
let averiada = false;

let nave = {
    nombre:"Rick",
    edad:70,
    planeta:"Tierra C-137",
    energia : 100,
    averiada : false,
    capacidadPasajeros: 5
}
console.log("Información de la nave de Rick:");
console.log("Nombre del piloto: " + nave.nombre);
console.log("Edad del piloto: " + nave["edad"]);
console.log("Planeta de origen: " + nave["planeta"]);
console.log("Nivel de energía: " + nave.energia + "%");
console.log("Estado de la nave: " + (nave.averiada ? "Averiada" : "Operativa"));

console.log("Agregar una nueva propiedad a la nave de Rick");
nave.modelo = "Nave Espacial X-2000";
console.log("Modelo de la nave: " + nave.modelo);
nave["capacidadPasajeros"] = 5;
console.log("Capacidad de pasajeros: " + nave["capacidadPasajeros"]);

console.log("Actualizar el nivel de energía de la nave de Rick");

nave.energia = 80;
console.log("Nuevo nivel de energía: " + nave.energia + "%");

nave.averiada = true;
console.log("Nuevo estado de la nave: " + (nave.averiada ? "Averiada" : "Operativa"));
console.log("Nave de Rick:", nave);
console.log("Eliminar una propiedad de la nave de Rick");
delete nave.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada");
console.log("Nave de Rick después de eliminar la propiedad:");
console.log(nave);

let productos = {
    portales: 10,
    pistolasLaser: 5,
    cristales: 20,
    pociones: 15
};
function calcularTotalProductos(productos) {
    let total = 0;
    for (let producto in productos) {
        total = total + productos[producto];
    }
    console.log("Total de productos en el laboratorio: " + total);
    return total;
}
calcularTotalProductos(productos);