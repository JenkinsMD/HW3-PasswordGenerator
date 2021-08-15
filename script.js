// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharList = "!()?[]_'~;:#$%^&*+=";
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var numericList = "0123456789";
var combinedList = ""



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generates a passcode
function generatePassword() {

  //Prompts user for password requirements
  var includeLow = prompt("Do you want to include lowercase characters? (y/n)");
  var includeUp = prompt("Do you want to include uppercase characters? (y/n)");
  var includeNum = prompt("Do you want to include numeric characters? (y/n)");
  var includeSpec = prompt("Do you want to include special characters? (y/n)");
  var passwordLength = prompt("How long is your password (Min 8 characters, Max 128 characters");
  var confirmChoice = prompt("Does this look correct?\n"+
      "Uppercase letters (" +includeUp+")\n"+
      "Lowercase letters (" +includeLow+")\n"+
      "Special characters ("+includeSpec+")\n"+
      "Numeric characters ("+includeNum+")\n"+
      "Password length ("+passwordLength+")\n"+
      "y/n?"
  
  )
  if(confirmChoice !== "y") {
    generatePassword();
  }
  
  //-------------------------------------------------------------------------

  var i=0;
  var temp;
  var tempArray = [];
  var tempArrayToString;

  //This block of code finds the 1 minimum character required for each type selected
  //and then creates the character list for the remainder of the password
  if (includeLow==="y") {
    temp=lowerCaseList[Math.floor(Math.random() * lowerCaseList.length)];
    i++;
    combinedList=combinedList.concat(lowerCaseList);
    tempArray.push(temp);

  }
  if (includeUp==="y") {
    temp=upperCaseList[Math.floor(Math.random() * upperCaseList.length)];
    i++;
    combinedList=combinedList.concat(upperCaseList);
    tempArray.push(temp);

  }
  if (includeNum==="y") {
    temp=numericList[Math.floor(Math.random() * numericList.length)];
    i++;
    combinedList=combinedList.concat(numericList);
    tempArray.push(temp);

  }
  if (includeSpec==="y") {
    temp=specialCharList[Math.floor(Math.random() * specialCharList.length)];
    i++;
    combinedList=combinedList.concat(specialCharList);
    tempArray.push(temp);

  }
  //------------------------------------------------------------------------

 for (; i < passwordLength; i++) {
  temp=combinedList[Math.floor(Math.random() * combinedList.length)];
  tempArray.push(temp);

 }
 

  
  
//Calling the shuffle function to randomize the array because the order of the 
//first 1-4 input types are fixed based on the user specification
  

  shuffle(tempArray);


  tempArrayToString = tempArray.join("");



  return tempArrayToString;


}


//This is the Fisher-Yates Shuffle algorithm
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
