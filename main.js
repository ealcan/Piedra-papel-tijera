var opciones = ['🪨', '🧻', '✂️'];
var resultadoJugador;
var resultadoMaquina;
var contadorMaquina = 0;
var contadorJugador = 0;
var resultadoTurno;
var texto;
var texto2;
var texto3;
var piedra = document.getElementById('piedra');
var papel = document.getElementById('papel');
var tijeras = document.getElementById('tijeras');
var resultado = document.getElementById('resultado');
var resultado2 = document.getElementById('resultado2');
var resultado3 = document.getElementById('resultado3');
var ganador = document.getElementById('ganador');
function turno() {
    if (contadorJugador < 3 && contadorMaquina < 3) {
        turnoMaquina();
        if (resultadoMaquina == "✂️" && resultadoJugador == "🪨" || resultadoMaquina == "🧻" && resultadoJugador == "✂️" || resultadoMaquina == "🪨" && resultadoJugador == "🧻") {
            contadorJugador++;
            texto = ("🟢 Gana Player1 🟢");
            texto2 = ("Computer: [" + resultadoMaquina + "]-----Player 1: [" + resultadoJugador + "]");
            texto3 = ("Computer: [" + contadorMaquina + "]----- Player 1: [" + contadorJugador + "]");
            resultadoTurno = "jugador";
            resultado.innerHTML = texto;
            resultado2.innerHTML = texto2;
            resultado3.innerHTML = texto3;
        }
        else if (resultadoMaquina == resultadoJugador) {
            texto = ("🟡 Empate 🟡");
            texto2 = ("Computer: [" + resultadoMaquina + "]-----Player 1: [" + resultadoJugador + "]");
            texto3 = ("Computer: [" + contadorMaquina + "]----- Player 1: [" + contadorJugador + "]");
            resultado.innerHTML = texto;
            resultado2.innerHTML = ("\n" + texto2);
            resultado3.innerHTML = texto3;
            resultadoTurno = "empate";
        }
        else {
            resultadoTurno = " maquina";
            if (resultadoTurno != "empate") {
                contadorMaquina++;
            }
            texto = ("🔴 Gana Computer 🔴");
            texto2 = ("Computer: [" + resultadoMaquina + "]-----Player 1: [" + resultadoJugador + "]");
            texto3 = ("Computer: [" + contadorMaquina + "]----- Player 1: [" + contadorJugador + "]");
            resultado.innerHTML = texto;
            resultado2.innerHTML = texto2;
            resultado3.innerHTML = texto3;
        }
    }
    else {
        texto = ("❌ Fin del juego ❌");
        texto2 = ("Puntuación Computer: [" + contadorMaquina + "]");
        texto3 = ("Puntuación Player: [" + contadorJugador + "]");
        resultado.innerHTML = texto;
        resultado2.innerHTML = texto2;
        resultado3.innerHTML = texto3;
        if (contadorJugador < contadorMaquina) {
            ganador.innerHTML = ("☠️HAS PERDIDO☠️");
        }
        else {
            ganador.innerHTML = ("🎉FELICIDADES. HAS GANADO🎉");
        }
    }
}
function jugadorTijeras() {
    resultadoJugador = "✂️";
    return resultadoJugador;
}
function jugadorPapel() {
    resultadoJugador = '🧻';
    return resultadoJugador;
}
function jugadorPiedra() {
    resultadoJugador = "🪨";
    return resultadoJugador;
}
function turnoMaquina() {
    resultadoMaquina = opciones[Math.floor(Math.random() * (opciones.length))];
    return resultadoMaquina;
}
tijeras.addEventListener('click', jugadorTijeras);
tijeras.addEventListener('click', turno);
papel.addEventListener('click', jugadorPapel);
papel.addEventListener('click', turno);
piedra.addEventListener('click', jugadorPiedra);
piedra.addEventListener('click', turno);
