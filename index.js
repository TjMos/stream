const fs = require('fs');
const { createReadStream: r } = fs;
const rdStr = r(`./1.txt`, { highWaterMark: 1});
let buf = '';
rdStr.on('data', data => buf = buf + (++data));
rdStr.on('end',()=> fs.createWriteStream('1.txt').write(buf));