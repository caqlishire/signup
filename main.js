$(function() {
  $("#nav-toggle").click(function() {
    $(this).toggleClass("is-active");
    $("#nav-menu").toggleClass("is-active");
    $(".nav-item").toggleClass("a-other");
  });
})
