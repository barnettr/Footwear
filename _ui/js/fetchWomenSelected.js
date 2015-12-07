

        var fetchWomenSelected = function () {
            
            var $posViewport = 0;
            var $posLeatherMoc = 0;
            var $posBallet = 98;
            var $posMaryJane = 189;
            var $posW_Slipon = 281;
            var $posW_FullCircuit = 370;
            var $posW_Lukla = 464;
            var $pos_LuklaPro = 545;

            var $handleSelected = jQuery("#slider2 .ui-state-default").or("#slider2 .disabled-ui-state-default");
            $handleSelected.removeClass("ui-state-default").removeClass("disabled-ui-slider-handle").removeClass("disabled-ui-state-default disabled-ui-slider-handle ui-draggable-disabled ui-state-disabled").addClass("live-ui-state-default");
            var $newHandleSelected = jQuery("#slider2 .live-ui-state-default");
            $newHandleSelected.css('cssText', 'position:');
            $newHandleSelected.attr("data-disabled", false);
            jQuery("#slider2").css({ 'z-index': '20' });
            jQuery("#slider2").css({ 'left': '72px' });

            var $handleDisabled = jQuery("#slider .ui-slider-handle").or("#slider .new-ui-slider-handle");
            $handleDisabled.removeClass("ui-state-default ui-slider-handle new-ui-slider-handle").addClass("disabled-ui-slider-handle");
            var $newHandleDisabled = jQuery("#slider .disabled-ui-slider-handle");
            jQuery("#slider").css('cssText','left: 0px !important;');
            $newHandleDisabled.css("left", "0%");
            $newHandleDisabled.attr("data-disabled", true);
            
            $newHandleSelected.draggable({
                animate: true,
                step: 1,
                axis: "x",
                containment: "parent",
                drag: function () {
                    //console.log('$newHandleSelected is dragging');
                },
                start: function (event, ui) {
                    jQuery("ul#coords_wrapper_women li.button").css('cssText', 'height:117px !important; width:100px !important; top:-33px !important;');
                },
                stop: function (event, ui) {
                    jQuery("ul#coords_wrapper_women li.button").css('cssText', 'height:80px; top:0;');
                },
            });

            jQuery(".panels").css('cssText', 'background-color: #f4f4f2;');
            jQuery("#coords_wrapper_women").css('display', 'block');
            jQuery(".thumbgallery_women").css('display', 'block');
            jQuery("#coords_wrapper_men").css('display', 'none');
            jQuery(".thumbgallery_men").css('display', 'none');
            jQuery(".thumbgallery_load").css('display', 'none');
            jQuery(".tabs").removeClass("selected").css('display', 'none');
            jQuery(".panels").addClass("selected").css('display', 'block');

            var quit = false;
            var $fetchFirstPanel = function () {
                if (quit) { return; }
                quit = true;
                var $activePanel = jQuery(".panels #panel-05");
                var $activeTab = jQuery(".tab #tab5").addClass("ui-tab-selected");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                        
                        if (status == "error") {
                            b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                        } else if (status == "success") { }
                    });
                }
                $activePanel.show().addClass("selected");  //.removeClass("hidden").css({ display: 'block' });
                $newHandleSelected.animate({
                    left: '370px',
                });
                jQuery("ul#coords_wrapper_women li.button").css('cssText', 'height:80px; top:0;');
            }
            setTimeout(function () {
                $fetchFirstPanel();
            }, 100);

            jQuery("ul#coords_wrapper_women li#tab1").bind('click', function () {
                var $posViewport = 0;
                var $activeSlideNav = jQuery("#coords_wrapper_women #tab1").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_women #tab2").add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".panels #panel-01");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                        
                        if (status == "error") {
                            b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                        } else if (status == "success") { }
                    });
                }
                var $notSelected = jQuery(".panels #panel-02").add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-07"));
                $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.show().addClass("selected").css({ display: 'block' });
                jQuery("#slider2 .live-ui-state-default").animate({
                    left: '0px',
                }, 200);
                return false;
            });
            jQuery("ul#coords_wrapper_women li#tab2").bind('click', function () {
                var $posViewport = 98;
                var $activeSlideNav = jQuery("#coords_wrapper_women #tab2").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".panels #panel-02");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                        
                        if (status == "error") {
                            b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                        } else if (status == "success") { }
                    });
                }
                var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-07"));
                $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.show().addClass("selected").css({ display: 'block' });
                jQuery("#slider2 .live-ui-state-default").animate({
                    left: '98px',
                }, 200);
                return false;
            });
            jQuery("ul#coords_wrapper_women li#tab3").bind('click', function () {
                var $posViewport = 189;
                var $activeSlideNav = jQuery("#coords_wrapper_women #tab3").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".panels #panel-03");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                        
                        if (status == "error") {
                            b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.statusText + "</b>");
                        } else if (status == "success") { }
                    });
                }
                var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-07"));
                $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.show().addClass("selected").css({ display: 'block' });
                jQuery("#slider2 .live-ui-state-default").animate({
                    left: '189px',
                }, 200);
                return false;
            });
            jQuery("ul#coords_wrapper_women li#tab4").bind('click', function () {
                var $posViewport = 281;
                var $activeSlideNav = jQuery("#coords_wrapper_women #tab4").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".panels #panel-04");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                        if (status == "error") {
                            b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                        } else if (status == "success") { }
                    });
                }
                var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-07"));
                $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.show().addClass("selected").css({ display: 'block' });
                jQuery("#slider2 .live-ui-state-default").animate({
                    left: '281px',
                }, 200);
                return false;
            });
            jQuery("ul#coords_wrapper_women li#tab5").bind('click', function () {
                var $posViewport = 370;
                var $activeSlideNav = jQuery("#coords_wrapper_women #tab5").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".panels #panel-05");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                        if (status == "error") {
                            b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                        } else if (status == "success") { }
                    });
                }
                var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-07"));
                $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.show().addClass("selected").css({ display: 'block' });
                jQuery("#slider2 .live-ui-state-default").animate({
                    left: '370px',
                }, 200);
                return false;
            });
            jQuery("ul#coords_wrapper_women li#tab6").bind('click', function () {
                var $posViewport = 464;
                var $activeSlideNav = jQuery("#coords_wrapper_women #tab6").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab7"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".panels #panel-06");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                        if (status == "error") {
                            b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                        } else if (status == "success") { }
                    });
                }
                var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-07"));
                $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.show().addClass("selected").css({ display: 'block' });
                jQuery("#slider2 .live-ui-state-default").animate({
                    left: '464px',
                }, 200);
                return false;
            });
            jQuery("ul#coords_wrapper_women li#tab7").bind('click', function () {
                var $posViewport = 545;
                var $activeSlideNav = jQuery("#coords_wrapper_women #tab7").addClass("ui-tab-selected");
                var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6"));
                $navNotSelected.removeClass("ui-tab-selected");
                var $activePanel = jQuery(".panels #panel-07");
                var $v = $activePanel.find('var');
                if ($v.length) {
                    var url = jQuery.trim($v.text());
                    $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                        if (status == "error") {
                            b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                        } else if (status == "success") { }
                    });
                }
                var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06"));
                $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                $activePanel.show().addClass("selected").css({ display: 'block' });
                jQuery("#slider2 .live-ui-state-default").animate({
                    left: '545px',
                }, 200);
                return false;
            });

            jQuery("#slider2 .live-ui-state-default").bind('drag', function (event, ui) {
                var dragged = ui.helper;
                var dragged_data = dragged.data('ui-draggable');
                var dragged_data2 = dragged.data('ui-draggable-dragging');
                if (dragged_data.originalPosition.left > dragged.position().left) {
                    $posViewport = jQuery("#slider2 .live-ui-state-default").position().left + 90;
                } else {
                    $posViewport = jQuery("#slider2 .live-ui-state-default").position().left + 110;
                }
                switch (true) {
                    case ($posViewport >= $posLeatherMoc && $posViewport <= 167):
                        var $activeSlideNav = jQuery("#coords_wrapper_women #tab1").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_women #tab2").add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".panels #panel-01");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                                if (status == "error") {
                                    b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                                } else if (status == "success") { }
                            });
                        }
                        var $notSelected = jQuery(".panels #panel-02").add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-06"));
                        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                        $activePanel.show().addClass("selected").css({ display: 'block' });
                        break;
                    case ($posViewport >= $posBallet && $posViewport <= 259):
                        var $activeSlideNav = jQuery("#coords_wrapper_women #tab2").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".panels #panel-02");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                                if (status == "error") {
                                    b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                                } else if (status == "success") { }
                            });
                        }
                        var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-07"));
                        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                        $activePanel.show().addClass("selected").css({ display: 'block' });
                        break;
                    case ($posViewport >= $posMaryJane && $posViewport <= 351):
                        var $activeSlideNav = jQuery("#coords_wrapper_women #tab3").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".panels #panel-03");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                                if (status == "error") {
                                    b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                                } else if (status == "success") { }
                            });
                        }
                        var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-07"));
                        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                        $activePanel.show().addClass("selected").css({ display: 'block' });
                        break;
                    case ($posViewport >= $posW_Slipon && $posViewport <= 440):
                        var $activeSlideNav = jQuery("#coords_wrapper_women #tab4").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".panels #panel-04");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                                if (status == "error") {
                                    b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                                } else if (status == "success") { }
                            });
                        }
                        var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-07"));
                        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                        $activePanel.show().addClass("selected").css({ display: 'block' });
                        break;
                    case ($posViewport >= $posW_FullCircuit && $posViewport <= 535):
                        var $activeSlideNav = jQuery("#coords_wrapper_women #tab5").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab6")).add(jQuery("#coords_wrapper_women #tab7"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".panels #panel-05");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                                if (status == "error") {
                                    b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                                } else if (status == "success") { }
                            });
                        }
                        var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-06")).add(jQuery(".panels #panel-07"));
                        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                        $activePanel.show().addClass("selected").css({ display: 'block' });
                        break;
                    case ($posViewport >= $posW_Lukla && $posViewport <= 618):
                        var $activeSlideNav = jQuery("#coords_wrapper_women #tab6").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab7"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".panels #panel-06");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                                if (status == "error") {
                                    b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                                } else if (status == "success") { }
                            });
                        }
                        var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-07"));
                        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                        $activePanel.show().addClass("selected").css({ display: 'block' });
                        break;
                    case ($posViewport == $pos_LuklaPro || $posViewport > 618):
                        var $activeSlideNav = jQuery("#coords_wrapper_women #tab7").addClass("ui-tab-selected");
                        var $navNotSelected = jQuery("#coords_wrapper_women #tab1").add(jQuery("#coords_wrapper_women #tab2")).add(jQuery("#coords_wrapper_women #tab3")).add(jQuery("#coords_wrapper_women #tab4")).add(jQuery("#coords_wrapper_women #tab5")).add(jQuery("#coords_wrapper_women #tab6"));
                        $navNotSelected.removeClass("ui-tab-selected");
                        var $activePanel = jQuery(".panels #panel-07");
                        var $v = $activePanel.find('var');
                        if ($v.length) {
                            var url = jQuery.trim($v.text());
                            $activePanel.load(url, function (response, status, xhr) {    //  completeCallback has the following signature: function( status, status, responses, headers ) {}
                                if (status == "error") {
                                    b.text("<b>Error loading slide content: " + xhr.status + " " + xhr.status + "</b>");
                                } else if (status == "success") { }
                            });
                        }
                        var $notSelected = jQuery(".panels #panel-01").add(jQuery(".panels #panel-02")).add(jQuery(".panels #panel-03")).add(jQuery(".panels #panel-04")).add(jQuery(".panels #panel-05")).add(jQuery(".panels #panel-06"));
                        $notSelected.hide().removeClass("selected").css({ display: 'none' });    //.css({ display: 'none' }).addClass("hidden")
                        $activePanel.show().addClass("selected").css({ display: 'block' });
                        break;
                }
            });
        }
