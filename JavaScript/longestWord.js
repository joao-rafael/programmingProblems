/**
  Find the longest word
 **/

let findLongestWord = arr => {
  let longest = arr[0].replace(/[^a-zA-Z]+/g, '');;
  for(let i = 0; i < arr.length; i++){
    let str = arr[i].replace(/[^a-zA-Z]+/g, '');
    if(str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}

function LongestWord(sen) { 

  // code goes here  
  let wordArr = sen.split(' ');
  return findLongestWord(wordArr); 
}
   
// keep this function call here 
console.log(LongestWord(readline()));
