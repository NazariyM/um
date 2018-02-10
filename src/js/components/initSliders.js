import slick from 'slick-carousel';

export function initSliders() {

  let defaultOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev"></button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next"></button>`,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
    accessibility: false,
    rows: 0,
    dotsClass: 'slider-dots'
  };

  const prevArr = '<button type="button" class="slider-arr slider-arr_prev">' +
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="26"\n' +
    '     viewBox="0 0 14 26">\n' +
    '    <defs>\n' +
    '        <path id="smfca"\n' +
    '              d="M721.42 692.73c.18.18.4.27.66.27a.92.92 0 0 0 .65-1.57L711.25 680l11.48-11.43a.92.92 0 0 0 0-1.3.93.93 0 0 0-1.3 0l-12.16 12.08a.92.92 0 0 0 0 1.3z"/>\n' +
    '    </defs>\n' +
    '    <g>\n' +
    '        <g transform="translate(-709 -667)">\n' +
    '            <use xlink:href="#smfca"/>\n' +
    '        </g>\n' +
    '    </g>\n' +
    '</svg></button>';

  const nextArr = '<button type="button" class="slider-arr slider-arr_next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="26"\n' +
    '     viewBox="0 0 14 26">\n' +
    '    <defs>\n' +
    '        <path id="ax7ua"\n' +
    '              d="M1204.58 692.73a.9.9 0 0 1-.66.27.92.92 0 0 1-.65-1.57l11.48-11.43-11.48-11.43a.92.92 0 0 1 0-1.3.93.93 0 0 1 1.3 0l12.16 12.08c.36.36.36.94 0 1.3z"/>\n' +
    '    </defs>\n' +
    '    <g>\n' +
    '        <g transform="translate(-1203 -667)">\n' +
    '            <use xlink:href="#ax7ua"/>\n' +
    '        </g>\n' +
    '    </g>\n' +
    '</svg></button>';

  const $chartSld = $('.js-chart-slider');

  $chartSld.slick($.extend({}, defaultOptions, {
    arrows: false,
    speed: 500,
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dotsClass: 'chart__tezis-dots'
  }));

  const $photosSld = $('.js-photos-slider');

  $photosSld.slick($.extend({}, defaultOptions, {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    infinite: false,
    prevArrow: prevArr,
    nextArrow: nextArr
  }));

  const $entrySld = $('.js-entry-slider');

  $entrySld.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500
  }));
}
