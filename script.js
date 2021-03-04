// En la pantalla principal aparecen primero las tres ipciones 
//una vez seleccionada una se despliega una nueva parte de la pantalla en donde aparece tu elección y la de la compu 
// siguiente paso figura en pantalla quien ganó y si querés jugar otra partida 
//estados de la partida y puntajes 
//Puntajes: ganador=2 perdedor=0 empate=1
// determinar quien es el ganador se pueede hacer con varios IF y establenciendo los casos de partidas posibles 

// Se me ocurre que para linkear imagánes son elecciones se puede armar un array con cada posibilidad
// O puede ser un objeto que contenga la info de a quien gana o a quien vence

const rock ={
    name: "rock",
    beats: "scissor",
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
//
playAgainButton= document.getElementById("play-again-button"); 
// Get the modal
const choiceModal = document.getElementById("choice-modal");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
playAgainButton.onclick = function() {
  choiceModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  choiceModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == choiceModal) {
    choiceModal.style.display = "none";
  }
 }
// esto no sé si lo necesito, CREO que no. 
const paperIcon=document.getElementById("paper-icon");
const scissorsIcon=document.getAnimations("scissors-icon");
const rockIcon=document.getElementById("rock-icon");
// Hacemos una escucha sobre todo el modal, según el elemento sobre el que se haga click, este se guarda en una variable para ser reutilizado 
// tengo que controlar que al hacer click sobre el modal no me lo tome, ni me tome elbotón close -------------- ver luego
 choiceModal.addEventListener("click",(e)=>{
    if (e.target==img){
        // Guarda en una variable la elección del jugador
        playerChoise=e.target;
    }
    return playerChoise

})
// Ahora tenemos que mostrar en pantalla el elemento seleccionadp y tenemos que armar la funcion que nos muestre cual fue la eleccion de la página 

function getRandomInt(min, max) {
    return num=Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(0,3);
let houseChoise= optionArray[num];
console.log(houseChoise)
//