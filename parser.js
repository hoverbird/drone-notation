exports.parse = function (input) {
  var output = [];
  var rows = input.split('\n')
  var rowIndex = 0;

  var tokenToCommandMap = {
    '·': 'wait',
    '➚': 'takeoff',
    '→': 'right',
    '↑': 'forward',
    '↓': 'back',
    '△': 'up',
    '➘': 'land'
  }

  while (rowIndex < rows.length) {
    var row = rows[rowIndex],
        rowOutput = [],
        i = 0,
        tokenized = row.split(' ');

    while (i <= tokenized.length) {
      var command = tokenToCommandMap[tokenized[i]];

      if (typeof command !== "undefined" && command !== null) {
                  console.log('rowOutput!', rowOutput)

        rowOutput.push(command);
      }
      i++;
    }

    output.push(rowOutput);
                          console.log('output !', output)
    rowIndex++;
  }

  if (output.length === 1 ) {
    return output[0];
  } else {
    return output
  }
}