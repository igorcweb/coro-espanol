// $("#palmSunday").collapse("show");

$("a.pascua-4").addClass("active");

$("a.pascua-2").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#pascua-3").addClass("d-none");
  $("#pascua-4").addClass("d-none");
  $("#pascua-5").addClass("d-none");
  $("#pascua-6").addClass("d-none");
  $("#pascua-2").removeClass("d-none");
});

$("a.pascua-3").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#pascua-2").addClass("d-none");
  $("#pascua-4").addClass("d-none");
  $("#pascua-5").addClass("d-none");
  $("#pascua-6").addClass("d-none");
  $("#pascua-3").removeClass("d-none");
});

$("a.pascua-4").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#pascua-2").addClass("d-none");
  $("#pascua-3").addClass("d-none");
  $("#pascua-5").addClass("d-none");
  $("#pascua-6").addClass("d-none");
  $("#pascua-4").removeClass("d-none");
});
