class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a', this.name + '.');
  }

  // saved as a variable in area
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    //final value = area
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor() {
    // ReferenceError, super needs to be called first!
    // this.height;

    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    length = 2
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';

  }
}

const square = new Square()
console.log(square);
console.log(square.name);
console.log(square.sayName());
console.log(square.area);



