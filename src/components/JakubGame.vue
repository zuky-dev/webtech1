<template>
    <div>
         <div id="puzzleContainer">
 		 <div id="util">
 		 	<div id="time"></div>
 		 	<div id="reset">Reset</div>
 		 	<div id="demo">Demo</div>
 		 	<div id="result"></div>
 		 </div>
		 <div id="canvas"></div>
		 <div id="allPuzzles"></div>
		 </div>
    </div>
</template>
<script>
    var container = document.querySelector("#puzzleContainer");
    var resetBT = document.querySelector("#reset");
    var demoBT = document.querySelector("#demo");
    var allPuzzlesDiv = document.querySelector("#allPuzzles");
    var dragPuzzle;
    var puzzleDiv;
    var puzzleOffsetX = [];
    var puzzleOffsetY = [];
    var puzzleCurrentX = [];
    var puzzleCurrentY = [];
    var allPuzzles = [];
    var puzzlesForSimulation = [];
    var validated = [];
    var position = [];
    var validPosition = [];


    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    var sec = 0;
    var min = 0;
    var clearTime;

    var simTimer;
    var idSim = 0;
    var simCounter = 0;

    resetBT.addEventListener("mousedown", reset, false);
    demoBT.addEventListener("mousedown", finishWithSimulation, false);
    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    for(var i=0; i < 12; i++) {
      var puzzle = document.createElement("div");
      var dragablePuzzle = document.createElement("div");
      puzzleOffsetX[i] = 0;
      puzzleOffsetY[i] = 0;
      dragablePuzzle.setAttribute("id", "dragablePuzzle");
      dragablePuzzle.setAttribute("class", i);
      puzzle.setAttribute("id", "puzzle");
      puzzle.setAttribute("class", i);
      puzzle.style.backgroundImage =  "url(../assets/images/jakub/minipuzzle" +i+".png)";
      puzzle.appendChild(dragablePuzzle);
      allPuzzles[i] = puzzle;
      puzzlesForSimulation[i] = puzzle;
    }
    displayPuzzles();
    startTimer();

    function dragStart(e) {
      dragPuzzle = e.target;
      var id = dragPuzzle.getAttribute("class");
      xOffset = puzzleOffsetX[id];
      yOffset = puzzleOffsetY[id];
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;

      if(dragPuzzle.getAttribute("id") == "dragablePuzzle") {
        active = true;
        puzzleDiv = dragPuzzle.parentNode;
        puzzleDiv.style.zIndex = 1000;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;
      if(active) {
        puzzleDiv.style.zIndex = 1;
      }
      active = false;
      var id = dragPuzzle.getAttribute("class");
      allignPuzzle(currentX, currentY, id, puzzleDiv);
      
      if(isSolved()) {
        stopTime();
        document.getElementById("result").innerHTML = "Hotovo!"
      }
    }

    function drag(e) {
      if (active) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        var id = dragPuzzle.getAttribute("class");
        puzzleOffsetX[id] = currentX;
        puzzleOffsetY[id] = currentY;
        setTranslate(currentX, currentY, puzzleDiv);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      var id = el.getAttribute("class");
      puzzleCurrentX[id] = xPos;
      puzzleCurrentY[id] = yPos;
    }

    function allignPuzzle(x, y, id, div) {
      var validPosition = getValidPosition(id);
      console.log(validPosition);

      if((validPosition[0] - x) < 20 && (validPosition[0] - x) > -20 && (validPosition[1] - y) < 20 && (validPosition[1] - y) > -20) {
        setTranslate(validPosition[0], validPosition[1], div);
      }
    }

  function displayPuzzles() {
    shuffle(allPuzzles);
    for(var i = 0; i<12;i++) {
      allPuzzlesDiv.appendChild(allPuzzles[i]);
      var id = allPuzzles[i].getAttribute("class");
      puzzleOffsetX[id] = getRandomInt(150);
      puzzleOffsetY[id] = getRandomInt(150);
      setTranslate(puzzleOffsetX[id], puzzleOffsetY[id], allPuzzles[i])
    }
  }
  function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }

  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function isSolved() {
  for(var i = 0; i < 12 ;i++) {
    var validPosition = getValidPosition(i);
    console.log(validPosition[0] + " != " +puzzleCurrentX[i]);
    console.log(validPosition[1] + " != " +puzzleCurrentY[i])
    if(validPosition[0] != puzzleCurrentX[i] || validPosition[1] != puzzleCurrentY[i]) {
      return false;
    }
  }
    return true;
}

