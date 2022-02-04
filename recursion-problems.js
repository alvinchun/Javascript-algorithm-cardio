// 1. power
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(n,e){
  if(n === 0){
      return 0;
  }
  if(n === 1 || e === 0){
      return 1;
  }

  return n * power(n,e-1) // 4 * power(4, 1) * 4 * 1
}

console.log(power(0, 2))
console.log(power(4, 2))

//2. factorial

function factorial(n){
    
  if(n === 1 || n === 0){
      return 1;
  }

  return n * factorial(n-1)
}

factorial(0)

//3. productOfArray

const productOfArray = (arr) => {
  if (arr === undefined || null) {
    return "put an array with numbers in it"
  }

   if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1, 2, 3, 4, 5]));


//4. recursiveRange ( adding all the numbers in array)

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(arr){
   
  let totalNum = 0;

  if(arr.length === 0){
      return 0;
  }
  
  totalNum = arr[0] + recursiveRange(arr.slice(1))
  return totalNum
}

recursiveRange([1,2,3])

//5. fibonacci (n th numer is) => ?
function fibonacci(num) {
  if (num <= 2) return 1;
  console.log(fibonacci(num - 1)) // 5 = 3 + 2 = 1 + 1
//   console.log(fibonacci(num - 2)) // 3

  return fibonacci(num - 1) + fibonacci(num - 2); 
  // 
}


fibonacci(5) 
















