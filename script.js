
//var tttcells = document.getElementsByClassName('tttcell')
var pturn = "x";
var msg = "";
var counter = 0;
var checkwon = false;

$('#clearButton').on('click', reset);

function reset() {
	$('.tttcell').html('');
}

/*for (var i = 0; i <tttcells.length; i++ ){
tttcells[i].addEventListener("click", startevent)
}*/

$('.tttcell').on('click', checksquare);

function checksquare() {

if(pturn==="x"&&$(this).text()!=="X"&&$(this).text()!=="O"&&checkwon===false) { 
 $(this).css({
 	color: 'red',
 	backgroundColor: '#dddddd'
 });
 $(this).html('X');
 counter++;
 pturn = "o";
$('#message').text('Player X turn, click on a square!');
checkwinner();
 }

 else if(pturn==="o"&&$(this).text()!=="X"&&$(this).text()!=="O"&&checkwon===false) {
 $(this).css({
 	color: 'blue',
 	backgroundColor: '#cccccc'
 });
  $(this).html('O');
  counter++;
 pturn = "x";
$('#message').text('Player O turn, click on a square!');
checkwinner();
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
	if(pturn==="o"){
	$('#message').text('X is the winner!');
	checkwon=true;
	alert("Game Over! X wins!");
	}
	else {
	$('#message').text('O is the winner!');
	checkwon=true;	
	alert("Game Over! O wins!");
	}
 	}

 	checkTie();

	function s(i) {
		return $(i).html();
	}
 }




