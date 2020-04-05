const qwertyKeyBoard = document.querySelector('#qwerty');
const button = qwertyKeyBoard.getElementsByTagName('button');
const tries = document.getElementById('scoreboard');
const triesOl = tries.querySelector('ol');
const triesOLLI = triesOl.getElementsByClassName('.tries');
const triesHearts = document.querySelectorAll('.tries img');
const phraseDiv = document.querySelector('#phrase');
const ulPhrase = document.querySelector('#phrase ul');
const ulChildrenClassLetter = document.getElementsByClassName('letter');
const overlay = document.querySelector('#overlay');
const headline = overlay.firstElementChild;
const startButton = document.querySelector('.btn__reset');
let missed = 0;


triesOl.style.backgroundColor = "red";

























// HERE //////////////////////////
const phrases = [
    'I love you',
    'You do you',
    'Your Awesome',
    'Take Care',
    'God bless you'
];

// Removes Overlay when "Start Game" button is clicked
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});



/*==========================================================
function getRandomPhraseAsArray(arr) {
    // Function genereates a random number from 0 - array.length
    // to select which Index to use
    const arrIndexNum = randomNumIndexOfArr;
    const arrIndexSTR = arr[arrIndexNum];
// console.log(arrIndexSTR);

    // Function splits the random selected string and returns an array of 
    // characters
    const arrIndexSTRtoARR = arrIndexSTR.split('');
// console.log(arrIndexSTRtoARR);
    return arrIndexSTRtoARR;
}
// Call to function RETURNS an Array of characters of a Phrase 
// from a random Index position string
console.log(getRandomPhraseAsArray(phrases));
console.log(getRandomPhraseAsArray(phrases));
==============================================================*/
const getRandomPhraseAsArray = arr => {
    const myArr = [];
    // Function genereates a random number from 0 - arr.length
    // Random number generator from 0 - phrases.length
    const randomNumIndexOfArr = Math.floor(Math.random() * arr.length);
    // console.log(randomNumIndexOfArr);

    // to select which Index to use
    const arrIndexSTR = arr[randomNumIndexOfArr];
    console.log(arrIndexSTR);

    // Function splits the random selected string and returns an array of 
    // characters
    const arrIndexSTRtoARR = arrIndexSTR.split('');
    console.log(arrIndexSTRtoARR);
    for ( let i = 0; i < arrIndexSTRtoARR.length; i += 1 ) {
        myArr.push(arrIndexSTRtoARR[i]);
    }
    console.log(myArr);
// console.log(arrIndexSTRtoARR);
    return arrIndexSTRtoARR;
}
// Call to function RETURNS an Array of characters of a Phrase 
// from a random Index position string
// console.log(getRandomPhraseAsArray(phrases));

//  getRandomPhraseAsArray(phrases);
let phraseArr = getRandomPhraseAsArray(phrases);





/*==================================================
function addPhraseToDisplay(arr) {
    for ( let i = 0; i < arr.length; i += 1 ) {
        const li = document.createElement("LI");
        li.textContent = arr[i];
        if ( li.textContent === " " ) {
            li.className = "space";
        }  else {
            li.className = "letter";
        }      
        console.log(li);
        ulPhrase.appendChild(li);
    }
}
// addPhraseToDisplay(getRandomPhraseAsArray);
addPhraseToDisplay(getRandomPhraseAsArray(phrases));
====================================================*/
const addPhraseToDisplay = arr => {
    for ( let i = 0; i < arr.length; i += 1 ) {
        const li = document.createElement("LI");
        li.textContent = arr[i];
        if ( li.textContent === " " ) {
            li.className = "space";
        }  else {
            li.className = "letter";
        }      
        console.log(li);
        ulPhrase.appendChild(li);
    }
}
// addPhraseToDisplay(getRandomPhraseAsArray);
// addPhraseToDisplay(getRandomPhraseAsArray(phrases));
addPhraseToDisplay(phraseArr);



// Check if a letter is in the phrase
const checkLetter = button => {
    const selectedLetter = button;
    let letter = null;
    
    for ( let i = 0; i < ulChildrenClassLetter.length; i += 1 ) {
        let phraseLetter = ulChildrenClassLetter[i];
        if ( phraseLetter.textContent.toLowerCase() === selectedLetter.textContent.toLowerCase() ) {
            phraseLetter.className += " show";
            letter = phraseLetter;
        }
    }
    return letter;
}




// changes overlay based on game result
const game_outcome = (result)=> {
    overlay.style.display = "";
    if (result === "win"){
      overlay.setAttribute("class", "win");
      headline.textContent = "You WIN!!";
      startButton.textContent = "Play again";
    } else if ( result === "lose") {
        overlay.setAttribute("class", "lose");
        headline.textContent = "You LOSE.";
        startButton.textContent = "Play again";
    }
  }


  
  // checks if the user has won or lost
  const checkWin = ()=>{
    const phrase_show = document.querySelectorAll("li[class*=show]");
    if (phrase_show.length === ulChildrenClassLetter.length) {
      game_outcome("win");
    } else if ( missed >= 5 ) {
      game_outcome("lose");
    }
  }



  // reset game function - resets counter, phrase, buttons, lives
const reset_game = ()=> {
    missed = 0;
    while (ulPhrase.children.length > 0) {
      ulPhrase.removeChild(ulPhrase.children[0]);
    }
    for ( let i = 0 ; i < button.length ; i++ ) {
      button[i].removeAttribute("class");
      button[i].removeAttribute("disabled");
    }
    for ( let i = 0 ; i < triesHearts.length ; i++ ) {
      triesHearts[i].setAttribute("src", "images/liveHeart.png");
    }
    phraseArr = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArr);
    // ulChildrenClassLetter = document.getElementsByClassName('letter');
  }
  

  // controls to start and restart the game
overlay.addEventListener("click", (event) => {
    const e = event.target;
    if (e.tagName.toLowerCase() === "a") {
      if (overlay.className === "start") {
        overlay.style.display = "none";
      } else {
          overlay.style.display = "none";
          reset_game();
      } 
    }
  })
  





qwertyKeyBoard.addEventListener('click', (event) => {
    const e = event.target;
    if ( e.tagName === "BUTTON") {
        e.className = "chosen";
        e.disabled = true;
        const letterFound = checkLetter(e);
    if (letterFound === null) {
        triesHearts[missed].setAttribute('src', 'images/lostHeart.png');
        missed += 1;
        console.log(missed);
      }
    }
    checkWin();
});





















































































'I Love You',
    'Goodmorning',
    'Honey Im Home',
    'Are we there yet',
    'Big Ben Parliment Kids'
