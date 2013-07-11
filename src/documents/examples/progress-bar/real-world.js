AUI().ready(
  'node',
  'aui-progressbar',
  'async-queue',
  'node-load',
  function(A) {
    var content = A.one('.content');
    var progressBar, steptask, step, speed, statusBar;
    var loadBut = A.one('.load'); // Load button
    var resetBut = A.one('.reset'); // Reset button

    function pbCreate() {
      step = 0;
      // Create progress bar
      progressBar = new A.ProgressBar(
        {
          contentBox: '.pbar',
          label: 'Ready to load',
          on: {
            complete: function(e) {
              this.set('label', 'Complete!');
              content.load('assets/content.html');
              statusBar.addClass('complete');
            }
          },
          value: step
        }
      ).render();
      // Get status bar for candystriping
      statusBar = A.one('.aui-progress-bar-status');
      statusBar.append('<span/>');

      speed = A.one('input').get('value');

     // Create progress
      steptask = new A.AsyncQueue(
        {
          fn: function() {
            ++step;
            progressBar.set('label', 'Loading... ' + step + '%');
            progressBar.set('value', step);
          },
          iterations: 100,
          timeout: speed
        }
      );

      // Assign load handler
      loadBut.on(
        'click',
        function() {
          statusBar.addClass('stripes');
          steptask.run();
        }
      );
    }

    function pbDestroy() {
      progressBar.destroy();
      content.placeBefore('<div class="pbar"></div>');
      content.set('innerHTML', '');
    }

    // Assign handlers
    resetBut.on(
      'click', function() {
        pbDestroy();
        pbCreate();
      }
    );

    // On load
    pbCreate();
  }
);