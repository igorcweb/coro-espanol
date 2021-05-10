$("a.misa").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#misa").removeClass("d-none");
});
$("a.asc").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#asc").removeClass("d-none");
});
$("a.boda").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#boda").removeClass("d-none");
});















