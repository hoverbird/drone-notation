var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client
  .after(1000, function() {
    this.takeoff();
    this.wait();
  })
  .after(1000, function() {
    this.right(0.8);
    this.wait();
  })
  .after(1000, function() {
    this.forward(0.8);
    this.wait();
  })
  .after(1000, function() {
    this.back(0.8);
    this.forward(0.8);
  })
  .after(1000, function() {
    this.up(0.8);
    this.back(0.8);
  })
  .after(1000, function() {
    this.land();
    this.right(0.8);
  })
