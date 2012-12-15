var Tokenizer = require('tokenizer');
var tokens = require('tokens');

exports.generate = function (input, opts) {
  var rows = Tokenizer.tokenize(input),
      commands = [],
      opts = opts || {
        beatLengthInMilliseconds: 1000,
        powerLevelFloat: 0.8
      };

  rows.forEach(function(row) {
    var rowBlock = "  .after(" + opts.beatLengthInMilliseconds + ", function() {\n";

    row.forEach(function(token) {
      rowBlock += "    this." + token;
      if (tokens.withoutPowerArg.indexOf(token) >= 0) {
        rowBlock += "();\n";
      } else {
        rowBlock += "(" + opts.powerLevelFloat + ");\n";
      }
    });

    rowBlock += "})"
    commands.push(rowBlock);
  });

  console.log("COMMANDS", commands)
  var output = [
    "var arDrone = require('ar-drone');",
    "var client  = arDrone.createClient();",
    "",
    "client",
    commands
  ]
  return output.join('\n');
}