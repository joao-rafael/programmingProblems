/**
* problem: https://leetcode.com/problems/move-zeroes/
*/
const deletePostion = (index, arr) => {
  if(index == arr.length - 1){
    arr.pop();
    return arr;
  }
  while(index < arr.length - 1){
    arr[index] = arr[index + 1];
    index++;
  }
  arr.pop();
  return arr;
}

var moveZeroes = function(nums) {
  let zeroes = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == 0){
      zeroes++;
      nums = deletePostion(i, nums);
      i--;
    }
  }
  for(let i = 0; i < zeroes; i++){
      nums.push(0);
  }
  return nums;
};


let arr = [0,0,1];
console.log(moveZeroes(arr));
