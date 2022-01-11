// function to generate password based on password length and characters to include
function generatePassword () {
  var passwordLength = getPasswordLength();
  var selectedOptions = selectOptions();

  var collectionCharacters = "";

  if (selectedOptions.useLowercase) {
    collectionCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (selectedOptions.useUppercase) {
    collectionCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (selectedOptions.useNumbers) {
    collectionCharacters += "0123456789";
  }

  if (selectedOptions.useSpecial) {
    collectionCharacters += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += collectionCharacters.charAt(Math.floor(Math.random() * collectionCharacters.length));
  }

  return generatedPassword;
}


// Input prompt to ask user for desired password length
function getPasswordLength(valueEntered) {
  var promptMessage = "How long do you want your password to be?  Must be a value from 8-128.";
  if (valueEntered) {
    promptMessage = valueEntered + " is not from 8-128. " + promptMessage;
  }

  // Set a default length of 8 if no input
  const defaultLength = 8;
  var length = Number(prompt(promptMessage, defaultLength));

  // If input is not a number or is not between 8 and 128, re run the function
  if (isNaN(length)) {
    return defaultLength;
  } else if (length < 8 || length > 128) {
    return getPasswordLength(length.toString());
  } else {
    return length;
  }
}

// query user as to which characters
function selectOptions() {
  var confirmOptions = {
    useLowercase: confirm("Click OK to include LOWERCASE alpha characters.  Click Cancel to omit this type from generated password."),
    useUppercase: confirm("Click OK to include UPPERCASE alpha characters.  Click Cancel to omit this type from generated password."),
    useNumbers: confirm("Click OK to include NUMERICAL characters.  Click Cancel to omit this type from generated password."),
    useSpecial: confirm("Click OK to include SPECIAL characters.  Click Cancel to omit this type from generated password.")
  };

  // return to character queries if none of the options are selected
  if (!confirmOptions.useLowercase && !confirmOptions.useUppercase && !confirmOptions.useNumbers && !confirmOptions.useSpecial) {
    alert("You must click OK for at least one of the preceding four options. Please retry.");
    return selectOptions();
  } else {
    return confirmOptions;
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
