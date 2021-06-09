interface Person {
  name: string 
  age: number
}

type PersonKeys = keyof Person // name | age


const myName: PersonKeys = 'name'

let key: PersonKeys = 'name'

key = 'age'

// key = 'job' error

type User = {
  _id: number 
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> //name | email

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

const u1: UserKeysNoMeta  = 'name'
// u1 = '_id' error