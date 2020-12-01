// https://coderbyte.com/information/Codeland%20Username%20Validation
let isLetter = char => String(char).match(/[a-z]/i);
let isValid = str => /^\w+$/.test(str);

function CodelandUsernameValidation(str) { 

  // code goes here 
  if(str.length < 4 || str.length > 25) {
    return false;
  } else if (!isLetter(str.charAt(0))){
    return false;
  } else if(str.charAt(-1) === '_'){
    return false;
  } else if (!isValid(str)) {
    return false
  }
  return true; 
}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));
