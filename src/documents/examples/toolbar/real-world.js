AUI().ready(
  'aui-toolbar',
  function(A) {
    new A.Toolbar(
      {
        activeState: true,
        children: [
          {
            icon: 'document',
            title: 'New'
          },
          {
            icon: 'folder-open',
            title: 'Open'
          },
          {
            icon: 'disk',
            title: 'Save'
          },
          {
            icon: 'alert',
            on: {
              click: function() {
                alert('Congratulations. You have found the button with an alert icon on it.');
              }
            },
            title: 'Alert'
          },
          {
            icon: 'mail-open',
            title: 'Email'
          },
          {
            icon: 'print',
            title: 'Print'
          },
          {
            icon: 'search',
            title: 'Search'
          },
          {
            icon: 'check',
            title: 'Spelling'
          },
          {
            icon: 'scissors',
            title: 'Cut'
          },
          {
            icon: 'copy',
            title: 'Copy'
          },
          {
            icon: 'clipboard',
            title: 'Paste'
          },
          {
            icon: 'arrowreturn-1-l',
            title: 'Undo'
          },
          {
            icon: 'arrowreturn-1-r',
            title: 'Redo'
          },
          {
            icon: 'link',
            title: 'Hyperlink'
          },
          {
            icon: 'calculator',
            title: 'Calculator'
          },
          {
            icon: 'zoomin',
            title: 'Zoom In'
          },
          {
            icon: 'zoomout',
            title: 'Zoom Out'
          },
          {
            icon: 'volume-off',
            title: 'Mute'
          },
          {
            icon: 'volume-on',
            title: 'Volume On'
          },
          {
            icon: 'locked',
            title: 'Password'
          },
          {
            icon: 'pencil',
            title: 'Edit'
          },
          {
            icon: 'clock',
            title: 'Clock'
          },
          {
            icon: 'video',
            title: 'Video'
          },
          {
            icon: 'calendar',
            title: 'Calendar'
          },
          {
            icon: 'home',
            title: 'Home'
          },
          {
            icon: 'comment',
            title: 'Chat'
          },
          {
            icon: 'trash',
            title: 'Delete'
          },
          {
            icon: 'refresh',
            title: 'Refresh'
          }
        ]
      }
    ).render('#myToolbar');
  }
);