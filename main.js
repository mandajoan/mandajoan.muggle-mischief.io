// SET UP TWO PLAYERS, current player,  AND SCORE SYSTEM

//Variables for troll images
var p1TrollImg = '<img src ="./images/p1troll.png" class="trolls">'
var p2TrollImg = '<img src ="./images/p2troll.png" class="trolls">'

//Objects for Players
var player1 = {
  name: "Player One",
  score: 0,
  image:p1TrollImg
}
var player2 = {
  name: "Player Two",
  score: 0,
  image: p2TrollImg
}

//Setting up currentPlayer and switchTurns
var currentPlayer = player1;

function switchTurns() {
   if(currentPlayer == player1) {
     currentPlayer = player2;
     return;
   } else {
     currentPlayer = player1;
     return;
   }
   return true;
  }


// GOLDEN SNITCH LOGIC
//variables
var snitch = document.querySelector('#snitch');
var button = document.querySelector('#snitchStart');
var self = this;


//timer logic
var seconds = 0;
var timer;



function startTimer (){
  timer = setInterval(function(){
    seconds++;
    $('#s').text(seconds);
    console.log(seconds);
  }, 1000)
}

//Score function using time logic
  var p1t = $('#player1Time');
  var p2t = $('#player2Time');

  function checkScore() {
    p1t = parseInt(p1t.text());
    p2t = parseInt(p2t.text());
    if (p1t < p2t){
      player1.score = player1.score +1;
      setTimeout (function(){
        console.log(currentPlayer, player1.score, player2.score)
        alert("Player 1 wins the first challenge and earns a point! \n Proceed to the next challenge!");
      }, 2000);
      console.log(player1.score);
    } else if (p1t > p2t){
    player2.score = player2.score +1;
    setTimeout (function(){
      console.log(currentPlayer, player1.score, player2.score)
      alert("Player 2 wins the first challenge and earns a point! \n Proceed to the next challenge!");
    }, 2000);
    console.log(player2.score);
  } else if (p1t == p2t) {
    console.log(currentPlayer, player1.score, player2.score)
    alert ("Tie. Try again, mischievious muggles!")
    //reset time, start button and snitch position
    setTimeout (function (){
      resetBoard();
    }, 2000);
    console.log('tie reset');
  };
}

//stop timer on mouseover logic
function stopTimer (){
  if(currentPlayer == player1) {
    player1.time = seconds;
    $('#player1Time').text(seconds);
    switchTurns();
  } else {
    player2.time = seconds
    $('#player2Time').text(seconds);
    checkScore();
    switchTurns();
  }
  //return seconds = 0;
  clearInterval(timer);
  seconds=0;
  snitch.addEventListener('click', startTimer);
}

function resetBoard(){
location.reload()
 }


//snitch functions for movement logic
function moveby15(){
  howManyPx += 15;
  snitch.style.top = howManyPx + 'px';
  snitch.style.left = howManyPx + 'px';
}

function showSnitch(){
  stopTimer();
  snitch.style.opacity = 1;
  snitch.removeEventListener('mouseenter', showSnitch);
}

function hideSnitch(){
  snitch.style.opacity = 0;
}

function moveSnitchRandom(){
   console.log(this);
   howManyPxTop = (Math.random() * 200);
   howManyPxLeft = (Math.random() * 800);
   this.style.top = howManyPxTop + 'px';
   this.style.left = howManyPxLeft + 'px';
   hideSnitch();
   snitch.addEventListener('mouseenter', showSnitch);
}

//Start game logic with clicks
function startSnitchGame(){
  setTimeout (function(){
    startTimer()}, 500);
    snitch.addEventListener('click', moveSnitchRandom);
}

button.addEventListener('click', startSnitchGame);


///////////////////////////////////////////////////////////////////////

//Tic Tac Troll LOGIC

//variables

var boxes = document.querySelectorAll('#board div');
var resetButtonT = document.querySelector('#resetButtonTtt');
var boxes2 = document.querySelectorAll('#board2 div');


//loops for event listener for each board
for(var i = 0; i <boxes.length; i += 1){
  boxes[i].addEventListener('click', boxClickHandler);
}

for (var i=0; i<boxes2.length; i +=1){
  boxes2[i].addEventListener('click', boxClickHandler);
}

///Functions for game LOGIC

//switch to board2 if game ends in tie
function resetTtt () {
$('#board').hide();
$('#board2').show();
}
//issue to fix in the future is that this only allows for two attempts and there is a posiblity that they tie twice

resetButtonT.addEventListener('click', resetTtt);

