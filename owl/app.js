$(document).ready(function () {
  var owl = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
  });

  // Kendi butonlarınızla kontrol
  $("#prevButton").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $("#nextButton").click(function () {
    owl.trigger("next.owl.carousel");
  });
});
3;
