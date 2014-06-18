/*!
* myslider
* version: 0.1.0
* Copyright (c) 2014 KeLeyi
* http://keleyi.com
* http://keleyi.com/jq/myslider/
*/
(function ($) {

    $.fn.myslider = function (options) {
        var settings = $.extend({
            width: '100%'
            ,millisec:'1000'
        }, options);

        var keleyiscrollobj = $(this);
        var keleyiscrollstatus = keleyiscrollobj.find("div.mysliderstatus");

        keleyiscrollobj.width(settings.width);

        function KeleyiScroll(keleyiscrollobj, keleyiscrollstatus) {

            setInterval(
           function () {
               if (keleyiscrollstatus.text() == '↑') {
                   keleyiscrollobj.find("ul:first").animate({
                       marginTop: "-25px"
                   }, 500, function () {
                       $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
                   });
               }
           }, settings.millisec);

            keleyiscrollobj.hover(
        function () {
            keleyiscrollstatus.text('=')
        },
        function () {
            keleyiscrollstatus.text('↑')
        }
        )
        }
        KeleyiScroll(keleyiscrollobj, keleyiscrollstatus);
    }

} (jQuery));
