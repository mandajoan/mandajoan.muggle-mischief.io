function startSDeath(){
setTimeout(function(){
  $('#suddenDeathImage').show();
}, 1500);
}

$('#startSD').click(startSDeath)
$('#player1SD').click(player1Answer)

function player1Answer(){
  var resonse;
  var suddenDeathAnswer = prompt("Your answer, please...");
  if (suddenDeathAnswer.toLowerCase() =="Luna Lovegood"){
    alert("Player 1 wins the game!");
  } else {
    alert("Wrong answer, Player 1.\n Player 2, you get one shot to win!");
    $('player1SD').off()
  }
}
