// Assignment code here

// TODO: Add prompts for user to select what type of values can be used in password.
function generatePassword() {
  // User Selections here
  let wantsLetters = confirm(
    "Would you like lowercase letters in your password?"
  );
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let wantsUpperLetters = confirm(
    "Would you like uppercase letters in your password?"
  );
  let upperLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let wantsNumbers = confirm("Would you like numbers in your password?");
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let wantsSymbols = confirm("Would you like symbols in your password?");
  let symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "-",
    "=",
    "[",
    "]",
    "{",
    "}",
  ];
  let passwordLength = prompt(
    "How long would you like your password to be? Min:8 Max:128"
  );
  let passwordSelections = [];
  // Creating the output for generatePassword()
  let passwordOutput = "";
  let numOfTrue = 0;

  // Creating the user selected array
  if (wantsLetters === true) {
    passwordSelections = passwordSelections.concat(letters);
    randomNum = Math.floor(Math.random() * letters.length);
    passwordOutput += letters[randomNum];
    numOfTrue++;
  }
  if (wantsUpperLetters === true) {
    passwordSelections = passwordSelections.concat(upperLetters);
    randomNum = Math.floor(Math.random() * upperLetters.length);
    passwordOutput += upperLetters[randomNum];
    numOfTrue++;
  }
  if (wantsNumbers === true) {
    passwordSelections = passwordSelections.concat(numbers);
    randomNum = Math.floor(Math.random() * numbers.length);
    passwordOutput += numbers[randomNum];
    numOfTrue++;
  }

  if (wantsSymbols === true) {
    passwordSelections = passwordSelections.concat(symbols);
    randomNum = Math.floor(Math.random() * symbols.length);
    passwordOutput += symbols[randomNum];
    numOfTrue++;
  }

  // Checking to make sure the user input a valid NUMBER
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a password length between 8 and 128 characters");
    passwordLength = prompt(
      "How long would you like your password to be? Min:8 Max:128"
    );
  }

  // Garentee that at least one of each user selection is in the generated password

  for (i = 0; i < passwordLength - numOfTrue; i++) {
    randomNum = Math.floor(Math.random() * passwordSelections.length);
    passwordOutput += passwordSelections[randomNum];
  }

  return passwordOutput;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
