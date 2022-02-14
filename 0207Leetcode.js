<<<<<<< HEAD
// var mergeTwoLists = function (list1, list2) {
//   const newList = list1.concat(list2).sort()
//   return newList
// };

// 1. Merge Two Sorted Lists
=======
>>>>>>> 1bffd3ea9d42b3af7d5c79807bb7fb4f96826ef8
var mergeTwoLists = function (list1, list2) {
  const newList = list1.concat(list2).sort()
  return newList
};

console.log(mergeTwoLists([1,2,4], [1,3,4])); 
console.log(mergeTwoLists([], [])); 
console.log(mergeTwoLists([], [0])); 


// 2. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
  // nums.length
  let a = new Set(nums)
  let newArr = [...a].sort()
  console.log(newArr)
  
};

removeDuplicates([0,0,1,5,1,3,7,3,9,4])


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1, 1, 2, 3, 4, 4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.