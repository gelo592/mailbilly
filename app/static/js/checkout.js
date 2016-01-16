$(function() {
  var handler = StripeCheckout.configure({
    key: 'pk_test_LygWBNXL6QR1oVSAHN4T6CGf',
    image: 'static/img/billysquare.png',
    locale: 'auto',
    token: function(token) {
      var $input = $('<input type=hidden name=stripeToken />').val(token.id);
      $('form').append($input).submit();
    }
  });

  $('#buy25').click({amount: 3000}, chargeThings);
  $('#buy75').click({amount: 9000}, chargeThings);
  $('#buy150').click({amount: 18000}, chargeThings);
  $('#buy500').click({amount: 60000}, chargeThings);

  function chargeThings(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Mail Billy',
      //description: '2 widgets',
      currency: "eur",
      amount: e.data.amount
    });
    e.preventDefault();
  }

  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    handler.close();
  });
});