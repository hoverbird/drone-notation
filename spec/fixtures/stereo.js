drone
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
    this.front(0.8);
  })
  .after(1000, function() {
    this.up(0.8);
    this.back(0.8);
  })
  .after(1000, function() {
    this.land();
    this.right(0.8);
  })
