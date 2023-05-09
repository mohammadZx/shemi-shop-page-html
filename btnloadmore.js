
/* Button Load more - v1.0.0 - 2018-02-28
* Copyright (c) 2018 NTTPS; */

(function ($) {
    $.fn.btnLoadmore = function (options) {
        var defaults = {
                showItem: 6,
                whenClickBtn: 3,
                textBtn: null,
                classBtn : '',
                setCookies: false,
                delayToScroll: 2000,

            },
            options = $.extend(defaults, options);

        this.each(function () {

            var $this = $(this),
                $childrenClass = $($this.children());

            // Get Element Of contents to hide
            $childrenClass.hide();

            //Show Element from Options
            $childrenClass.slice(0, defaults.showItem).show();
            
            //Show Button when item in contents != 0
            if ($childrenClass.filter(":hidden").length > 0 && options.textBtn) {
                $this.after('<button type="button" data-fade-out class="btn-loadmore '+ defaults.classBtn +'">' + defaults.textBtn + '</button>')
            }

            $(document).on('click', '.btn-loadmore', function (e) {
                e.preventDefault();
                $childrenClass = $($(this).parents('.product-box').find('.children-content').children())
                console.log($childrenClass)
                $childrenClass.filter(':hidden').slice(0, $childrenClass.filter(':hidden').length).slideDown();
                if ($childrenClass.filter(":hidden").length == 0) {
                    var fadeout = $(this).attr('data-fade-out')
                    if(typeof fadeout !== 'undefined' && fadeout !== false){
                        $(this).fadeOut();
                    }
                }
               
            });

        
        });

        

    }
}(jQuery));