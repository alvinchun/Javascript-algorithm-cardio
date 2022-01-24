// (function hello() {
//   console.log("IIFE");
// })()

function calculate(command, a, b) {

  if (command === "add") {
    console.log(a + b);
  }else if(command === "substract") {
    console.log(a - b);
  }else if(command === "divide") {
    console.log(a / b);
  }else if(command === "multiply") {
    console.log(a * b);
  }else if(command === "remainder") {
    console.log(a % b);
  }else{
    throw Error("you put the wrong value")
  }
}

function calculate2(command, a, b) {
  switch(command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b
    case "multiply":
      return a * b
    case "remainder":
      return a % b
    default:
      throw Error("you put the wrong value")
  }
}
calculate("remainder", 2, 3)
calculate("remainder", 5, 2 )