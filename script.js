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
  if ($(this).hasClass('a2c')) {
    $("#a2c").removeClass("d-none");
  } else if ($(this).hasClass('misa')) {
    $("#misa").removeClass("d-none");
  } else if ($(this).hasClass('ic')) {
    $("#ic").removeClass("d-none");
  } else if ($(this).hasClass('a3c')) {
    $("#a3c").removeClass("d-none");
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
  },
  {
    title: 'Kyrie',
  },
  {
    title: 'Santo',
  },
  {
    title: 'Anunciamos Tu Muerte',
  },
  {
    title: 'Amen',
  },
  {
    title: 'Cordero de Dios',
  },
]

const icDiv = $('.ic.music');
const ic = [
  {
    title: 'Madre de la Iglesia',
  },
  {
    title: 'Salmo 97: Canten al Señor',
  },
  {
    title: 'Santa María del Camino',
  },
  {
    title: 'Canto de María',
  },
  {
    title: 'Adiós, Reina del Cielo',
  }
]


const a2cDiv = $('.a2c.music');
const a2c = [
  {
    title: 'Vienen con Alegria',
  },
  {
    title: 'Salmo 125: El Señor Ha Estado Grande',
  },
  {
    title: 'Amanecerá, el Señor',
  },
  {
    title: 'Todos Esperamos de Ti',
  },
  {
    title: 'Grita, Profeta',
  },
]

const a3cDiv = $('.a3c.music');
const a3c = [
  {
    title: 'Que Alegría Cuando Me Dijeron',
  },
  {
    title: 'Isaías 12: Grita de Alegría (Estribillo)',
  },
  {
    title: 'Cristo Que Se Da',
  },
  {
    title: 'Oh Ven, Oh Ven, Emmanuel',
  },
  {
    title: 'Preparen el Camino',
  },
]




function populateTracks(track, div, folder) {
  $.each(track, (i, track) => {
    let fileName = track.title
      .toLowerCase()
      .replaceAll(',', '')
      .replaceAll(':', '')
      .replaceAll('!', '')
      .replaceAll("’", '')
      .replaceAll(' ', '-')
      .replaceAll('ñ', 'n')
      .replaceAll('í', 'i')
      .replaceAll('ó', 'o')
      .replaceAll('é', 'e')
      .replaceAll('ú', 'u')
      .replaceAll('á', 'a')
      .replaceAll(')', '')
      .replaceAll('(', '');
    const file = `./audio/${folder}/${fileName}.m4a`;
    $(div).append(`
    <div class="mb-4">
      <h4 class="ms-4 ms-sm-2 text-advent">
        ${track.title}
      </h4>
      <audio controls title="${track.title}" class="audio-control mb-2">
        <source src="${file}" />
        Your browser does not support the audio element.
      </audio>
    </div>
    `);
  })
}

populateTracks(misa, misaDiv, 'partes-de-la-misa');
populateTracks(ic, icDiv, 'ic');
populateTracks(a2c, a2cDiv, 'a2c');
populateTracks(a3c, a3cDiv, 'a3c');

$('.audio-control').on("play", function () {
  $('.audio-control').not(this).each(function (index, audio) {
    audio.pause()
    audio.currentTime = 0
  });
});























