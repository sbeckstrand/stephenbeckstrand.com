document.getElementsByClassName("frontPage")[0].classList.toggle('open');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomColor() {
  characters = "0123456789ABCDEF";
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomColor = randomColor();


//Get a random number within a range of two numbers provided. Both the minimum and maximum number provided will be included as numbers in the range.


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Add numbers to five new arrays based on the column name "B", "I", "N", "G", and "O". These numbers are assigned by pulling the letter from an existing array in a variable called "letters" and then assigns 5 numbers within a range of 15 numbers by using the previously defined 'getRandomNumber'. On each loop, the minimum and maximum number are increased by 15.
function assignNumbers() {
  const letters = ['b', 'i', 'n', 'g', 'o'];
  x = 1;

  for (let y = 0; y < 5; y++) {
    eval(letters[y] + "=" + "[]");
    let currentArray = eval(letters[y])
    while (currentArray.length < 5) {
      let newNumber = getRandomNumber(x, (x + 14))
      if (currentArray.includes(newNumber) == false) {
        currentArray.push(newNumber);
      }
    }
    x = x + 15;
  }
  n[2] = '<i class="fas fa-star"></i>';
}


assignNumbers();

//Front Page

//Highlight selected GameMode
let gameModeButton = document.getElementsByClassName("grid-border");
function highlightGameMode() {
  for (let i = 0; i < 4; i++) {
    gameModeButton[i].removeAttribute('id');
  }
  document.getElementsByClassName("btn")[0].style.display="block";
  this.id = "selected";
  console.log(this);
  gamemode = this.nextElementSibling.innerHTML.toLowerCase();
}


Array.from(gameModeButton).forEach(function(element) {
  element.addEventListener('click', highlightGameMode);
});


opponents = 1;
function updateOpponentCount() {
  document.getElementById("opponents").innerHTML = opponents;
};
updateOpponentCount();

document.getElementById("minus").addEventListener("click", function(){
  if (opponents >= 2) {
    opponents = opponents - 1;
    updateOpponentCount();
  }
});

document.getElementById("plus").addEventListener("click", function(){
  if (opponents <= 19) {
    opponents = opponents + 1;
    updateOpponentCount();
  }
});

let startButton = document.getElementsByClassName("start")[0];
startButton.style.display="none";


startButton.addEventListener("click", function(){

  startGame();
})

function startGame() {

    //Hide initial page content.
  document.getElementsByClassName("frontPage")[0].style.display="none";
  $('html,body').scrollTop(0);
  document.getElementsByClassName("gamePage")[0].classList.toggle('open');

  const letters = ['b', 'i', 'n', 'g', 'o'];

  //Push table(s)/new content and assigned values to DOM
  for (let h = 0; h < 5; h++) {
    let base = h;
    selectedArray = letters[h];
    for (let j = 0; j < 5; j++) {
      document.getElementsByClassName("item")[base].innerHTML=eval(selectedArray)[j];
      base = base + 5
    }
  }

  for ( let a = 0; a < opponents; a++) {
    assignNumbers();
    const letters = ['b', 'i', 'n', 'g', 'o'];

    newCol = document.createElement("div");
    newOGrid = document.createElement("div");
    newGrid = document.createElement("div");
    newCol.className = "opponentCol col-lg-4 col-md-6";
    newOGrid.className = "opponentGrid";
    newGrid .className = "grid";

    document.getElementsByClassName("opponent-row")[0].appendChild(newCol);
    document.getElementsByClassName("opponentCol")[a].appendChild(newOGrid);
    document.getElementsByClassName("opponentGrid")[a].appendChild(newGrid);
    newValue = 0
    for (let h = 0; h < 5; h++) {

      for (let j = 0; j < 5; j++) {

        selectedArray = letters[j];
        newDiv = document.createElement("div");
        newDiv.className = "item";
        document.getElementsByClassName("grid")[a + 1].appendChild(newDiv);
        newDiv.innerHTML=eval(selectedArray)[newValue]
      }
      newValue++;
    }

  }
}

function toggleOpponents() {
  document.getElementsByClassName("opponentButton")[0].addEventListener("click", function(){
    document.getElementsByClassName("opponent-row")[0].classList.toggle('open');
  }
)};

toggleOpponents();

currentNumberStatus = "on"

async function randomCycle() {
  randomNumber = 0;
  for (let randomCounter = 1; randomCounter < 15; randomCounter++ ) {
    randomNumber = getRandomNumber(1, 75);
    const letters = ['B', 'I', 'N', 'G', 'O'];
    randomLetterNumber = getRandomNumber(0, 4)
    randomLetter = letters[randomLetterNumber]
    document.getElementsByClassName("currentNumber")[0].innerHTML = randomLetter + " " + randomNumber;
    await sleep(100);
  }
  clickHandler();
}


let clickHandler = function (event) {

  while (usedNumbers.length < 75) {
    // randomCycle();
    const letters = ['b', 'i', 'n', 'g', 'o'];
    currentNumber = getRandomNumber(1, 75);
    if (usedNumbers.includes(currentNumber) == false) {
      if (currentNumber >= 1 && currentNumber <= 15) {
        row = "B";
      } else if (currentNumber >= 16 && currentNumber <= 30) {
        row = "I";
      } else if (currentNumber >= 31 && currentNumber <= 45) {
        row = "N";
      } else if (currentNumber >= 46 && currentNumber <= 60) {
        row = "G";
      } else if (currentNumber >= 61 && currentNumber <= 75) {
        row = "O";
      }
      document.getElementsByClassName("currentNumber")[0].innerHTML = row + " " + currentNumber;
      checkNumbers();
      usedNumbers.push(currentNumber);
      break;
    }
  }
}

usedNumbers = [];
function newNumber() {
  currentNumberClass = document.getElementsByClassName("currentNumber")[0];

  currentNumberClass.addEventListener("click", randomCycle, false);

};

newNumber();


function checkNumbers() {
  opponentGrids = document.getElementsByClassName("opponentGrid");
  userItems = document.getElementsByClassName("mainGrid")[0].getElementsByClassName("item");

  userItems[12].style.backgroundColor=randomColor;

  for (let i = 0; i < userItems.length; i++) {
    if (userItems[i].innerHTML == String(currentNumber)) {
      userItems[i].classList.toggle("highlighted");
      currentNumberClass.classList.toggle("on");
      currentNumberClass.classList.toggle("off");
      currentNumberClass.removeEventListener("click", clickHandler, false);
      selectHighlighted();
      // userItems[i].style.backgroundColor=randomColor;
    }
  }

  for (let i = 0; i < opponentGrids.length; i++) {
    opponentItems = opponentGrids[i].getElementsByClassName("item");
    opponentItems[12].style.backgroundColor=randomColor;
    for (let y = 0; y < opponentItems.length; y++) {


      if (opponentItems[y].innerHTML == String(currentNumber)) {
        opponentItems[y].style.backgroundColor=randomColor;
      }
    }
  }

  if (document.getElementsByClassName("highlighted").length == 0) {
    addBingos();
  }
}

function selectHighlighted() {
  highlighted = document.getElementsByClassName("highlighted")[0];
  highlighted.addEventListener("click", function _listener() {
    highlighted.style.backgroundColor=randomColor;
    highlighted.classList.toggle("highlighted");
    currentNumberClass.classList.toggle("off");
    currentNumberClass.classList.toggle("on");
    newNumber();
    addBingos();

    highlighted.removeEventListener("click", _listener, true);
  }, true);
}

const pictureframeArray = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24];
function addBingos() {
  players = document.getElementsByClassName("grid");
  for (let i = 0; i < players.length; i++) {
    items = players[i].getElementsByClassName("item");
    eval("player" + i + "= []");
    eval("bingoCount" + i + "= 0");
    eval("pictureframeCount" + i + "= 0");
    for (let j = 0; j < items.length; j++) {
      if (items[j].style.backgroundColor != "") {
        eval("player" + i).push(j);
      }
    }

    currentPlayer = eval("player" + i);
    currentCount =  eval("bingoCount" + i);
    currentPictureframeCount = eval("pictureframeCount" + i);
    // 0, 1, 2, 3, 4
    if (currentPlayer.includes(0) && currentPlayer.includes(1) && currentPlayer.includes(2) && currentPlayer.includes(3) && currentPlayer.includes(4)) {
      currentCount++
    }

    // 5, 6, 7, 8, 9
    if (currentPlayer.includes(5) && currentPlayer.includes(6) && currentPlayer.includes(7) && currentPlayer.includes(8) && currentPlayer.includes(9)) {
      currentCount++
    }
    // 10, 11, 12 , 13, 14
    if (currentPlayer.includes(10) && currentPlayer.includes(11) && currentPlayer.includes(12) && currentPlayer.includes(13) && currentPlayer.includes(14)) {
      currentCount++
    }
    // 15, 16, 17, 18, 19
    if (currentPlayer.includes(15) && currentPlayer.includes(16) && currentPlayer.includes(17) && currentPlayer.includes(18) && currentPlayer.includes(19)) {
      currentCount++
    }
    // 20, 21, 22, 23, 24
    if (currentPlayer.includes(20) && currentPlayer.includes(21) && currentPlayer.includes(22) && currentPlayer.includes(23) && currentPlayer.includes(24)) {
      currentCount++
    }
    // 0, 5, 10, 15, 20
    if (currentPlayer.includes(0) && currentPlayer.includes(5) && currentPlayer.includes(10) && currentPlayer.includes(15) && currentPlayer.includes(20)) {
      currentCount++
    }
    // 1, 6, 11, 16, 21
    if (currentPlayer.includes(1) && currentPlayer.includes(6) && currentPlayer.includes(11) && currentPlayer.includes(16) && currentPlayer.includes(21)) {
      currentCount++
    }
    // 2, 7, 12, 17, 22
    if (currentPlayer.includes(2) && currentPlayer.includes(7) && currentPlayer.includes(12) && currentPlayer.includes(17) && currentPlayer.includes(22)) {
      currentCount++
    }
    // 3, 8, 13, 18, 23
    if (currentPlayer.includes(3) && currentPlayer.includes(8) && currentPlayer.includes(13) && currentPlayer.includes(18) && currentPlayer.includes(23)) {
      currentCount++
    }
    // 4, 9, 14, 19, 24
    if (currentPlayer.includes(4) && currentPlayer.includes(9) && currentPlayer.includes(14) && currentPlayer.includes(19) && currentPlayer.includes(24)) {
      currentCount++
    }

    // 0, 6, 12, 18, 24
    if (currentPlayer.includes(0) && currentPlayer.includes(6) && currentPlayer.includes(12) && currentPlayer.includes(18) && currentPlayer.includes(24)) {
      console.log("This works P" + i);
      currentCount++
    }

    // 4, 8, 12 16, 20
    if (currentPlayer.includes(4) && currentPlayer.includes(8) && currentPlayer.includes(12) && currentPlayer.includes(16) && currentPlayer.includes(20)) {
      console.log("this one workds too P" + i);

      currentCount++
    }


    eval("bingoCount" + i + "= currentCount");

    for (let z = 0; z < currentPlayer.length; z++) {
      if (pictureframeArray.includes(currentPlayer[z])) {
        currentPictureframeCount++;
      }
    }


    eval("pictureframeCount" + i + "= currentPictureframeCount");
    // (pictureframe) 0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 21


  }

  checkPlayerWin()
}

