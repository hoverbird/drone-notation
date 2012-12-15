// ➚ ⧖ ⧖ ⧖ → ↑ ↑ ↓ △ △ ➘
var DroneNotation = require('drone-notation');
var fs = require('fs');

describe('Drone Notation', function() {

  it('should generate executable javascript', function() {
    var fixtureData = fs.readFileSync(__dirname + '/fixtures/monophonic.js', 'utf8')
    expect(DroneNotation.generate('➚ → ↑ ↓ △ ➘')).toEqual(fixtureData);
  });

});