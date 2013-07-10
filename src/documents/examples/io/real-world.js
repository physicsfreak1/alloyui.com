AUI().use(
  'aui-io-request',
  'node',
  function(A) {
    // Create a new asynchonous request to grab all states
    A.io.request(
      'data/states.json',
      {
        dataType: 'json',
        on: {
          success: function() {
            // Gets the result of this asynchronous request
            var data = this.get('responseData');
            states = data.states;

            // Iterates on all states to create a new <option> on that <select>
            for (i = 0; i < states.length; i++) {
              A.one('#state').append('<option value="' + states[i].code + '">' + states[i].name + '</option>');
            }
          }
        }
      }
    );

    A.one('#state').on(
      'change',
      function() {
        var cityCode = this.val();

        if (cityCode !== '') {
          // Creates a new asynchronous request to grab the cities corresponding to that state
          A.io.request(
            'data/' + cityCode + '.json',
            {
              dataType: 'json',
              on: {
                success: function() {
                  // Gets the result of this asynchronous request
                  var data = this.get('responseData');
                  cities = data.cities;
                  options = '';

                  // Iterates on all states to create a new <option> on that <select>
                  for (i = 0; i < cities.length; i++) {
                    options += '<option value="' + cities[i].name + '">' + cities[i].name + '</option>';
                  }

                  A.one('#city').html(options);
                }
              }
            }
          );
        }
      }
    );
  }
);