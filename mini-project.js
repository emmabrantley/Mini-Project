var button1 = $('.button1');
button1.on("click", playSound);

function playSound(){
  var sound = new Audio("PokerChips.mp3");
  sound.play();
}
