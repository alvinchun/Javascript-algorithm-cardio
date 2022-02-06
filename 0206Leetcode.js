// 1. Valid Parentheses
//  conditions
//  1)once bracket is open, it should be closed 
//  2) brackets are supposed to open and close in right order
 
// var isValid = function (s) {   
//   const stack = [];
  
//   for (let i = 0 ; i < s.length ; i++) {
//       let c = s[i]
//       switch(c) {
//           case '(': stack.push(')');
//               break;
//           case '[': stack.push(']');
//               break;
//           case '{': stack.push('}');
//               break;
//           default:
//               // once you pop, stack array is mutated
//               if (c !== stack.pop()) {
//                 // if parenthese poped from array is not matching with c, this function returns false. If not, it's just removed(pop) and move onto next iteration.
//                 return false;
//               }
//       }
//   }
  
//   return stack.length === 0;
// };

// isValid('{[]}{}')
// // isValid('{[(}{')
// // isValid('{[]}{')
// console.log(isValid('{[]}[]'));


var isValid = function(s) {
    let newArr = []
    
    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
            newArr.push(')')
        }else if(s[i] === '['){
            newArr.push(']')
        }else if(s[i] === '{'){
            newArr.push('}')
        }else if(s[i] !== newArr.pop()){
            // console.log(s[i]);
            return false
        }
    }

    // console.log(newArr);
    return newArr.length === 0;
    
};

console.log(isValid('{[]}{}'));
console.log(isValid('{[(}{'));
console.log(isValid('{[]}{'));
console.log(isValid('{[]}[]'));  


