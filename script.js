// Elecciones posibles del juego, con sus respectivas imágenes y propiedades
const rock ={
    name: "rock",
    beats: "scissors",
    lose: "papper",
    img: "./images/icon-rock.svg"
}
const paper ={
    name: "papper",
    beats: "rock",
    lose: "scissors",
    img: "./images/icon-papper.svg"
}
const scissors ={
    name: "scissors",
    beats: "papper",
    lose: "rock",
    img: "./images/icon-scissors.svg"
}
optionArray=[rock,paper,scissors];

playAgainButton= document.getElementById("play-again-button"); 
// Tomamos el contenedor para que el juegador pueda elegir 
const choiceContainer = document.getElementById("choice-container");
playAgainButton.onclick = function() {
  choiceContainer.style.display = "block";
}
// esto no sé si lo necesito, CREO que no. 
const paperIcon=document.getElementById("icon-paper");
const scissorsIcon=document.getElementById("icon-scissors");
const rockIcon=document.getElementById("icon-rock");
// Hacemos una escucha sobre todo el container, según el elemento sobre el que se haga click, este se guarda en una variable para ser reutilizado 
let playerChoise;

choiceContainer.addEventListener("click",(e)=>{ 
    if (e.target==paperIcon){
        // este if funciona!
        playerChoise=paper;
    } else if (e.target==rockIcon){
        playerChoise=rock;
    } else if (e.target==scissorsIcon){
        playerChoise=scissors;
    }
    playerVsHouse ()
    return playerChoise
})

// Armamos una función para que la página elija un elemento al azar

function getRandomInt(min, max) {
    return num=Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(0,3);
let houseChoise= optionArray[num];

// Ahora quiero mostrar en pantalla la elección del jugador y de la casa
// y que se demore en motrar el resultado medio segundo
// Además hay que armar la funcion que determina quien ganó! 
let playerCount=0;
let houseCount=0;

// Una vez que tenemos la elección del jugador ejecutamos la competencia 
//playerChoise vs houseChoise
function playerVsHouse () {
    console.log (`La casa eligió ${houseChoise.name} y el jugador eligió ${playerChoise.name}`)
    if (playerChoise.beats==houseChoise.name){
        console.log ("ganó el jugador")
        playerCount ++;
    // gana el player 
    } else if (playerChoise.lose==houseChoise.name) {
        console.log ("ganó la casa")
        houseCount ++;
    } else if (playerChoise.name==houseChoise.name){ 
        console.log ("hubo empate");
        playerCount ++;
        houseCount ++;
    }
}
    