// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();//Method or Instructions to create Password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;//What ever is genrated by password function will set the value of placeholder

}

function generatePassword(){
  var passlength = prompt ("Enter Password length of 8-128 characters");
  var length = 128,
  charset = "abcdefghijklmnopqrstuvwxyzABCDERFGHIJKLMNOPQERSTUV!@#$%^&*()_+123456789" + passlength,
  retVal = "";


for (var i = 0, A = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * A));


}

  return retVal;
};












// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

