document.addEventListener('DOMContentLoaded', function() {
    var lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(function(img) {
      img.addEventListener('load', function() {
        img.removeAttribute('data-src');
      });
      img.addEventListener('error', function() {
        console.error('Error loading image: ' + img.getAttribute('data-src'));
      });
      if (isInViewport(img)) {
        img.src = img.getAttribute('data-src');
      }
    });

    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    document.addEventListener('scroll', function() {
      lazyImages.forEach(function(img) {
        if (isInViewport(img) && !img.src) {
          img.src = img.getAttribute('data-src');
        }
      });
    });
  });