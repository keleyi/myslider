/*!
* myslider
* version: 0.1.3
* Copyright (c) 2014 KeLeyi
* http://keleyi.com
* http://keleyi.com/jq/myslider/
*/
(function ($) {

    $.fn.myslider = function (options) {
        var settings = $.extend({
            width: '100%'
            , height: '25px'
            , millisec: '1000'
            , animatespeed: '500'
            , direction: 'up'
            , fontSize: "14px"
            ,li_style:{}
        }, options);

        var keleyiscrollobj = $(this);

        keleyiscrollobj.prepend('<div id="status_myslider_keleyi_com" class="mysliderstatus"></div>');
        var keleyiscrollstatus = keleyiscrollobj.find("div.mysliderstatus");
        var directionsymbol = '↑';
        if (settings.direction == 'down')
            directionsymbol = '↓';
        keleyiscrollstatus.text(directionsymbol);

        var mysliderul = keleyiscrollobj.find("ul:first");

        keleyiscrollobj.width(settings.width)
        .height(settings.height)
        .css("line-height", settings.height);
        mysliderul.find("li").height(settings.height).css({ "font-size": settings.fontSize });
        mysliderul.find("li").css(settings.li_style);
        mysliderul.find("a").css({ "font-size": settings.fontSize });       

        function KeleyiScroll(keleyiscrollobj, keleyiscrollstatus) {
            setInterval(
           function () {
               if (keleyiscrollstatus.text() == '↑') {
                   mysliderul.animate({
                       marginTop: "-" + settings.height
                   }, settings.animatespeed, function () {
                       $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
                   });
               }
               else if (keleyiscrollstatus.text() == '↓') {
                   mysliderul.css("marginTop", "-" + settings.height).find("li:eq(1)").prependTo(mysliderul);
                   mysliderul.animate({
                       marginTop: "0px"
                   }, settings.animatespeed, function () {
                       $(this).find("li:eq(1)").appendTo(this);
                   });
               }
           }, settings.millisec);
       }

        keleyiscrollobj.hover(
        function () {
            keleyiscrollstatus.text('=')
        },
        function () {
            keleyiscrollstatus.text(directionsymbol)
        }
        )

        KeleyiScroll(keleyiscrollobj, keleyiscrollstatus);
    }

} (jQuery));
