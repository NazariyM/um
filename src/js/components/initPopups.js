import {$window, $body, $header, $scrolledElements, css} from '../modules/dev/_helpers';
import Popup from 'vintage-popup';

export function initPopups() {
  // disable google translate styles
  $window.on('load', function () {
    setTimeout(function () {
      $body.removeAttr('style');
    }, 500);
  });

  Popup.expose($);

  // init all pop-ups, but in this case - login pop-up
  const $popup = $('[data-popup-target]');

  $popup.popup();

  const $regBtn = $('.entry__nav-btn').eq(1);

  $regBtn.on('mouseenter', function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });
  $regBtn.on('mouseleave', function () {
    $(this).siblings().addClass('is-active');
    $(this).removeClass('is-active');
  });

  $regBtn.on('click', function () {
    $(this).removeClass('is-active');
    $(this).siblings().addClass('is-active');
  });

}