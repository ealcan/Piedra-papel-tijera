const opciones: string[] = ['🪨', '🧻', '✂️'];
let resultadoJugador: string;
let resultadoMaquina: string;
let contadorMaquina: number = 0;
let contadorJugador: number = 0;
let resultadoTurno: string;
let texto: any;
let texto2: any;
let texto3: any;

const piedra: any = document.getElementById('piedra');
const papel: any = document.getElementById('papel');
const tijeras: any = document.getElementById('tijeras');
const resultado: any = document.getElementById('resultado');
const resultado2: any = document.getElementById('resultado2');
const resultado3: any = document.getElementById('resultado3');
const ganador: any = document.getElementById('ganador');

function turno(): void{
    if (contadorJugador < 3 && contadorMaquina < 3){
        turnoMaquina();
        if (resultadoMaquina == "✂️" && resultadoJugador == "🪨" || resultadoMaquina == "🧻" && resultadoJugador == "✂️" || resultadoMaquina == "🪨" && resultadoJugador == "🧻"){
            contadorJugador++;
            texto = ("🟢 Gana Player1 🟢");
            texto2 =("Computer: ["+resultadoMaquina+ "]-----Player 1: ["+resultadoJugador+"]") ;
            texto3 = ("Computer: [" + contadorMaquina + "]----- Player 1: [" + contadorJugador + "]" );
            resultadoTurno = "jugador";
            resultado.innerHTML = texto;
            resultado2.innerHTML = texto2;
            resultado3.innerHTML = texto3;
        }
        else if (resultadoMaquina == resultadoJugador){
            texto = ("🟡 Empate 🟡");
            texto2 =("Computer: ["+resultadoMaquina+ "]-----Player 1: ["+resultadoJugador+"]") ;
            texto3 = ("Computer: [" + contadorMaquina + "]----- Player 1: [" + contadorJugador + "]" );
            resultado.innerHTML = texto;
            resultado2.innerHTML = ("\n" +texto2);
            resultado3.innerHTML = texto3;
            resultadoTurno = "empate";
        }
        else{
            resultadoTurno = " maquina";
            if(resultadoTurno != "empate"){
                contadorMaquina++;
            }
            texto = ("🔴 Gana Computer 🔴");
            texto2 =("Computer: ["+resultadoMaquina+ "]-----Player 1: ["+resultadoJugador+"]") ;
            texto3 = ("Computer: [" + contadorMaquina + "]----- Player 1: [" + contadorJugador + "]" );
            resultado.innerHTML = texto;
            resultado2.innerHTML = texto2;
            resultado3.innerHTML = texto3;
        }
    }
    else{
        texto = ("❌ Fin del juego ❌");
        texto2 = ("Puntuación Computer: [" + contadorMaquina+ "]");
        texto3 = ("Puntuación Player: [" + contadorJugador+ "]");
        resultado.innerHTML = texto;
        resultado2.innerHTML = texto2;
        resultado3.innerHTML = texto3;
        if(contadorJugador < contadorMaquina){
            ganador.innerHTML = ("☠️HAS PERDIDO☠️")
        }
        else{
            ganador.innerHTML = ("🎉FELICIDADES. HAS GANADO🎉")
        }
    }
    
}

function jugadorTijeras(): string{
    resultadoJugador = "✂️";
    return resultadoJugador;
}

function jugadorPapel(): string{
    resultadoJugador = '🧻';
    return resultadoJugador;
}

function jugadorPiedra(): string{
    resultadoJugador = "🪨";
    return resultadoJugador;
}

function turnoMaquina(): string{
    resultadoMaquina = opciones[Math.floor(Math.random() * (opciones.length))];
    return resultadoMaquina;
}


tijeras.addEventListener('click', jugadorTijeras);
tijeras.addEventListener('click', turno);
papel.addEventListener('click', jugadorPapel);
papel.addEventListener('click', turno);
piedra.addEventListener('click', jugadorPiedra);
piedra.addEventListener('click', turno);