drone-notation
==============

a tiny language for telling quadcopter drones what to do. compiles your little staff:

➚ → ↑ ↓ △ △ → ➘
· · ↑ ↓ ↻ ↻ · ·
· · · · → · · ·

into JS code that [node-ar-drone](https://github.com/felixge/node-ar-drone) can understand.


run them tests
-------

`npm install -g jasmine-node`
`jasmine-node spec`