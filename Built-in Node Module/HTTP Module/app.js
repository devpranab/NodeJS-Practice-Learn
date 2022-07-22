//HTTP Module - backend server
const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write('Hi Pranav');
        response.end();
    }
    if(request.url === '/students'){
        response.write(JSON.stringify([
            {name: "Pranav"},
            {name: "Sarkar"}
        ]))
        response.end();
    }
});

server.listen(3000); //3000 port number
console.log("Listening on port 3000...");