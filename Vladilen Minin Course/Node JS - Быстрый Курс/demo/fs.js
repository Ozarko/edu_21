// File System
const fs = require('fs')
const { formatWithOptions } = require('node:util')
const path = require('path')

// Створення папок за допомогою fs

// fs.mkdir(path.join(__dirname, 'test'), (error)=> {
//   if(error) {
//     throw error
//   }
//   console.log('Папка створена')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// Створення та додавання інфи до файлів 

// fs.writeFile(filePath, '\nHello Node JS Again', err=> {
//   if(err) {
//     throw err
//   }
//   console.log('Файл створений')
// })

// fs.appendFile(filePath, '\nHello Node JS Again', err=> {
//   if(err) {
//     throw err
//   }
//   console.log('Файл створений')
// })

fs.readFile(filePath,'utf-8' ,(err, content) => {
  if(err) {
    throw err
  }
  // const data = Buffer.from(content)
  // console.log(data.toString());

  console.log(content)
})