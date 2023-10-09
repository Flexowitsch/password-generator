const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//Global Variables

//Create arrays for the three options: no numbers, no symbols, no both
const noSymbolsArray = characters.filter(char => /[A-Za-z0-9]/.test(char));
const noNumbersArray = characters.filter(char => !/[0-9]/.test(char));
const noNumbersAndSymbolsArray = characters.filter(char => /[A-Za-z]/.test(char));

//Interface Variables
const generatePwBtn = document.getElementById("generatePwBtn");
const numbersOption = document.getElementById("numbersOption");
const symbolsOption = document.getElementById("symbolsOption");
const passwordOneDisplay = document.getElementById("passwordOneDisplay");
const passwordTwoDisplay = document.getElementById("passwordTwoDisplay");

// Interface Variables
const rangeInput = document.getElementById("passwordLength");
const rangeValueDisplay = document.getElementById("rangeValue");

//Initialize the booleans for the interface
let useNumbers = false;
let useSymbols = false;

//generated variables
let passwordOne = "";
let passwordTwo = "";


//make range input work
// Create a variable to store the current value
let currentValue = rangeInput.value;

// Initialize the display value with the default value (32)
rangeValueDisplay.textContent = currentValue;

// Add an event listener to update the display value and the currentValue variable when the range input changes
rangeInput.addEventListener("input", function () {
  currentValue = this.value; // Update the currentValue variable
  rangeValueDisplay.textContent = currentValue; // Update the display value
});

// ... (rest of your code)

// Add event listeners to check wheter or not symbol and numbner have been checked
numbersOption.addEventListener("change", function () {
  useNumbers = this.checked;
});

symbolsOption.addEventListener("change", function () {
  useSymbols = this.checked;
});


//generate the passwords

function generateNumber() {
  return Math.floor(Math.random()* 91)
}


function createPassword() {
  passwordOne = ""; // Reset the passwords
  passwordTwo = "";

  if (useNumbers === false && useSymbols === false) {

    for (let i = 0; i < currentValue; i++) {
      let randomNumber = generateNumber();
      let randomChar = noNumbersAndSymbolsArray[randomNumber];
      if (randomChar !== undefined) {
        passwordOne += randomChar;
      }
    }

    for (let i = 0; i < currentValue; i++) {
      let randomNumber = generateNumber();
      let randomChar = noNumbersAndSymbolsArray[randomNumber];
      if (randomChar !== undefined) {
        passwordTwo += randomChar;
      }
    }
  } 
  else if (useNumbers === true && useSymbols === false) {

    for (let i = 0; i < currentValue; i++) {
      let randomNumber = generateNumber();
      let randomChar = noSymbolsArray[randomNumber];
      if (randomChar !== undefined) {
        passwordOne += randomChar;
      }
    }

    for (let i = 0; i < currentValue; i++) {
      let randomNumber = generateNumber();
      let randomChar = noSymbolsArray[randomNumber];
      if (randomChar !== undefined) {
        passwordTwo += randomChar;
      }
    }
  } 
  else if (useNumbers === false && useSymbols === true) {

    for (let i = 0; i < currentValue; i++) {
      let randomNumber = generateNumber();
      let randomChar = noNumbersArray[randomNumber];
      if (randomChar !== undefined) {
        passwordOne += randomChar;
      }
    }

    for (let i = 0; i < currentValue; i++) {
      let randomNumber = generateNumber();
      let randomChar = noNumbersArray[randomNumber];
      if (randomChar !== undefined) {
        passwordTwo += randomChar;
      }
    }
  } 
  else {
    for (let i = 0; i < currentValue; i++) {
      let randomNumber = generateNumber();
      let randomChar = characters[randomNumber];
      if (randomChar !== undefined) {
        passwordOne += randomChar;
      }
    }

    for (let i = 0; i < currentValue; i++) {
      let randomNumber = generateNumber();
      let randomChar = characters[randomNumber];
      if (randomChar !== undefined) {
        passwordTwo += randomChar;
      }
    }
  }
  
  

  // Update the password display fields
  passwordOneDisplay.textContent = passwordOne;
  passwordTwoDisplay.textContent = passwordTwo;

  console.log(useNumbers)
  console.log(useSymbols)
  console.log(currentValue)
}

// Add the click event listener
generatePwBtn.addEventListener("click", createPassword);

console.log("hey robin")