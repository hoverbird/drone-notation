// ➚ ⧖ ⧖ ⧖ → ↑ ↑ ↓ △ △ ➘
var Parser = require('parser');

describe('Parser', function() {

  it('should parse the ➚ character as a "takeoff" action.', function() {
    expect(Parser.parse('➚')).toEqual(".takeoff();")
  });

  it('should parse multiple characters as multiple chained calls', function() {
    expect(Parser.parse('⧖ ⧖ ⧖')).toEqual(".wait()\n.wait()\n.wait();")
  });

  it('should parse multiple, idiosyncratic chars', function() {
    var expectedOutput = ".takeoff()\n.right()\n.forward()\n.back()\n.up()\n.land();";
    expect(Parser.parse('➚ → ↑ ↓ △ ➘')).toEqual(expectedOutput);
  });

});