function checkPlayerWin() {
  players = document.getElementsByClassName("grid");
  for (let d = 0; d < players.length; d++) {
    if (gamemode == "single") {
      if (eval("bingoCount" + d) > 0 ) {
        if (d == 0) {
          youWin();
        } else {
          youLost();
        }
      }
    }
    else if (gamemode == "double") {
      if (eval("bingoCount" + d) > 1 ) {
        if (d == 0) {
          youWin();
        } else {
          youLost();
        }

      }
    }
    else if (gamemode == "pictureframe") {
      if (eval("pictureframeCount" + d) == 16 ) {
        if (d == 0) {
          youWin();
        } else {
          youLost();
        }
      }
    }
    else if (gamemode == "blackout") {
      if (eval("bingoCount" + d) == 12 ) {
        if (d == 0) {
          youWin();
        } else {
          youLost();
        }
      }
    }
  }

}


function conclusionMessage() {

}
function youWin() {
  let endMessage = document.createElement("h3");
  endMessage.innerHTML = "Congratulations! You won!";
  document.getElementsByClassName("base")[0].appendChild(endMessage);
  document.getElementsByClassName("currentNumber")[0].remove();
  document.getElementsByClassName("playAgain")[0].classList.toggle("open");
}

function youLost() {
  let endMessage = document.createElement("h3");
  endMessage.innerHTML = "Sorry! Looks like someone else got it. Better luck next time!";
  document.getElementsByClassName("base")[0].appendChild(endMessage);
  document.getElementsByClassName("currentNumber")[0].remove();
  document.getElementsByClassName("playAgain")[0].classList.toggle("open");

}



document.getElementsByClassName("playAgain")[0].addEventListener("click", function(){
  window.location.reload(true);
});
