YUI().use(
  'node',
  'transition',
  function (Y) {
    Y.one('#try-btn').on(
      'click',
      function() {
        this.transition(
          {
            width: '400px'
          }
        );
      }
    );
  }
);