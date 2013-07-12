YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel(
      {
        contentBox: '#myCarousel',
        intervalTime: 2,
        width: 700,
        height: 250
      }
    ).render();
  }
);