$(function() {
  function attachListeners () {
    $("#what-group").click({"what": 1}, setMultipliers);
    $("#how-group").click({"what": 0}, setMultipliers);

    $("#word-counter").keyup({"what": -1}, setMultipliers);

    $("#billynav ul").click(switchActiveNav);

    $('body').scrollspy({target: "#billybar", offset: 90});
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
        multi = 0.04;
        break;
      case 1:
        multi = 0.08;
        break;
      case 2:
        multi = 0.12;
        break;
      case 3:
        multi = 0.18;
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

    var quote = multi * words;

    quote = Math.ceil(quote * 100) / 100;

    $("#price-quote")[0].innerHTML = "Prix: $" + quote;
    $("#word-count")[0].innerHTML = "Mots: " + words;

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

  attachListeners();

  $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });
});