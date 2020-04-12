// $("#palmSunday").collapse("show");

$("a.palm-sunday").addClass("active");
$("a.palm-sunday").on("click", function() {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#holyThursday").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#palmSunday").removeClass("d-none");
});

$("a.holy-thursday").on("click", function() {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#holyThursday").removeClass("d-none");
});

$("a.good-friday").on("click", function() {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#holyThursday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#goodFriday").removeClass("d-none");
});

$("a.easter-vigil").on("click", function() {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#holyThursday").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easterSunday").addClass("d-none");
  $("#easterVigil").removeClass("d-none");
});

$("a.easter-sunday").on("click", function() {
  $("a").removeClass("active");
  $(this).addClass("active");
  $("#palmSunday").addClass("d-none");
  $("#holyThursday").addClass("d-none");
  $("#easterVigil").addClass("d-none");
  $("#goodFriday").addClass("d-none");
  $("#easterSunday").removeClass("d-none");
});
