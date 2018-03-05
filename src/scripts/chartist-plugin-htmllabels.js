/**
 * Chartist.js plugin to provide the ability to use HTML labels again.
 *
 */
/* global Chartist */
(function(window, document, Chartist) {
    'use strict';

    Chartist.plugins = Chartist.plugins || {};
    Chartist.plugins.ctHtmlLabels = function(options) {

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
