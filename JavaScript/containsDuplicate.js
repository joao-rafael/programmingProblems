/**
* problem: https://leetcode.com/problems/contains-duplicate/
*/
const checkInPrevious = (item, arr) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == item){
      return true;
    }
  }
  return false;
}

var containsDuplicate = function(nums) {
  let checker = [];
  for(let i = 0; i < nums.length; i++){
    if(i == 0){
      checker.push(nums[i]);
      continue;
    }
    if(checkInPrevious(nums[i], checker)){
      return true;
    }else{
      checker.push(nums[i]);
    }
  }
  return false;
};

// input test do not submit with the code below
let arr = [1,2,3,4];
console.log(containsDuplicate(arr));
