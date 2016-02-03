$(function() {
  function attachListeners () {
    $("#what-group").click({"what": 1}, setMultipliers);
    $("#how-group").click({"what": 0}, setMultipliers);

    $("#word-counter").keyup({"what": -1}, setMultipliers);

    $("#billynav ul").click(switchActiveNav);

    $('body').scrollspy({target: "#billybar", offset: 90});

    $("#what-group label").mouseover(showToolTip);
    $("#what-group").mouseout(function(e){$(".tipper").hide()});
  }

  function showToolTip(e) {
    console.log(e.toElement);
    console.log($(e.toElement).data("tiptitle"));
    $(".tooltip-inner")[0].innerHTML = $(e.toElement).data("tiptitle");

    $(".tipper").show();
  }


  function switchActiveNav(e) {
    $(".navie").removeClass("active");
    $(e.toElement).parent().addClass("active");
  }

  function setMultipliers (e, s) {

    var multi;
    var howMulti = e.data['what'] == 0 ? $(e.toElement).data('multiplier') : $("#how-group > label.active").data('multiplier');
    var whatMulti = e.data['what'] == 1 ? $(e.toElement).data('multiplier') : $("#what-group > label.active").data('multiplier');

    var multiSwitch = howMulti | whatMulti;

    switch (multiSwitch) {
      case 0:
        multi = 4.5;
        break;
      case 1:
        multi = 8.5;
        break;
      case 2:
        multi = 12;
        break;
      case 3:
        multi = 18;
        break;
    }

    calculatePrice(multi);
  }

  function calculatePrice(multi) {
    var text = $("#word-counter")[0].value;
    var words;

    if(text !== undefined && text !== null && text !== "") {
      words = text.match(/\S+/g).length;
    }
    else {
      words = 0;
    }

    var quoteCents = Math.floor(multi * words);
    quoteCents = quoteCents < 200 ? 200 : quoteCents;
    var quote = quoteCents.toString();

    if(quote.length == 1) {
      quote = "00" + quote;
    }
    else if(quote.length == 2) {
      quote = "0" + quote;
    }

    quote = quote.slice(0, -2) + "," + quote.slice(-2);

    $("#price-quote")[0].innerHTML = quote + "€";
    $("#word-count")[0].innerHTML = words;
    $("#credits")[0].innerHTML = quote + "€";
    $("#credits").data('amount', quoteCents);
  }

  function countWordsWrap (e) {
    var text = e.currentTarget.value;
    countWords(text);
  }

  function countWords(text) {
    var words, quote;
    if(text !== undefined && text !== null && text !== "") {
      words = text.match(/\S+/g).length;
    }
    else {
      words = 0;
    }


    if(words >= 601) {
      quote = "Special order contact mail billy for a devis !";
    }

    $("#word-count")[0].innerHTML = words;
    $("#price-quote")[0].innerHTML = quote;
  }

  var handler = StripeCheckout.configure({
    key: 'pk_live_MV0mg91qG8h5ekWBHd57Iu4i',
    image: '/static/img/billysquare.svg',
    locale: 'auto',
    token: function(token) {
      var $token = $('<input type=hidden name=stripeToken />').val(token.id);
      var $email = $('<input type=hidden name=stripeEmail />').val(token.email);

      $('#devis-form').append($token).append($email).submit();
    }
  });

  $('#charge-btn').click(charge);
  $('#charge35').click({amount: 3000}, charge);
  $('#charge75').click({amount: 9000}, charge);
  $('#charge150').click({amount: 18000}, charge);
  $('#charge300').click({amount: 36000}, charge);
  $('#charge500').click({amount: 60000}, charge);

   function charge(e) {
    console.log(e.data)
    var amount;
    if(e.data && 'amount' in e.data) {
      amount = e.data.amount;
    }
    else {
      amount = $("#credits").data("amount");
    }
    $('#devis-form').append($('<input type=hidden name=amount />').val(amount));

    // Open Checkout with further options
    handler.open({
      name: 'Mail Billy',
      currency: "eur",
      amount: amount,
      allowRememberMe: false
    });
    e.preventDefault();
  }

  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    handler.close();
  });

  attachListeners();

  $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });
});