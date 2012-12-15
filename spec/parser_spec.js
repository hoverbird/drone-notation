// ➚ ⧖ ⧖ ⧖ → ↑ ↑ ↓ △ △ ➘
var Parser = require('parser');

describe('Parser', function() {

  it('should parse the ➚ character as a "takeoff" action.', function() {
    expect(Parser.parse('➚')).toEqual(["takeoff"])
  });

  it('should parse multiple characters as multiple chained calls', function() {
    expect(Parser.parse('· · ·')).toEqual(['wait','wait','wait'])
  });

  it('should parse multiple different chars', function() {
    expect(Parser.parse('➚ → ↑ ↓ △ ➘')).toEqual(['takeoff', 'right', 'forward', 'back', 'up', 'land']);
  });

  it('should parse chars on multiple lines', function() {
    expect(Parser.parse('➚ → ↑ ↓ △ ➘\n· · · ↑ ↓ →')).toEqual(
      [
        ['takeoff', 'right', 'forward', 'back', 'up', 'land'],
        ['wait', 'wait', 'wait', 'forward', 'back', 'right']
      ]
    );
  });

});