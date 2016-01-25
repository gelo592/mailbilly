$(function() {
  sampleTexts = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.'
    + ' Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.'
    + ' Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia'

  , 'Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices'
    + ' accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque '
    + 'penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi '
    + 'at sem facilisis semper ac in est nam dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam'
    + ' lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et'
    + ' mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta'
    + ' lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, '
    + 'consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.'
    + 'Pellentesque auctor nisi id magna consequat sagittis.'

  , 'Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit'
    + ' est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo'
    + ' vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut'
    + ' massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc,'
    + ' sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est'
    + ' eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus.'
    + ' Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.Lorem ipsum dolor sit amet, consectetur'
    + ' adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec'
    + ' consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.'
    + ' Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.'
    + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed,'
    + ' adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra'
    + ' tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra'
    + ' mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes,'
    + ' nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.'
    + ' Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices'
    + ' facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl.'
    + ' Morbi id quam sapien.'

  , 'Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio.'
    + ' Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis,'
    + ' nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat,'
    + ' arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et,'
    + ' tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu,'
    + ' porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod'
    + ' ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis'
    + ' lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies.'
    + ' Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi.'
    + ' Fusce vel volutpat elit. Nam sagittis nisi dui. Suspendisse lectus leo, consectetur in tempor sit amet,'
    + ' placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a'
    + ' enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt.'
    + ' Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis.'
    + ' Praesent lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci.'
    + ' Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam.'
    + ' Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi.'
    + ' Phasellus non ullamcorper urna.Class aptent taciti sociosqu ad litora torquent per conubia nostra,'
    + ' per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id'
    + ' pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem.'
    + ' Duis elementum rutrum mauris sed convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    + ' Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur'
    + ' ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.'
    + ' Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.'
    + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis,'
    + ' pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis.'
    + ' Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna'
    + ' ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus.'
    + ' Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan'
    + ' ultricies. Mauris vitae nisi at sem facilisis semper ac in est.'

  , 'Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar'
    + ' id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.'
    + ' id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat,'
    + ' non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci.'
    + ' Fusce eget orci a orci congue ve. Cum sociis natoque penatibus et magnis dis parturient montes,'
    + ' nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.'
    + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.'
    + ' Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.'
    + ' Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim,'
    + ' ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.'
    + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis,'
    + ' pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis.'
    + ' Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero'
    + ' in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu'
    + ' rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    + ' In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est. Vivamus fermentum'
    + ' semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis'
    + ' ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit,'
    + ' id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat,'
    + ' non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci.'
    + ' Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit.'
    + ' Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo.'
    + ' Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper.'
    + ' Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam,'
    + ' mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi.'
    + ' Fusce vel volutpat elit. Nam sagittis nisi dui. Suspendisse lectus leo, consectetur in tempor sit amet,'
    + ' placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl'
    + ' a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt.'
    + ' Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus'
    + ' convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non,'
    + ' adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla'
    + ' ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus.'
    + ' Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna urna quis eros.'
    + ' Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    + ' In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie.'
    + ' Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis.'
    + ' Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut.'
    + ' Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar.'
    + ' Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa,'
    + ' sed vulputate quam urna quis eros. Donec vel.'
  ]

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

    console.log("how: ", howMulti);
    console.log("what: ", whatMulti);
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
    console.log(multi);
    console.log(words);
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

  /*$(".typed-1").typed({
      strings: ["Is we always okay for 18H ?", "Are we still okay for 6pm?"],
      typeSpeed: 0,
      showCursor: false,
      startDelay: 100,
      backDelay: 500
  });
  $(".typed-2").typed({
      strings: ["It's me Sebastien. Do you remember us appointment for this night ? If you forget my number he is 06 52 13 72 32.", "It's me Sebastien. Do you remember our appointment for tonight? If you forgot, my number is 06 52 13 72 32"],
      typeSpeed: 0,
      showCursor: false,
      startDelay: 3200,
      backDelay: 500
  });
  $(".typed-3").typed({
      strings: ["Cordially,", "Best regards,"],
      typeSpeed: 0,
      showCursor: false,
      startDelay: 6200,
      backDelay: 500
  });*/
});