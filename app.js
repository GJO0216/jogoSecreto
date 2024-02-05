let numerosSorteados = [];
let numeroSecreto = 0;
let contador = 0;
let numeroMaximo = 10;

function verificarIntento() {
    let numDelUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if (numDelUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero en ${contador} ${(contador === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }
    else {
        if (numDelUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");

        }
        else {
            asignarTextoElemento("p","El numero secreto es mayor");

        }
        contador++
        limpiarCaja();
    }
    return
}


//Funcion de limpieza que hace uso de querySelector para buscar por id (poniendo el numeral antes del id)
// en vez de getElementById.
function limpiarCaja(){
    valorCaja = document.querySelector("#numeroUsuario").value = "";
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
}

function generarNumSec() {
    let numRand = Math.floor(Math.random()*numeroMaximo)+1;
if (numerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p","Todos los numeros posibles fueron sorteados")
}
else {
      if (numerosSorteados.includes(numRand)) {
          return generarNumSec();
      }
      else {
          numerosSorteados.push(numRand);
         return numRand;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    contador = 1;
    numeroSecreto = generarNumSec();
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    return;
}

condicionesIniciales();