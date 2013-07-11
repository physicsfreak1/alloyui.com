AUI().use(
  'node',
  'transition',
  function (A) {
    A.one('.btn').on(
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