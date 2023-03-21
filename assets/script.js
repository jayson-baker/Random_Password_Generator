function generatePassword() {
  let passwordSelections = [];
  // Using numOfTrue to track how many times user inputs are true
  let numOfTrue = 0;
  let passwordOutput = "";

  // Creating arrays for generator to use
  let letters = Array.from("abcdefghijklmnopqrstuvwxyz");

  let upperLetters = letters.map(function (letter) {
    return letter.toUpperCase();
  });
  let numbers = Array.from("0123456789");
  let symbols = Array.from("!@#$%^&*()_+-=[]{}");

  function concatOnUserInput(arr, inqueryString) {
    let userOkay = confirm(
      "Would you like " + inqueryString + " in your password."
    );
    if (userOkay === true) {
      passwordSelections = passwordSelections.concat(arr);
      // Insure that we have at least one character for each user input of true
      randomNum = Math.floor(Math.random() * arr.length);
      passwordOutput += arr[randomNum];
      numOfTrue++;
    }
  }

  concatOnUserInput(letters, "lowercase letters");
  concatOnUserInput(upperLetters, "upercase letters");
  concatOnUserInput(numbers, "numbers");
  concatOnUserInput(symbols, "symbols");

  // What happens if they click cancel on all of them?
  if (passwordSelections.length === 0) {
    passwordOutput = "Please try again.";
    alert("No password options selected. Please try agin.");
    return passwordOutput;
  }

  let promptMessage =
    "How long would you like your password to be? Min:8 Max:128";
  // Prompting user for a desired password length
  let passwordLength = prompt(promptMessage);

  // Checking to make sure the user input a valid NUMBER
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a password length between 8 and 128 characters");
    passwordLength = prompt(promptMessage);
  }

  // Creating the random password
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
