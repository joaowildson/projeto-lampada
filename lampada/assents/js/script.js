var ligadoEdesligado = document.getElementById('ligadoEdesligado');
var desligado = document.getElementById('desligado')
var lampada = document.getElementById('lamp')

ligadoEdesligado.addEventListener('click', OnAndOff)


function ligar() {
    lampada.src = 'assents/imgs/ligado.png'
}

function deligar() {
    lampada.src= 'assents/imgs/desligado.png'
}

function OnAndOff() {
    if(ligadoEdesligado.textContent == "ligar") {
        ligadoEdesligado.textContent = "desligar"
        ligar()
    } else 
    if(ligadoEdesligado.textContent == "desligar") {
        ligadoEdesligado.textContent = "ligar"
        deligar()
    }
}