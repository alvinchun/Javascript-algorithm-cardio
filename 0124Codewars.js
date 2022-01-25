// 1. Vowel Count 
// solution 1
function getCount(str) {
  var vowelsCount = 0;
  let vowels = ['a','e','i','o','u']
  
  for (let i=0; i < str.length; i++){
    for (let j = 0; j < vowels.length; j++){
      if (str[i] === vowels[j]) {
        vowelsCount++
      }
    }
  }
  return vowelsCount;
}

console.log(getCount('elephant'));

// solution 2
function vowelsOnly(str) {
  const vowels = 'aeiouAEIOU'
  return str.split('').filter(i => vowels.includes(i)).length
}

console.log(vowelsOnly('ambiguous'));

// 2. Disemvowel Trolls

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

console.log(disemvowel('Hello my name is Alvin'));

// 3. Binary Search
let nums = [-1, 0, 3, 5, 9, 12, 13]
let target = 9

var search = function (nums, target) {
  let loIndex = 0, hiIndex = nums.length-1; //5
  while (loIndex < hiIndex) {
    let midIndex = loIndex + Math.floor((hiIndex - loIndex + 1) / 2) //0 + 3
    if (target < nums[midIndex]) {
      hiIndex = midIndex - 1
    } else {
      loIndex = midIndex; // 3 = 3
    }
  }
  return nums[loIndex]==target ? `${target} exists in nums and its index is ${loIndex}` : `${target} does not exist in nums so return -1`;
};

console.log(search(nums, target)); 