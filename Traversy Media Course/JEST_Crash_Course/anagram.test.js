const isAnagram = require("./anagram");

test('is anagram function exists', ()=> {
  expect(typeof isAnagram).toEqual('function')
})

test('"cinema" is an anagram of "iceman"', ()=> {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('"Hello" is NOT an anagram of "Aloha"', ()=> {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
})

