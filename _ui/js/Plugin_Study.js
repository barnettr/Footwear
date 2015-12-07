(function (jQuery) {
    var privateFunctionHide = function () {
        jQuery('.className').fadeOut('slow', function () {
            jQuery('.className').remove();
        });

    }
    var privateFunctionShow = function () {
        jQuery('.className').fadeIn('slow', function () {
            jQuery('.className').append('<ul>').css({
                color: "black",
                "font-weight": "normal"
            });
        });

    }
    var privateFunctionUpdate = function () {
        jQuery('li.className').each(function () {
            $(this).css({
                color: "red",
                "font-weight": "bold"
            });
        });
    }

    var methods = {
        init: function (options) {
            return this.each(function () {
                var $this = $(this);
                var settings = $this.data('pluginName');

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
                    $this.data('pluginName', settings);

                } else {

                    settings = jQuery.extend({}, settings, options);
                }
                //alert(settings.hidden);
                // run private functions here:


            });
            hook('onInit');
        },
        destroy: function (options) {
            return $(this).each(function () {
                var $this = $(this);
                $this.remove('pluginName');
            });
        },
        disable: function (options) {
            return $(this).each(function () {
                var $this = $(this);
                $this.attr("disabled", "true");
                $this.data('disabled', { isDisabled: 'true' });
            });
        },
        enable: function (options) {
            return $(this).each(function () {
                var $this = $(this);
                if ($this.data('disabled').isDisabled == 'false') { return; }
                $this.removeAttr('disabled');
                $this.data('disabled', { isDisabled: 'false' });
            });
        },
        val: function (options) {
            var someValue = this.eq(0).html();
            if (options) {
                this.data('storeddata', options);
            } else {
                alert(this.data('storeddata'));
            }
            //return someValue;
        },
        reset: function (options) {
            return $(this).each(function () {
                var $this = $(this);
                if ($this.data('initialText').myText == "") { return }
                $this.find('span.title').text($this.data('initialText').myText);
                $this.data('hidden', { isHidden: 'false' });
            });
        },
        show: function (options) {
            return $(this).each(function () {
                var $this = $(this);
                if ($this.data('hidden').isHidden == 'false') { return; }
                jQuery('.className').fadeIn('slow');
                $this.data('hidden', { isHidden: 'false' });
            });
        },
        hide: function () {
            return $(this).each(function () {
                var $this = $(this);
                //if ($this.data('hidden').isHidden == 'true') { return; }
                jQuery('.className').fadeOut('slow');
                $this.data('hidden', { isHidden: 'true' });
            });
        },
        update: function (options) {
            return $(this).each(function (event) {
                var $this = $(this);
                var update = "My text is changed!";
                var initialText = $this.find('span.title').html();
                $this.data('initialText', { myText: initialText });
                $this.find('span.title').html(update);
                $this.data('updated', { isUpdated: 'true' });
                if (event && event.stopPropagation === true) {
                    event.stopPropagation();
                }
            });
        },
        hook: function (hookName) {
            if (options[hookName] !== undefined) {
                // Call the user defined function.
                // Scope is set to the jQuery element we are operating on.
                options[hookName].call(element);
            }
        }
    };

    jQuery.fn.pluginName = function () {
        var method = arguments[0];

        if (methods[method]) {
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);

        } else if (typeof (method) == 'object' || !method) {
            method = methods.init;
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.pluginName');
            return this;
        }

        return method.apply(this, arguments);

    }

})(jQuery);








/*!
* 	jQuery.hook v1.0
*
* 	Copyright (c) 2009 Aaron Heckmann
* 	Dual licensed under the MIT and GPL licenses:
* 	http://www.opensource.org/licenses/mit-license.php
* 	http://www.gnu.org/licenses/gpl.html
*/
/**
* 	Provides the ability to hook into any jQuery.fn[method]
* 	with onbeforeMETHOD, onMETHOD, and onafterMETHOD.
*
* 	Pass in a string or array of method names you want
* 	to hook with onbefore, on, or onafter.
*
* 	Example:
* 		jQuery.hook('show');
* 		jQuery(selector).bind('onbeforeshow', function (e) { alert(e.type);});
* 		jQuery(selector).show() -> alerts 'onbeforeshow'
*
* 		jQuery.hook(['show','hide']);
* 		jQuery(selector)
* 			.bind('onbeforeshow', function (e) { alert(e.type);})
* 			.bind('onshow', function (e) { alert(e.type);})
* 			.bind('onaftershow', function (e) { alert(e.type);})
* 			.bind('onafterhide', function (e) { alert("The element is now hidden.");});
* 		jQuery(selector).show().hide()
* 			-> alerts 'onbeforeshow' then alerts 'onshow', then alerts 'onaftershow',
* 			then after the element is hidden alerts 'The element is now hidden.'
*
*
* 	You can also unhook what you've hooked into by calling jQuery.unhook() passing
* 	in your string or array of method names to unhook.
*
*/
;
(function($) {
    $.hook = function(fns) {
        fns = typeof fns === 'string' ?
            fns.split(' ') :
            $.makeArray(fns);
        jQuery.each(fns, function(i, method) {
            var old = $.fn[method];
            if (old && !old.__hookold) {
                $.fn[method] = function() {
                    this.triggerHandler('onbefore' + method);
                    this.triggerHandler('on' + method);
                    var ret = old.apply(this, arguments);
                    this.triggerHandler('onafter' + method);
                    return ret;
                };
                $.fn[method].__hookold = old;
            }
        });
    };
    $.unhook = function(fns) {
        fns = typeof fns === 'string' ?
            fns.split(' ') :
            $.makeArray(fns);
        jQuery.each($.makeArray(fns), function(i, method) {
            var cur = $.fn[method];
            if (cur && cur.__hookold) {
                $.fn[method] = cur.__hookold;
            }
        });
    };
})(jQuery);

