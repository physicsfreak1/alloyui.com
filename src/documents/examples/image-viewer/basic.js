AUI().ready(
  'aui-image-viewer-base',
  function(A) {
    new A.ImageViewer(
      {
        links: '#myGallery a'
      }
    ).render();
  }
);