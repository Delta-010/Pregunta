let contador = 0;
const mensajes = [
    "¿Por qué no?",
    "¿Seguro que no? ",
    "Piénsalo porfavor...",
    "DIGA QUE SI",
    "porfis"
];

const imagenes = ["gatito1.jpg", "gatito2.jpeg", "gatito3.jpg", "gatito4.jpg", "gatito5.png"];

function aceptar() {
    document.getElementById("pregunta").style.display = "none";
    document.getElementById("imagen").src = "gatitofeli.jpg";
    document.querySelector(".botones").innerHTML = "<h2>¡Sabía que dirías que sí! ❤️</h2>";
}

function rechazar() {
    let noBtn = document.getElementById("no-btn");
    let siBtn = document.getElementById("si-btn");
    let imagen = document.getElementById("imagen");

    if (contador < mensajes.length) {
        noBtn.innerText = mensajes[contador];
        siBtn.style.fontSize = (20 + contador * 50) + "px";  
        if (contador < imagenes.length) {
            imagen.src = imagenes[contador];
        }
        contador++;
    } else {
        noBtn.innerText = "Bueno...😔";
        noBtn.style.fontSize = "50px";
    }
}