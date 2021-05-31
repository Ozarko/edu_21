const path = require('path')

console.log('Назва файлу', path.basename(__filename))

console.log('Назва нашої дерикторії', path.dirname(__filename))

console.log('Розширення файлу', path.extname(__filename))

console.log('Parse', path.parse(__filename).name)

console.log(path.join(__dirname, 'server', 'index.html'))