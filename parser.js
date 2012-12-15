exports.parse = function (input) {
  var tokenized = input.split(' ');
  var output = [];
  var i = 0;

  var tokenToCommandMap = {
    '⧖': 'wait',
    '➚': 'takeoff',
    '→': 'right',
    '↑': 'forward',
    '↓': 'back',
    '△': 'up',
    '➘': 'land'
  }

  while (i <= tokenized.length) {
    var command = tokenToCommandMap[tokenized[i]];
    if (typeof command !== "undefined" && command !== null) {
      output.push('  .' + command + '()');
    }
    i++
  }

  return output.join('\n') + ';';
}