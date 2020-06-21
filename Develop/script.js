// Assignment code here
// Password Characters
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabetCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789'
let specialChars = "!$%&'()*+,-./:;<=>?@[]^_`{|}~"
let password = "";


// get password length
const getPasswordLength = () => {
  let passwordLength = window.prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
    if(passwordLength >= 8 && passwordLength <= 128) {
      passwordLength = Array.from({length:passwordLength})
    } else {
      window.alert("Invalid entry please choose a number between 8 and 128! ");
      getPasswordLength();
    }
    return passwordLength;
};


let passwordLength = getPasswordLength();


// choose any or some of lowercase, uppercase, numers and special characters
const getCharTypes = () => {
// lowercase
  let charLowerCase = window.prompt("Would you like your password to contain lowercase characters? Please choose yes or no.").toLowerCase();
  if (charLowerCase === "yes") {charLowerCase = alphabet}
  else if (charLowerCase === "no") {charLowerCase = ""}
  else {
    window.alert("Please choose yes or no!");
    getCharTypes();
  } 

//uppercase
  let charUpperCase = window.prompt("Would you like your password to contain uppercase characters? Please choose yes or no.").toLowerCase();
  if (charUpperCase === "yes") {charUpperCase = alphabetCap}
  else if (charUpperCase === "no") {charUpperCase = ""}
  else {
    window.alert("Please choose yes or no!");
    getCharTypes();
  }

//numbers
  let charNumbers = window.prompt("Would you like your password to contain numbers? Please type yes or no.").toLowerCase();
  if (charNumbers === 'yes') {charNumbers = numbers}
  else if (charNumbers === 'no') {charNumbers = ""}
  else {
    window.alert("Please type yes or no!");
    getCharTypes();
  }

//special characters
  let charSpecial = window.prompt("Would you like your password to contain special characters? Please type yes or no.").toLowerCase();
  if (charSpecial === "yes") {charSpecial = specialChars}
  else if (charSpecial === "no") {charSpecial = ""}
  else {
    window.alert("Please choose yes or no!");
    getCharTypes();
  }


  let finalPasswordChars = [charLowerCase, charUpperCase, charSpecial, charNumbers].join("")
   
  return finalPasswordChars;


};


finalPasswordChars = getCharTypes();



const generatePassword = () => {
  password = "";
  for (i=0; i<passwordLength.length; i++) {
    let c = Math.floor(Math.random() * finalPasswordChars.length );
    password += finalPasswordChars.charAt(c)

  }
  return password;
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
