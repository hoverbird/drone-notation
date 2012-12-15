var Tokenizer = require('tokenizer');
var tokens = require('tokens');

exports.generate = function (input, opts) {
  var rows = Tokenizer.tokenize(input),
      commands = [],
      columnWidth = rows[0].length,
      opts = opts || {
        beatLengthInMilliseconds: 1000,
        powerLevelFloat: 0.8
      };

  for(var col = 0; col < columnWidth; col++) {
    var commandsInCol = [];

    rows.forEach(function(row) {
      var token = row[col],
          columnCell = "    this." + token;

      if (tokens.withoutPowerArg.indexOf(token) >= 0) {
        columnCell += "();";
      } else {
        columnCell += "(" + opts.powerLevelFloat + ");";
      }
      commandsInCol.push(columnCell)
    });

    columnBlock = "  .after(" + opts.beatLengthInMilliseconds + ", function() {\n"
      + commandsInCol.join("\n")
    + "\n  })\n";
    commands.push(columnBlock);
  }

  var output = [
    "var arDrone = require('ar-drone');",
    "var client  = arDrone.createClient();",
    "",
    "client",
    commands.join('')
  ]
  return output.join('\n');
}