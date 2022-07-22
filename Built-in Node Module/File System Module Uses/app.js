const fs = require("fs");

/*
//use File System Module(sync)
let text = fs.readFileSync('./files/text.txt', 'utf-8');

//console.log(text);

text = `Copied Text: ${text}`;

fs.writeFileSync('./files/overwrite.txt', text);
*/

//use File System Module(async)
fs.readFile('./files/text.txt', 'utf-8', (error, text) => { //callback- 2 para
    if(error){
        console.log(error);
    }
    else {
        console.log(text);
        fs.writeFile('./files/overwrite2.txt', 'utf-8', (error) => { //one para
            if(error){
                console.log(error);
            }

        })
    }

})