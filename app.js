
const solicitar = document.getElementById('solicitar');
const container_id = document.getElementById('container_id');
const cerrar = document.getElementById('cerrar');

solicitar.addEventListener('click', () => {
    container_id.classList.add('show');

});

cerrar.addEventListener('click', () => {
    container_id.classList.remove('show');
});



let nombre = document.getElementById("nombre").value;
let edad = document.getElementById("edad").value;
let peso = document.getElementById("peso").value;
let text = document.getElementById("resultado");
// LOCAL STORAGE GUARDA NUTRICIONISTAS ASIGNADOS A CADA PLAN A DEFINIR EN PROYECTO

nutricionistas = [{
    name: "Lic. Iriarte",
    age: 33,
}, {
    name: "Lic. Duarte",
    age: 27,
},{
    name: "Lic. Dorrego",
    age: 25
}]


localStorage.setItem("nutricionistas", JSON.stringify(nutricionistas));

text.innerHTML = "Hola " + nombre + "este es el plan alimenticio";




