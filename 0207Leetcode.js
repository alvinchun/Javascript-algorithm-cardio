// var mergeTwoLists = function (list1, list2) {
//   const newList = list1.concat(list2).sort()
//   return newList
// };


var mergeTwoLists = function (list1, list2) {
  let newArr = []
  list1.map(i => newArr.push(i))
  list2.map(j => newArr.push(j))
  return newArr.sort()
};





console.log(mergeTwoLists([1,2,4], [1,3,4])); 
console.log(mergeTwoLists([], [])); 
console.log(mergeTwoLists([], [0])); 


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1, 1, 2, 3, 4, 4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.