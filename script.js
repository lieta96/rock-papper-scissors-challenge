// Posbiles elecciones del juego con sus respectivas propiedades e íconos
const rock ={
    name: "rock",
    beats: "scissors",
    lose: "paper",
    img: "./images/icon-rock.svg",
    className: "rock-icon-container rock-border",
    id: "rock-icon-container",
    contentHTML: `<div class="icon-container rock-icon-container" id="rock-icon-container">
    <img src="./images/icon-rock.svg" alt="Rock image" id="icon-rock">
    </div>`
}
const paper ={
    name: "paper",
    beats: "rock",
    lose: "scissors",
    img: "./images/icon-paper.svg",
    className: "paper-icon-container paper-border",
    id: "paper-icon-container",
    contentHTML: `<div class="icon-container paper-icon-container" id="paper-icon-container">
    <img src=" ./images/icon-paper.svg" alt="Paper imgae" id="icon-paper">
    </div>`
}
const scissors ={
    name: "scissors",
    beats: "paper",
    lose: "rock",
    img: "./images/icon-scissors.svg",
    className: "scissors-icon-container scissors-border",
    id: "scissors-icon-container",
    contentHTML: `<div class="icon-container scissors-icon-container" id="scissors-icon-container">
    <img src="./images/icon-scissors.svg" alt="Scissors image" id="icon-scissors">
    </div>`
}
const optionArray=[rock,paper,scissors];

const rulesModalContainer=document.getElementById("rules-modal-container");
const rulesButton=document.getElementById('rules-button');
const closeIcon=document.getElementById("close-icon");
rulesButton.addEventListener ("click", ()=>rulesModalContainer.style.display='flex');
closeIcon.addEventListener("click",()=>rulesModalContainer.style.display='none')

// Creamos los contenedores de los íconos correspondientes a cada elemento
const scissorsContainer = document.createElement ('div');
scissorsContainer.innerHTML= `${scissors.contentHTML}`;

const paperContainer=document.createElement('div');
paperContainer.innerHTML=`${paper.contentHTML}`;

const rockContainer=document.createElement('div');
rockContainer.innerHTML=`${rock.contentHTML}`;

// Construimos un contenedor para los íconos superiores que serán el papel y la tijera
const topIcons =document.createElement('div');
topIcons.className='top-icons';
topIcons.appendChild(paperContainer);
topIcons.appendChild(scissorsContainer);
// Tomamos el contenedor de todos los elementos
const choiceContainer = document.getElementById("choice-container");
// Le agregamos los íconos superiores
choiceContainer.appendChild (topIcons)
// Le agregamos el ínono de la roca
choiceContainer.appendChild (rockContainer)

let playerChoise;
let houseChoise;
let playerScore=0;

// Tomamos los contenedores en donde mostraremos la elección del jugador por un lado y de la casa por el otro. Todo estó está dentro de la sección "results"
const resultsContainer= document.getElementById ("results-container");
const playerChoiseContainer=document.getElementById('player-choise-container');
const houseChoiseContainer=document.getElementById("house-choise-container");

// Creamos la sección en donde se mostrará al ganador 
const winnerContainer=document.createElement('div');
winnerContainer.className='winner-container';
winnerContainer.innerHTML=`
    <span id="win-lose"> </span>
    <button id="play-again-button" class="play-again-button"> play again</button>
    `

// Modificamos el puntaje del jugador en pantalla
const playerScoreText= document.getElementById('player-score');
const completePlayerScoreText =(score)=>{
    playerScoreText.textContent=score;
}
// Inicializamos el contador en 0
completePlayerScoreText(playerScore);

// Armamos una función para que la app elija un número entero al azar
function randomNum(min, max) {
    num=Math.floor(Math.random() * (max - min)) + min;
}
let getHouseChoise =()=>{
    randomNum(0,3)
    houseChoise= optionArray[num];
    return houseChoise
}

let playerResult;


const winnerCircle=document.createElement('div');
winnerCircle.className='winner-circle'
winnerCircle.innerHTML=`
    <div class="winner-circle-container">
        <div class="winner-circle-one inner-circle"></div>         
        <div class="winner-circle-two inner-circle"></div>
        <div class="winner-circle-three inner-circle"></div>
        <div class="winner-circle-four"> </div> 
    </div>`;
