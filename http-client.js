'use strict';
const http = require('http');

const reqOptions = {
  'hostname': 'localhost',
  'port': 8099,
  'method': 'POST',
  'headers': {'transfer-encoding': 'chunked'}
};
const client = http.request(reqOptions);
process.stdin.on('data', (chunk) => {
  client.write(chunk);
});
process.stdin.on('end', () => {
  client.end();
});
client.on('response', (res) => {
  res.pipe(process.stdout);
});
