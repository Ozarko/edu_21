const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL

console.log(myUrl.href)

// Host (root domain)

console.log(myUrl.host)

// Host name (does not get port)

console.log(myUrl.hostname);

// Path name

console.log(myUrl.pathname);

// Serialized query

console.log(myUrl.search)

// Parmas object

console.log(myUrl.searchParams)

// Add param 

myUrl.searchParams.append('abs', '123')

console.log(myUrl.searchParams)

// Loop throgh params 

myUrl.searchParams.forEach((value, name)=> {
  console.log(`${name}: ${value}`)
})