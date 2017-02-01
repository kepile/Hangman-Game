
      // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
      
	function displayStatus(inst, win, loss, guess, lttr, word) {
		document.getElementById ("instruction").innerHTML = inst; 	
    document.getElementById ("winDisplay").innerHTML = win;   
    document.getElementById ("lossDisplay").innerHTML = loss;   
    document.getElementById ("wordDisplay").innerHTML = word;   
    document.getElementById ("guessesDisplay").innerHTML = guess;   
    document.getElementById ("usedLetters").innerHTML = lttr;   
    } 





  function selectWord(wordsPlayed) {
     console.log(" Hello initializing game");
     console.log("lenght " + wordsPlayed.length);
     // if wordsPlayed.length <== wordsOptions.length { // check to see if there are any words left to play
 
// select a word that has not been used already and check if any words available ***not done yet
        var i = 1;
         var selectWord;
        console.log("enter while loop ");
        while (i > -1 ) {             //if index of 0 or greater returned, the word has been played
          console.log("while loop " + i);
           selectWord =  wordOptions[Math.floor(Math.random() * wordOptions.length)];     // Select a random word
           console.log("the word is " + selectWord);
           i = wordsPlayed.indexOf(selectWord) }  // check if the word has been used.  If it has, loop again.
   
           console.log("word hasn't been used")
       
            currentWord = selectWord.split("");  // put the letters of the array into an array
 
            console.log(selectWord, currentWord[1]);
 
               //  send the selected word back to the game


            // }
      // else {document.write("GAME OVER");}
     }
  


  function setWordDisplay(currentWord) {
            //  Set up the word as it will be displayed on the screen
           var arrayhold = [];
           console.log("populating __" + currentWord.length)
            for (var i = 0; i < currentWord.length; i++) {                   
                   arrayhold[i] = "_";   
                    console.log(arrayhold[i])}  
                  correctLetters = arrayhold;
                  console.log("letters to be displayed inside function ");
                   return correctLetters;
                   // return correctLetters;
              
}
	 

      var instruct;
      var winCount = 0;
      var lossCount = 0;
      var wordOptions = ["incredible", "edible"];
      var wordsPlayed = [];
      var guessCount = 10;
      var lettersGuess = []; // array of all letters guessed so far
      var currentWord;  // houses an array of the word being guessed
      var correctLetters; //displays on screen to open and guessed letters in a word
    

   instruct = "Press any key to get started";
	 displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters);

 // This function is run whenever the user presses a key at the beginning of the game
   document.onkeyup = function(event) {
      guessCount = 10;
      lettersGuess = [" "]; // array of all letters guessed so far
      currentWord.length = 0  // houses an array of the word being guessed
      correctLetters.lenght = 0; //displays on screen to open and guessed letters in a word
    
		  console.log("user key hit to start game");
      selectWord(wordsPlayed);
            console.log("word back to key" + currentWord.toString());
      setWordDisplay(currentWord);
               console.log("word back to key " + correctLetters.toString());
     var  instruct = "Please take a guess";
      displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters);
      

   document.onkeyup = function(event) {
          var userInp = event.key;
          console.log("game being played.  User input " + userInp);
          console.log("lettersGuess index " + lettersGuess.indexOf(userInp));

      if (lettersGuess.indexOf(userInp) == -1 ) { //if letter not already guessed
       //Sets loop for as long as a guess is available
      // for (n = guessCount; n > 0; n--) { //do it here or at the end?
              console.log("letter was not guessed already");
              lettersGuess.push(userInp);   // add letter to array of guesses
                
              if (currentWord.indexOf(userInp) !== -1) { //check to see if the letter input is in word being guessed
                console.log("letter is in word");
                for (var c = 0; c < currentWord.length; c++) {
                        if (currentWord[c] == userInp) {
                          correctLetters[c] = userInp;
                        }
                }
              } else {
                console.log("letter is not in word");
                guessCount--;                 // subtract # of guesses
              }
        } else {
          console.log("letter was guessed already");
        
      

        

           }

      if (correctLetters.indexOf("_") == -1) {
      instruct = "GAME IS OVER!  YOU WON";

      } else if (guessCount <= 0) {
        instruct = "GAME IS OVER!  YOU LOST.  THE WORD WAS";
      }  
   
         displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters);}
       }
    

           
// var str = "Hello world, welcome to the universe.";
// var n = str.indexOf("e"); 