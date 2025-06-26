const { stat } = require("fs");

/*-------------------------------- Constants --------------------------------*/
const state = {
    hunger: 0,
    boredom: 0,
    sleepiness: 0,
};

const boredomStatEL = document.getElementById('boredom-stat');
const hungerStatEL = document.getElementById('hunger-stat');
const sleepinessStatEL= document.getElementById('sleepiness-stat'); 

const playButton = document.getElementById('play');
const feedButton = document.getElementById('feed');
const sleepButton = document.getElementById('sleep');

let timer = {};

let gameOver = () => {
    console.log('game over!'),
    process.exit()
};


/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


