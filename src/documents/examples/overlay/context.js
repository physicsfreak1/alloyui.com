AUI().ready(
  'aui-aria',
  'aui-overlay-context',
  'aui-overlay-manager',
  function(A) {

    // Simple Menu example
    var options = {
      showOn: 'mouseenter',
      hideOn: 'mouseleave',
      hideDelay: 1500,
      showDelay: 0,

      on: {
        show: function(event) {
          overlayManager.hideAll();
        }
      }
    };

    var menuOverlay1 = new A.OverlayContext(
      A.merge(
        options,
        {
          trigger: '.menu-item-1',
          boundingBox: '#menu1',
          hideDelay: 1000,
          cancellableHide: false,
          showDelay: 0
        }
      )
    )
    .render();

    var menuOverlay2 = new A.OverlayContext(
      A.merge(
        options,
        {
          trigger: '#menuItem2',
          hideDelay: 1000,
          cancellableHide: true,
          boundingBox: '#menu2'
        }
      )
    ).render();

    A.on(
      'click',
      function(event) {
        // Changing the original trigger
        var menuItem2 = A.one('#menuItem2');
        var menuItem2New = A.one('#menuItem2-new');

        var currentValue = this.get('value');

        if (menuItem2.hasClass('disabled-trigger')) {
          currentValue = currentValue.replace(/Trigger 1/, 'Trigger 2');
          menuOverlay2.set('trigger', '#menuItem2');
        }
        else {
          currentValue = currentValue.replace(/Trigger 2/, 'Trigger 1');
          menuOverlay2.set('trigger', '#menuItem2-new');
        }

        this.set('value', currentValue);

        menuItem2.toggleClass('disabled-trigger');
        menuItem2New.toggleClass('disabled-trigger');
      },
      '#changeTrigger'
    );

    // Creating Overlay Manager group
    var overlayManager = new A.OverlayManager();

    overlayManager.register([ menuOverlay1, menuOverlay2 ]);

    // Simple Overlay Context
    var contextOverlay1 = new A.OverlayContext(
      {
        trigger: 'button',
        boundingBox: '#contextOverlay1',
        showOn: 'mouseover',
        cancellableHide: false,
        hideOn: 'mouseout',
        hideDelay: 1000,
        showDelay: 0
      }
    )
    .render();

    // You can change the showOn/hideOn events on the fly
    contextOverlay1.set('showOn', 'click');
    contextOverlay1.set('hideOn', 'click');
  }
);