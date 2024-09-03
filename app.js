
function addToDisplay(value) {
 document.getElementById('display').value += value;
}

function clearDisplay() {
 document.getElementById('display').value = '';
}

function calculateResult() {
 const display = document.getElementById('display');
 display.value = eval(display.value);
}












/*

let currentDisplay = "0"; //current display
let resultDisplay = false; //flag to track whether the result is displayed

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
 try{
  const result = eval(currentDisplay);
  currentDisplay += "\n=" + result.toString( );
  updateDisplay();
 }
 catch (error) {
  currentDisplay += "\nError";
  updateDisplay();
 }

 resultDisplay = true;
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