//prevent box for being double clicked (works for both boards)
function boxClickHandler (){
  if(!this.innerHTML){
    this.innerHTML = currentPlayer.image;
    // switchTurns();

  }
  if(checkWinnerTtt ()) {
    lockBoard()
  }
  if(checkWinnerTtt2()) {
    lockBoard2()
  }

  switchTurns()

  }

//check for winning pattern logic for both boards

function checkWinnerTtt (){

  var matchedFirstRow = boxes[0].innerHTML && boxes[0].innerHTML === boxes[1].innerHTML && boxes[0].innerHTML === boxes[2].innerHTML && boxes[0].innerHTML === boxes[3].innerHTML

  var matchedSecondRow = boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML

  var matchedThirdRow = boxes[8].innerHTML && boxes[8].innerHTML === boxes[9].innerHTML && boxes[8].innerHTML === boxes[10].innerHTML && boxes[8].innerHTML === boxes[11].innerHTML

  var matchedFourthRow = boxes[12].innerHTML && boxes[12].innerHTML === boxes[13].innerHTML && boxes[12].innerHTML === boxes[14].innerHTML && boxes[12].innerHTML === boxes[15].innerHTML

  var matchedFirstColumn = boxes[0].innerHTML && boxes[0].innerHTML === boxes[4].innerHTML && boxes[0].innerHTML === boxes[8].innerHTML && boxes[0].innerHTML === boxes[12].innerHTML

  var matchedSecondColumn = boxes[1].innerHTML && boxes[1].innerHTML === boxes[5].innerHTML && boxes[1].innerHTML === boxes[9].innerHTML && boxes[1].innerHTML === boxes[13].innerHTML

  var matchedThirdColumn = boxes[2].innerHTML && boxes[2].innerHTML === boxes[6].innerHTML && boxes[2].innerHTML === boxes[10].innerHTML && boxes[2].innerHTML === boxes[14].innerHTML

  var matchedFourthcolumn = boxes[3].innerHTML && boxes[3].innerHTML === boxes[7].innerHTML && boxes[3].innerHTML === boxes[11].innerHTML && boxes[3].innerHTML === boxes[15].innerHTML

  var matchedFirstDiagonal = boxes[0].innerHTML && boxes[0].innerHTML === boxes[5].innerHTML && boxes[0].innerHTML === boxes[10].innerHTML && boxes[0].innerHTML === boxes[15].innerHTML

  var matchedSecondDiagonal = boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML && boxes[3].innerHTML === boxes[9].innerHTML && boxes[3].innerHTML === boxes[12].innerHTML

  if(matchedFirstRow || matchedSecondRow || matchedThirdRow || matchedFourthRow || matchedFirstColumn || matchedSecondColumn || matchedThirdColumn ||
    matchedFourthcolumn || matchedFirstDiagonal || matchedSecondDiagonal) {
      currentPlayer.score = currentPlayer.score +1;
      console.log("currentPlayer");
      alert(currentPlayer.name + " " + "wins! \n Proceed to next challenge! Player One goes first.");
      switchTurns()
      return true;
    } else {
      return false;
    }
  }

  function checkWinnerTtt2 (){

    var matchedFirstRow = boxes2[0].innerHTML && boxes2[0].innerHTML === boxes2[1].innerHTML && boxes2[0].innerHTML === boxes2[2].innerHTML && boxes2[0].innerHTML === boxes2[3].innerHTML

    var matchedSecondRow = boxes2[4].innerHTML && boxes2[4].innerHTML === boxes2[5].innerHTML && boxes2[4].innerHTML === boxes2[6].innerHTML && boxes2[4].innerHTML === boxes2[7].innerHTML

    var matchedThirdRow = boxes2[8].innerHTML && boxes2[8].innerHTML === boxes2[9].innerHTML && boxes2[8].innerHTML === boxes2[10].innerHTML && boxes2[8].innerHTML === boxes2[11].innerHTML

    var matchedFourthRow = boxes2[12].innerHTML && boxes2[12].innerHTML === boxes2[13].innerHTML && boxes2[12].innerHTML === boxes2[14].innerHTML && boxes2[12].innerHTML === boxes2[15].innerHTML

    var matchedFirstColumn = boxes2[0].innerHTML && boxes2[0].innerHTML === boxes2[4].innerHTML && boxes2[0].innerHTML === boxes2[8].innerHTML && boxes2[0].innerHTML === boxes2[12].innerHTML

    var matchedSecondColumn = boxes2[1].innerHTML && boxes2[1].innerHTML === boxes2[5].innerHTML && boxes2[1].innerHTML === boxes2[9].innerHTML && boxes2[1].innerHTML === boxes2[13].innerHTML

    var matchedThirdColumn = boxes2[2].innerHTML && boxes2[2].innerHTML === boxes2[6].innerHTML && boxes2[2].innerHTML === boxes2[10].innerHTML && boxes2[2].innerHTML === boxes2[14].innerHTML

    var matchedFourthcolumn = boxes2[3].innerHTML && boxes2[3].innerHTML === boxes2[7].innerHTML && boxes2[3].innerHTML === boxes2[11].innerHTML && boxes2[3].innerHTML === boxes2[15].innerHTML

    var matchedFirstDiagonal = boxes2[0].innerHTML && boxes2[0].innerHTML === boxes2[5].innerHTML && boxes2[0].innerHTML === boxes2[10].innerHTML && boxes2[0].innerHTML === boxes2[15].innerHTML

    var matchedSecondDiagonal = boxes2[3].innerHTML && boxes2[3].innerHTML === boxes2[6].innerHTML && boxes2[3].innerHTML === boxes2[9].innerHTML && boxes2[3].innerHTML === boxes2[12].innerHTML

    if(matchedFirstRow || matchedSecondRow || matchedThirdRow || matchedFourthRow || matchedFirstColumn || matchedSecondColumn || matchedThirdColumn ||
      matchedFourthcolumn || matchedFirstDiagonal || matchedSecondDiagonal) {
        currentPlayer.score = currentPlayer.score +1;
        console.log("currentPlayer");
        alert(currentPlayer.name + " " + "wins! \n Proceed to next challenge! Player One goes first.");
        switchTurns()
        return true;
      } else {
        return false;
      }
    }

