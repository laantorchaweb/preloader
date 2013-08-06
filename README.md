Image Preloader
===============

This is a jquery plugin for pre loading images, it works by grabbing the src of the image in a custom data attribute. This comes in handy when you want to display smaller images on mobile for example.

The HTML:

<div class="highlight">
<pre>
    &lt;img class=&quot;image&quot; src=&quot;&quot; data-desktop=&quot;/images/desktop/yourImage.jpg&quot; data-mobile=&quot;/images/mobile/yourImage.jpg&quot; alt=&quot;Image&quot; &gt;
</pre>
</div>

The Javascript:

<div class="highlight">
<pre>var dataName = 'desktop';

if ( $(window).width() &lt;= 480  ) {
    dataName = 'mobile'; // You can have several data attributes pointing to diferrent image sizes
}

$('.container').find('img').preloader({

  data: dataName, // this is the data attr that contains the url you wan to load (default: 'data-src')

  each: function() {

    // inside the &quot;each&quot; function &quot;this&quot; is the loaded image

    console.log(this);
  },

  all: function() {

    $(this).each(function() {

      // inside the &quot;all&quot; function &quot;this&quot; is an array with all jquery image objects

      console.log(this);
    });

    $('&lt;h3 /&gt;', {
        text: 'All Images have been loaded!'
    }).prependTo('.status');
  }

});

</pre>
</div>

Live Demo
---------

[http://laantorcha.net/playground/preloader/](http://laantorcha.net/playground/preloader/)
