let sum=0;
let cards=[]
let m="";
let isAlive=true
let hasBlackJack=false
let e1=document.getElementById("element")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let player={
	name:"Per",
 	chips:200
}
 
let playerEl=document.getElementById('player-el')
playerEl.textContent=player.name+": $"+player.chips

function startGame(){
	let f1=getRandomCard();
	let f2=getRandomCard();
	 sum=f1+f2;
	 cards=[f1,f2]
	renderGame()
}


function renderGame(){

	if(sum<21) {
		m="you want to draw a new card";
	}

	else if(sum===21) {
		m="you got a blackjack!";
		hasBlackJack=true
	}

	else {
		m="you lost";
		isAlive=false
	}
	e1.textContent=m;
	cardEl.textContent="Cards:"
	sumEl.textContent="Sum:"+sum;
	for(let i=0;i<cards.length;i++){
		cardEl.textContent+=cards[i]+" ";

	}
}


function newCard(){
	if(isAlive===true&& hasBlackJack===false){
	let card=getRandomCard();
	sum+=card
	cards.push(card);
	renderGame()
}}


function getRandomCard(){
	let a=Math.floor(Math.random()*13)+1
	 // let b=Math.floor(Math.random()*13)+2

	if(a>10){
		return 10
	}
	else if(a===1){
		return 11
	}
	else {
		return a
	}
}

