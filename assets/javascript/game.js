


// Take the array of letters and store as a string.  Return string to calling function.
function formatArray (word) {
  console.log("called formatArray");
    var dispWord = " ";
    for (var q = 0; q < word.length; q++) {
      if (word[q] == " ") { dispWord += "&nbsp&nbsp&nbsp";}
        else {
          dispWord += word[q] + " ";}
    }
  console.log("returning " + dispWord);
    return dispWord;
}




 // Sends current values to the web page including instructions, # wins, # losses, # guesses, lettr guessed .
function displayStatus(inst, win, loss, guess, lttr, word, cWord, display, res, imgDisplay) {

    console.log(res);
    var formatLetter = "";
     var showHeading;
      var audio;
     //Format and display name of show for heading if the game is over. Remove it if a new game is being played
    var formatWord = formatArray(word);
   
    console.log("display is " + display);
    if (display) {
     
      var cstring = "";
      for (var i = 0; i< cWord.length; i++) {
               cstring += cWord[i];}    

      console.log(cstring + "used to retrieve object");
      audio = new Audio(res[cstring].song);
      audio.play();
      
        imgDisplay =  res[cstring].picture;
         showHeading = formatArray(cWord); 
        console.log(imgDisplay +" is in imgDisplay  "+ " heading " + showHeading);
      

    } else {
        showHeading = " ";
          console.log(imgDisplay + " heading " + showHeading);
          imgDisplay = "../images/tv.jpg";
           // audio.pause()
         }

    
    
    // Take the array of guessed letters, format it and store as a string
    for (var r = 0; r < lttr.length; r++) {
      if (r > 1) {
        formatLetter += ", ";}
        formatLetter += lttr[r];    
    }

		document.getElementById ("showName").innerHTML = showHeading;   
    document.getElementById("myImg").src = "assets/images/"+imgDisplay;
    document.getElementById ("instruction").innerHTML = inst; 	
    document.getElementById ("winDisplay").innerHTML = win;   
    document.getElementById ("lossDisplay").innerHTML = loss;   
    document.getElementById ("wordDisplay").innerHTML = formatWord;   
    document.getElementById ("guessesDisplay").innerHTML = guess;   
    document.getElementById ("usedLetters").innerHTML = formatLetter; 
    return imgDisplay;
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
          var i = 1;
        var selectWord;
        console.log("enter while loop ");
        while (i > -1 ) {             //if index of 0 or greater returned, the word has been played
          console.log("while loop " + i);
           selectWord =  wordOptions[Math.floor(Math.random() * wordOptions.length)];     // Select a random word
           console.log("the word is " + selectWord);
           i = wordsPlayed.indexOf(selectWord); }  // check if the word has been used.  If it has, loop again.
           wordsPlayed.push(selectWord);

           console.log("word hasn't been used");
       
            currentWord = selectWord.split("");  // put the letters of the array into an array
               
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
      var imgDisplay;
     
      var wordOptions = ["Golden Girls", "The Cosby Show", "The Facts of Life", "Cheers", "Family Ties", "Growing Pains"];
      // var musicstored = "http://www.sitcomsonline.com/sounds/thegoldenpalace.mp3";
      var wordsPlayed = [];
      var guessCount = 10;
      var lettersGuess = []; // array of all letters guessed so far
      var currentWord = [" "];  // houses an array of the word being guessed
      var correctLetters = [" "]; //displays on screen to open and guessed letters in a word
      var lowerCaseWord;
      var displayWord = false;
       var results = {
            "Golden Girls" : {
                picture: "../images/goldengirls.jpg",
                song: "https://www.televisiontunes.com/uploads/audio/Golden Girls.mp3"
              },

             "The Cosby Show" : {
                picture: "../images/cosby.jpg",
                song: "https://www.televisiontunes.com/uploads/audio/The Cosby Show - 1984.mp3"
              },

            "The Facts of Life" : {
                picture: "../images/fol.jpg",
                song: "https://www.televisiontunes.com/uploads/audio/Facts Of Life.mp3"
              },

            "Cheers" : {
                picture: "../images/cheers.jpg",
                song: "https://www.televisiontunes.com/uploads/audio/Cheers - Short.mp3"
              },

            "Family Ties" : {
                picture: "../images/ties.jpg",
                song: "https://www.televisiontunes.com/uploads/audio/Family Ties.mp3"
              },

            "Growing Pains" : {
                picture: "../images/growing.jpg",
                song: "https://www.televisiontunes.com/uploads/audio/Growing Pains - Season 1.mp3"
              }


            };

    


 // Display initial instructs on the screen
  //  instruct = "Press any key to get started";
	 // displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters, currentWord, displayWord, results);
   
 
   // This function is run whenever the user presses a key 
   document.onkeyup = function(event) {
       userInp = event.keyCode;
       console.log(userInp + " userInp before transform" );
   
  
   
    // Check to see if this is the beginning of a new game and set up initial parameters
   if (firstClick == 0) {
        

          console.log("gameCount is " + gameCount);
         if (gameCount > wordOptions.length-1) {
             console.log("GAME IS OVER GAME IS OVER GAME IS OVER GAME IS OVER");
              instruct = "You have played too many times. ";
              instruct += "Get a Life!"
              document.getElementById ("instruction").innerHTML = instruct; 
               // displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters, currentWord, displayWord, imgDisplay);
              return;
           }
              
          console.log("inside firstclick = 0 and games left to play");
          guessCount = 10;
          lettersGuess = [" "]; // array of all letters guessed so far
          firstClick++;
          gameCount ++;
          displayWord = false;
          imgDisplay = "../images/fol.jpg";
          currentWord.length = 0  // houses an array of the word being guessed
          correctLetters.lenght = 0; //displays on screen to open and guessed letters in a word console.log("user key hit to start game game count" + gameCount);
          selectWord(wordsPlayed);

          setWordDisplay(currentWord);
           console.log("letters to be displayed returned to program "+ correctLetters.toString());
          instruct = "Please take a guess";
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

               // check to see if there are any letters not guessed by checking array for any underscores
              if (correctLetters.indexOf("_") == -1) {
              instruct = "GAME IS OVER!  YOU WON.  Press any key to continue.";
                    winCount++;
                    firstClick = 0;
                    displayWord = true;
                    
         
                 // check if user is out of guesses
              } else if (guessCount <= 0) {
                    instruct = "GAME IS OVER!  YOU LOST. Press any key to continue.";
                    
                    lossCount++;
                    firstClick = 0;
                    displayWord = true;
              }  
           
                 displayStatus(instruct, winCount, lossCount, guessCount, lettersGuess, correctLetters, currentWord, displayWord, results, imgDisplay);
          
       }
    

