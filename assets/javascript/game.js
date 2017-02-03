
      // Sends current values to the web page including instructions, # wins, # losses, # guesses, lettr guessed .
      
	function displayStatus(inst, win, loss, guess, lttr, word, cWord) {
    var formatWord = "";
    var formatLetter = "";
    

// Take the array of correctly guessed letters and store as a string
    for (var q = 0; q < cWord.length; q++) {
      console.log(cWord[q] + " cword - " + q + "   word - " + word[q]);
      if (cWord[q] == " ") { formatWord += "&nbsp&nbsp&nbsp";}
        else {
          formatWord += word[q] + " ";}
       console.log("++++++++ " + formatWord + " is in formatWord");
    }

console.log("++++++++ " + formatWord + " is in formatWord");

// Take the array of guessed letters, format it and store as a string
    for (var r = 0; r < lttr.length; r++) {
      if (r > 1) {
        console.log(r + " is adding a comma formatLetter = " + formatLetter);
        formatLetter += ", ";}

      formatLetter += lttr[r];    
    }


		document.getElementById ("instruction").innerHTML = inst; 	
    document.getElementById ("winDisplay").innerHTML = win;   
    document.getElementById ("lossDisplay").innerHTML = loss;   
    document.getElementById ("wordDisplay").innerHTML = formatWord;   
    document.getElementById ("guessesDisplay").innerHTML = guess;   
    document.getElementById ("usedLetters").innerHTML = formatLetter; 
    // document.getElementByID ("music").innerHTML = 
}


// Check to see if input was a capital or lowercase letter
  function checkUserInput (inp) {
    if ((inp > 64 && inp <91) || (inp > 96 && inp < 123)) {
      return true;
      console.log("input is true");
      }
      else {return false; }
      console.log("input is false");
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
           i = wordsPlayed.indexOf(selectWord); }  // check if the word has been used.  If it has, loop again.
           wordsPlayed.push(selectWord);

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
                   if (currentWord[i] == " ") {
                    arrayhold[i] = currentWord[i];

                   } else { 

                    arrayhold[i] = "_";}   

                    console.log(arrayhold[i])}  
                  correctLetters = arrayhold;
                  console.log("letters to be displayed inside function "+ correctLetters.toString());
                   return correctLetters;
                  
              
  }




//  BEGIN EXECUTION SECTION 
	 
      // var counters {};
      var instruct;
      var firstClick = 0;
      var instruct;
      var winCount = 0;
      var lossCount = 0;
      var gameCount = 0;
      var maxGames = 4;
      var wordOptions = ["Golden Girls", "The Cosby Show", "The Facts of Life", "Cheers"];
      // var musicstored = "http://www.sitcomsonline.com/sounds/thegoldenpalace.mp3";
      var wordsPlayed = [];
      var guessCount = 10;
      var lettersGuess = []; // array of all letters guessed so far
      var currentWord = [" "];  // houses an array of the word being guessed
      var correctLetters = [" "]; //displays on screen to open and guessed letters in a word
      var lowerCaseWord;
    

 // Display initial instructs on the screen
 
   instruct = "Press any key to get started";
	 displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters, currentWord);

 
 // This function is run whenever the user presses a key 
   document.onkeyup = function(event) {
 
       userInp = event.keyCode;
     
      console.log(userInp + " userInp before transform" );
   
  
   
// Check to see if this is the beginning of a new game and set up initial parameters
   if (firstClick == 0) {
          console.log("gameCount is " + gameCount);
         if (gameCount >= maxGames) {
             console.log("GAME IS OVER GAME IS OVER GAME IS OVER GAME IS OVER");
               
              
              instruct = "You have played too many times.  Get a Life!";
              displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters, currentWord);
               var targetDiv = document.getElementById("instruction");
               targetDiv.setAttribute("jumbotron", "background-color: red;");
              return;
           }
              
          console.log("inside firstclick = 0 and games left to play");
          guessCount = 10;
          lettersGuess = [" "]; // array of all letters guessed so far
          firstClick++;
          gameCount ++;

          currentWord.length = 0  // houses an array of the word being guessed
          correctLetters.lenght = 0; //displays on screen to open and guessed letters in a word console.log("user key hit to start game game count" + gameCount);
          selectWord(wordsPlayed);

          setWordDisplay(currentWord);
           console.log("letters to be displayed returned to program "+ correctLetters.toString());
          instruct = "Please take a guess";
          // displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters, currentWord);
        }


    else if  (checkUserInput(userInp)) {

         userInp = String.fromCharCode(event.keyCode).toLowerCase(); 
         console.log("*****" +userInp + " userInp after transform" );
     
          
          console.log("game being played.  User input " + userInp);
          console.log("lettersGuess index " + lettersGuess.indexOf(userInp));
          console.log("message displayed " + instruct);

          if (lettersGuess.indexOf(userInp) == -1 ) { //if letter not already guessed
              console.log("letter was not guessed already");

              lettersGuess.push(userInp);   // add letter to array of guesses
                
              //check to see if the letter input is in word being guessed and populate it to be displayed
                
              var found = false;
                for (var c = 0; c < currentWord.length; c++) {
                        var lowerCase = currentWord[c].toLowerCase();
                        if (lowerCase == userInp) {
                          console.log(correctLetters[c]);
                          correctLetters[c] = currentWord[c];
                          console.log("letter is in word");
                          found = true;

                        }
                }
              if (!found) {
                console.log("letter is not in word");
                guessCount--;                 // subtract # of guesses
              }
          
        
          }
        }
                console.log("finished loop");

              if (correctLetters.indexOf("_") == -1) {
              instruct = "GAME IS OVER!  YOU WON";
                    winCount++;
                    firstClick = 0;
                    
         

              } else if (guessCount <= 0) {
                    instruct = "GAME IS OVER!  YOU LOST.  The word was " + currentWord + ".  Press any key to continue.";
                    
                    lossCount++;
                    firstClick = 0;
                    
              }  
           
                 displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters, currentWord);
          
       }
    



           
// var str = "Hello world, welcome to the universe.";
// var n = str.indexOf("e"); 