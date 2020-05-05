// $("#palmSunday").collapse("show");

$("a.pascua-2").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".misic").addClass("d-none");
  $("#pascua-2").removeClass("d-none");
});

$("a.pascua-3").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".misic").addClass("d-none");
  $("#pascua-6").addClass("d-none");
  $("#pascua-3").removeClass("d-none");
});

$("a.pascua-4").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".misic").addClass("d-none");
  $("#pascua-4").removeClass("d-none");
});

$("a.pascua-5").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".misic").addClass("d-none");
  $("#pascua-5").removeClass("d-none");
});
