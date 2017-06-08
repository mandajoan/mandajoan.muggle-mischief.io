// SET UP TWO PLAYERS, current player,  AND SCORE SYSTEM

var p1TrollImg = '<img src ="./images/p1troll.png" class="trolls">'
var p2TrollImg = '<img src ="./images/p2troll.png" class="trolls">'

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


var currentPlayer = player1;

function switchTurns() {
   if(currentPlayer == player1) {
     currentPlayer = player2;
   } else {
     currentPlayer = player1;
   }
  }


// GOLDEN SNITCH LOGIC
//variables
var snitch = document.querySelector('#snitch');
var button = document.querySelector('#snitchStart');
var self = this;


//timer
var seconds = 0;
var timer;



function startTimer (){
  timer = setInterval(function(){
    seconds++;
    $('#s').text(seconds);
    console.log(seconds);
  }, 1000)
}


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
///if i have time figure out how to reset just the div not the whole page
function resetBoard(){
location.reload()
 }


//snitch functions for movement
function moveby10(){
  howManyPx += 10;
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

function startSnitchGame(){
  setTimeout (function(){
    startTimer()}, 500);
    snitch.addEventListener('click', moveSnitchRandom);
}

button.addEventListener('click', startSnitchGame);

// Two players, player 1 goes first
// Set up timer for game
// log time and store for each player
// fastest time gets a point for that player
//
// function on click even
// snitch disappears and moves to random location
// timer starts
//
// on mouse over, snitch appears, timer stops
// time saved
//
// game resets for next player
// repeat game LOGIC
// give fastest time point to that player
// show through prompt
///////////////////////////////////////////////////////////////////////

//Tic Tac Troll LOGIC

// two players
// assign troll images
// current player

var boxes = document.querySelectorAll('#board div');
var resetButtonT = document.querySelector('#resetButtonTtt');
var originalState = $("#wizardTttBoard").clone();

//loop for event listener (working)
for(var i = 0; i <boxes.length; i += 1){
  boxes[i].addEventListener('click', boxClickHandler)

}


///Functions for game LOGIC

function resetTtt () {
    $("#wizardTttBoard").replaceWith(originalState.clone());
    console.log('board reset');
  }

resetButtonT.addEventListener('click', resetTtt)

//prevent box for being double clicked (working)
function boxClickHandler (){
  if(!this.innerHTML){
    this.innerHTML = currentPlayer.image
  }
  if(checkWinnerTtt ()) {
    lockBoard()
  }
  switchTurns()
  }

//check for win
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

//prevent clicks (working)
function lockBoard() {
        for(var i = 0; i < boxes.length; i += 1) {
          boxes[i].removeEventListener('click', boxClickHandler);
        }
      }
//
// function addScore (){
//   if (checkWinnerTtt == true){
//     currentPlayer.score = currentPlayer.score+ 1
//     console.log("winning pattern")
//   } else {
//   alert ("You mucked it up, muggles! Tie game. Press reset!");
//   console.log("tie")
//   }
// }


// deactivate box once clicked
// set innerhtml to troll images
//
// check for winner each time
// propt if there is a winner
// if not then continue game
// or reset board if no moves left
//
// score added to winner


// //Potions Puzzle
var riddleStartButton = $('#startRiddle');
var riddleResetButton = $('#resetRiddle');
var riddleBoard = $('#riddleBoard');
var originalRiddleBoard = $("#riddleBoard").clone();



function startRiddle(){
  setTimeout (function(){
    $('#riddle').show()
  }, 1000);
}

function resetRiddleBoard(){
    $("#riddleBoard").replaceWith(originalRiddleBoard.clone());
    currentPlayer = player2;
  }



riddleStartButton.click(startRiddle);

riddleResetButton.click(resetRiddleBoard);

var p1RiddleScore = 0;
var p2RiddleScore = 0;


function riddleFunc (){
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

function winnerOrTie(){
  if (p1RiddleScore && p2RiddleScore && player1.score > player2.score){
        alert("Player 1 you are the winning muggle! with a score of" + " " + player1.score + "\n Player 2, you lose with a score of" + " " + player2.score);
      } else if (p1RiddleScore && p2RiddleScore && player1.score < player2.score){
        alert("Player 2 you are the winning muggle! with a score of" + " "+ player2.score + "\n Player 1, you lose with a score of" + " "+ player1.score);
      } else if (p1RiddleScore && p2RiddleScore  && player1.score == player2.score){
        var sD = confirm("You meddlesome muggles tied the game! Well, I thought ahead... \n time for the SUDDEN DEATH challenge! Click 'ok' to begin.");
        if (sD) {
          window.location.href = "suddenDeath.html";
        }
      }
    }



// set up turn for each player
// score 1 pt if win
// is lose (click two bad potions) subtract 2 pts
// log score for each
//
// timer for alternate score??( if both players get the answer)
//
// add event listener to each potion bottle
// answer potion= prompt win
// add score
// stop timer
//
// non winner
// prompt lose
// subtract 2 points
// stop timer

///end of game
// winner prompt
//
// most points = winning player
