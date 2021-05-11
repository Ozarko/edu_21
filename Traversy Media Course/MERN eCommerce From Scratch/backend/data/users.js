import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doue",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Nazar",
    email: "nazar@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users 