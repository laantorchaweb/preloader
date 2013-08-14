Image Preloader
===============

This is a jquery plugin for pre loading images, it works by grabbing the src of the image in a custom data attribute. This comes in handy when you want to display smaller images on mobile for example. Or maybe you only want to load the images when the user is scrolling down, or when triggers some event.

The HTML:

```html
<img class="image" src="" data-desktop="/images/desktop/yourImage.jpg" data-mobile="/images/mobile/yourImage.jpg" alt="Image" >
```

The Javascript:

```javascript
// You could call the plugin this way (assuming the src of the image is in the data-src attribute):

$('.container').find('img').preloader();

// Or:

$('.btn').on('click', function(){

  $('.image').preloader();

});

// But, this is a more real world example

var dataName = 'desktop';

if ( isMobile() ) {
    // You can have several data attributes pointing to diferent image sizes
    dataName = 'mobile';
}

$('.container').find('img').preloader({

  data: dataName, // this is the data attr that contains the url you want to load (default: 'data-src')

  each: function() {

    // inside the "each" function "this" is the loaded image

    console.log(this);
  },

  all: function() {

    // inside the"all" function "this" is an array with all jquery image objects

    console.log(this);

    $('<h3 />', {
        text: 'All Images have been loaded!'
    }).prependTo('.status');
  }

});
```
By default the plugin will hide the images that you passed but that don't have the data attribute. This is useful for images that you don't want to show in the mobile site. If you prefer to display those empty tags you can set `hideIfNoData` to *false* when calling the plugin.

Live Demo
---------

[http://laantorchaweb.github.io/preloader/](http://laantorchaweb.github.io/preloader/)
