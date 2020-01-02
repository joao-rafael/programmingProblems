const reader = require('readline-sync');

console.log('Reverse a string');
const str = reader.question('Insert the string: \n');

function reverseString(str) {
  console.log(str);
  const arr = [];
  const reversed = [];
  for (const item in str) {
    arr.push(str.charAt(item));
  }
  for(let i = arr.length-1 ; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  if(JSON.stringify(arr) == JSON.stringify(reversed)){
    console.log('palindrome');
  }
  return reversed;
}

console.log(reverseString(str));