/**********************************************************************
* 	Here is the HTML page that will render the changes of the above
*	Plugin
*
*
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <title>Test jquery.hook</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js"></script>
    <script src="jquery.hook.js"></script>
    <script>
        $(function() {
            $.hook('addClass hide');
            $("#clickme").bind('onbeforeaddClass', function(e) {
                    alert('onbeforeaddClass fired :' + ('onbeforeaddClass' === e.type));
                })
                .bind('onaddClass', function(e) {
                    alert('onaddClass fired :' + ('onaddClass' === e.type));
                })
                .bind('onafteraddClass', function(e) {
                    alert('onafteraddClass fired : ' + ('onafteraddClass' === e.type)); //+ '\n' + $(this).is('.newclass'));
                });
            $("#clickme").addClass('newclass'); // 3 alerts
            $.unhook('addClass');
            $("#clickme").addClass('diffClass'); // no alerts but class is still added
            alert("the button has class 'diffClass' : " + $("#clickme").is('.diffClass')); // alerts true
            $("#clickme").bind('onafterhide', function() {
                alert("The button is now hidden.");
            }).bind('click', function() {
                $(this).hide(); // alerts "The button is now hidden."
            });
        });
    </script>
</head>

<body>
    <button id="clickme" name="clickme" type="button">click me</button>
</body>

*
*
*
*
************************************************************************/






/**
 * A jQuery plugin boilerplate.
 * Author: Jonathan Nicol @f6design
 */
;
(function($) {
    // Change this to your plugin name. 
    var pluginName = 'demoplugin';

    /**
     * Plugin object constructor.
     * Implements the Revealing Module Pattern.
     */
    function Plugin(element, options) {
        // References to DOM and jQuery versions of element.
        var el = element;
        var $el = $(element);

        // Extend default options with those supplied by user.
        options = $.extend({}, $.fn[pluginName].defaults, options);

        /**
         * Initialize plugin.
         */
        function init() {
            // Add any initialization logic here...

            hook('onInit');
        }

        /**
         * Example Public Method
         */
        function fooPublic() {
            // Code goes here...
        }

        /**
         * Get/set a plugin option.
         * Get usage: $('#el').demoplugin('option', 'key');
         * Set usage: $('#el').demoplugin('option', 'key', value);
         */
        function option(key, val) {
            if (val) {
                options[key] = val;
            } else {
                return options[key];
            }
        }

        /**
         * Destroy plugin.
         * Usage: $('#el').demoplugin('destroy');
         */
        function destroy() {
            // Iterate over each matching element.
            $el.each(function() {
                var el = this;
                var $el = $(this);

                // Add code to restore the element to its original state...

                hook('onDestroy');
                // Remove Plugin instance from the element.
                $el.removeData('plugin_' + pluginName);
            });
        }

        /**
         * Callback hooks.
         * Usage: In the defaults object specify a callback function:
         * hookName: function() {}
         * Then somewhere in the plugin trigger the callback:
         * hook('hookName');
         */
        function hook(hookName) {
            if (options[hookName] !== undefined) {
                // Call the user defined function.
                // Scope is set to the jQuery element we are operating on.
                options[hookName].call(el);
            }
        }

        // Initialize the plugin instance.
        init();

        // Expose methods of Plugin we wish to be public.
        return {
            option: option,
            destroy: destroy,
            fooPublic: fooPublic
        };
    }

    /**
     * Plugin definition.
     */
    $.fn[pluginName] = function(options) {
        // If the first parameter is a string, treat this as a call to
        // a public method.
        if (typeof arguments[0] === 'string') {
            var methodName = arguments[0];
            var args = Array.prototype.slice.call(arguments, 1);
            var returnVal;
            this.each(function() {
                // Check that the element has a plugin instance, and that
                // the requested public method exists.
                if ($.data(this, 'plugin_' + pluginName) && typeof $.data(this, 'plugin_' + pluginName)[methodName] === 'function') {
                    // Call the method of the Plugin instance, and Pass it
                    // the supplied arguments.
                    returnVal = $.data(this, 'plugin_' + pluginName)[methodName].apply(this, args);
                } else {
                    throw new Error('Method ' + methodName + ' does not exist on jQuery.' + pluginName);
                }
            });
            if (returnVal !== undefined) {
                // If the method returned a value, return the value.
                return returnVal;
            } else {
                // Otherwise, returning 'this' preserves chainability.
                return this;
            }
            // If the first parameter is an object (options), or was omitted,
            // instantiate a new instance of the plugin.
        } else if (typeof options === "object" || !options) {
            return this.each(function() {
                // Only allow the plugin to be instantiated once.
                if (!$.data(this, 'plugin_' + pluginName)) {
                    // Pass options to Plugin constructor, and store Plugin
                    // instance in the elements jQuery data object.
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });
        }
    };

    // Default plugin options.
    // Options can be overwritten when initializing plugin, by
    // passing an object literal, or after initialization:
    // $('#el').demoplugin('option', 'key', value);
    $.fn[pluginName].defaults = {
        onInit: function() {},
        onDestroy: function() {}
    };

})(jQuery);