function getValidPosition(id) {
    if(id == "0") {
      return [-686, 0];
    } else if(id == "1") {
      return [112-686, 0];
    } else if(id == "2") {
      return [319-686, 0];
    } else if(id == "3") {
      return [429-686, 0];
    } else if(id == "4") {
      return [-686, 118];
    } else if(id == "5") {
      return [160-686, 83];
    } else if(id == "6") {
      return [271-686, 117];
    } else if(id == "7") {
      return [477-686, 81];
    } else if(id == "8") {
      return [-686, 200];
    } else if(id == "9") {
      return [110-686, 236];
    } else if(id == "10") {
      return [317-686, 201];
    } else if(id == "11") {
      return [428-686, 235];
    }
    return [0, 0];
}

function startTimer() {
    if ( sec === 60 ) {
        sec = 0;
        min++; 
    } 
    document.getElementById("time").innerHTML = min+":"+sec;
    clearTime = setTimeout(startTimer, 1000 );
    sec++; 
}

function stopTime() {
    if ( sec !== 0 || min !== 0 ) {   
        document.getElementById("time").innerHTML = min+":"+sec;
        sec = 0; 
        min = 0; 
        clearTimeout(clearTime);
    }  
}

function reset() {
  stopDemo();
  stopTime();
  document.getElementById("result").innerHTML = "";
  displayPuzzles();
  startTimer();
}


function finishWithSimulation() {
  console.log(simCounter);
  if(simCounter == 1) {
    return;
  }
  simCounter++;
  simulateResult();
}

function simulateResult() {
  var validPosition = getValidPosition(idSim);
  puzzleOffsetX[idSim] = validPosition[0];
  puzzleOffsetY[idSim] = validPosition[1];
  setTranslate(validPosition[0], validPosition[1], puzzlesForSimulation[idSim]);
  if(idSim == 11) {
    if(isSolved()) {
      stopTime();
      document.getElementById("result").innerHTML = "Hotovo!"
    }
    stopDemo();
    return;
  }
  idSim++;
  simTimer = setTimeout(simulateResult, 1000 );
}
function stopDemo(){
    clearTimeout(simTimer);
    simCounter=0;
    idSim = 0;
}
<style lang="scss" scoped>
#canvas {
	width: 636px;
	min-width: 636px;
	height: 355px;
	min-height: 355px;
	background-color: gray;
	border-color: white;
	margin-left: 50px;
	margin-top: 50px;
	z-index: 0;
}

#allPuzzles {
	width: 400px;
	height: 360px;
	margin-left: 50px;
	margin-top: 50px;
}

#puzzleContainer {
  width: 100%;
  min-width: 800px;
  height: 700px;
  background-color: #333;
  display: flex;
  align-items: right;
  overflow: hidden;
  border-radius: 7px;
  touch-action: none;
  z-index:-1;
}
#puzzle {
  position: absolute;
  width: 255px;
  height: 200px;
  touch-action: none;
  user-select: none;
  background-repeat: no-repeat;
  background-size: auto;
  display: block;
  z-index: 1;
}

#dragablePuzzle {
  position: absolute;
  width: 200px;
  height: 150px;
  touch-action: none;
  user-select: none;
  display: block;
  background: none;
}
#puzzle:hover {
  cursor: pointer;
}

#util {
  height: 355px;
  width: 200px;
  font-size: 25px;
  color: white;
  float: top;
  margin-left: 50px;
  margin-top: 50px;
}
#time, #result{
  width: 200px;
  height: 50px;
  text-align: center;
}

#reset, #demo {
  width: 200px;
  height: 50px;
  margin-top: 10px; 
  background-color: black;
  text-align: center;
}
#reset:hover, #demo:hover {
	background-color: gray;
}
</style>