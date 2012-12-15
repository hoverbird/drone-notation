// ➚ ⧖ ⧖ ⧖ → ↑ ↑ ↓ △ △ ➘
var Tokenizer = require('tokenizer');

describe('Tokenizer', function() {

  it('should tokenize the ➚ character as a "takeoff" action.', function() {
    expect(Tokenizer.tokenize('➚')).toEqual([["takeoff"]])
  });

  it('should tokenize multiple characters as multiple chained calls', function() {
    expect(Tokenizer.tokenize('· · ·')).toEqual([['wait','wait','wait']])
  });

  it('should tokenize multiple different chars', function() {
    expect(Tokenizer.tokenize('➚ → ↑ ↓ △ ➘')).toEqual(
      [['takeoff', 'right', 'front', 'back', 'up', 'land']]
    );
  });

  it('should tokenize chars on multiple lines', function() {
    expect(Tokenizer.tokenize('➚ → ↑ ↓ △ ➘ | · · · ↑ ↓ →')).toEqual(
      [ ['takeoff', 'right', 'front', 'back', 'up', 'land'],
        ['wait', 'wait', 'wait', 'front', 'back', 'right'] ]
    );
  });

  it('should replace newline characters with pipes, and split on those', function() {
    expect(Tokenizer.tokenize('➚ → ↑ ↓ △ ➘ \n · · · ↑ ↓ →')).toEqual(
      [ ['takeoff', 'right', 'front', 'back', 'up', 'land'],
        ['wait', 'wait', 'wait', 'front', 'back', 'right'] ]
    );
  });


});