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
