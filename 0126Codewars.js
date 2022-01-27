// 1. Isograms (7)

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram('Dermatoglyphics')); //false
console.log(isIsogram('abcdefa')); //true
console.log(isIsogram('qwer')); //true
console.log(isIsogram('bbbbbbbbbccccccccc')); //false

// 2. Shortest Word (7)

function findShort(s){
  return s.split(' ').map(i => i.length).sort((a, b) => a - b)[0]
  // return Math.min(...s.split(" ").map(s => s.length));
  // console.log(...s);

}

console.log(typeof findShort("Dogecoin Steem Dash Ethereum")); //true

// console.log(findShort("Let's travel abroad shall we 1")); //true
// console.log(findShort("turns out random test cases are easier than writing out basic ones")); //true

var numbers = [4, 2, 5, 11, 13, 0];
let str = "Dogecoin Steem Steem"
// numbers.sort(function(a, b) {
//   return a - b;
// });
console.log(...str);

console.log(typeof 'Alvin'.length);

console.log(new Set('Alvin').size);
numbers.push('a')
numbers.pop('a')

numbers.concat('a')

console.log();
console.log(numbers);

const engineer = () => "Build Web Apps with Javascript and React"
console.log(engineer());
