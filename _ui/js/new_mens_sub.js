
(function (jQuery) {

    var methods = {

        init: function (options) {
            return this.each(function () {
                var $this = jQuery(this);
                var settings = $this.data('menShoes');

                if (typeof (settings) == 'undefined') {

                    var defaults = {
                        propertyName: 'value',
                        value: '',
                        hidden: false,
                        initialText: null,
                        onSomeEvent: function () { },
                        clickCallback: function () { }
                    }

                    settings = jQuery.extend({}, defaults, options);
                    $this.data('fitTool', settings);
                } else {
                    settings = jQuery.extend({}, settings, options);
                }

                var slider = jQuery("<div id='slider'></div>").insertBefore(jQuery(".information_banner")).slider({
                    animate: 'true'
                });

                var $posViewport = 0;
                var $posSlipon = 0;
                var $posChuckka = 110;
                var $posDeparture = 217;
                var $posCircuit = 323;
                var $posLukla = 431;
                var $posPro = 537;

                jQuery.preload('//eddiebauer.scene7.com/is/image/EBContent/men_slipon?$jpg12$&scl=1',
                '//eddiebauer.scene7.com/is/image/EBContent/men_departure_photo?$jpg12$&scl=1',
                '//eddiebauer.scene7.com/is/image/EBContent/shopnow_footwear?$jpg12$&scl=1',
                '//eddiebauer.scene7.com/is/image/EBContent/men_chukka?$jpg12$&scl=1',
                '//eddiebauer.scene7.com/is/image/EBContent/men_departure_photo?$jpg12$&scl=1',
                '//eddiebauer.scene7.com/is/image/EBContent/men_laceup?$jpg12$&scl=1',
                '//eddiebauer.scene7.com/is/image/EBContent/men_lukla?$jpg12$&scl=1',
                '//eddiebauer.scene7.com/is/image/EBContent/men_lukla_photo?$jpg12$&scl=1',
                '//eddiebauer.scene7.com/is/image/EBContent/men_luklapro?$jpg12$&scl=1',
                '//eddiebauer.scene7.com/is/image/EBContent/men_luklapro_photo?$jpg12$&scl=1'
                );

                var $handleSelected = jQuery("#slider .ui-slider-handle");

                jQuery("#slider .ui-slider-handle").draggable({
                    animate: true,
                    step: 1,
                    axis: "x",
                    containment: "parent",
                });

                jQuery("#coords_wrapper_men").css('display', 'block');
                jQuery(".thumbgallery_men").css('display', 'block');


                jQuery(".tab .button").one("click", function () {
                    jQuery(this).data('clicked', true);
                    jQuery(".panels").addClass("selected").css('cssText', 'display: block; color: #f4f4f2 !important');
                    jQuery("#slider_container").css({
                        height: '473px'
                    });
                });

            });
        },
        decodeQuerystring: function () {
            return jQuery(this).each(function (event) {
                var $this = jQuery(this);
                var pairs = window.location.search.substring(1).split('&');
                for (j in pairs) {
                    if (pairs[j] === "") continue;
                    pair = pairs[j].split("=");
                    if (pair[0] == "index") {
                        var currentSelectedIndex = decodeURIComponent(pair[1]);
                    }
                }
                return currentSelectedIndex;
            });
        },
        fetchSelectedPanel: function (options) {
            return $(this).each(function (event) {
                var $this = jQuery(this);
                var $thisSelectedIndex = null;
                $thisSelectedIndex = parseInt($fetchDecodeQuerystring());
                var $activePanel = jQuery(".panels #tab-0" + $thisSelectedIndex + "");
                var $activeTab = jQuery(".tab #tab_" + $thisSelectedIndex + "").addClass("ui-tab-selected");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (responseText, statusText, xhr) {    //  completeCallback has the following signature: function( status, statusText, responses, headers ) {}
                        if (statusText == "error") {
                            var thisSelectedIndex = $thisSelectedIndex;
                            switch (true) {
                                case (thisSelectedIndex == 2 || thisSelectedIndex == 3):
                                    var title = '"Travex Departure Collection"';
                                    break;
                                case (thisSelectedIndex == 4):
                                    var title = '"Adventure Travler Full Circuit"';
                                    break;
                                case (thisSelectedIndex == 5):
                                    var title = '"Lightweight Hiker Lukla"';
                                    break;
                                case (thisSelectedIndex == 6):
                                    var title = '"Waterproof Lightweight Hiker Lukla Pro"';
                                    break;
                            }
                            var error = true;
                            var newurl = "/static/html/footwear/index.html";
                            errorCallback(newurl, title, thisSelectedIndex, error);
                        } else if (statusText == "success") { }
                    });
                }
                jQuery(".panels").addClass("selected").css('cssText', 'display: block; color: #f4f4f2 !important');
                jQuery("#slider_container").css({
                    height: '473px'
                });
                $activePanel.show(function () {
                    $activePanel.addClass("selected");
                });
                var $handleSelected = jQuery("#slider .ui-slider-handle");
                var shopNowButton = jQuery(".external_shopnow");
                switch (true) {
                    case ($thisSelectedIndex == 2):
                        shopNowButton.removeClass('selected').css('display', 'none');
                        $handleSelected.animate({
                            left: '110px',
                        });
                        break;
                    case ($thisSelectedIndex == 3):
                        shopNowButton.addClass('selected').css('display', 'block');
                        $handleSelected.animate({
                            left: '217px',
                        });
                        break;
                    case ($thisSelectedIndex == 4):
                        shopNowButton.removeClass('selected').css('display', 'none');
                        $handleSelected.animate({
                            left: '323px',
                        });
                        break;
                    case ($thisSelectedIndex == 5):
                        shopNowButton.removeClass('selected').css('display', 'none');
                        $handleSelected.animate({
                            left: '431px',
                        });
                        break;
                    case ($thisSelectedIndex == 6):
                        shopNowButton.removeClass('selected').css('display', 'none');
                        $handleSelected.animate({
                            left: '537px',
                        });
                        break;
                    default:
                        $handleSelected.animate({
                            left: '163px',
                        });
                }
            });
        },
        clickSelectedThumbnail: function (options) {
            return jQuery(this).each(function (event, i) {
                var $this = jQuery(this);
                var $posViewport = 0;
                var $navNotSelected = jQuery("ul#coords_wrapper_men > li").filter(function (i) { return jQuery(this).hasClass("ui-tab-selected"); }).removeClass("ui-tab-selected");
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_" + i + "").addClass("ui-tab-selected");
                var $activePanel = jQuery(".panels #tab-0" + i + "");
                var shopNowButton = jQuery(".external_shopnow");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (responseText, statusText, xhr) {    //  completeCallback has the following signature: function( status, statusText, responses, headers ) {}
                        if (statusText == "error") {
                            var error = true;
                            var thisSelectedIndex = i;
                            var title = '"Travex Departure Collection"';
                            var newurl = "/static/html/footwear/index.html";
                            errorCallback(newurl, title, thisSelectedIndex, error);
                        } else if (statusText == "success") { }
                    });
                }
                var $notSelected = jQuery(".panels > .panel").filter(function (i) { return jQuery(this).hasClass("selected"); }).removeClass("selected").css({ display: 'none' });
                $activePanel.show().addClass("selected").css({ display: 'block' });
                shopNowButton.removeClass("selected").css({ display: 'none' });
                while (i < 7) {
                    var pix = (i = 1) && 0;
                    var pix = (i = 2) && 110;
                    var pix = (i = 3) && 217;
                    var pix = (i = 4) && 323;
                    var pix = (i = 5) && 431;
                    var pix = (i = 6) && 537;
                    i++
                }
                jQuery("#slider .ui-slider-handle").animate({ left: "" + pix + "px", }, 200);
                return false;
            });
        },
        dragFootwearHandle: function (options) {
            return jQuery(this).each(function (event, i) {
                var $this = jQuery(this);
                var currentDraggedIndex = i;
                jQuery(".panels").addClass("selected").css('cssText', 'display: block; color: #f4f4f2 !important');
                jQuery("#slider_container").css({height: '473px'});
                var dragged = ui.helper;
                var dragged_data = dragged.data('ui-draggable');
                if (dragged_data.originalPosition.left > dragged.position().left) {
                    $posViewport = jQuery("#slider .ui-slider-handle").position().left + 18;
                } else {
                    $posViewport = jQuery("#slider .ui-slider-handle").position().left + 92;
                }
                function objectConstructor(properties) {
                    var instance = this; 
                    for (var j in properties) {
                        (function (j) { 
                            instance["get" + j] = function () {
                                return alert(properties[i]);
                            };
                            instance["set" + j] = function (val) {
                                properties[j] = val;
                            };
                        })(j);
                    }
                }
                var condition = new objectConstructor({
                    Position: "$posViewport >= $posSlipon && $posViewport <= $posChuckka",
                    Position: "$posViewport >= $posChuckka && $posViewport <= $posDeparture",
                    Position: "$posViewport >= $posDeparture && $posViewport <= $posCircuit",
                    Position: "$posViewport >= $posCircuit && $posViewport <= $posLukla",
                    Position: "$posViewport >= $posLukla && $posViewport <= $posPro",
                    Position: "$posViewport == $posPro || $posViewport > $posLukla"
                });
                switch (true) {
                    case ($posViewport >= $posSlipon && $posViewport <= $posChuckka):
                        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_1").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_men #tab_2").add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".panels #tab-01");
                        var shopNowButton = jQuery(".external_shopnow");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (responseText, statusText, xhr) {    //  completeCallback has the following signature: function( status, statusText, responses, headers ) {}
                                if (statusText == "error") {
                                    var thisSelectedIndex = 1;
                                    var title = '"Travex Departure Collection"';
                                    var newurl = "/static/html/footwear/index.html";
                                    errorCallback(newurl, title, thisSelectedIndex);
                                } else if (statusText == "success") { }
                            });
                        }
                        var $notSelected = jQuery(".panels #tab-02").add(jQuery(".panels #tab-03")).add(jQuery(".panels #tab-04")).add(jQuery(".panels #tab-05")).add(jQuery(".panels #tab-06"));
                        $notSelected.hide().removeClass("selected").css({ display: 'none' });
                        $activePanel.show().addClass("selected").css({ display: 'block' });
                        shopNowButton.hide().removeClass("selected").css({ display: 'none' });
                        break;
                }

            });
        }
    };

    jQuery.fn.menShoes = function () {
        var method = arguments[0];

        if (methods[method]) {
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);
        } else if (typeof (method) == 'object' || !method) {
            method = methods.init;
        } else {
            jQuery.error('Method ' + method + ' does not exist on jQuery.menShoes');
            return this;
        }

        return method.apply(this, arguments);
    }

})(jQuery);