const houseChoiceContainer=document.getElementById("house-choice-container")
// Función que determina quién ganó
function playerVsHouse () {
    console.log (`La casa eligió ${houseChoise.name} y el jugador eligió ${playerChoise.name}`)
    if (playerChoise.beats==houseChoise.name){
        console.log ("ganó el jugador");
        playerResult="You win";
        playerChoiseContainer.appendChild(winnerCircle)
        playerScore ++;
    // gana el player 
    } else if (playerChoise.lose==houseChoise.name) {
        houseChoiceContainer.appendChild(winnerCircle)
        console.log ("ganó la casa");
        playerResult="You lose";
    } else if (playerChoise.name==houseChoise.name){ 
        console.log ("hubo empate");
        playerResult="there's a draw";
        playerScore ++;
    }
    completePlayerScoreText(playerScore);
    resultsContainer.appendChild(winnerContainer);
    winLose=document.getElementById("win-lose");
    winLose.textContent=playerResult;
    showButton()
}

// Tomamos los íconos de cada elemento para que luego el jugador pueda elegir
const paperIcon=document.getElementById("paper-icon-container");
const scissorsIcon=document.getElementById("scissors-icon-container");
const rockIcon=document.getElementById("rock-icon-container");

choiceContainer.addEventListener("click",(e)=>{ 
    if (e.target== paperIcon){
        playerChoiseIcon=paperContainer;
        playerChoise=paper;
        showResults();
    } else if (e.target==rockIcon){
        playerChoise=rock;
        playerChoiseIcon=rockContainer;
        showResults();

    } else if (e.target==scissorsIcon){
        playerChoise=scissors;
        playerChoiseIcon=scissorsContainer;
        // Ejecutamos la función que nos mostrará el resultado en pantalla
        showResults();
    }    
    return playerChoise,playerChoiseIcon
}); 

const circleBackground =document.getElementById("circle-background");
// Función que muestra en pantalla la elección de la casa
const showHouseChoise=()=>{
    houseChoiseContainer.innerHTML=`${houseChoise.contentHTML}`
    circleBackground.style.display='none';
}

const showResults =()=> {
    choiceContainer.style.display="none";
    resultsContainer.style.display="flex"
    playerChoiseContainer.appendChild(playerChoiseIcon)

    // Ejecutamos la función que nos devuelve la elección de la app
    getHouseChoise();
    // Demoramos 1 segundo que esa elección se muestre en pantalla
    timeoutShowHouseChoise = setTimeout(showHouseChoise, 1000);
    // Demoramos dos segundos que se determine quién ganó
    timeoutResults=window.setTimeout (playerVsHouse,2000);
    // Demoramos dos 
    //timeoutButton=window.setTimeout(showButton,2500)

}
// Función que muestra en pantalla el botón "Play again"
const showButton =()=>{
    // Función para volver a jugar
    const playAgainButton= document.getElementById("play-again-button"); 
    playAgainButton.onclick = function() {
        // Se vuelve a mostrar en pantalla los tres elementos para elegir. Es importante volver a agregar al contenedor todos los elementos, porque al haber tomado el elemento seleccionado y reubicarlo en la sección de resultados, lo desplazamos de su lugar original.
        circleBackground.style.display='inherit';

        choiceContainer.style.display = "flex";   
        topIcons.appendChild(paperContainer);
        topIcons.appendChild(scissorsContainer);
        choiceContainer.appendChild (rockContainer)
        // Se esconden los resultados
        resultsContainer.style.display="none";
        if (houseChoiceContainer.contains(winnerCircle)){
             houseChoiceContainer.removeChild(winnerCircle);
        } else if (playerChoiseContainer.contains (winnerCircle)){
            playerChoiseContainer.removeChild(winnerCircle)
        }
       
        
     
        houseChoiseContainer.innerHTML='';
        playerChoiseContainer.innerHTML=`<h4>You Picked</h4>`
        winLose.textContent=''
        resultsContainer.removeChild(winnerContainer);
    }
}





 