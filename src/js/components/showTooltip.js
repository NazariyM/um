import {$body, css, $window, $scrolledElements} from '../modules/dev/_helpers';

export default class Tooltip {
  constructor(section, el, elSiblings, scroll) {
    this.$section = $(section);
    this.el = el;
    this.$siblings = this.$section.find(elSiblings);
    this.scroll = scroll;

    this.show();
  }

  show() {
    const _this = this;

    if (!_this.$section.length) return;

    _this.$section.on('mouseenter', _this.el, function () {

      if (_this.scroll) _this.checkScroll();

      $(this).addClass(css.active);
      $body.addClass(css.hidden);

      if (_this.$siblings.length) {
        _this.$siblings.each(function () {
          $(this).addClass('is-visible');
        });
      }
    });

    _this.$section.on('mouseleave', _this.el, function () {
      $(this).removeClass(css.active);
      $body.removeClass(css.hidden);

      if (_this.$siblings.length) {
        _this.$siblings.each(function () {
          $(this).removeClass('is-visible');
        });
      }
    });

  }

  checkScroll() {
    const _this = this;
    const top = $window.scrollTop();

    if (top > 400) {
      $scrolledElements.stop().animate({scrollTop: 330}, 500, 'swing', function () {
        $window.on('scroll', function () {
          
          $(_this.el).removeClass(css.active);
          $body.removeClass(css.hidden);

          if (_this.$siblings.length) {
            _this.$siblings.each(function () {
              $(this).removeClass('is-visible');
            });
          }
          $window.off('scroll');
        });

      });
    }
  }
}

const scheduleTip = new Tooltip('.schedule', '.schedule__item-icon');
const systemTip = new Tooltip('.system', '.js-show-tooltip', '.system__item', true);