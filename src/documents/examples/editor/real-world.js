AUI().ready(
  'aui-editor',
  function(A) {

    var fonts = [
      'Fonts',
      { label: 'Arial', tag: 'font', styles: { 'font-family': 'Arial' } },
      { label: 'Times New Roman', tag: 'font', styles: { 'font-family': 'Times New Roman' } },
      { label: 'Verdana', tag: 'font', styles: { 'font-family': 'Verdana' } },
      'Block Styles',
      { label: 'Normal', tag: 'p' },
      { label: 'Heading 1', tag: 'h1' },
      { label: 'Heading 2', tag: 'h2' },
      { label: 'Heading 3', tag: 'h3' },
      { label: 'Heading 4', tag: 'h4' },
      { label: 'Preformatted Text', tag: 'pre' },
      { label: 'Red Message', tag: 'div', attributes: { 'class': 'red' } },
      { label: 'Green Message', tag: 'div', attributes: { 'class': 'green' } },
      'Inline Styles',
      { label: 'Cited Work', tag: 'cite' },
      { label: 'Computer Code', tag: 'code' }
    ];

    var editor = new A.Editor(
      {
        content: '<p><a href="http://alloyui.com" target="_blank">' +
            '<img src="../../../editor/img/alloy-robot-suit.png" align="left" style="border: 1px solid; padding: 5px;" alt="test" />' +
          '</a></p>' +
          '<p>Test Content 1</p>' +
          '<p><b>Test Content 2</b></p>' +
          '<p><i>Test Content 3</i></p>' +
          '<p><u>Test Content 4</u></p>' +
          '<p><strike>Test Content 5</strike></p>',
        toolbarConfig: {
          append: [
            {
              index: 0,
              type: 'styles',
              config: {
                styles: {
                  height: 300,
                  items: fonts,
                  width: 200
                }
              }
            },
            {
              index: 3,
              type: 'subscript',
              include: ['subscript', 'superscript']
            }
          ]
        }
      }
    );

    editor.render('#myEditor');

    editor.plug(A.Plugin.EditorBBCode);

    editor.addCss('http://alloyui.com/versions/1.5.x/editor/css/quote.css');

    editor.addGroup(
      {
        type: 'quote'
      }
    );
  }
);