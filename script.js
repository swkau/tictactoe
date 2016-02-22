/* 
function select() {
	if(pturn==="x") {
		this.style.backgroundColor="red";
	}
	if(pturn==="y") {
		this.style.backgroundColor="blue";
	}
} */

var tttcells = document.getElementsByClassName('tttcell')
var pturn = "x";
var msg = "";
var log = "";
var quit = "";
var counter = 0;
var checkwon = false;

function reset() {
document.querySelector('div #a1').innerHTML = "";
document.querySelector('div #a2').innerHTML = "";
document.querySelector('div #a3').innerHTML = "";
document.querySelector('div #b1').innerHTML = "";
document.querySelector('div #b2').innerHTML = "";
document.querySelector('div #b3').innerHTML = "";
document.querySelector('div #c1').innerHTML = "";
document.querySelector('div #c2').innerHTML = "";
document.querySelector('div #c3').innerHTML = "";
}

for (var i = 0; i <tttcells.length; i++ ){
tttcells[i].addEventListener("click", startevent)
}

function startevent (event) {
console.dir(event);
checksquare();
checkwinner();

function checksquare() {
if(pturn==="x"&&event.target.innerHTML!=="X"&&event.target.innerHTML!=="O"&&quit!==1) { 
 applyColour(event,"x");
 pturn = "o";
msg = document.querySelector('div #message');
msg.innerHTML = "Player O's turn, click on a square!";
//tttcells:hover.style.backgroundColor = red;
document.getElementById("log").innerHTML = document.getElementById("log").innerHTML + "X plays " + event.target.id + ", ";
 }
 else if(pturn==="o"&&event.target.innerHTML!=="X"&&event.target.innerHTML!=="O"&&quit!==1) {
 applyColour(event,"o");
 pturn = "x";
msg = document.querySelector('div #message');
msg.innerHTML = "Player X's turn, click on a square!";
//tttcells:hover.style.backgroundColor = blue;
document.getElementById("log").innerHTML = document.getElementById("log").innerHTML + "O plays " + event.target.id + ", ";
 }
}

function applyColour() {
 if(pturn==="x"){
 event.target.style.backgroundColor = "red";
 event.target.innerHTML = "X";
 counter++;
 }
 else if(pturn==="o") {
  event.target.style.backgroundColor = "blue";
  event.target.innerHTML = "O"
  counter++;
 }
}

function turnColour(x) {
 if(pturn==="x") {
  x.style.backgroundColor = "red";
 }
 else if(pturn==="o") {
  x.style.backgroundColor = "blue";
 }
}

function checkTie() {
	if(counter==9&&checkwon==false) {
		alert("It is a tie! Try again!");
	}
}

function checkwinner() {
	if((s("a1")===s("a2")&&s("a2")===s("a3")&&s("a3")!=="")||
	   (s("b1")===s("b2")&&s("b2")===s("b3")&&s("b3")!=="")||
	   (s("c1")===s("c2")&&s("c2")===s("c3")&&s("c3")!=="")||
	   (s("a1")===s("b1")&&s("b1")===s("c1")&&s("c1")!=="")||
	   (s("a2")===s("b2")&&s("b2")===s("c2")&&s("c2")!=="")||
	   (s("a3")===s("b3")&&s("b3")===s("c3")&&s("c3")!=="")||
	   (s("a1")===s("b2")&&s("b2")===s("c3")&&s("c3")!=="")||
	   (s("a3")===s("b2")&&s("b2")===s("c1")&&s("c1")!=="")
		){
	msg = document.querySelector('div #message');
	if(pturn==="o"){
	msg.innerHTML = "X is the winner!";
	alert("Game Over! X wins!");
	checkwon=true;
	}
	else {
	msg.innerHTML = "O is the winner!";	
	alert("Game Over! O wins!");
	checkwon=true;
	}
 	}

 	checkTie();

	function s(i) {
		return document.getElementById(i).innerHTML;
	}
 }
};



