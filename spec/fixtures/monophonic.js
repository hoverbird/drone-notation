var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client
  .after(1000, function() {
    this.takeoff();
  })
  .after(1000, function() {
    this.right(0.8);
  })
  .after(1000, function() {
    this.front(0.8);
  })
  .after(1000, function() {
    this.back(0.8);
  })
  .after(1000, function() {
    this.up(0.8);
  })
  .after(1000, function() {
    this.land();
  })
