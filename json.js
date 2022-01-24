const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  }
}
//object
console.log(typeof rabbit.birthDate)
// no function involved & new Date() object into string
const toJson = JSON.stringify(rabbit)
// string
console.log(toJson)

const backToObject = JSON.parse(toJson)
console.log(typeof backToObject.birthDate)
//object
console.log(backToObject)


