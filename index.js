var counter = 1;
var lines = require('fs').readFileSync('rocket.txt', 'utf-8')
   .split('\n')
   .filter(Boolean);
var splits = lines[counter].split("|", 6);

console.log(splits[1])
var rockets = splits[0];
var missions = splits[1];
var agency = splits[2];

var date = splits[3];
var year = splits[4];
var month = splits[5];
var day = splits[6];