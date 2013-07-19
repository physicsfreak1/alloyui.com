AUI().use(
  'aui-overlay-manager',
  'dd',
  'node',
  function(A) {

    // Blue

    var overlay1 = new A.OverlayBase(
      {
        bodyContent: 'Overlay1',
        width: 75,
        height: 75,
        xy: [ 1000, 325 ]
      }
    ).render('#overlay-blue');

    var overlay2 = new A.OverlayBase(
      {
        bodyContent: 'Overlay2',
        width: 75,
        height: 75,
        xy: [ 1025, 375 ]
      }
    ).render('#overlay-blue');

    // Red

    var overlay3 = new A.OverlayBase(
      {
        bodyContent: 'Overlay3',
        width: 75,
        height: 75,
        xy: [ 1150, 325 ]
      }
    ).render('#overlay-red');

    var overlay4 = new A.OverlayBase(
      {
        bodyContent: 'Overlay4',
        width: 75,
        height: 75,
        xy: [ 1175, 375 ]
      }
    ).render('#overlay-red');

    // Mixed...

    var overlay5 = new A.OverlayBase(
      {
        bodyContent: 'Overlay5',
        width: 75,
        height: 75,
        xy: [ 1300, 325 ]
      }
    ).render('#overlay-mixed');
    overlay5.get('boundingBox').addClass('blue');

    var overlay6 = new A.OverlayBase(
      {
        bodyContent: 'Overlay6',
        width: 75,
        height: 75,
        xy: [ 1325, 375 ]
      }
    ).render('#overlay-mixed');
    overlay6.get('boundingBox').addClass('red');

    // plug OverlayManager

    var blueOverlayManager = new A.OverlayManager();
    var redOverlayManager = new A.OverlayManager();
    var mixedOverlayManager = new A.OverlayManager();

    blueOverlayManager.register([overlay1, overlay2, overlay5]);
    redOverlayManager.register([overlay3, overlay4, overlay6]);
    mixedOverlayManager.register([overlay5, overlay6]);

    // extras

    new A.DD.Drag(
      {
        node: overlay1.get('boundingBox')
      }
    );

    new A.DD.Drag(
      {
        node: overlay2.get('boundingBox')
      }
    );

    new A.DD.Drag(
      {
        node: overlay3.get('boundingBox')
      }
    );

    new A.DD.Drag(
      {
        node: overlay4.get('boundingBox')
      }
    );

    new A.DD.Drag(
      {
        node: overlay5.get('boundingBox')
      }
    );

    new A.DD.Drag(
      {
        node: overlay6.get('boundingBox')
      }
    );


    A.one('#showAll-blue').on(
      'click',
      function() {
        blueOverlayManager.showAll();
      }
    );

    A.one('#hideAll-blue').on(
      'click',
      function() {
        blueOverlayManager.hideAll();
      }
    );

    A.one('#showAll-red').on(
      'click',
      function() {
        redOverlayManager.showAll();
      }
    );

    A.one('#hideAll-red').on(
      'click',
      function() {
        redOverlayManager.hideAll();
      }
    );

    A.one('#showAll-mixed').on(
      'click',
      function() {
        mixedOverlayManager.showAll();
      }
    );

    A.one('#hideAll-mixed').on(
      'click',
      function() {
        mixedOverlayManager.hideAll();
      }
    );
  }
);