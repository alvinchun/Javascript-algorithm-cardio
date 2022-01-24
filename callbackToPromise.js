
// export { };
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id)
        } else {
          reject(new Error('not foundd'))
        }
      }, 2000);
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' })
        } else {
          reject(new Error('not foundd'))
        }
      }, 1000);
    })
  }
}

const userStorage1 = new UserStorage(); 
const id = prompt('enter your id')
const password = prompt('enter your password')

// userStorage1.loginUser(id, password)
// .then(userStorage1.getRoles)
// .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log)


//함수에 담아서 정리
async function whoAreYou() {
  try {
    //1차 실행
    const user = await userStorage1.loginUser(id, password);
    // user 받아서 2차 실행
    const role = await userStorage1.getRoles(user);
    alert(`Hello ${role.name}, you have a ${role.role} role`)
  } catch (error) {
    console.log(error);
  }
}

whoAreYou().then(console.log)

