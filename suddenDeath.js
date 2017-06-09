
// var sd1 = '<img src="./images/suddenDeathImage.gif">'
// var sd2 = '<img src="./images/suddenDeathImage2.gif">'
// var sd3 = '<img src="./images/suddenDeathImage3.gif">'
//
//
// var displayImages = [
//   sd1,
//   sd2,
//   sd3,
// ];


var player1= {
  clicked: 0
}

var player2= {
  clicked: 0
}



function startSDeath(){
setTimeout(function(){
  $('#suddenDeathImage').show()
}, 2000);
  //chooses between array images randomlly
// console.log('test');
//   var x = Math.floor(Math.random()* 5);
//   document.getElementById('sdImageD').innerHTML = displayImages[x];
}
//start button function
$('#startSD').click(startSDeath)

//player buttons
$('#player1SD').click(player1Answer)
$('#player2SD').click(player2Answer)


//Was unable to get this functioning but goal is to implement logic to check answer for all images in array
// function player1Answer(){
//   player1.clicked = player1.clicked +1;
//   console.log(player1.clicked);
//   var displayed = document.getElementById('sdImageD');
//   var suddenDeathAnswer = prompt("Your answer, please...");
//   console.log('test1');
//   if (displayed.innerHTML = sd1 && suddenDeathAnswer.toLowerCase() == "luna lovegood"
//   || displayed.innerHTML == sd2 && suddenDeathAnswer.toLowerCase()== "sirius black"
//   || displayed.innerHTML == sd3 && suddenDeathAnswer.toLowerCase() == "cedric diggory"){
//     alert("Player 1 wins the game!");
//   } else if (player2.clicked == 0 && displayed.innerHTML == sd1 && suddenDeathAnswer.toLowerCase() !== "luna lovegood"
//   || player2.clicked == 0 && displayed.innerHTML == sd2 && suddenDeathAnswer.toLowerCase() !== "sirius black"
//   ||player2.clicked == 0 && displayed.innerHTML == sd3 && suddenDeathAnswer.toLowerCase() !== "cedric diggory"){
//     console.log('test2');
//     removeClick1();
//     alert("Wrong answer, Player 1.\n Player 2, you get one shot to win!");
//   } else if (player1.clicked > 0 && player2.clicked > 0 && displayed.innerHTML == sd1 && suddenDeathAnswer.toLowerCase() !== "luna lovegood"
//   || player1.clicked > 0 && player2.clicked > 0 && displayed.innerHTML == sd2 && suddenDeathAnswer.toLowerCase() !== "sirius black" || player1.clicked > 0
//   && player2.clicked > 0 && displayed.innerHTML == sd3 && suddenDeathAnswer.toLowerCase() !== "cedric diggory"){
//     console.log('test3');
//     prompt("You have tied again, you hot mess of muggles! \nWell, you can either click ok and face off again, or click cancel and the end the game both losers.")
//     location.reload();
//   }
// }
function player1Answer(){
  player1.clicked = player1.clicked +1;
  console.log(player1.clicked);
  var resonse;
  var suddenDeathAnswer = prompt("Your answer, please...");
  if (suddenDeathAnswer.toLowerCase() =="luna lovegood"){
    alert("Player 1 wins the game!");
  } else if (player2.clicked == 0 && suddenDeathAnswer.toLowerCase !== "luna lovegood"){
    removeClick2();
    alert("Wrong answer, Player 1.\n Player 2, you get one shot to win!");
  } else if (player1.clicked > 0 && player2.clicked > 0 && suddenDeathAnswer.toLowerCase !== "luna lovegood"){
    alert("You have tied again, you hot mess of muggles! \n It looks like this game will end in a tie! You are a well matched pair of muggles! ");
  }
}

function player2Answer(){
  player2.clicked = player2.clicked +1;
  console.log(player2.clicked);
  var resonse;
  var suddenDeathAnswer = prompt("Your answer, please...");
  if (suddenDeathAnswer.toLowerCase() =="luna lovegood"){
    alert("Player 2 wins the game!");
  } else if (player1.clicked == 0 && suddenDeathAnswer.toLowerCase !== "luna lovegood"){
    removeClick2();
    alert("Wrong answer, Player 2.\n Player 1, you get one shot to win!");
  } else if (player1.clicked > 0 && player2.clicked > 0 && suddenDeathAnswer.toLowerCase !== "luna lovegood"){
    alert("You have tied again, you hot mess of muggles! \n It looks like this game will end in a tie! You are a well matched pair of muggles! ");
  }
}

function removeClick1(){
  $('#player1SD').off('click');
}

function removeClick2(){
  $('#player1SD').off('click');
}
