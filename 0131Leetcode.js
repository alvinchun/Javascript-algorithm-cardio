// 1. Two Sum (easy)

let twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++){
    for (let j = 0; j < nums.length; j++){
      if (nums[i] + nums[j] === target && i != j) {
        return [i,j]
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

//1-2. Brute force way (easy)

let twoSum2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++){
    for (let j = i+1; j < nums.length; j++){
      if ( target - nums[i] === nums[j]) {
        return [i,j]
      }
    }
  }
}

//2. Roman Numeral to int (easy)

let symbol = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

const romanToInt = (s) => {
  let totalNum = 0;
  for (i = 0; i < s.length; i++){
    symbol[s[i]] < symbol[s[i+1]] ? totalNum-=symbol[s[i]] : totalNum+=symbol[s[i]]
  }
  return totalNum
}


console.log(romanToInt("MMCMLXXXIX"));




