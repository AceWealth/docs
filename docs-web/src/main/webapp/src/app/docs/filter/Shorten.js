'use strict';

/**
 * Filter shortening text in one letter uppercase.
 */
angular.module('docs').filter('shorten', function() {
  return function(text) {
    if (!text) {
      return '';
    }
    return text.substring(0, 1).toUpperCase();
  }
});