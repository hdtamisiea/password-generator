// Assignment code here

// function to define characters that can be used and to choose randomly
function generatePassword() {
  var passwordLength = getPasswordLength();
  var selectedOptions = selectOptions();

  var collectionCharacters = "";

  if (selectedOptions.useLowercase) {
    collectionCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (selectedOptions.useUppercase) {
    collectionCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (selectedCharacterOptions.useNumbers) {
    collectionCharacters += "0123456789";
  }

  if (selectedCharacterOptions.useSpecial) {
    collectionCharacters += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }

  var generatePassword = "";
  for (var i = 0; i < passwordLength; i++) {
    generatePassword += collectionCharacters.charAt(Math.floor(Math.random() * collectionCharacters.length));
  }

  return generatedPassword;

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
