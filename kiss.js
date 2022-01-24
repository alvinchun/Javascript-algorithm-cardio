// Keep it simple and stupid
function getFirst(array) {
  return array.find(x => (array ? x % 2 === 0 : x % 2 !== 0))
}

let array = [1,2,3,4,5,6,7]
console.log(getFirst(array)); 
// function name(params) {
  
// }

//YAGNI, KISS, DRY, WET
//YAGNI = You ain't gonna need it
//KISS = Keet it simple and stupid
//DRY = Do not repeat yourself
//WET = Write Every Time/Twice (writing repetitively)

function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
 console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!

function addTwice(f, v) {
  //1 + 3 = 4 // 4 + 3 = 7
  return f(f(v));
}

function add(v) {
  return v + 3;
}
const result = addTwice(add, 1);
console.log(typeof ("Result is ", result));

function addX(x) {
  return function (y) {
    return x + y;
  }
}

// And we would use it like this:
console.log(addX(1)); // function
console.log(addX(1)()); // NaN
const add1 = addX(1);
console.log(add1); // function
console.log(add1()); //NaN = not a number
add1(5); // will return 6

//We could also call the returned function directly without assigning it to a variable:

addX(1)(5); // will return 6

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

//mapForEach  is a HOF which accepts an array and a callback function 'fn'
// function mapForEach(arr, fn) {
//      const newArray = [];
//      for(let i = 0; i < arr.length; i++) {
//        newArray.push(fn(arr[i]));
//   }
//   return newArray;
// }

// const countLetters = (arr, fn) => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++){
//     newArray.push(fn(arr[i]))
//   }
//   return newArray 
// }
// const lenArray = mapForEach(strArray, function(item) {
//   return item.length;
// });

// console.log(lenArray); // prints [ 10, 6, 3, 4, 1 ]
// console.log(mapForEach(strArray)); // prints [ 10, 6, 3, 4, 1 ]


const countLetters1 = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    newArray.push(arr[i].length)
  }
  return newArray 
}

console.log(countLetters1(strArray)); // prints [ 10, 6, 3, 4, 1 ]

