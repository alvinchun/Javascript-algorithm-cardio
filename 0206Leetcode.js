// 1. Valid Parentheses
//  conditions
//  1)once bracket is open, it should be closed 
//  2) brackets are supposed to open and close in right order
 
var isValid = function (s) {   
  const stack = [];
  
  for (let i = 0 ; i < s.length ; i++) {
      let c = s[i]
      switch(c) {
          case '(': stack.push(')');
              break;
          case '[': stack.push(']');
              break;
          case '{': stack.push('}');
              break;
          default:
              if (c !== stack.pop()) {
                  return false;
              }
      }
  }
  
  return stack.length === 0;
};


isValid('{[]}{')
