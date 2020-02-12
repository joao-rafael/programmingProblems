/**
 * objective:
 * print the first recurring element in array
 */

// input array; change it for different inputs
let arr = [1,5,1,2,3,4];

const firstRecourring = (arr) => {
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(arr[i].toString() in obj){
      return arr[i];
    }
    let prop = arr[i].toString();
    obj[prop] = 'one time';
  }
  console.log(obj);
  return undefined;
}

console.log(firstRecourring(arr));
