class UserStorage {
  async loginUser(id, password) {
    await setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        return id
      } else {
        return new Error('not foundd')
      }
    }, 2000);
  }
  

  async getRoles(user) {
    await setTimeout(() => {
      if (user === 'ellie') {
        return { name: 'ellie', role: 'admin' }
      } else {
        return new Error('not foundd')
      }
    }, 1000);
  }
}

const userStorage2 = new UserStorage();
const id2 = prompt('enter your id')
const password2 = prompt('enter your password')


//바로 실행
userStorage2.loginUser(id2, password2)
.then(userStorage2.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log)

const getApple = async () => {
  await delay(2000)
  return 'apple';
}


const getBanana = async () => {
  await delay(1000)
  return 'banana';
}

const pickFruits = () => {
// 병렬적
//   const appple = await getApple()
//   const bananaa = await getBanana()

//병렬적
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const appple = await applePromise
  const bananaa = await bananaPromise

  return `${appple} + ${bananaa}`
}

pickFruits().then(console.log)


//Promise.all()
const pickAllFruits = () => {
  return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '))
}

pickAllFruits().then(console.log)

//둘중에 먼저 받는 값을 return
const pickOnlyOne = () => {
  return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log)