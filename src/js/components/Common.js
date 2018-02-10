import '../modules/dev/noTouch';
import LangList from './LangList';
import objectFitImages from 'object-fit-images';
import fancybox from '@fancyapps/fancybox';
import { initSliders } from './initSliders';
import './initMap';
import { initCharts } from './initCharts';
import { initPopups } from './initPopups';
import Tooltip from './showTooltip';

/**
 * Website's common scripts (example).
 *
 * @module Common
 */

export class Common {

  static init() {
    new LangList;
    objectFitImages();
    initSliders();
    initCharts();
    initPopups();
  }
}

$('[data-fancybox]').fancybox();

/** Export initialized common scripts by default */
export default Common.init();