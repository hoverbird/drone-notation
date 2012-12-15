// ➚ ⧖ ⧖ ⧖ → ↑ ↑ ↓ △ △ ➘
var Parser = require('parser');

describe('Drone Notation', function() {

    it('should parse the ➚ character as a "takeoff" action.', function() {
      expect(Parser.parse('➚')).toEqual(".takeoff();")
    });

    it('should parse multiple characters as multiple chained calls', function() {
      expect(Parser.parse('⧖ ⧖ ⧖')).toEqual(".wait()\n.wait()\n.wait();")
    });
});