// Assignment code here



// questions to user about length of the password
function getPasswordLength(valueEntered) {
  var promptMessage = "How long do you want your password to be?  Must be a value from 8-128.";
  if (valueEntered) {
    promptMessage = valueEntered + " is not from 8-128. " + promptMessage;
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
