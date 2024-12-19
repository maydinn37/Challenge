$("#hamburger").click(function () {
  if ($("#hamburger").css("display") === "inline-block") {
    $("#mobile-menu").fadeToggle();
    $(".buttons").fadeToggle();
  } else {
    $("#mobile-menu").fadeToggle();
    $(".buttons").fadeToggle();
  }
});

$(document).ready(function () {
  var owl = $("#best-vacation-carousel").owlCarousel({
    rewind: false,
    loop: true,
    stagePadding: 0,
    nav: false,
    items: 3,
    margin: 31,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $("#prevButton").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $("#nextButton").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  var owl = $("#book-now-carousel").owlCarousel({
    rewind: false,
    loop: true,
    items: 4,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $("#prevButtonBook").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $("#nextButtonBook").click(function () {
    owl.trigger("next.owl.carousel");
  });
});
$(document).ready(function () {
  var owl = $("#update-carousel").owlCarousel({
    rewind: false,
    dots: false,
    loop: true,
    items: 4,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});
