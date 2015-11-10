'use strict';

let counter = 0;
process.stdin.on('data', (chunk) => {
  if (counter % 2 === 0) {
    process.stdout.write(chunk.toString().toUpperCase());
    counter++;
  } else {
    process.stdout.write(chunk.toString().toLowerCase());
    counter++;
  }
});
