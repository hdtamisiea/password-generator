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

// query user as to which characters
function selectOptions() {
  var confirmOptions = {
    useLowercase: confirm("Click OK to include LOWERCASE ALPHA CHARACTERS.  Click Cancel to omit this type from generated password."),
    useUppercase: confirm("Click OK to include UPPERCASE ALPHA CHARACTERS.  Click Cancel to omit this type from generated password."),
    useNumbers: confirm("Click OK to include NUMERICAL CHARACTERS.  Click Cancel to omit this type from generated password."),
    useSpecial: confirm("Click OK to include SPECIAL CHARACTERS.  Click Cancel to omit this type from generated password.")
  };



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
