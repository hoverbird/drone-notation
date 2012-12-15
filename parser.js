exports.parse = function (input) {
  var tokenized = input.split(' ');
  var output = [];
  var i = 0;

  while (i <= tokenized.length) {
    var char = tokenized[i];

    if        (char === '⧖') {
      output.push('.wait()')
    } else if (char === '➚') {
      output.push('.takeoff()');
    }
    i++
  }

  return output.join('\n') + ';';
}