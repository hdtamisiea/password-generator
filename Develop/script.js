// Assignment code here



// questions to user about length of the password
function getPasswordLength(valueEntered) {
  var promptMessage = "How long do you want your password to be?  Must be a value from 8-128.";
  if (valueEntered) {
    promptMessage = valueEntered + " is not from 8-128. " + promptMessage;
  }

  const defaultLength = 8;
  var length = Number(prompt(promptMessage, defaultLength));
  
  // If the value is not a number or isn't between 8-128 then re run function
  if (isNaN(length)) {
    return defaultLength;
  } else if (length < 8 || length > 128) {
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
