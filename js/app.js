/*-------------------------------- Constants --------------------------------*/
// const boredomStatEL = document.getElementById('boredom-stat');
// const hungerStatEL = document.getElementById('hunger-stat');
// const sleepinessStatEL= document.getElementById('sleepiness-stat'); 
// const playButton = document.getElementById('play');
// const feedButton = document.getElementById('feed');
// const sleepButton = document.getElementById('sleep');
// const resetBtnEl = document.getElementById('reset');
// const gameMessageEl = document.getElementById('message');

const state = {
    hunger: 0,
    boredom: 0,
    sleepiness: 0,
};

let timer = 0;
let gameOver = false;

function runGame() {
    console.log('the game is running!')
}

function init() {
    timer = setInterval(runGame, 2000)
};



init();

// const init = document.addEventListenter("DOMContentLoaded", function() {
//     console.log("App initialized after DOM is ready!");
// })



// console.log(boredomStatEL);
// console.log(hungerStatEL);
// console.log(sleepinessStatEL);
// console.log(playButton);
// console.log(feedButton);
// console.log(sleepButton);
// console.log(resetBtnEl);
// console.log(gameMessageEl);
// console.log(timer);
// console.log(gameOver);


/*---------------------------- Variables (state) ----------------------------*/




// let gameOver = () => {
//     console.log('game over!'),
//     process.exit()
// };


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


