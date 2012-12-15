// ➚ ⧖ ⧖ ⧖ → ↑ ↑ ↓ △ △ ➘
var Parser = require('parser');

describe('Drone Notation', function() {

    // var _order = new Order([ new OrderItem(12), new OrderItem(16) ]),
    //     _totalAmountWithoutDiscount = _order.getTotalAmount();
    //     _customer = new Customer([ _order ]);

    // _customer.makePreferred();

    it('should parse the ➚ character as a "takeoff" action.', function() {
        console.log(Parser)
        expect(Parser.parse('➚')).toEqual("client.takeoff();")
    });

    // it('should apply a ten percent discount to all outstanding orders', function() {
    //     _order.getTotalAmount().should.equal(_totalAmountWithoutDiscount * 0.9);
    // });
});