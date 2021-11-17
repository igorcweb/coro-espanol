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
  if ($(this).hasClass('a1c')) {
    $("#a1c").removeClass("d-none");
  } else if ($(this).hasClass('misa')) {
    $("#misa").removeClass("d-none");
  } else if ($(this).hasClass('gracias')) {
    $("#gracias").removeClass("d-none");
  } else if ($(this).hasClass('ctk')) {
    $("#ctk").removeClass("d-none");
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

const ctkDiv = $('.ctk.music');
const ctk = [
  {
    title: 'Viva Jesús el Rey',
  },
  {
    title: 'Salmo 92: Nuestro Señor Jesucristo',
  },
  {
    title: 'Canto de Toda Criatura',
  },
  {
    title: 'Jesús el Buen Pastor',
  },
  {
    title: 'El Rey de la Gloria',
  }
]

const graciasDiv = $('.gracias.music');
const gracias = [
  {
    title: 'Este Es el Dia',
  },
  {
    title: 'Salmo 144: Bendiceré Tu Nombre',
  },
  {
    title: 'Vaso Nuevo',
  },
  {
    title: 'Ven al Banquete',
  },
  {
    title: 'Gracias Señor',
  },
]

const a1cDiv = $('.a1c.music');
const a1c = [
  {
    title: 'Preparen el Camino',
  },
  {
    title: 'Salmo 24: A Ti, Señor, Levanto Mi Alma',
  },
  {
    title: 'Ven, Señor, No Tardes Más',
  },
  {
    title: 'Celebración de Unidad',
  },
  {
    title: 'Arriba los Corazones',
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
      .replaceAll('á', 'a');
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
populateTracks(gracias, graciasDiv, 'gracias');
populateTracks(ctk, ctkDiv, 'ctk');
populateTracks(a1c, a1cDiv, 'a1c');

$('.audio-control').on("play", function () {
  $('.audio-control').not(this).each(function (index, audio) {
    audio.pause()
    audio.currentTime = 0
  });
});























