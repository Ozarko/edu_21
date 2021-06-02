const fs = require('fs')
const path = require('path')

// Create folder 

// fs.mkdir(path.join(__dirname, 'test',), {}, err => {
//   if(err) {
//     throw err
//   }
//   console.log('Folder Created !')
// })

// Create and write to file 

// fs.writeFile(path.join(__dirname, "test", 'hello.txt'), 'Hello from NodeJS', (err) => {
//   if (err) {
//     throw err;
//   }

//   fs.appendFile(
//     path.join(__dirname, "test", "hello.txt"),
//     "\nAnd more text added",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("Text added !");
//     }
//   );
//   console.log("File Created !");
// });


// Read file 

// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err, data) => {
//   if(err) {
//     throw err
//   }
//   console.log(data)
// })

// Rename file

// fs.rename(
//   path.join(__dirname, "test", "hello.txt"),
//   path.join(__dirname, "test", "helloWorld.txt"),
//   (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('File renamed...');
//   }
// );