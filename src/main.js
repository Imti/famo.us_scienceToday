define(function(require, exports, module) {
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var Modifier = require('famous/core/Modifier');
  var StateModifier = require('famous/modifiers/StateModifier');
  var Scrollview = require('famous/views/Scrollview');

  var mainContext = Engine.createContext();

  var scrollview = new Scrollview();
  var surfaces = [];

  scrollview.sequenceFrom(surfaces);

  var centerModifier = new Modifier({
    size: [undefined, undefined],
    origin: [0.5, 0.5],
    align: [0.5, 0.5]
  });

  for (var i = 0; i < 40; i++) {
    temp = new Surface({
      content: "Surface: " + (i + 1),
      properties: {
        backgroundColor: "hsl(" + (i * 360 / 40) + ", 100%, 50%)",
        lineHeight: "200px",
        textAlign: "center"
       }
    });

    temp.pipe(scrollview);
    surfaces.push(temp);
  }

  mainContext.add(centerModifier).add(scrollview);
});
