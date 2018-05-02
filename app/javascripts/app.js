// Import the page's CSS. Webpack will know what to do with it.
require('./navbar');

import { init } from './init'

window.addEventListener('load', function() {
  init(document.getElementById('application'))
});
