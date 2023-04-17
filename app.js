// http(launch a server, send request).
//  https(launch a ssl server) , os, fs. path

// reguire allows you to import

const http = require('http');

const fs = require ('fs');


const server = http.createServer((req, res)=> {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title> My fist Server, Enter message and recieve a request </title></head>');
        res.write('<body><form action ="/message" method = "POST"><input type ="text" name ="message">Send<button type = "submit"></button></form></body>');
        res.write('</html>');
        return res.end();
    };
    // console.log(req.url, req.method, req.headers);
    // // process.exit()
    // NOTE: incoming dat are stored as streams of data's
    if (url == '/message' && method == 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
        });
        fs.writeFileSync('Message.txt', 'Dummy words and text');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<h1> My fist Server response </h1>')
        res.write('<h1> Susan Is growing</h1>')
        res.write('</html>')
        res.end
}); 

server.listen(3000);


