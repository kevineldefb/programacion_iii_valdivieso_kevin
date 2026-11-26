
const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Aviso desde la Central de Despacho del Trolebús";
saludo.innerHTML = `<h1>Bienvenido al Sistema de Transporte de Quito</h1>`;

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h1>Unidad TROLE-015</h1>
    <p>Ruta: El Recreo - La Y</p>
    <p>Tipo: Trolebús Eléctrico</p>
    <p>Estado: Operativa</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function() {
    console.log("Registrando conductor:", nombre.value);
    saludar.textContent = "Bienvenido al recorrido, " + nombre.value;
});
