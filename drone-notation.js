var Parser = require( 'parser');

exports.generate = function (input) {
  var output = [
    "var arDrone = require('ar-drone');",
    "var client  = arDrone.createClient();",
    "",
    "client",
    Parser.parse(input)
  ]
  return output.join('\n');
}