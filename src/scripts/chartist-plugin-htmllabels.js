/**
 * Chartist.js plugin to provide the ability to use HTML labels again.
 *
 */
/* global Chartist */
(function(window, document, Chartist) {
    'use strict';

    Chartist.plugins = Chartist.plugins || {};

    Chartist.plugins.htmllabels = function() {
        return function htmllabels(chart) {
            chart.on('draw', function(context) {
                if (context.type === 'label') {
                    context.element.empty()._node.innerHTML = context.text;
                }
            });
        };
    };

}(window, document, Chartist));
