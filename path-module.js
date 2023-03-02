const path = require('path')
//Sep is what's seperating the path
console.log(path.sep);

//Creates normalized file path
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//Finds base of path
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);