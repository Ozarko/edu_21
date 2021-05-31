const os = require('os')

console.log('Операційна система', os.platform())

console.log('Архітектура процесора', os.arch())

console.log('Інфа по процесорам', os.cpus())

console.log(`Вільна пам'ять`, os.freemem())

console.log(`Всього пам'яті`, os.totalmem())

console.log('Домашня директорія', os.homedir())

console.log('Включена система', os.uptime())