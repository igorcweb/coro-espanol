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
  if ($(this).hasClass('otb26')) {
    $("#otb26").removeClass("d-none");
  } else if ($(this).hasClass('misa')) {
    $("#misa").removeClass("d-none");
  } else if ($(this).hasClass('otb27')) {
    $("#otb27").removeClass("d-none");
  }
  $('audio').each(function () {
    $(this)[0].pause()
    $(this)[0].currentTime = 0;
  })
})

$(document).on('mouseover', '.selection', function () {
  $(this).find('.fa-hand-pointer-o').addClass('hover');
})

$(document).on('mouseout', '.selection', function () {
  $(this).find('.fa-hand-pointer-o').removeClass('hover');
})

const misaDiv = $('.misa.music');
const misa = [
  {
    title: 'Señor Ten Piedad y Gloria',
    file: './audio/partes-de-la-misa/senor-ten-piedad-gloria.m4a'
  },
  {
    title: 'Kyrie',
    file: './audio/partes-de-la-misa/kyrie.m4a'
  },
  {
    title: 'Santo',
    file: './audio/partes-de-la-misa/santo.m4a'
  },
  {
    title: 'Anunciamos Tu Muerte',
    file: './audio/partes-de-la-misa/anunciamos-tu-muerte.m4a'
  },
  {
    title: 'Amen',
    file: './audio/partes-de-la-misa/amen.m4a'
  },
  {
    title: 'Cordero de Dios',
    file: './audio/partes-de-la-misa/cordero-de-dios.m4a'
  },
]

const otb27Div = $('.otb27.music');
const otb27 = [
  {
    title: 'Amor de Dios',
    file: './audio/otb-27/amor-de-dios.m4a'
  },
  {
    title: 'Salmo 127: El Señor Nos Bendiga',
    file: './audio/otb-27/salmo-127-el-senor-nos-bendiga.m4a'
  },
  {
    title: 'El Amor Nunca Pasará ',
    file: './audio/otb-27/el-amor-nunca-pasara.m4a'
  },
  {
    title: 'Canto de Toda Criatura',
    file: './audio/otb-27/canto-de-toda-criatura.m4a'
  },

  {
    title: 'Yo Canto Amor',
    file: './audio/otb-27/yo-canto-amor.m4a'
  }
]

const otb26Div = $('.otb26.music');
const otb26 = [
  {
    title: 'Ven al Banquete',
    file: './audio/otb-26/ven-al-banquete.m4a'
  },
  {
    title: 'Salmo 18: Señor, Tú Tienes Palabras',
    file: './audio/otb-26/salmo-18-senor-tu-tienes-palabras.m4a'
  },
  {
    title: 'Todos Esperamos de Ti',
    file: './audio/otb-26/todos-esperamos-de-ti.m4a'
  },
  {
    title: 'Envía Tu Espíritu',
    file: './audio/otb-26/envia-tu-espiritu.m4a'
  },
  {
    title: 'Grita, Profeta',
    file: './audio/otb-26/grita-profeta.m4a'
  },
]

function populateTracks(track, div) {
  $.each(track, (i, track) => {
    $(div).append(`
    <div class="mb-4">
      <h4 class="ms-4 ms-sm-2">
        ${track.title}
      </h4>
      <audio controls title="${track.title}" class="audio-control mb-2">
        <source src="${track.file}" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </div>
    `);
  })
}

populateTracks(misa, misaDiv);
populateTracks(otb27, otb27Div);
populateTracks(otb26, otb26Div);

$('.audio-control').on("play", function () {
  $('.audio-control').not(this).each(function (index, audio) {
    audio.pause()
    audio.currentTime = 0
  });
});























