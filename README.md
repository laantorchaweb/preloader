Image Preloader
===============

This is a jquery plugin for pre loading images, it works by grabbing the src of the image in a custom data attribute. This comes in handy when you want to display smaller images on mobile for example.

The HTML:

<div class="highlight">
<pre>
    <img class="image" src="" data-desktop="/images/desktop/yourImage.jpg" data-mobile="/images/mobile/yourImage.jpg" alt="Image" >
</pre>
</div>

The Javascript:

<div class="highlight">
<pre>
var dataName = 'desktop';

if ( $(window).width() <= 480  ) {
    dataName = 'mobile'; // You can have several data attributes pointing to diferrent image sizes
}

$('.container').find('img').preloader({

  data: dataName, // this is the data attr that contains the url you wan to load (default: 'data-src')

  each: function() {

    // inside the "each" function "this" is the loaded image

    console.log(this);
  },

  all: function() {

    $(this).each(function() {

      // inside the "all" function "this" is an array with all jquery image objects

      console.log(this);
    });

    $('<h3 />', {
        text: 'All Images have been loaded!'
    }).prependTo('.status');
  }

});

</pre>
</div>

Live Demo
---------

[http://laantorcha.net/playground/preloader/](http://laantorcha.net/playground/preloader/)
