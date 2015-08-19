/**
 * Created by xuesongdu on 18/08/15.
 */

(function($){

    $.fn.hello2 = function (options){

        var opts = $.extend({}, $.fn.hello2.defaults, options);

        this.click(function(){

            var $this = $(this);

            var href = $this.attr("href");

            var custom = $this.attr("data-window-group");

            if ( opts.windowSize ) {

                var size = opts.windowSize;
            }

            alert(custom);

            window.open(href,custom,size);

            return false;

        });
        n
    }

    $.fn.hello2.defaults = {

        windowSize : "width=100,height=100,toolbar=yes, scrollbars=yes,resizable=yes,top=100,left=100"

    };

}(jQuery));