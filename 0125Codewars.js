// 1. Sqaure Every Digit (7)

function squareDigits(num){
  return num.toString().split('').map(i => i * i).join('')
}

console.log(squareDigits(2134));
console.clear()

// 2. Reversing Order

function reversingOrder(n) {
  let nString = n.toString()
  let arrLength = nString.length - 1
  let singleNum = nString.split('')
  let newArr = []

  while (arrLength >= 0) {
    console.log(arrLength);
    newArr.push(singleNum[arrLength])
    arrLength--
  }
  return parseInt(newArr.join(''))
}


console.log(reversingOrder(123123)); 
console.clear()

// 3. Descending Order

function descendingOrder(n) {

  return parseInt(String(n).split('').sort().reverse().join(''))
}


console.log(descendingOrder(698457));
console.clear()

// 4. Mumbling

function accum(s) {
  const inArr = s.split('')
  // console.log(inArr[0]);
  return inArr.map((item, index) => (item.toUpperCase() + item.toLowerCase().repeat(index))).join('-')
}

console.log(accum("MjtkuBovqrU"));

// 5. Get the Middle Character

function getMiddle(s)
{
  const strLength = s.length
  const strFullIndex = s.length - 1

  return strLength % 2 === 0 ? s[Math.floor(strFullIndex / 2)] + s[Math.ceil(strFullIndex / 2)] : s[(strFullIndex / 2)]
}

const asdf = 'Mozilla'
console.log(getMiddle("A"));
console.log(getMiddle(asdf));
const a = 'Alvin'
console.log(a.indexOf('v'));

let arr = ['a', 'b', 'c']
console.log(arr.includes('a', -3)); // true
console.log(arr.includes('a', -1)); // false
console.log(arr.includes('a', -2)); // false
console.log(arr.includes('a', -4)); // true
console.log(arr.includes('a', -6)); // true
console.log(arr.includes('a', -100)); // true


function isIsogram(str) {
  return str.filter(letter => letter != letter ? true : false)
}

console.log(isIsogram('aaandnc'));








