<<<<<<< HEAD
const gameStart = document.getElementById("gameStart");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const gameResult = document.getElementById("gameResult");
const winner = document.getElementById("winner");
const moves = document.getElementById("moves");
const resetGame = document.getElementById("resetGame");

let botScore = document.getElementById("botScore");
let youScore = document.getElementById("youScore");


let botResponse = ["rock","paper","scissors"];
let playerOption;
let botOption;
let botScoreValue = parseInt(botScore.textContent);
let youScoreValue = parseInt(youScore.textContent);
let movesLeftValue=5;
moves.textContent = movesLeftValue;
resetGame.classList.add("d-none");
function getRockPaperScissors(){
	let number = Math.ceil(Math.random()*100)%2;
	return botResponse[number];
}
function getResult(playerOption,botOption){
	if(playerOption===botOption){
			winner.textContent = "Tie!";
			botScoreValue+=1;
			botScore.textContent = botScoreValue;
			youScoreValue+=1;
			youScore.textContent = youScoreValue;
	}
	else{
		if(playerOption==="rock"){
		if(botOption ==="paper"){
			winner.textContent = "Bot Wins!";
			botScoreValue+=2;
			botScore.textContent = botScoreValue;
		}
		else{
			winner.textContent = "You Win!";
			youScoreValue+=2;
			youScore.textContent = youScoreValue;
		}
		}
	if(playerOption==="paper"){
		if(botOption ==="scissors"){
			winner.textContent = "Bot Wins!";
			botScoreValue+=2;
			botScore.textContent = botScoreValue;
		}
		else{
			winner.textContent = "You Win!";
			youScoreValue+=2;
			youScore.textContent = youScoreValue;
		}
		}
	if(playerOption==="scissors"){
		if(botOption ==="rock"){
			winner.textContent = "Bot Wins!";
			botScoreValue+=2;
			botScore.textContent = botScoreValue;
		}
		else{
			winner.textContent = "You Win!";
			youScoreValue+=2;
			youScore.textContent = youScoreValue;
		}
		}
	}
}
function getGameWinner(){
	if(youScoreValue>botScoreValue){
		winner.textContent ="You win the Game!";
	}
	else if(youScoreValue===botScoreValue){
		winner.textContent ="It's a Tie!";
	}
	else{
		winner.textContent ="Bot won the Game!";
	}
	resetGame.classList.remove("d-none");
}

rockButton.addEventListener("click",function(){
	if(movesLeftValue>1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "rock";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
	}
	else if(movesLeftValue===1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "rock";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
		getGameWinner();
	}
})
paperButton.addEventListener("click",function(){
	if(movesLeftValue>1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "paper";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
	}
	else if(movesLeftValue===1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "rock";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
		getGameWinner();
	}
})
scissorsButton.addEventListener("click",function(){
	if(movesLeftValue>1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "scissors";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
	}
	else if(movesLeftValue===1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "rock";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
		getGameWinner();
	}
})

resetGame.addEventListener("click",()=>{
	window.location.reload();
})
=======
const gameStart = document.getElementById("gameStart");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const gameResult = document.getElementById("gameResult");
const winner = document.getElementById("winner");
const moves = document.getElementById("moves");
const resetGame = document.getElementById("resetGame");

let botScore = document.getElementById("botScore");
let youScore = document.getElementById("youScore");


let botResponse = ["rock","paper","scissors"];
let playerOption;
let botOption;
let botScoreValue = parseInt(botScore.textContent);
let youScoreValue = parseInt(youScore.textContent);
let movesLeftValue=5;
moves.textContent = movesLeftValue;
resetGame.classList.add("d-none");
function getRockPaperScissors(){
	let number = Math.ceil(Math.random()*100)%2;
	return botResponse[number];
}
function getResult(playerOption,botOption){
	if(playerOption===botOption){
			winner.textContent = "Tie!";
			botScoreValue+=1;
			botScore.textContent = botScoreValue;
			youScoreValue+=1;
			youScore.textContent = youScoreValue;
	}
	else{
		if(playerOption==="rock"){
		if(botOption ==="paper"){
			winner.textContent = "Bot Wins!";
			botScoreValue+=2;
			botScore.textContent = botScoreValue;
		}
		else{
			winner.textContent = "You Win!";
			youScoreValue+=2;
			youScore.textContent = youScoreValue;
		}
		}
	if(playerOption==="paper"){
		if(botOption ==="scissors"){
			winner.textContent = "Bot Wins!";
			botScoreValue+=2;
			botScore.textContent = botScoreValue;
		}
		else{
			winner.textContent = "You Win!";
			youScoreValue+=2;
			youScore.textContent = youScoreValue;
		}
		}
	if(playerOption==="scissors"){
		if(botOption ==="rock"){
			winner.textContent = "Bot Wins!";
			botScoreValue+=2;
			botScore.textContent = botScoreValue;
		}
		else{
			winner.textContent = "You Win!";
			youScoreValue+=2;
			youScore.textContent = youScoreValue;
		}
		}
	}
}
function getGameWinner(){
	if(youScoreValue>botScoreValue){
		winner.textContent ="You win the Game!";
	}
	else if(youScoreValue===botScoreValue){
		winner.textContent ="It's a Tie!";
	}
	else{
		winner.textContent ="Bot won the Game!";
	}
	resetGame.classList.remove("d-none");
}

rockButton.addEventListener("click",function(){
	if(movesLeftValue>1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "rock";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
	}
	else if(movesLeftValue===1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "rock";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
		getGameWinner();
	}
})
paperButton.addEventListener("click",function(){
	if(movesLeftValue>1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "paper";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
	}
	else if(movesLeftValue===1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "rock";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
		getGameWinner();
	}
})
scissorsButton.addEventListener("click",function(){
	if(movesLeftValue>1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "scissors";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
	}
	else if(movesLeftValue===1){
		movesLeftValue-=1;
		moves.textContent = movesLeftValue;
		playerOption = "rock";
		botOption = getRockPaperScissors();
		getResult(playerOption,botOption);
		getGameWinner();
	}
})

resetGame.addEventListener("click",()=>{
	window.location.reload();
})
>>>>>>> 17d7e565a66bf0e59d652d00709b0c99d8b07ea9
