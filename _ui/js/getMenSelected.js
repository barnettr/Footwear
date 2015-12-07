var getMenSelected = function () {

    var $posViewport = 0;
    var $posSlipon = 0;
    var $posChuckka = 110;
    var $posDeparture = 217;
    var $posCircuit = 323;
    var $posLukla = 431;
    var $posPro = 537;


    var $handleSelected = jQuery("#slider .ui-slider-handle").or("#slider .disabled-ui-slider-handle");
    $handleSelected.removeClass("ui-slider-handle ui-state-default").removeClass("disabled-ui-slider-handle").addClass("new-ui-slider-handle");
    var $newHandleSelected = jQuery("#slider .new-ui-slider-handle");
    $newHandleSelected.css('cssText', 'position:absolute');
    $newHandleSelected.attr("data-disabled", false);
    jQuery("#slider").css('cssText', 'margin-left:;');
    jQuery("#slider").css('left', '72px');

    var $handleDisabled = jQuery("#slider2 .ui-state-default").or("#slider2 .live-ui-state-default");
    $handleDisabled.removeClass("live-ui-state-default").addClass("disabled-ui-state-default").removeClass("ui-slider-handle");
    var $newHandleDisabled = jQuery("#slider2 .disabled-ui-state-default");
    $newHandleDisabled.attr("data-disabled", true);
    jQuery("#slider2").css({ 'z-index': '19' });
    jQuery("#slider2").css('left', '0');
    $newHandleDisabled.css("left", "0%");


    $newHandleSelected.draggable({
        animate: true,
        step: 1,
        axis: "x",
        containment: "parent",
        drag: function () {
            //console.log('$newHandleSelected is dragging');
        },
        start: function (event, ui) {
            jQuery("ul#coords_wrapper_men li.button").css('cssText', 'height:117px !important; top:-33px !important;');
        },
        stop: function (event, ui) {
            jQuery("ul#coords_wrapper_men li.button").css('cssText', 'height:80px; top:0;');
        },
    });

    jQuery(".strips").css('cssText', 'background-color: #f4f4f2;');

    jQuery("#coords_wrapper_men").css('display', 'block');
    jQuery("#coords_wrapper_women").css('display', 'none');
    jQuery(".thumbgallery_men").css('display', 'block');
    jQuery(".thumbgallery_women").css('display', 'none');
    jQuery(".thumbgallery_load").css('display', 'none');
    jQuery(".strips").addClass("selected").css('display', 'block');
    jQuery(".panels").removeClass("selected").css('display', 'none');

    var $fetchFirstPanel = function () {
        var $activePanel = jQuery(".strips #tab-04");
        var $activeTab = jQuery(".tab #tab_4").addClass("ui-tab-selected");
        var $v = $activePanel.find('var');
        if ($v.length) {
            var url = jQuery.trim($v.text());
            $activePanel.load(url, function (responseText, statusText, xhr) {
                if (statusText == "error") {
                    b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.statusText + "</b>");
                }
            });
        }
        $activePanel.show().addClass("selected");
        jQuery("#slider .new-ui-slider-handle").animate({
            left: '321px',
        });
        jQuery("ul#coords_wrapper_men li.button").css('cssText', 'height:77px; top:0;');
    }
    setTimeout(function () {
        $fetchFirstPanel();
    }, 50);



    jQuery("ul#coords_wrapper_men li#tab_1").bind('click', function () {
        var $posViewport = 0;
        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_1").addClass("ui-tab-selected");
        var $navNotSelected = jQuery("#coords_wrapper_men #tab_2").add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
        $navNotSelected.removeClass("ui-tab-selected");
        var $activePanel = jQuery(".strips #tab-01");
        var $v = $activePanel.find('var');
        if ($v.length) {
            var url = jQuery.trim($v.text());
            $activePanel.load(url, function (responseText, statusText, xhr) {
                if ( statusText == "error" ) {
                    b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                }
            });
        }
        var $notSelected = jQuery(".strips #tab-02").add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-05")).add(jQuery(".strips #tab-06"));
        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
        $activePanel.show().addClass("selected").css({ display: 'block' });
        jQuery("#slider .new-ui-slider-handle").animate({
            left: '0px',
        }, 200);
        return false;
    });
    jQuery("ul#coords_wrapper_men li#tab_2").bind('click', function () {
        var $posViewport = 110;
        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_2").addClass("ui-tab-selected");
        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
        $navNotSelected.removeClass("ui-tab-selected");
        var $activePanel = jQuery(".strips #tab-02");
        var $v = $activePanel.find('var');
        if ($v.length) {
            var url = jQuery.trim($v.text());
            $activePanel.load(url, function (responseText, statusText, xhr) {
                if ( statusText == "error" ) {
                    b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                }
            });
        }
        var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-05")).add(jQuery(".strips #tab-06"));
        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
        $activePanel.show().addClass("selected").css({ display: 'block' });
        jQuery("#slider .new-ui-slider-handle").animate({
            left: '110px',
        }, 200);
        return false;
    });
    jQuery("ul#coords_wrapper_men li#tab_3").bind('click', function () {
        var $posViewport = 217;
        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_3").addClass("ui-tab-selected");
        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
        $navNotSelected.removeClass("ui-tab-selected");
        var $activePanel = jQuery(".strips #tab-03");
        var $errorPanel = jQuery();
        var $v = $activePanel.find('var');
        if ($v.length) {
            var url = jQuery.trim($v.text());
            $activePanel.load(url, function (responseText, statusText, xhr) {
                if ( statusText == "error" ) {
                    b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                }
            });
        }
        var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-02")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-05")).add(jQuery(".strips #tab-06"));
        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
        $activePanel.show().addClass("selected").css({ display: 'block' });
        jQuery("#slider .new-ui-slider-handle").animate({
            left: '217px',
        }, 200);
        return false;
    });
    jQuery("ul#coords_wrapper_men li#tab_4").bind('click', function () {
        var $posViewport = 323;
        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_4").addClass("ui-tab-selected");
        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
        $navNotSelected.removeClass("ui-tab-selected");
        var $activePanel = jQuery(".strips #tab-04");
        var $v = $activePanel.find('var');
        if ($v.length) {
            var url = jQuery.trim($v.text());
            $activePanel.load(url, function (responseText, statusText, xhr) {
                if ( statusText == "error" ) {
                    b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                }
            });
        }
        var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-02")).add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-05")).add(jQuery(".strips #tab-06"));
        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
        $activePanel.show().addClass("selected").css({ display: 'block' });
        jQuery("#slider .new-ui-slider-handle").animate({
            left: '323px',
        }, 200);
        return false;
    });
    jQuery("ul#coords_wrapper_men li#tab_5").bind('click', function () {
        var $posViewport = 431;
        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_5").addClass("ui-tab-selected");
        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_6"));
        $navNotSelected.removeClass("ui-tab-selected");
        var $activePanel = jQuery(".strips #tab-05");
        var $v = $activePanel.find('var');
        if ($v.length) {
            var url = jQuery.trim($v.text());
            $activePanel.load(url, function (responseText, statusText, xhr) {
                if ( statusText == "error" ) {
                    b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                }
            });
        }
        var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-02")).add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-06"));
        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
        $activePanel.show().addClass("selected").css({ display: 'block' });
        jQuery("#slider .new-ui-slider-handle").animate({
            left: '431px',
        }, 200);
        return false;
    });
    jQuery("ul#coords_wrapper_men li#tab_6").bind('click', function () {
        var $posViewport = 537;
        var $activeSlideNav = jQuery("#coords_wrapper_men #tab_6").addClass("ui-tab-selected");
        var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5"));
        $navNotSelected.removeClass("ui-tab-selected");
        var $activePanel = jQuery(".strips #tab-06");
        var $v = $activePanel.find('var');
        if ($v.length) {
            var url = jQuery.trim($v.text());
            $activePanel.load(url, function (responseText, statusText, xhr) {
                if ( statusText == "error" ) {
                    b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                }
            });
        }
        var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-02")).add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-05"));
        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
        $activePanel.show().addClass("selected").css({ display: 'block' });
        jQuery("#slider .new-ui-slider-handle").animate({
            left: '537px',
        }, 200);
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
                var $activePanel = jQuery(".strips #tab-01");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (responseText, statusText, xhr) {
                        if ( statusText == "error" ) {
                            b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                        }
                    });
                }
                var $notSelected = jQuery(".strips #tab-02").add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-05")).add(jQuery(".strips #tab-06"));
                $notSelected.stop(true, true).hide().removeClass("selected").css({ display: 'none' }).clearQueue();    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.stop(true, true).show().addClass("selected").css({ display: 'block' }).clearQueue();
                break;
            case ($posViewport >= $posChuckka && $posViewport <= $posDeparture):
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_2").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".strips #tab-02");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (responseText, statusText, xhr) {
                        if ( statusText == "error" ) {
                            b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                        }
                    });
                }
                var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-05")).add(jQuery(".strips #tab-06"));
                $notSelected.stop(true, true).hide().removeClass("selected").css({ display: 'none' }).clearQueue();    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.stop(true, true).show().addClass("selected").css({ display: 'block' }).clearQueue();
                break;
            case ($posViewport >= $posDeparture && $posViewport <= $posCircuit):
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_3").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".strips #tab-03");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function(responseText, statusText, xhr) {
                        if ( statusText == "error" ) {
                            b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                        }
                    });
                }
                var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-02")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-05")).add(jQuery(".strips #tab-06"));
                $notSelected.stop(true, true).hide().removeClass("selected").css({ display: 'none' }).clearQueue();    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.stop(true, true).show().addClass("selected").css({ display: 'block' }).clearQueue();
                break;
            case ($posViewport >= $posCircuit && $posViewport <= $posLukla):
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_4").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_5")).add(jQuery("#coords_wrapper_men #tab_6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".strips #tab-04");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function(responseText, statusText, xhr) {
                        if ( statusText == "error" ) {
                            b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                        }
                    });
                }
                var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-02")).add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-05")).add(jQuery(".strips #tab-06"));
                $notSelected.stop(true, true).hide().removeClass("selected").css({ display: 'none' }).clearQueue();    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.stop(true, true).show().addClass("selected").css({ display: 'block' }).clearQueue();
                break;
            case ($posViewport >= $posLukla && $posViewport <= $posPro):
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_5").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".strips #tab-05");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function(responseText, statusText, xhr) {
                        if ( statusText == "error" ) {
                            b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                        }
                    });
                }
                var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-02")).add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-06"));
                $notSelected.stop(true, true).hide().removeClass("selected").css({ display: 'none' }).clearQueue();    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.stop(true, true).show().addClass("selected").css({ display: 'block' }).clearQueue();
                $activePanel.data('loaded', true);
                break;
            case ($posViewport == $posPro || $posViewport > $posLukla):
                var $activeSlideNav = jQuery("#coords_wrapper_men #tab_6").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_men #tab_1").add(jQuery("#coords_wrapper_men #tab_2")).add(jQuery("#coords_wrapper_men #tab_3")).add(jQuery("#coords_wrapper_men #tab_4")).add(jQuery("#coords_wrapper_men #tab_5"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".strips #tab-06");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function(responseText, statusText, xhr) {
                        if ( statusText == "error" ) {
                            b.text("<b>Error loading slide content: "+xhr.status+" "+xhr.statusText + "</b>");
                        }
                    });
                }
                var $notSelected = jQuery(".strips #tab-01").add(jQuery(".strips #tab-02")).add(jQuery(".strips #tab-03")).add(jQuery(".strips #tab-04")).add(jQuery(".strips #tab-05"));
                $notSelected.stop(true, true).hide().removeClass("selected").css({ display: 'none' }).clearQueue();    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.stop(true, true).show().addClass("selected").css({ display: 'block' }).clearQueue();
                break;
        }
    });
}

})(jQuery);
