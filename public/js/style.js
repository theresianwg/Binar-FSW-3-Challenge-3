$('.carousel-item', '.show-neighbors').each(function(){
    var next = $(this).next();
    if (! next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }).each(function(){
    var prev = $(this).prev();
    if (! prev.length) {
      prev = $(this).siblings(':last');
    }
    prev.children(':nth-last-child(2)').clone().prependTo($(this));
  });

  $(function () {
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').addClass('open')
      $('.mobileMenu, .overlay').addClass('open');
    })
    $('.close-brand').on('click', function () {
      $('.offcanvas-collapse').removeClass('open')
      $('.mobileMenu, .overlay').removeClass('open');
    })
  })

  $('.datepicker').datepicker({
    clearBtn: true,
    format: "dd/mm/yyyy",
    orientation: "bottom auto",
});

$('.timepicker').timepicker({
  timeFormat: 'hh:mm',
  interval: 60,
  minTime: '08',
  maxTime: '12',
  defaultTime: '08',
  startTime: '08',
  dynamic: false,
  dropdown: true,
  scrollbar: true
});


// FOR DEMO PURPOSE
$('.datepicker').on('change', function () {
    var pickedDate = $('input').val();
    $('.datepicker').html(pickedDate);
});

let backdrop = '<div class="modal-backdrop fade show"></div>';

$('#cariMobil').on('click', function () {
  $(this).hide();
    $('.filterForm').removeClass('d-none');
    $('#whyUs-section').append(backdrop);
});

$('#mulaiCari').on('click', function () {
  if($('.modal-backdrop')[0]) $('.modal-backdrop').remove()
  if($('#resultCar').hasClass('d-none')) $('#resultCar').removeClass('d-none')
  $.ajax({
    type: "GET",
    url: window.location.href+"cars",
    data:{
      available : $('#tipeDriver').val(),
      availableAt : $('.datepicker').val()+'T'+$('.timepicker').val(),
      capacity : $('#kapasitas').val(),
    },
    success: function (data) {
      if (data.length >= 1) {
        $("#table tbody")
          .empty()
          .append(() => {
            let html = "";
            data.forEach((item, index) => {
              html += `<tr>
              <th scope="row">${index}</th>
              <td>${item.name}</td>
              <td>${item.eyeColor}</td>
              <td>${item.age}</td>
              <td>${item.gender}</td>
              <td>${item.company}</td>
              <td>${item.email}</td>
              <td>${item.phone}</td>
              <td>${item.favoriteFruit}</td>
            </tr>`;
            });
            return html;
          });
      } else {
        $("#table tbody")
          .empty()
          .append(() => {
            let html =
              "<tr><td colspan='9'><img class='d-block mx-auto w-25'src='https://media.giphy.com/media/FcuiZUneg1YRAu1lH2/giphy.gif'alt=''/><h1 class='text-center'>Data yang kamu cari gak ada</h1></td></tr>";
            return html;
          });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("error: " + textStatus + ": " + errorThrown);
    },
  });
  return false;
});


