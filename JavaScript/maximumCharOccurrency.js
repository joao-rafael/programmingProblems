// split the string into a object then add prop to each char
const strSpliter = text => {
    let obj = {};
    for(let i = 0; i < text.length; i++){
        if(!obj.hasOwnProperty(text.charAt(i))){
            let prop = text.charAt(i);
            obj[prop] = 1;
            continue;
        }
        obj[text.charAt(i)]++;
    }
    return obj;
}

//get the keys in object 
const getKey = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

//get the maximum key value in object
const getMax = obj => {
    let arr = Object.values(obj);
    let max = Math.max(...arr);
    let key = getKey(obj, max);
    return key;
}

// main function
function maximumOccurringCharacter(text) {
    // main code
    let splittedStr = strSpliter(text);
    var biggest = getMax(splittedStr);
    console.log(`maximum ocurring char: ${biggest}`);
}

//call
let text = prompt("insert text: ");
maximumOccurringCharacter(text);