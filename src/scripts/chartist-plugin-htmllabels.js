/**
 * Chartist.js plugin to provide the ability to use HTML labels again.
 *
 */
/* global Chartist */
(function(window, document, Chartist) {
    'use strict';

    var sanitizeHtml = require('sanitize-html');

    Chartist.plugins = Chartist.plugins || {};
    Chartist.plugins.ctHtmlLabels = function() {

        return function ctHtmlLabels(chart) {
            chart.on('draw', function(context) {
                if (context.type === 'label') {
                    context.element.empty()._node.innerHTML = sanitizeHtml(context.text);
                }
            });
        };
    };

}(window, document, Chartist));
