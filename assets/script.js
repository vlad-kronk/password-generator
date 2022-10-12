///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  
  //initialize arrays
  var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'];

  var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'];

  var numericChars = ['0', '1', '2', '3',
  '4', '5', '6', '7', '8', '9'];

  var specialChars = [' ', '!', '"', '#', '$', '%',
  '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
  ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']',
  '^', '_', '`', '~', '{', '|', '}'];

  var password = [];

  //initialize variables
  var numChars;
  var includeLower = false;
  var includeUpper = false;
  var includeNums = false;
  var includeSpecial = false;
  var userInput;

  ///////// PROMPTS /////////
  //ask user if they want a certain character set included in
  //the randomizer, and validates the response. if they want
  //that character type, include that array in the final
  //password generation

  //check y/n function
  function checkYN(input) {
    if (input.toLowerCase() === 'y') { return true; }
    else { return false; }
  }

  //number of characters (8-128)
  userInput = prompt("How many characters? (8-128)");

  if (8 <= userInput && userInput <= 128) {
    numChars = userInput;
    //fills the password array with empty strings to the specified length
    for (var i = 0; i < numChars; i++) {
      password.push('');
    }
    console.log(password);
  }

  else { return "invalid"; }


  //lowercase?
  includeLower = checkYN(prompt("Include lowercase letters? y/n"));
  // console.log("includeLower: " + includeLower);

  
  //uppercase?
  includeUpper = checkYN(prompt("Include uppercase letters? y/n"));
  // console.log("includeUpper: " + includeUpper);


  //numeric?
  includeNums = checkYN(prompt("Include numeric letters? y/n"));
  // console.log("includeNums: " + includeNums);


  //special?
  includeSpecial = checkYN(prompt("Include special letters? y/n"));
  // console.log("includeSpecial: " + includeSpecial);

  //if none of them are true then the password is not generated
  if (!(includeUpper || includeLower) && !(includeNums || includeSpecial)) { return "invalid"; }

  //////// GENERATE ////////
  //
  


}
