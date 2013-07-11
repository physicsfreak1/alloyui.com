AUI().use(
  'aui-portal-layout',
  function(A) {
    new A.PortalLayout(
      {
        dragNodes: '.portlet',
        dropNodes: '#myPortalLayout'
      }
    );
  }
);