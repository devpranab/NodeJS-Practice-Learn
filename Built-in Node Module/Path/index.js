const path = require('path');
const extname = path.extname('/Path/index.js');
console.log(extname); //show extension name

const path = require('path');
const dr = path.dirname('/Users/Refsnes/demo_path.js');
console.log(dr);

const filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);

b = "/backbtn";
const a = path.join("" + b);
console.log(a); //join 2 url