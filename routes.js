const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write(
      '<head><title> My fist Server, Enter message and recieve a request </title></head>'
    );
    res.write(
      '<body><form action ="/message" method = "POST"><input type ="text" name ="message">Send<button type = "submit"></button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url == '/message' && method == 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=0')[1];
      fs.writeFile('Message.txt', 'dummy text', (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<h1> My fist Server response </h1>');
  res.write('<h1> Susan Is growing</h1>');
  res.write('</html>');
  res.end();
};

module.exports = {
  Handler: requestHandler,
  Dummy: 'Some dummy Texts',
};
