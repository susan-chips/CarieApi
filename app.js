// http(launch a server, send request).
//  https(launch a ssl server) , os, fs. path

// reguire allows you to import

const http = require('http');

const routes = require('./routes');

console.log(routes.Dummy);
const server = http.createServer(routes.Handler); 

server.listen(3000);


