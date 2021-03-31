let re;
re = /hello/i;
// re = /hello/g;

// console.log(re)
// console.log(re.source)

// const result = re.exec('hello world')

// console.log(result.input)

// test - returns true or false
// const result = re.test('hello')

// console.log(result)

// match() - return result array or null

// const str = 'Hello There'

// const result = str.match(re)

// console.log(result)

// search() - Return index of the first match if not found returns -1

// const str = 'Hello There';

// const result = str.search(re)

// console.log(result)

// replace() - Return new string with some or all matches of a pattern

const str = 'Hello There'

const newStr = str.replace(re, 'hi')

console.log(newStr)