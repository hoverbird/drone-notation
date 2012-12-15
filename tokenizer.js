var tokens = require(__dirname + '/tokens.js');

exports.tokenize = function (input) {
  var output = [];
  var rows = input.split('\n')
  var rowIndex = 0;

  while (rowIndex < rows.length) {
    var row = rows[rowIndex],
        rowOutput = [],
        i = 0,
        tokenized = row.split(' ');

    while (i <= tokenized.length) {
      var command = tokens.commandMap[tokenized[i]];

      if (typeof command !== "undefined" && command !== null) {
        rowOutput.push(command);
      }
      i++;
    }

    output.push(rowOutput);
    rowIndex++;
  }

  return output;
}