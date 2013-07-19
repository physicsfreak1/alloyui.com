AUI().ready(
  'aui-toolbar',
  function(A) {
    new A.Toolbar(
      {
        children: [
          {
            icon: 'plus',
            label: 'Add'
          },
          {
            icon: 'minus',
            label: 'Remove'
          },
          {
            icon: 'gear',
            label: 'Config'
          }
        ],
        orientation: 'vertical'
      }
    ).render('#myToolbar');
  }
);