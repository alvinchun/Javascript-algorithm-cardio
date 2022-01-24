class UserStorage{
  loginUser(id, password){
    return new Promise((onSuccess, onError) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) { 
          onSuccess(id)
        } else {
          onError(new Error ('not found'))
        }
      }, 2000);  
    })
  }

  getRoles(user){
    return new Promise((onSuccess, onError) => {
      setTimeout(() => {
        if(user === 'ellie')
         { 
          onSuccess({ name: 'ellie', role: 'admin'})
        } else {
          onError(new Error ('not found'))
        }
      }, 1000);  
    })
  }
}
