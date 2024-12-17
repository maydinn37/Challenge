$("#hamburger").click(function () {
  if ($("#hamburger").css("display") === "inline-block") {
    $("#mobile-menu").fadeToggle();
    $(".buttons").fadeToggle();
  } else {
    $("#mobile-menu").fadeToggle();
    $(".buttons").fadeToggle();
  }
});
