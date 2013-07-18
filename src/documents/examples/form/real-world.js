AUI().ready(
  'aui-form',
  'aui-io-request',
  'aui-button-item',
  function(A) {
    // Create a new form with labels aligned to the left of their respective fields
    var form = new A.Form(
      {
        labelAlign: 'left'
      }
    ).render('#myForm');

    // Add two text fields to the form
    form.add(
      [
        {
          labelText: 'Name:'
        },
        {
          labelText: 'Create a Password:',
          type: 'password'
        }
      ],
      true
    );

    // Get the content box of the form, which allows you to add more fields to it
    var formContentBox = form.get('contentBox');

    // Create a text field that only allows numbers
    var field3 = new A.Textfield(
      {
        allowOnly: /\d/,
        fieldHint: 'Only numbers are allowed.',
        labelText: 'Phone Number:',
        render: formContentBox
      }
    );

    // Create a text area with a minimum and maximum height
    var field4 = new A.Textarea(
      {
        autoSize: true,
        fieldHint: 'Watch this field change size as you type.',
        labelText: 'What is the meaning of life?',
        maxHeight: 160,
        minHeight: 70,
        render: formContentBox,
        selectOnFocus: true,
        value: 'Focus this field to highlight this text.'
      }
    );

    // Create a text field with a validator
    var field5 = new A.Textfield(
      {
        labelText: '2 + 2 =',
        render: formContentBox,
        validator: function(value) {
          return (value === '4');
        }
      }
    );

    // Create a button so the user can check the answer
    var check = new A.ButtonItem(
      {
        handler: function() {
          if (field5.isValid()) {
            alert('Correct!');
          }
          else {
            alert('Incorrect!');
          }
        },
        label: 'Check Answer',
        render: formContentBox
      }
    );

    // Create a multiple selection menu
    var field6 = new A.Select(
      {
        labelText: 'Cities Visited:',
        multiple: true,
        options: ['Tokyo', 'New York', 'Jakarta', 'Delhi', 'Mexico City', 'Sao Paulo', 'Seoul', 'Moscow', 'London'],
        render: formContentBox
      }
    );

    // Create a single-choice selection menu
    var field7 = new A.Select(
      {
        labelText: 'Is AlloyUI awesome?',
        options: ['Yes', 'Of course', 'Is that even a question?'],
        render: formContentBox
      }
    );

    // Create a button that submits the form
    var submitBtn = A.Node.create('<input class="aui-button-input aui-button-input-submit" ' +
      'type="submit" value="Submit" />');
    A.one('#myForm').append(submitBtn);

    // Create a button that resets the form
    var reset = new A.ButtonItem(
      {
        handler: function() {
          form.resetValues();
        },
        label: 'Reset',
        render: formContentBox
      }
    );

    // Add these new fields to the form
    form.add(field3);
    form.add(field4);
    form.add(field5);
    form.add(check);
    form.add(field6);
    form.add(field7);
    form.add(reset);
  }
);