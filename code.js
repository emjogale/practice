'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('links.json');
let links = JSON.parse(rawdata);
console.log(links);
