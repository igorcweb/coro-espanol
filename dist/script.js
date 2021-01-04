$("a.misa").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#misa").removeClass("d-none");
});
$("a.bautismo").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#bautismo").removeClass("d-none");
});











