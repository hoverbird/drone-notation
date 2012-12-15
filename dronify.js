#!/usr/bin/env node

var DroneNotation = require('drone-notation');
var fs = require('fs');
var fileName = process.argv[2];
var droneNotationCode = fs.readFileSync(fileName, 'utf8');

console.log(droneNotationCode, DroneNotation.generate(droneNotationCode))
process.stdout.write(DroneNotation.generate(droneNotationCode));
