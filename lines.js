'use strict';
const split = require('split');

let counter = 1;
process.stdin.pipe(split()).on('data', (line) => {
  if (counter % 2 === 0) {
    console.log(line.toString().toUpperCase());
    counter++;
  } else {
    console.log(line.toString().toLowerCase());
    counter++;
  }
});
