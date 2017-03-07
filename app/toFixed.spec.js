tests({
  'it should be able to return an even number': function() {
    var myResult = myToFixed(1.00, 0);
    eq(myResult, 1);
  },
  'it should be able to add zeros to an integer': function() {
    var myResult = myToFixed(1, 2);
    eq(myResult, 1.00)
  },

  'it should be work on numbers less than 1': function() {
    var myResult = myToFixed(.1234, 3);
    eq(myResult, 0.123)
  },

  'it should work on negative numbers': function() {
    eq(myToFixed(-1), -1.00);
  },

  'it should work on the edge cases outlined in the docs': function() {
    eq(myToFixed(0.615), 0.62);
    eq(myToFixed(10.235), 10.24);
    eq(myToFixed(1.005), 1.01);
  }

});