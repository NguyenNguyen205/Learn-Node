const { readFileSync,writeFileSync } =  require('fs')
const first = readFileSync('./content/hello.txt','utf-8')
// const second = readFileSync('./content/first.txt','utf-8')
writeFileSync('./content/hello2.txt',`hello world \n`, { flag: 'a'})

console.log(first);
