// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object (); // 'object constructor' syntax

function print(person){
	console.log(person.name)
	console.log(person.age)
}

const ellie = { name: 'ellie', age: 4 }
print(ellie);

ellie.hasJob = true; // Literal properties
console.log(ellie.hasJob ); // true
delete ellie.hasJob
console.log(ellie.hasJob); // undefined

// 2. Computed properties
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, 'name')
printValue(ellie, 'age')

// 3. Property value shorthand
//constructor function for function generates object, this is the rule!!
function Person(name, age) { 
  this.name = name
  this.age = age
}

function personFunc(name, age) {
  return {
    name,
    age
  }
}

const person1 = personFunc('alvin', 20); //call back
console.log(person1);

const person2 = new Person('monica', 20) //instantiate from an object Person
console.log(person2);

//5. in operator: property existence check (key in obj)

console.log('name' in person2); //true
console.log('age' in person2); //true
console.log('random' in person2); //false
console.log(person2.random); //undefined

//6. for..in vs for..of
//for (key in obj)

const ellie1 = {
  id : 1
}

for (key in ellie1) {
  console.log(key);
}

//for (value of iterable)
const array1 = [1, 2, 4, 5];
for (value of array1){
  console.log(value);
}

//7. Fun closing
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' }
const user2 = user;
user2.name = 'coder'
console.log(user);

//old way of copying obj value to the other
const user3 = {};
for (key in user) {
  user3[key] = user[key]
}

console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2)
console.log(mixed.color); //blue
console.log(mixed.size); //big


//Loops methods
const items = [1, 2, 3, 4, 5, 6];

const finalAnswer = (items) => {
  return items.filter(item => item % 2 === 0)
    .map(item => item * 4)
    .reduce((a,b) => a + b)
}

const finalAnswer2 = items
  .filter(item => item % 2 === 0)
  .map(item => item * 4)
  .reduce((a,b) => a + b)

console.log(finalAnswer(items));
console.log(finalAnswer2);














