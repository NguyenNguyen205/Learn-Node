
const { readFile, writeFile } = require('fs');

readFile('./content/hello.txt','utf8', (err, result) => {
    if (err) return;
    const first = result;
    readFile('./content/hello2.txt','utf8', (err, result) => {
        if (err) return;
        const second = result;
        writeFile('./content/helloAsync.txt', `${first} ${second}`, { flag: 'a'}, (err, result) => {
            if (err) return;
            console.log(result);
        })
    })
})

console.log("hello world");