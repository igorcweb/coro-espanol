$("a.misa").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#misa").removeClass("d-none");
});
$("a.maria").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#maria").removeClass("d-none");
});










