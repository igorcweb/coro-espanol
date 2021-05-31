// $("a.misa").on("click", function () {
//   $("a").removeClass("active");
//   $(this).addClass("active");
//   $(".music").addClass("d-none");
//   $("#misa").removeClass("d-none");
// });
// $("a.pentecostes").on("click", function () {
//   $("a").removeClass("active");
//   $(this).addClass("active");
//   $(".music").addClass("d-none");
//   $("#pentecostes").removeClass("d-none");
// });
// $("a.boda").on("click", function () {
//   $("a").removeClass("active");
//   $(this).addClass("active");
//   $(".music").addClass("d-none");
//   $("#boda").removeClass("d-none");
// });



function activate() {
  $.each($('.selection'), function (i, selection) {
    if ($(selection).hasClass('active')) {
      $(selection).find('.fa-hand-pointer-o').addClass('d-none')
      $(selection).find('.fa-check').removeClass('d-none')
    }
  })
}

activate();

$('.selection').on('click', function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $('.selection').find('.fa-hand-pointer-o').removeClass('d-none')
  $('.selection').find('.fa-check').addClass('d-none')
  activate();
  $(".music").addClass("d-none");
  if ($(this).hasClass('corpus')) {
    $("#corpus").removeClass("d-none");
  } else if ($(this).hasClass('misa')) {
    $("#misa").removeClass("d-none");
  }
})

$(document).on('mouseover', '.selection', function () {
  $(this).find('.fa-hand-pointer-o').addClass('hover');
})

$(document).on('mouseout', '.selection', function () {
  $(this).find('.fa-hand-pointer-o').removeClass('hover');
})























