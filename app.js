
function addToDisplay(value) {
 document.getElementById('display').value += value;
}

function clearDisplay() {
 document.getElementById('display').value = '';
}

function calculateResult() {

 const screen = document.getElementById('display');
 screen.value = eval(display.value);
}




























/*

let currentDisplay = "0"; //current display


//! updating the display

function updateDisplay(){
 const displayElement = document.getElementById("display");
 displayElement.textContent = currentDisplay;
}

//! setting  the display

function addToDisplay(value){
 if (currentDisplay === "0" || resultDisplay) {
  currentDisplay = value;

 }
 else { 
  currentDisplay += value;
 }

 resultDisplay = false;

 updateDisplay();
}




//! calculate the result

function calculateResult(){
 
}



//! clearing the display

function clearDisplay (){
 currentDisplay = "0";
 

 updateDisplay();
}



/*

function clearLastElement (){
 currentDisplay = currentDisplay.slice(0, -1);
 if (currentDisplay === ""){
  currentDisplay = "0";
 }
 updateDisplay();
}
 */



