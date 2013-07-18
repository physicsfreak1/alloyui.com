AUI().ready(
  'aui-form',
  function(A) {
    // Create a new text field from HTML
    new A.Field(
      {
        labelText: 'Name:',
        node: '#field1'
      }
    ).render('#myForm');

    // Create a field with a preset value
    new A.Field(
      {
        labelText: 'Email:',
        node: '#field2',
        value: '@gmail.com'
      }
    ).render('#myForm');

    // Create a selection menu
    new A.Select(
      {
        labelText: 'Favorite Color:',
        options: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'brown', 'black']
      }
    ).render('#myForm');

    // Create a multiple selection menu
    new A.Select(
      {
        labelText: 'Fruits I Like:',
        multiple: true,
        options: ['Apple', 'Banana', 'Cherry', 'Grape', 'Kiwi', 'Peach', 'Strawberry']
      }
    ).render('#myForm');
  }
);