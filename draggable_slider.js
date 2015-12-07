///slider Stuff
jQuery(function () {
    var select = jQuery("#select");
    var $max = jQuery('#select').find('option').length;
    if ($max > 1) {
        var slider = jQuery("<div id='slider'></div>").insertAfter(select).slider({
            min: 1,
            max: $max,
            step: 1,
            animate: 'true',
            range: "min",
            value: select[0].selectedIndex + 1,
            slide: function (event, ui) {
                jQuery('#select').trigger('change'); ///trigger change event for the dropdown menu.
                select[0].selectedIndex = ui.value - 1;
            }
        });


        //Draggable Stuff
        jQuery("#slider .ui-slider-handle").draggable({
            animate: true,
            step: 1,
            axis: "x",
            containment: "parent",
        });

        ////Making the draggable function work if mouse is released outside of the handle by adding mouseup event to body

        jQuery("#slider .ui-slider-handle").mousedown(function () {
            jQuery('body').one('mouseup', function () {
                var sliderleft = jQuery('#wwslider .ui-slider-handle').css('left').replace(/[^-\d\.]/g, '');
                ///here I tried to get the percentage of slider's position
                $sliderwidth = jQuery("#slider").css('width').replace(/[^-\d\.]/g, '');;
                $sliderleft = jQuery("#slider .ui-slider-handle").css('left').replace(/[^-\d\.]/g, '');;
                $max = jQuery('#select').find('option').length;
                $selectvalue = jQuery('#select').val();
                $slidervalue = jQuery("#slider").slider('value');
                $sliderpercent = ($sliderleft / $sliderwidth) * 100;
                console.log($sliderpercent);

                ///Okay, here is what I did for two options, If it is released at some percent lower than a certain amount, set value to 1, else set it to two, But now I want to be able to do it automatically with any number of options.	
                if ($sliderpercent <= 33.3) {
                    jQuery("#slider").slider('value', 1);
                    jQuery('#select').trigger('change');
                }
                else {
                    jQuery("#slider").slider('value', 2);
                    jQuery('#select').trigger('change');
                }
            });
        });
        //Draggable
        jQuery("#select").change(function () {
            slider.slider("value", this.selectedIndex + 1);
            var $currentscs = jQuery('#select').find(":selected").text();
            jQuery('#holder li').fadeOut('fast');
            jQuery('#holder li[data-id*=' + $currentscs + ']').fadeIn('fast');
        });
    }
});





/*jQuery.widget("ui.dragSlider", $.ui.slider, {
    _create: function () {
        this._super('_create');
        var drWidth = this.element.context.clientWidth;
        var drMax = this.options.max - this.options.min;
        var drStep = drWidth / drMax;
        var perc = drStep / drWidth;
        // turn handle into draggable widget
        this._handleDraggable(this.handle, drWidth, drMax);
        // add a basic ruler to the slider 
        this._addVisuals(drMax, drStep);
    },
    // setup handle as a draggable object
    // wire up draggable event handlers with slider event handlers
    _handleDraggable: function ($handle, drWidth, drMax) {
        var that = this;
        $handle.draggable({
            animate: true,
            axis: "x",
            containment: "parent",
            drag: function (event, ui) {
                // trigger slide event on drag
                that._trigger("slide", event, ui);
            },
            stop: function (event, ui) {
                // calculate percentage of handle's position relative to
                // the slider width
                var posPer = Math.round(ui.position.left / drWidth * 100);
                // calculate value for the slider based on handles position
                var sliderPos = (posPer / 100 * drMax) + that.options.min;
                // set new value(will trigger change event)
                that._setOption("value", sliderPos);
                // trigger slider's stop event
                that._trigger("stop", "slidestop", ui);
            }
        });

    },
    // add a "basic ruler"
    _addVisuals: function (drMax, drStep) {
        for (var i = 0; i <= drMax; i++) {
            if (i == 0) {
                $("#value").append("<span>|</span>");
            } else {
                $("#value").append("<span style='padding-left:" + (drStep - 3) + "px'>|" + "</span>");
            }
        }

    },
});
// implementation of custom slider 
$(document).ready(function () {
    $("#dragSlider").dragSlider({
        min: 1,
        max: 5,
        animate: true,
        slide: function (event, ui) {
            $("#location").html(ui.position.left);
        },
        change: function (event, ui) {
            $("#select").val(ui.value);
        },
    });
    $("#select").change(function (e) {
        $("#dragSlider").dragSlider("value", $(this).val());
    });

});*/

