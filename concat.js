'use strict';
let buffer = '';
process.stdin.on('data', (chunk) => {
  buffer += chunk;
});
process.stdin.on('end', () => {
  // reverse the buffered data
  process.stdout.write(buffer.toString().split('').reverse().join(''));
});
