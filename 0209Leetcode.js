var removeDuplicates = function (nums) {
  


  let arrToSet = new Set(nums)
  let setToArr = [...arrToSet]
  return setToArr

};


console.log(removeDuplicates([1,2,2,2,3,4]));
// already sorted
// 