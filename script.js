// Assignment Code
// DOM ELEMENTS
var generateBtn = document.querySelector("#generate");

// DATA
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_+><?";
var numbers = "0123456789";



// FUNCTIONS 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  

 var passwordLength = getPasswordLength();


 var useLowerCase = confirm("Would you like to use lowercase characters in your password?");
 var useUpperCase = confirm("Would you like to use uppercase characters in your password?");
 var useSpecial = confirm("Would you like to use special characters in your password?");
 var useNumbers = confirm("Would you like to use numbers in your password?");

 if(!useLowerCase && !useUpperCase && !useSpecial && !useNumbers) {
   alert("You must use atleast one character set in your password! Please start again!");
   generatePassword();
 }

 var chosenCharacters = "";

 if(useLowerCase) chosenCharacters += lowerCaseCharacters;
 if(useUpperCase) chosenCharacters += upperCaseCharacters;
 if(useSpecial) chosenCharacters += specialCharacters;
 if(useNumbers) chosenCharacters += numbers;
 console.log(chosenCharacters);




  // we need the for loop to generate the random characters that are going into our new password
 var newPassword = "";
 for ( var i = 1; i<= passwordLength; i++) {
    var randomCharacter = [Math.floor(Math.random() * chosenCharacters.length)];
    console.log(randomCharacter);
    newPassword += randomCharacter


 }

 
 
 
 
return newPassword;


}

function getPasswordLength(){
   var passwordLength = prompt("How many characters would you like your password to be?");
 
 if (passwordLength < 8 || passwordLength > 128){
   alert("Your password must be between 8 and 128 characters");
   passwordLength = getPasswordLength();
 }
 return passwordLength;


}
 
// USER INTERACTION
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
