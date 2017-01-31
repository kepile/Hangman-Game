
      // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
      
	function displayInst(dis) {
		document.getElementById ("instruction").innerHTML = dis;} 	
 

  function initializeGame(currentWord) {
     console.log("initializing game");
     currentWord =  wordOptions[Math.floor(Math.random() * wordOptions.length)];
            console.log(currentWord);
            instruct = "Please take a guess";
            displayInst(instruct);
            for (var i = Things.length - 1; i >= 0; i--) {
              currentWord.push[letter]
            }
     }
  

	 

      var instruct;
      var wins = 0;
      var wordOptions = ["incredible", "edible"];
      var guesses = 10;
      var lettersGuess = [];
      var currentWord = [];

   instruct = "Press any key to get started";
	 displayInst(instruct);

 // This function is run whenever the user presses a key at the beginning of the game
   document.onkeyup = function(event) {
		  console.log("user key hit to start game");
         document.onkeyup = function(event) {
          initializeGame(currentWord);
          document.onkeyup = function(event) {
          var userInp = event.key;
            

           }
}
           
