;(function ( $, window, undefined ) {

  var pluginName = 'preloader',
      document = window.document,
      defaults = {
        data: 'src',
        hideIfNoData: true,
        each: null,
        all: null
      };

  function Plugin( element, options ) {
    var _this = this;

    this.options = $.extend( {}, defaults, options) ;

    this.element = $(element).map(function(i) {

      if( $(this).data( _this.options.data ) ) {

        return this;

      } else {

        if( _this.options.hideIfNoData ) {

          $(this).hide();

        }

      }

    });

    this._defaults = defaults;
    this._name = pluginName;

    this.init();

  }

  Plugin.prototype.init = function () {
    var _this  = this,
        done = [];

    $.each( $(this.element), function(i, elem) {

      var $img = $('<img />'),
          src  = $(elem).data( _this.options.data );

      $img.attr('src', src).on('load error', function(e) {

        done.push(elem);

        $.data(elem, 'done', ('error' == e.type) ? false : true);

        if( _this.options.each instanceof Function ) {

          _this.options.each.call( $img[0] );

        }

        if( done.length >= _this.element.length && _this.options.all instanceof Function ) {

          _this.options.all.call( done );

        }

        $(this).off('load error');

        _this.replace(elem, $img);

      });

    });

    Plugin.prototype.replace = function(elem, $img) {
      var _this      = this,
          attributes = $(elem).prop('attributes');

      $.each( attributes, function() {

        if( this.name !== 'src' ) {

            $img.attr( this.name, this.value );

        }

      });

      $(elem).replaceWith( $img );

    }

  };

  $.fn[pluginName] = function ( options ) {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
  };

}(jQuery, window));
