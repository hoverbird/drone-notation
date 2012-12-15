var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client
  .after(1000, function() {
    this.takeoff();
    this.wait();
  })
  .after(1000, function() {
    this.right();
    this.forward();
  })
  .after(1000, function() {
    this.forward();
    this.right();
  })
  .after(1000, function() {
    this.back();
    this.wait();
  })
  .after(1000, function() {
    this.up();
    this.backward();
  })
  .after(1000, function() {
    this.land();
    this.wait();
  });
