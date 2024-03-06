let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroSecreto < numeroUsuario){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p','Maximo de intentos alcanzados');
    } else{
        // verificamos si el numero generado ya esta en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

