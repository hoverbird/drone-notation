var Tokenizer = require('tokenizer');

exports.generate = function (input) {
  var output = [
    "var arDrone = require('ar-drone');",
    "var client  = arDrone.createClient();",
    "",
    "client",
    Tokenizer.tokenize(input)
  ]
  return output.join('\n');
}