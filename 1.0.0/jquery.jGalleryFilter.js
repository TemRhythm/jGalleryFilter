/**
 * Created with JetBrains PhpStorm.
 * User: rzakiev
 * Date: 2/11/13
 * Time: 5:23 PM
 * To change this template use File | Settings | File Templates.
 */
(function ($) {
    $.fn.galleryFilter = function (options) {
        var settings = $.extend({
            'itemsGroupHeaderTagName' : 'p',
            'filters':'#filters',
            'items':'#items',
            'itemWidth':'100px',
            'itemHeigth':'75px'
        }, options);

        this.find(settings.filters + ' li a').click(function () {
                $('#filters li').removeClass('selected');
                $(this).parent('li').addClass('selected');
                var thisItem = $(this).attr('rel');
                if (thisItem != "all") {
                    var showItem = $(settings.items + ' li[rel=' + thisItem + ']');
                    showItem.css('display', 'inline-block');
                    showItem.stop().animate({
                        'height':settings.itemHeigth,
                        'opacity':1,
                        'width':settings.itemWidth
                    }, function () {
                        $(settings.items + ' ul').each(function () {
                            if ($(this).children('li:visible').length != 0)
                                $(this).parent().children(settings.itemsGroupHeaderTagName).show('fast');
                        });
                    });
                    $(settings.items + ' li[rel!=' + thisItem + ']')
                        .animate({'width':0,
                            'height':0,
                            'opacity':0
                        }, function () {
                            $(this).hide();
                            $(settings.items + ' ul').each(function () {
                                if ($(this).children('li:visible').length == 0)
                                    $(this).parent().children(settings.itemsGroupHeaderTagName).hide('fast')
                            });
                        });
                }
                else {
                    var allGroupNames = $(settings.items + ' '+ settings.itemsGroupHeaderTagName);
                    var allItems = $(settings.items + ' li');
                    allItems.show();
                    allItems.animate({'height': settings.itemHeigth,
                        'opacity':1,
                        'width':settings.itemWidth
                    }, function () {
                        allGroupNames.show('fast');
                    });
                }
            }
        )
    }
})
    (jQuery);