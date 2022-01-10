// Assignment code here



// Input prompt to ask user for desired password length
function getPasswordLength(valueEntered) {
  var promptMessage = "How long do you want your password to be?  Must be a value from 8-128.";
  if (valueEntered) {
    promptMessage = valueEntered + " is not from 8-128. " + promptMessage;
  }

  // Set a default length of 9 if no input
  const defaultLength = 9;
  var length = Number(prompt(promptMessage, defaultLength));
  
  // If input is not a number or is not between 8 and 128, re run the function
  if (isNaN(length)) {
    return defaultLength;
  } else if (length < 9 || length > 128) {
    return getPasswordLength(length.toString());
  } else {
    return length;
  }
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
