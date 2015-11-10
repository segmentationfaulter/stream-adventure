'use strict';
const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
  if (req.method === 'POST') {
    req.on('data', (chunk) => {
      res.write(chunk.toString().toUpperCase());
    });
    req.on('end', () => {
      res.end();
    });
  } else {
    res.end('send a post request please!');
  }
});
server.listen(process.argv[2]);
