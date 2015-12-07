
(function (jQuery) {

    var environment = {
        
    };

    var slider = jQuery("<div id='slider' data-clicked='true'></div>").insertBefore(jQuery("#coords_wrapper_men")).slider({
        animate: 'true'
    });

    var methods = {
        init: function (options) {

            var options = $.extend({}, options);

            return this.each(function () {
                var $this = jQuery(this);
                var settings = $this.data('fetchMenSelected');
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
                    $this.data('fetchMenSelected', settings);

                } else {

                    settings = jQuery.extend({}, settings, options);
                }

                var $posViewport = 0;
                var $posSlipon = 74;
                var $posChuckka = 184;
                var $posDeparture = 287;
                var $posCircuit = 397;
                var $posLukla = 504;
                var $posPro = 610;

                var $handleSelected = jQuery("#slider .ui-slider-handle").or("#slider .disabled-ui-slider-handle");
                $handleSelected.removeClass("ui-slider-handle").removeClass("disabled-ui-slider-handle").addClass("new-ui-slider-handle");
                var $newHandleSelected = jQuery("#slider .new-ui-slider-handle");
                $newHandleSelected.attr("data-disabled", false);

                var $handleDisabled = jQuery("#slider2 .ui-state-default").or("#slider2 .live-ui-state-default");
                $handleDisabled.removeClass("live-ui-state-default").addClass("disabled-ui-state-default").removeClass("ui-slider-handle");
                var $newHandleDisabled = jQuery("#slider2 .disabled-ui-state-default");
                $newHandleDisabled.css("left", "0% !important");
                $newHandleDisabled.css("left", "0");
                $newHandleDisabled.attr("data-disabled", true);

                jQuery("#slider .new-ui-slider-handle").draggable({
                    animate: true,
                    step: 1,
                    axis: "x",
                    //snap: '.snapIt',
                    containment: "parent",
                });

                $newHandleSelected.animate({
                    left: '396px',
                }, 2000);

                jQuery("#coords_wrapper_men").css('display', 'block');
                jQuery("#coords_wrapper_women").css('display', 'none');
                jQuery(".thumbgallery_men").css('display', 'block');
                jQuery(".thumbgallery_women").css('display', 'none');
                jQuery(".thumbgallery_load").css('display', 'none');
                jQuery(".tabs").addClass("selected").css('display', 'block');
                jQuery(".panels").removeClass("selected").css('display', 'none');

                var $fetchFirstPanel = function () {
                    var $activePanel = jQuery(".tabs #tab-04");
                    var $activeTab = jQuery(".tab #tab_4").addClass("ui-tab-selected");
                    var $v = $activePanel.find('var');
                    if ($v.length) {
                        var url = jQuery.trim($v.text());
                        $activePanel.load(url, function (res, sta, xhr) {
                            if (sta == "error")
                                $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                        });
                    }
                    $activePanel.stop(true, true).fadeIn().addClass("selected").css({ display: 'block' });
                }

                setTimeout(function () {
                    $fetchFirstPanel();
                }, 1000);
            });

            jQuery("ul#coords_wrapper_men li#tab_1").bind('click', function () {
                var $posViewport = 74;
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_1").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_2").add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".tabs #tab-01");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (res, sta, xhr) {
                        if (sta == "error")
                            $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                    });
                }
                var $notSelected = jQuery(".tabs #tab-02").add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-05")).add(jQuery(".tabs #tab-06"));
                $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                jQuery("#slider .new-ui-slider-handle").animate({
                    left: '74px',
                }, 1000);
                return false;
            });
            jQuery("ul#coords_wrapper_men li#tab_2").bind('click', function () {
                var $posViewport = 184;
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_2").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".tabs #tab-02");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (res, sta, xhr) {
                        if (sta == "error")
                            $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                    });
                }
                var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-05")).add(jQuery(".tabs #tab-06"));
                $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                jQuery("#slider .new-ui-slider-handle").animate({
                    left: '184px',
                }, 1000);
                return false;
            });
            jQuery("ul#coords_wrapper_men li#tab_3").bind('click', function () {
                var $posViewport = 287;
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_3").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".tabs #tab-03");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (res, sta, xhr) {
                        if (sta == "error")
                            $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                    });
                }
                var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-02")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-05")).add(jQuery(".tabs #tab-06"));
                $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                jQuery("#slider .new-ui-slider-handle").animate({
                    left: '287px',
                }, 1000);
                return false;
            });
            jQuery("ul#coords_wrapper_men li#tab_4").bind('click', function () {
                var $posViewport = 396;
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_4").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".tabs #tab-04");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (res, sta, xhr) {
                        if (sta == "error")
                            $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                    });
                }
                var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-02")).add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-05")).add(jQuery(".tabs #tab-06"));
                $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                jQuery("#slider .new-ui-slider-handle").animate({
                    left: '396px',
                }, 1000);
                return false;
            });
            jQuery("ul#coords_wrapper_men li#tab_5").bind('click', function () {
                var $posViewport = 504;
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_5").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".tabs #tab-05");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (res, sta, xhr) {
                        if (sta == "error")
                            $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                    });
                }
                var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-02")).add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-06"));
                $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                jQuery("#slider .new-ui-slider-handle").animate({
                    left: '504px',
                }, 1000);
                return false;
            });
            jQuery("ul#coords_wrapper_men li#tab_6").bind('click', function () {
                var $posViewport = 610;
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_6").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".tabs #tab-06");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (res, sta, xhr) {
                        if (sta == "error")
                            $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                    });
                }
                var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-02")).add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-05"));
                $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                jQuery("#slider .new-ui-slider-handle").animate({
                    left: '610px',
                }, 1000);
                return false;
            });


            jQuery("#slider .new-ui-slider-handle").bind('drag', function (event, ui) {
                var dragged = ui.helper;
                var dragged_data = dragged.data('ui-draggable');
                if (dragged_data.originalPosition.left > dragged.position().left) {
                    $posViewport = jQuery("#slider .new-ui-slider-handle").position().left + 18;
                } else {
                    $posViewport = jQuery("#slider .new-ui-slider-handle").position().left + 92;
                }
                switch (true) {
                    case ($posViewport >= $posSlipon && $posViewport <= $posChuckka):
                        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_1").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_men #tab_2").add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".tabs #tab-01");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (res, sta, xhr) {
                                if (sta == "error")
                                    $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                            });
                        }
                        var $notSelected = jQuery(".tabs #tab-02").add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-05")).add(jQuery(".tabs #tab-06"));
                        $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                        jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                        break;
                    case ($posViewport >= $posChuckka && $posViewport <= $posDeparture):
                        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_2").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".tabs #tab-02");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (res, sta, xhr) {
                                if (sta == "error")
                                    $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                            });
                        }
                        var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-05")).add(jQuery(".tabs #tab-06"));
                        $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                        jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                        break;
                    case ($posViewport >= $posDeparture && $posViewport <= $posCircuit):
                        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_3").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".tabs #tab-03");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (res, sta, xhr) {
                                if (sta == "error")
                                    $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                            });
                        }
                        var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-02")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-05")).add(jQuery(".tabs #tab-06"));
                        $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                        jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                        break;
                    case ($posViewport >= $posCircuit && $posViewport <= $posLukla):
                        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_4").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".tabs #tab-04");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (res, sta, xhr) {
                                if (sta == "error")
                                    $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                            });
                        }
                        var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-02")).add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-05")).add(jQuery(".tabs #tab-06"));
                        $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                        jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                        break;
                    case ($posViewport >= $posLukla && $posViewport <= $posPro):
                        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_5").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_6"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".tabs #tab-05");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (res, sta, xhr) {
                                if (sta == "error")
                                    $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                            });
                        }
                        var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-02")).add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-06"));
                        $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                        jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                        break;
                    case ($posViewport == $posPro || $posViewport > $posLukla):
                        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_6").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".tabs #tab-06");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (res, sta, xhr) {
                                if (sta == "error")
                                    $activePanel.text("Error loading slide content: " + xhr.status + " " + xhr.statusText);
                            });
                        }
                        var $notSelected = jQuery(".tabs #tab-01").add(jQuery(".tabs #tab-02")).add(jQuery(".tabs #tab-03")).add(jQuery(".tabs #tab-04")).add(jQuery(".tabs #tab-05"));
                        $notSelected.stop(true, true).fadeOut().removeClass("selected").addClass("hidden").css({ display: 'none' });
                        jQuery($activePanel).stop(true, true).fadeIn().addClass("selected").removeClass("hidden").css({ display: 'block' });
                        break;
                }
            });
        }
    };

    jQuery.fn.fetchMenSelected = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            jQuery.error('Method ' + method + ' does not exist on jQuery.pluginName');
        }
    };
})(jQuery);



