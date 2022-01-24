`use strict`

class Person {
  constructor(name, age) {
    //fields
    this.name = name
    this.age = age
  }

  //methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}

const alvin = new Person("alvin", 32)
console.log(alvin.name);
console.log(alvin.age);
alvin.speak();

// 2. Getter and setters

class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  //to avoid repetition of unlimited call stacks we should change age variable name with _age. 
  get age() {
    return this._age
  }

  set age(value) {
    return this._age = value < 0 ? 0 : value
  }


}

// we can still call age as age since we are using getter and setter 
const user1 = new User('Steve', 'Jobs', -1)
console.log(user1.age);


//3. Fields (public, private)


class Experiment{
  publicField = 1;

  publicFunction = () => 6

  // readable and mutable inside of this class
  #privateField = 2;
  privateField = 3;
  privateFieldCalling = () => this.#privateField

  #privateFunction = () => 7;
  privateFunctionCalling = () => {
    return this.#privateFunction()
  }
}

const experiment = new Experiment()
console.log(experiment.publicField); // 1
console.log(experiment.privateField); // 3
console.log(experiment.privateFieldCalling()); //2
console.log(experiment.publicFunction()); //6
console.log(experiment.privateFunctionCalling()); //7

class Article {
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  publisher = 'Alvin Coding'
  publisher1 = 'Alvin1 Coding'

  printPublisher1() { // can be called with object 
    console.log(this.publisher); //Alvin coding
    console.log(Article.publisher); // Dream coding 
  }

  // statics should be called with Class!!!!
  static publisher = 'Dream Coding'
  static printPublisher() { // can be called only with class
    console.log(this.publisher); // 'Dream Coding'
    console.log(this.publisher1); // undefined
    console.log(Article.publisher); // 'Dream Coding'
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.articleNumber); //1
console.log(article2.articleNumber); //2
console.log(article1.publisher); // Alvin Coding
console.log(Article.publisher1); // undefined, only calls the static variable with class
article1.printPublisher1(); // Alvin Coding 81, Dream Coding 81
// Article.printPublisher1(); // can't be called, only static function can be called by class

//should call static variable and function with directly from class not with object
console.log(Article.publisher); // 85
Article.printPublisher(); // 87, 88

class Shape {
  constructor(width,height,color, shape){
    this.width = width
    this.height = height
    this.color = color
    this.shape = shape
  }

  draw() {
    console.log(`drawing ${this.color} color of ${this.shape}`);
  }

  getArea() {
    console.log(this.width * this.height); 
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    console.log("🔺");
    super.draw()
  }
  //overriding: using same function (name) in the different class
  getArea() {
    console.log(this.width * this.height * 0.5); 
  }
}

const rectangle = new Rectangle(10,10, red = "red", "rectangle");
rectangle.draw()
rectangle.getArea()
const triangle = new Triangle(10,10, red = "blue", "triangle");
triangle.draw()
triangle.getArea()

// 6. Class checking: instanceOf

console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true


























