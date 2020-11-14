// Assignment code here
var generateBtn = document.querySelector("#generate");
var includeLowerCase = document.getElementById("lowerCaseCheckBox");
var includeUpperCase = document.getElementById("upperCaseCheckBox");
var includeNumber = document.getElementById("numberCheckBox");
var includeSpecialChar = document.getElementById("specialCharCheckBox");
var passwordLength = document.getElementById("lengthDropDown").value;
var includedChars = "";

// Set password length
function setLength(){
  passwordLength = document.getElementById("lengthDropDown").value;
  return passwordLength;
  }

// Make a string of included characters from user input
function makeString(){
  var includedChars = "";
  if (includeLowerCase.checked == true){
    includedChars ="abcdefghijklmnopqrstuvwxyz";
    }
  if (includeUpperCase.checked == true){
    includedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  if (includeNumber.checked == true){
    includedChars += "0123456789";
    }
  if (includeSpecialChar.checked == true){
    includedChars += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
  return includedChars;
  }

// Make a random password from include string
function makePassword() {
  var password = "";
  var string = makeString();
  for (var i = 0; i < passwordLength; i++) {
  password = password + string.charAt(Math.floor(Math.random() * string.length));
  }
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);