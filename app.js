//Import Module
const http = require("http");
const fs = require("fs");

//PORT
const PORT = process.env.PORT;
//const hostName = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");

//console.log(__dirname);
//console.log(__filename);

//create server
const server = http.createServer((req, res) => {
  //res.end("Output show");
  if(req.url === "/"){
    return res.end(home);
  }
  if(req.url === "/home"){
    return res.end("<h1> Service Page </h1>");
  }
  if(req.url === "/about"){
    return res.end("<h1> About Page </h1>");
  }
  if(req.url === "/contact"){
    return res.end("<h1> Contact Page </h1>");
  }
  else{
    return res.end("<p> Page Not Found! Sorry </p>");
  }


});

//server.listen on PORT
// server.listen(PORT, hostName, () => {
//     console.log(`Server is working on http://${hostName}:${PORT}`);
// });
server.listen(PORT, () => {
  console.log(`Server is working`);
});


// Deploy(Hosting) at Heroku
// ctrl+c - vs code terminal server close
// clear - clear terminal
// npm init, add "start": "node app",
// login Heroku.com
// https://dashboard.heroku.com/apps > New > Create new app > 
// name,region > create app > Download and install the Heroku CLI.Download and install the Heroku CLI
// Open vs code term > heroku login > press any key
// keep node_modules in .gitignore
// create Procfile
// $ git init
// $ git add .
// $ git commit -am "make it better"
// heroku git:remote -a testingone-node-server
// $ git remote - where save
// $ git push heroku master
// https://dashboard.heroku.com/apps/testingone-node-server/deploy/heroku-git > Settings > 
// Your app can be found at https://testingone-node-server.herokuapp.com/
// const PORT = process.env.PORT; -edited
// delete hostName because it's for offline
// > Reveal Config Vars > 
// git add .
// git commit -m "test server"
// git push heroku master