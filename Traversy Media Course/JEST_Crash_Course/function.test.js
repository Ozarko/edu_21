const functions = require('./function')

// beforeEach(()=> initDatabase())
// afterEach(()=> closeDatabase())

// beforeAll(()=> initDatabase())
// afterAll(()=> closeDatabase())

const initDatabase =()=> console.log('Database Initialized....')
const closeDatabase =()=> console.log('Database Closed....')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4)
})
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2,2)).not.toBe(5)
})

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be undefined", () => {
  expect(functions.isUndefined()).toBeUndefined();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be true", () => {
  expect(functions.checkValue(87)).not.toBeFalsy();
});

test("User shpuld be Nazar Ozarko object", () => {
  expect(functions.createUser()).toEqual({firstName: 'Nazar', lastName: "Ozarko"});
});

test('Should be under 1600', ()=> {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex

test('There is no I in team', ()=> {
  expect('team').not.toMatch(/I/i)
})

// Arrays

test('Admin should be in usernames', ()=> {
  usernames = ['john', 'karen', 'admin']
  expect(usernames).toContain('admin')
})

// Working with async data

// Promise
// test("User fetched name should be Leanne Graham", ()=> {
//   expect.assertions(1);
//   return functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual("Leanne Graham")
//     })
// });

// Async
test("User fetched name should be Leanne Graham", async ()=> {
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual("Leanne Graham")
});

const nameCheck = () => console.log('Checked Names')

describe('Checking Names', ()=> {
  beforeEach(()=> nameCheck())
  test('User is Jeff', () => {
    const user = 'Jeff'
    expect(user).toBe('Jeff')
  });
  test('User is Jeff', () => {
    const user = 'Nazar'
    expect(user).toBe("Nazar");
  });

})



