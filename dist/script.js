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
  if ($(this).hasClass('todosSantos')) {
    $("#todosSantos").removeClass("d-none");
  } else if ($(this).hasClass('misa')) {
    $("#misa").removeClass("d-none");
  } else if ($(this).hasClass('otb31')) {
    $("#otb31").removeClass("d-none");
  } else if ($(this).hasClass('otb32')) {
    $("#otb32").removeClass("d-none");
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

const otb32Div = $('.otb32.music');
const otb32 = [
  {
    title: 'El Señor Nos Invita',
  },
  {
    title: 'Salmo 145: Alaba, Alma Mía, al Señor',
  },
  {
    title: 'Como Busca la Cierva',
  },
  {
    title: 'Eres Tú, Jesús',
  },
  {
    title: 'Un Canto Nuevo',
  }
]

const todosSantosDiv = $('.todosSantos.music');
const todosSantos = [
  {
    title: 'Qué Alegría Cuando Me Dijeron',
  },
  {
    title: 'Salmo 23: Ésta Es la Raza',
  },
  {
    title: 'Pueblo Santo y Elegido',
  },
  {
    title: 'Vengan a Mí los Agobiados',
  },
  {
    title: 'Un Pueblo que Camina',
  },
]

const otb31Div = $('.otb31.music');
const otb31 = [
  {
    title: 'Tu Palabra Me Da Vida',
  },
  {
    title: 'Salmo 17: Yo Te Amo Señor',
  },
  {
    title: 'Mi Dios y Mi Todo',
  },
  {
    title: 'Señor, Te Adoramos',
  },
  {
    title: 'Yo Canto Amor',
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
      .replaceAll('ú', 'u');
    const file = `./audio/${folder}/${fileName}.m4a`;
    $(div).append(`
    <div class="mb-4">
      <h4 class="ms-4 ms-sm-2">
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
populateTracks(todosSantos, todosSantosDiv, 'todosSantos');
populateTracks(otb31, otb31Div, 'otb-31');
populateTracks(otb32, otb32Div, 'otb-32');

$('.audio-control').on("play", function () {
  $('.audio-control').not(this).each(function (index, audio) {
    audio.pause()
    audio.currentTime = 0
  });
});























