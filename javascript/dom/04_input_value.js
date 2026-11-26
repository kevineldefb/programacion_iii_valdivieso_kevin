const cristales = document.getElementById("cristales");
const potencia = document.getElementById("potencia");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
calcular.addEventListener("click", function(){
    if(cristales.value.trin()===""
    || potencia.value.trin() ==""){
        resultado.textContent = "Completa ambos campos";
        return;
    }
    const cantidad = Number(cristales.value);
    const potenciaNumber = Number(potencia.value);
    if (!Number.isFinite(cantidad) ||
        !Number.isFinite(potenciaNumber)){
        resultado.textContent="Ingrese valores válidos";
        return;
    }
    const total = cantidad * potenciaNumber;
    resultado.textContent ="Enería total: " + total;
})