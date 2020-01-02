const reader = require('readline-sync');

console.log('Reverse a string');
const str = reader.question('Insert the string: \n');

// code solution
function reverseString(str) {
  const reversed = [];
  for(let i = str.length-1 ; i >= 0; i--) {
    reversed.push(str[i]);
  }
  if(JSON.stringify(arr) == JSON.stringify(reversed)){
    console.log('palindrome');
  }
  return reversed;
}

// js has a builtin method to it xD
function reverse2(str){
  return str.split('').reverse().join('');
}

// ES6 version
const reverseES6 = str => str.split('').reverse().join('');

console.log(reverse2(str));
