'use strict'

// hoisting: var, function declaration (they are the first)
const getHen = () => {
  return new Promise((resolve, reject) => {
     setTimeout(() => resolve('hen'), 1000)
  })
}

const getEgg = hen => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => eggg`), 1000)
 })
}

// const getNoEgg = hen => {
//    return new Promise((resolve, reject) => {
//      setTimeout(() => reject(new Error(`error! ${hen} => eggg`)), 1000)
//   })
// }

const getFood = (egg) => {
  return new Promise((resolve, reject) => {
     setTimeout(()=> resolve(`${egg} => food`), 1000)
  })
}


getHen()
  .then(console.log)
  .then(getEgg)
  .then(console.log)
  .then(getFood)
  .then(console.log)


let a;
a = 6;
console.log(a);

// getHen() //
//   .then(getEgg)
//   .catch(error => {
//     return 'bread';
//   })
//   .then(getFood)
//   .then(console.log)
  // .catch(console.log)



// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('ellie')
//     reject(new Error('no network'))
//   }, 2000);
// })

// promise.then(value => { console.log(value) }).catch(error => { console.log(error) })