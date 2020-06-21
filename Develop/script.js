// Assignment code here
// Password Characters
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabetCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = alphabet.split("");
let uppercase = alphabetCap.split("");
let numbers = '0123456789'
let specialChars = "!$%&'()*+,-./:;<=>?@[]^_`{|}~"
console.log(specialChars);

// generate password function
const getPasswordLength = () => {
  let passwordLength = window.prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
    if(passwordLength >= 8 && passwordLength <= 128) {
      passwordLength = passwordLength
      console.log(passwordLength)
    } else {
      window.alert("Invalid entry please choose a number between 8 and 128! ");
      getPasswordLength();
    }
};

const getCharTypes = () => {
  let charLowerCase = window.prompt("Would you like your password to contain lowercase characters? Please choose yes or no.").toLowerCase();
  if (charLowerCase === "yes") {charLowerCase = lowercase}
  else if (charLowerCase === "no") {charLowerCase = ""}
  else {
    window.alert("Please choose yes or no!");
    getCharTypes();
  } 
  let charUpperCase = window.prompt("Would you like your password to contain uppercase characters? Please choose yes or no.").toLowerCase();
  if (charUpperCase === "yes") {charUpperCase = uppercase}
  else if (charUpperCase === "no") {charUpperCase = ""}
  else {
    window.alert("Please choose yes or no!");
    getCharTypes();
  }
  console.log(charLowerCase);
  console.log(charUpperCase);
};
getCharTypes();
 

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