// prevent clicks once there is winning pattern (each board)
function lockBoard() {
        for(var i = 0; i < boxes.length; i += 1) {
          boxes[i].removeEventListener('click', boxClickHandler);
        }
      }

function lockBoard2() {
        for(var i = 0; i < boxes2.length; i += 1) {
            boxes2[i].removeEventListener('click', boxClickHandler);
          }
        }

// //Ravenclaw's Tower Logic

//variables for logic
var riddleStartButton = $('#startRiddle');
var riddleResetButton = $('#resetRiddle');
var riddleBoard = $('#riddleBoard');
var originalRiddleBoard = $("#riddleBoard").clone();


//start game logic
function startRiddle(){
  setTimeout (function(){
    $('#riddle').show()
  }, 1000);
}


//reset board for player 2 turns
function resetRiddleBoard(){
    $("#riddleBoard").replaceWith(originalRiddleBoard.clone());
    currentPlayer = player2;

  }

//button logic
riddleStartButton.click(startRiddle);

riddleResetButton.click(resetRiddleBoard);

//variables for score
var p1RiddleScore = 0;
var p2RiddleScore = 0;

//prompts for riddle answers and updating score
function riddleFunc(){
  var txt;
  var riddleAnswer = prompt("Your answer, please...");
    if (riddleAnswer.toLowerCase() == "fire"){
      txt = currentPlayer.name + " "+ ", well done. Correct answer and you have earned a point!";
      if(currentPlayer == player1){
      p1RiddleScore +=1;
      } else if(currentPlayer == player2){
      p2RiddleScore +=1;
      }
      currentPlayer.score = currentPlayer.score + 1
      console.log(currentPlayer.score);
    } else {
      txt = " You mucked it up muggle!"+ " " + currentPlayer.name + " " + ", a point will be taken from your score.";
      if(currentPlayer == player1){
            p1RiddleScore +=1;
      } else if(currentPlayer == player2){
            p2RiddleScore +=1;
      }
      currentPlayer.score = currentPlayer.score -1
      console.log(currentPlayer.score);
    }
    document.getElementById("riddle").innerText = txt;
    winnerOrTie();
    console.log("check working func");
}

//check for winner and link to SUDDEN DEATH ROUND in event of tie
function winnerOrTie(){
  if (p1RiddleScore && p2RiddleScore && player1.score > player2.score){
        alert("Player 1 you are the winning muggle! with a score of" + " " + player1.score + "\n Player 2, you lose with a score of" + " " + player2.score);
      } else if (p1RiddleScore && p2RiddleScore && player1.score < player2.score){
        alert("Player 2 you are the winning muggle! with a score of" + " "+ player2.score + "\n Player 1, you lose with a score of" + " "+ player1.score);
      } else if (p1RiddleScore && p2RiddleScore  && player1.score == player2.score){
        var sD = confirm("You meddlesome muggles tied the game! Well, I thought ahead... \n time for the SUDDEN DEATH challenge! Click 'ok' to begin.");
        if (sD) {
          setTimeout(function(){window.location.href = "suddenDeath.html"}, 1500);
        }
      }
    }
