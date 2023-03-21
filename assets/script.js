function generatePassword() {
  let passwordSelections = [];
  // Using numOfTrue to guarantee that at least one of each selection made will be in password
  let numOfTrue = 0;
  let passwordOutput = "";

  function randomNum(arr){
    Math.floor(Math.random() * arr.length);
  }




  // Creating arrays from strings
  let letters = Array.from("abcdefghijklmnopqrstuvwxyz");
  let upperLetters = letters.map(function (letter) {
    return letter.toUpperCase();
  });
  let numbers = Array.from({ length: 10 }, function (v, i) {
    return i;
  });
  let symbols = Array.from("!@#$%^&*()_+-=[]{}");

  // Gathering User Inputs here
  let wantsLetters = confirm(
    "Would you like lowercase letters in your password?"
  );

  let wantsUpperLetters = confirm(
    "Would you like uppercase letters in your password?"
  );

  let wantsNumbers = confirm("Would you like numbers in your password?");

  let wantsSymbols = confirm("Would you like symbols in your password?");

  // Checking what user selected and adding them to the passwordSelections array
  if (wantsLetters === true) {
    passwordSelections = passwordSelections.concat(letters);
    randomNum(letters)
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

  // What happens if they click cancel on all of them?
  if (
    wantsLetters === false &&
    wantsUpperLetters === false &&
    wantsNumbers === false &&
    wantsSymbols === false
  ) {
    passwordOutput = "Please try again.";
    alert("No password options selected. Please try agin.");
    return passwordOutput;
  }

  // Prompting user for a desired password length
  let passwordLength = prompt(
    "How long would you like your password to be? Min:8 Max:128"
  );

  // Checking to make sure the user input a valid NUMBER
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a password length between 8 and 128 characters");
    passwordLength = prompt(
      "How long would you like your password to be? Min:8 Max:128"
    );
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
