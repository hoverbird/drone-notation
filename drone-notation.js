var Tokenizer = require(__dirname + '/tokenizer');
var tokens = require(__dirname + '/tokens');

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
      var token = row[col];
      if (token === 'wait' || typeof command === "undefined" || command === null) return; // wait is a no-op

      var columnCell = "    this." + token;

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

  var output = ["drone",commands.join('')];
  return output.join('\n');
}