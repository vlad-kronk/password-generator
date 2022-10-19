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
  var chars = [];

  //initialize variables
  var numChars;
  var includeLower = false;
  var includeUpper = false;
  var includeNums = false;
  var includeSpecial = false;
  var userInput;

  
  ///////// HELPERS ////////
  
  //if input is Y/y, return true. if anything else, return false
  function checkYN(input) {
    if (input.toLowerCase() === 'y') { return true; }
    else { return false; }
  }

  //returns a random element from a given array
  function getRandElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function insertAtRandom(charArray) {
    while (true) {
      var i = Math.floor(Math.random() * password.length);
      if (password[i] === '') {
        password[i] = getRandElement(charArray);
        break;
      }
    }
  }
  

  ///////// PROMPTS /////////

  //ask user if they want a certain character set included in
  //the randomizer, and validates the response. if they want
  //that character type, include that array in the final
  //password generation

  //number of characters (8-128)
  userInput = prompt("How many characters? (8-128)");

  if (8 <= userInput && userInput <= 128) {
    numChars = userInput;
    //fills the password array with empty strings to the specified length
    for (var i = 0; i < numChars; i++) {
      password.push('');
    }
    // console.log(password);
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

  //guarantees the presence of at least one of each requested character
  //type and sets up array for getting random characters to fill the rest


  //did we want uppercase characters?
  if (includeUpper) {
    insertAtRandom(uppercaseChars);
    //add uppercase characters to cumulative list of character options
    chars = chars.concat(uppercaseChars);
  }
  
  
  if (includeLower) {
    insertAtRandom(lowercaseChars);
    
    chars = chars.concat(lowercaseChars);
  }
  
  if (includeNums) {
    insertAtRandom(numChars);
    
    chars = chars.concat(numericChars);
  }
  
  if (includeSpecial) {
    insertAtRandom(specialChars);
    
    chars = chars.concat(specialChars);
  }

  // console.log(chars);
  
  //initialize string to return
  var final = "";

  //for each index in the password array
  for (var i = 0; i < password.length; i++) {
    //is the space at the iterator index empty?
    if (password[i] === '') {
      //fill it with a random character from our cumulative
      //character options array and move to next index
      password[i] = getRandElement(chars);
    }

    //add current character to the final string
    final = final + password[i];
  }

  return final;

}
