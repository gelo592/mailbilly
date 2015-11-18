$(function() {
  function attachListers () {
    $(".size-switcher").click(switchSample);
  }

  function switchSample (e) {
    var which = e.toElement.dataset['which'];

    $(".samples").addClass("hidden");
    $("#"+which).removeClass("hidden");

    $(".size-switcher button").removeClass("active");
    $(e.toElement).addClass("active");
  }

  attachListers();
});