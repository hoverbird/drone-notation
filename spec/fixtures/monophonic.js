var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client
  .after(1000, function() {
    this.takeoff();
  })
  .after(1000, function() {
    this.right();
  })
  .after(1000, function() {
    this.forward();
  })
  .after(1000, function() {
    this.back();
  })
  .after(1000, function() {
    this.up();
  })
  .after(1000, function() {
    this.land();
  });
