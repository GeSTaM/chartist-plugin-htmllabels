# chartist-plugin-htmllabels

Bringing back HTML labels for [Chartist](https://github.com/gionkunz/chartist-js) charts.

Since Chartist version 0.11 you could no longer use HTML like `'<a href="/some/link">' + text + '</a>'` for the labels, chartist would use `textContent` instead of `innerHtml` for displaying the labels and the markup would be displayed.

This plugin brings back that possibility - just call the plugin in your `plugins` array and you can use HTML again.

## Install

```
$ npm install chartist-plugin-htmllabels --save
```

## Usage

In an example chart:

```
require('chartist-plugin-htmllabels');

var chart = new Chartist.Line('.chart', {
  labels: ['<a href="#">1</a>', '<a href="#">2</a>', '<a href="#">3</a>', '<a href="#">4</a>', '<a href="#">5</a>'],
  series: [
    [1, 2, 3, 5, 8]
  ]
}, {
  axisY: {
    scaleMinSpace: 40,
    labelInterpolationFnc: function(value, index) {
      return '<strong>Value:</strong>' + value + '<br>' + 
        '<strong>Index:</strong>' +index
    },
    offset: 80
  },
  plugins: [Chartist.plugins.ctHtmlLabels()]
});

```
