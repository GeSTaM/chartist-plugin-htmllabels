(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["chartist"], function (a0) {
      return (root['Chartist.plugins.ctHtmlLabels'] = factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("chartist"));
  } else {
    root['Chartist.plugins.ctHtmlLabels'] = factory(root["Chartist"]);
  }
}(this, function (Chartist) {

/**
 * Chartist.js plugin to provide the ability to use HTML labels again.
 *
 */
/* global Chartist */
(function(window, document, Chartist) {
    'use strict';

    Chartist.plugins = Chartist.plugins || {};
    Chartist.plugins.ctHtmlLabels = function() {

        return function ctHtmlLabels(chart) {
            chart.on('draw', function(context) {
                if (context.type === 'label') {
                    // Best to combine with something like sanitize-html
                    context.element.empty()._node.innerHTML = context.text;
                }
            });
        };
    };

}(window, document, Chartist));

return Chartist.plugins.ctHtmlLabels;

}));
