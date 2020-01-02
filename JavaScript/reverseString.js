const reader = require('readline-sync');

console.log('Reverse a string');
const str = reader.question('Insert the string: \n');

function reverseString(str) {
  console.log(str);
  const reversed = [];
  for(let i = str.length-1 ; i >= 0; i--) {
    reversed.push(str[i]);
  }
  if(JSON.stringify(arr) == JSON.stringify(reversed)){
    console.log('palindrome');
  }
  return reversed;
}

console.log(reverseString(str));
