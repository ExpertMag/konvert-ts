interface User {
    name: string,
  
  }
  
  interface Admin {
    name: string,
    role: number,
  }
  
  function isAdmin (user: User | Admin): user is Admin {
    return "role" in user
  }
  function isAdminTwo (user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined
  }
  
  function toZero (user: User | Admin) {
    if (isAdminTwo(user)) {
      user.role = 0
      console.log("role сменился на 0")
    } else {
      throw new Error ('ХУЙ')
    }
  }
  
  const obj1: User = {
    name: "Alex",
  }
  
  const obj2: Admin = {
    name: "Mix",
    role: 1
  }
  
  toZero(obj2),
  toZero(obj1)