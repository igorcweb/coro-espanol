$("a.misa").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#misa").removeClass("d-none");
});
$("a.miercoles").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#miercoles").removeClass("d-none");
});
$("a.cuarezma-2").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#cuarezma-2").removeClass("d-none");
});













