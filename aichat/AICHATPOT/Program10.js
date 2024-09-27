const fs = require('fs');

let content = '';
for (let i = 0; i < 10; i++) {
    content += `Line ${i + 1}: This is a sample line.\n`;
}

fs.writeFileSync('example.txt', content);

let n = 20;
let chars = fs.readFileSync('example.txt', 'utf8').slice(0, n);

console.log("Characters in reverse:", chars.split('').reverse().join(''));
