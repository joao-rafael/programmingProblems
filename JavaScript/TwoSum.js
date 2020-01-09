/**
* Problem: https://leetcode.com/problems/two-sum/
**/
const nums = [1,0];
const target = 4;

const checkIfSum = (number1, number2, target) => {
  if(number1 + number2 === target){
      return true;
  }
  return false;
}

const main = (nums, target) => {
  console.log(`Numbers: ${nums}, target: ${target}`);
  console.log('Objective: return the index of the items');
  let final = twoSum(nums, target);
  console.log(`result: ${final}`);
}

const incorrectInput = (nums, target) => {
  if(typeof nums != 'object' || typeof target != 'number'){
    return true;
  }else if(nums.length <= 1){
    return true;
  }
}

const twoSum = (nums, target) => {
    if(incorrectInput(nums, target)){
        return 'Error: there is something wrong with the input';
    }
    let flag = false;
    let p = 0;
    while(!flag){
      let current = nums[p];
      for(let i = p + 1; i <= nums.length - 1; i++){
          if(checkIfSum(current, nums[i], target)){
              flag = true;
              return [p, i];
          }
      }
      p++;
      if(p == nums.length - 1){
          flag = true;
      }
    }
    return;
    return 'Uh oh, there was no sum!';
}

main(nums, target);
