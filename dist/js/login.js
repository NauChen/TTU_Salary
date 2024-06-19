"use strict";

var inP = $('.input-field');
inP.on('blur', function () {
  if (!this.value) {
    $(this).parent('.f_row').removeClass('focus');
  } else {
    $(this).parent('.f_row').addClass('focus');
  }
}).on('focus', function () {
  $(this).parent('.f_row').addClass('focus');
  $('.btn').removeClass('active');
  $('.f_row').removeClass('shake');
});
$('.resetTag').click(function (e) {
  e.preventDefault();
  $('.formBox').addClass('level-forget').removeClass('level-consent');
});
$('.back').click(function (e) {
  e.preventDefault();
  $('.formBox').removeClass('level-forget').addClass('level-login');
});
$('.regTag').click(function (e) {
  e.preventDefault();
  $('.formBox').removeClass('level-consent-revers');
  $('.formBox').toggleClass('level-login').toggleClass('level-consent');
  if (!$('.formBox').hasClass('level-consent')) {
    $('.formBox').addClass('level-consent-revers');
  }
});
$('.btn').each(function () {
  $(this).on('click', function (e) {
    e.preventDefault();
    var finp = $(this).parent('form').find('input');
    console.log(finp.html());
    if (!finp.val() == 0) {
      $(this).addClass('active');
    }
    setTimeout(function () {
      inP.val('');
      $('.f_row').removeClass('shake focus');
      $('.btn').removeClass('active');
    }, 2000);
    if (inP.val() == 0) {
      inP.parent('.f_row').addClass('shake');
    }

    //inP.val('');
    //$('.f_row').removeClass('focus');
  });
});

// $(document).ready(function () {
//     $('.modal-dialog-scrollable').on('scroll', function () {
//         var button = $('.modal-footer button');
//         if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
//             button.removeAttr('disabled');
//         } else {
//             button.attr('disabled', true);
//         }
//     });
// });

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#navbar-example'
// })
// $('#staticBackdrop').on('shown.bs.modal', function () {
//     $(this).find('.modal-dialog-scrollable').on('scroll', function () {
//         var button = $('.modal-footer button');
//         if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
//             button.removeAttr('disabled');
//         } else {
//             button.attr('disabled', true);
//         }
//     });
// });