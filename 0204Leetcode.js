var longestCommonPrefix = function(strs) {
  'use strict';
  if (strs === undefined || strs.length === 0) { return ''; }
  
  //reduce 는 value 가 하나일때 prev, next 모두가 같은 value 이다.
  // ex) [1].reduce((prev, next)=> console.log(prev, next)) ==> prev = 1, next = 1
  return strs.reduce((prev, next) => {
    let i = 0;
    console.log(prev)

    // If there is more than one value, we compare. (there should be prev(first value) and next(second value) and they should be equal
    while (prev[i] && next[i] && prev[i] === next[i]) {
      // prev 와 next 가 같음으로 flower 워의 모든 index 즉 i는 5까지 쭉 간다
      i++;
    }  
    
    return prev.slice(0, i); 
  });
};
console.log(longestCommonPrefix(["flower"]))
// console.log(longestCommonPrefix(["flower", "abcd", "qzp"]))
// console.log(longestCommonPrefix(["flower", "florida", "Flow"]))
// console.log(longestCommonPrefix(["flower", "florida", "floW"]))



var longestCommonPrefix2 = function(strs) {
  if (!strs.length) return ''; // If there is nothing in array. Minimum 

  let prefix = '';

  // 오래 볼것도 없다. value 들중 가장 짧은 단어만 가져온다.
  let maxPrefixLength = Math.min(...strs.map(str => str.length));

  // 짧은 단어의 길이만큼만 돈다.
  for (let i = 0; i < maxPrefixLength; i++) {

    let char = strs[0][i];

// iterating through characters of each value with i
    if (strs.every(str => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }

  };  
  return prefix;
};

// console.log(longestCommonPrefix2(["flower"]))
// console.log(longestCommonPrefix(["flower", "florida", "floW"]))
// console.log(longestCommonPrefix(["flower", "florida", "Flow"]))
// console.log(longestCommonPrefix(["flower", "florida", "floW"]))
