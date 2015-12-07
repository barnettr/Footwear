var options = {};
var oldx = 0;
var oldy = 0;
var direction = "";
jQuery.mousedirection = function (opts) {
    var defaults = {
    };
    options = jQuery.extend(defaults, opts);
    jQuery(document).bind("mousemove", function (e) {
        var activeElement = e.target || e.srcElement;
        if (e.pageX > oldx && e.pageY > oldy) {
            direction = "bottom-right";
        }
        else if (e.pageX > oldx && e.pageY < oldy) {
            direction = "top-right";
        }
        else if (e.pageX < oldx && e.pageY < oldy) {
            direction = "top-left";
        }
        else if (e.pageX < oldx && e.pageY > oldy) {
            direction = "bottom-left";
        }
        else if (e.pageX > oldx && e.pageY == oldy) {
            direction = "right";
        }
        else if (e.pageX == oldx && e.pageY > oldy) {
            direction = "down";
        }
        else if (e.pageX == oldx && e.pageY < oldy) {
            direction = "up";
        }
        else if (e.pageX < oldx && e.pageY == oldy) {
            direction = "left";
        }
        jQuery(activeElement).trigger(direction);
        jQuery(activeElement).trigger({ type: "mousedirection", direction: direction });
        oldx = e.pageX;
        oldy = e.pageY;
    });
}
})(jQuery);
var xDirection = "";
jQuery(function () {
    jQuery.mousedirection();
    jQuery("#slider_container").bind("mousedirection", function (e) {
        //jQuery(".log_data").html("Mouse Direction: <b>" + e.direction + "</b>");
        var xDirection = e.direction;
    });
});
console.log(jQuery.mousedirection.xDirection);
