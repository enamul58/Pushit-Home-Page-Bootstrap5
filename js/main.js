$(function () {
  $("[data-bs-target]").on("click", function () {
    var trageet_id = $(this).attr("data-bs-target");
    $(trageet_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
  });
});
