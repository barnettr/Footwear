/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */
 
 
// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {
 
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.
 
    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in our plugin).
 
    // Create the defaults once
    var pluginName = "defaultPluginName",
        defaults = {
            propertyName: "value"
        };
 
    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
 
        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;
 
        this._defaults = defaults;
        this._name = pluginName;
 
        this.init();
    }
 
    Plugin.prototype.init = function () {
        // Place initialization logic here
        // We already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options
    };
 
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    }
 
})( jQuery, window, document );









;
(function ($, window, document, undefined) {

    var pluginName = 'abstractButton';
    var defaults = {
        autoActivate: true
    };
    var out = function () {
        $(this).data('tl').reverse();
    };
    var hover = function () {
        $(this).data('tl').play();
    };
    var PluginPrototype = {
        init: function (name, el, options) {
            this.name = name;
            this.el = el;
            this.$el = $(el);
            this.options = $.extend({}, defaults, options);
            this.activate();
            this.setAnimation = options.setAnimation;
            if (this.options.autoActivate === false) {
                this.deactivate();
            }
        },
        setTimeline: function () {
            var element = this.$el;
            if (element.data('tl')) return;
            var tl = new TimelineLite({
                onComplete: function () {
                    element.data('tl').stop();
                }
            });
            tl.stop();
            element.data('tl', tl);
            this.setAnimation(element, tl);
        },

        getTimeline: function (element) {
            return element.data('tl');
        },
        activate: function (context) {
            this.setTimeline();
            this.$el.on('mouseenter.buttonGrange', hover).on('mouseleave.buttonGrange, click.buttonGrange', out);
        },
        deactivate: function (context) {
            this.$el.off('.buttonGrange');
        }
    };

    $.fn[pluginName] = function (options) {
        var input = arguments;
        if (this.length) {
            return this.each(function () {
                //plugin is not instanciated. Create it (requires an object or null as arguments)
                if (!$.data(this, pluginName)) {
                    if (typeof options === 'object' || !options) {
                        //create an instance of our concrete plugin
                        var instance = Object.create(PluginPrototype);
                        instance.init(pluginName, this, options);
                        $.data(this, pluginName, instance);
                    } else {
                        $.error('Plugin jQuery.' + pluginName + " has not yet been instanciated.");
                    }
                } else if (typeof options === 'string') {
                    //methods that begin with _ are private
                    if (options[0] === '_') {
                        $.error('Plugin jQuery.' + pluginName + ' : method ' + options + ' is private');
                        return;
                    }
                    //plugin is instanciated, get it
                    var controller = $.data(this, pluginName);
                    if (controller[options]) {
                        controller[options](Array.prototype.slice.call(input, 1));
                    } else {
                        $.error('Plugin jQuery.' + pluginName + " has no method " + options);
                    }
                } else {
                    $.error('Plugin jQuery.' + pluginName + " has already been instanciated.");
                }
            });
        }
    };


})(jQuery, window, document);









	(function (jQuery) {

        var methods = {
            init: function (options) {
                return this.each(function () {
                    var $this = $(this);
                    var settings = $this.data('fitTool');

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
                    var $nav_on = $(".dashboard #button-front, .dashboard #button-front2, .dashboard #button-front3");
                    $nav_on.addClass('nav_on');
                    // run code here
                });
            },
            front: function (options) {
                return $(this).each(function (event) {
                    var $this = $(this);
                    var $thisId = $this.attr('id');
                    var $thisNumber = $this.attr('id').substring(5);
                    var $thisParent = $this.parents().attr('id');
                    var $isColumn = $this.parent();
                    var $isShape = $this.parent().next();
                    var $anchorTag = $isShape.children('a');
                    $isShape.css({ display: "block" });
                    $anchorTag.css({ backgroundImage: "url(/assets/ocp/content/fitting_room/women/jeans/120806/sprite_models_wos.jpg)" });
                    var stopDoubleClick = $("div.dashboard div#button-" + $thisId + "");
                    if (!stopDoubleClick.hasClass('nav_on')) {
                        var $nav_off = $(".dashboard #button-side" + $thisNumber + ", .dashboard #button-back" + $thisNumber + ", .dashboard #button-front" + $thisNumber + "");
                        $nav_off.removeClass('nav_on');
                        var $nav_on = $(".dashboard #button-" + $thisId + "");
                        $nav_on.addClass('nav_on');

                        var $active = $("div." + $thisParent + "Wrapper div.carousel li.active");
                        if ($active.length == 0) { $active = $("div." + $thisParent + "Wrapper div.carousel li.back"); }
                        var $next = $("div." + $thisParent + "Wrapper div.carousel li#" + $thisId);

                        $active.addClass('last-active');
                        $next.addClass('active');
                        $active.removeAttr('style').removeClass('active last-active');
                        $next.removeAttr('style');
                    } else { return }
                });
            },
            side: function (options) {
                return $(this).each(function (event) {
                    var $this = $(this);
                    var $thisId = $this.attr('id');
                    var $thisNumber = $this.attr('id').substring(4);
                    var $thisParent = $this.parent().attr('id');
                    var $isColumn = $this.parent();
                    var $isShape = $this.parent().next();
                    $isShape.css({ display: "none" });
                    var stopDoubleClick = $("div.dashboard div#button-" + $thisId + "");
                    if (!stopDoubleClick.hasClass('nav_on')) {
                        var $nav_off = $(".dashboard #button-side" + $thisNumber + ", .dashboard #button-back" + $thisNumber + ", .dashboard #button-front" + $thisNumber + "");
                        $nav_off.removeClass('nav_on');
                        var $nav_on = $(".dashboard #button-" + $thisId + "");
                        $nav_on.addClass('nav_on');

                        var $active = $("div." + $thisParent + "Wrapper div.carousel li.active");
                        if ($active.length == 0) { $active = $("div." + $thisParent + "Wrapper div.carousel li.back"); }
                        var $next = $("div." + $thisParent + "Wrapper div.carousel li#" + $thisId);

                        $active.addClass('last-active');
                        $next.addClass('active');
                        $active.removeAttr('style').removeClass('active last-active');
                        $next.removeAttr('style');
                    } else { return }
                });
            },
            back: function (options) {
                return $(this).each(function (event) {
                    var $this = $(this);
                    var $thisId = $this.attr('id');
                    var $thisNumber = $this.attr('id').substring(4);
                    var $thisParent = $this.parents().attr('id');
                    var $isColumn = $this.parent();
                    var $isShape = $this.parent().next();
                    $isShape.css({ display: "none" });
                    var stopDoubleClick = $("div.dashboard div#button-" + $thisId + "");
                    if (!stopDoubleClick.hasClass('nav_on')) {
                        var $nav_off = $(".dashboard #button-side" + $thisNumber + ", .dashboard #button-back" + $thisNumber + ", .dashboard #button-front" + $thisNumber + "");
                        $nav_off.removeClass('nav_on');
                        var $nav_on = $(".dashboard #button-" + $thisId + "");
                        $nav_on.addClass('nav_on');

                        var $active = $("div." + $thisParent + "Wrapper div.carousel li.active");
                        if ($active.length == 0) { $active = $("div." + $thisParent + "Wrapper div.carousel li.back"); }
                        var $next = $("div." + $thisParent + "Wrapper div.carousel li#" + $thisId);

                        $active.addClass('last-active');
                        $next.addClass('active');
                        $active.removeAttr('style').removeClass('active last-active');
                        $next.removeAttr('style');
                    } else { return }
                });
            },
            arrow: function (options) {
                return $(this).each(function (event) {
                    var $this = $(this), $thisId, $thisParent;
                    $thisId = $this.attr('id');
                    $thisParent = $this.parent().attr('id');
                    var $thisParent = $this.parents().attr('id');
                    var $substring = $thisId.substring(0, 5);
                    if ($substring == "front") {
                        var $thisNumber = $thisId.substring(5);
                    } else {
                        var $thisNumber = $thisId.substring(4);
                    }
                    var $isColumn = $this.parent();
                    var $isShape = $this.parent().next();
                    var $anchorTag = $isShape.children('a');
                    if ($this.next().attr('id') == "side" + $thisNumber || $this.next().attr('id') == "back" + $thisNumber) {
                        $isShape.css({ display: "none" });
                    } else {
                        $isShape.css({ display: "block" });
                        $anchorTag.css({ backgroundImage: "url(/assets/ocp/content/fitting_room/women/jeans/120806/sprite_models_wos.jpg)" });
                    }

                    var $thisNumber = ($thisId.substring(0, 5) == "front") ? $thisId.substring(5) : $thisId.substring(4);
                    var $active = $("div." + $thisParent + "Wrapper div.carousel li.active");
                    if ($active.length == 0) { $active = $("div." + $thisParent + "Wrapper div.carousel li.back"); }
                    var $next = $active.next().length ? $active.next() : $("div." + $thisParent + "Wrapper div.carousel li.front");
                    var $nav_off = $(".dashboard #button-side" + $thisNumber + ", .dashboard #button-back" + $thisNumber + ", .dashboard #button-front" + $thisNumber);
                    $nav_off.removeClass('nav_on');
                    var $nav_on = $(".dashboard #button-" + $next.attr('id'));
                    $nav_on.addClass('nav_on');

                    if ($nav_on.hasClass('nav_on')) {
                        $active.addClass('last-active');
                        $next.addClass('active');
                        $active.removeAttr('style').removeClass('active last-active');
                        $next.removeAttr('style');
                    } else { return false; }
                });
            }
        };

        jQuery.fn.fitTool = function () {
            var method = arguments[0];

            if (methods[method]) {
                method = methods[method];
                arguments = Array.prototype.slice.call(arguments, 1);
            } else if (typeof (method) == 'object' || !method) {
                method = methods.init;
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.fitTool');
                return this;
            }

            return method.apply(this, arguments);
        }

    })(jQuery);
	
	
	
	
	
	
	
	
	
	// jQuery Plugin Boilerplate
// A boilerplate for kick-starting jQuery plugins development
// version 1.3, May 07th, 2011
// by Stefan Gabos
// with help from Roger Padilla, Shinya, JohannC, Steven Black, Rob Lifford

// remember to change every instance of "pluginName" to the name of your plugin!
(function($) {

    // here it goes!
    $.fn.pluginName = function(method) {

        // public methods
        // to keep the $.fn namespace uncluttered, collect all of the plugin's methods in an object literal and call
        // them by passing the string name of the method to the plugin
        //
        // public methods can be called as
        // element.pluginName('methodName', arg1, arg2, ... argn)
        // where "element" is the element the plugin is attached to, "pluginName" is the name of your plugin and
        // "methodName" is the name of a function available in the "methods" object below; arg1 ... argn are arguments
        // to be passed to the method
        //
        // or, from inside the plugin:
        // methods.methodName(arg1, arg2, ... argn)
        // where "methodName" is the name of a function available in the "methods" object below
        var methods = {

            // this the constructor method that gets called when the object is created
            init : function(options) {

                // the plugin's final properties are the merged default and user-provided properties (if any)
                // this has the advantage of not polluting the defaults, making them re-usable 
                this.pluginName.settings = $.extend({}, this.pluginName.defaults, options);

                // iterate through all the DOM elements we are attaching the plugin to
                return this.each(function() {

                    var $element = $(this), // reference to the jQuery version of the current DOM element
                        element = this;     // reference to the actual DOM element

                    // code goes here

                });

            },

            // a public method. for demonstration purposes only - remove it!
            foo_public_method: function() {

                // code goes here

            }

        }

        // private methods
        // these methods can be called only from inside the plugin
        //
        // private methods can be called as
        // helpers.methodName(arg1, arg2, ... argn)
        // where "methodName" is the name of a function available in the "helpers" object below; arg1 ... argn are
        // arguments to be passed to the method
        var helpers = {

            // a private method. for demonstration purposes only - remove it!
            foo_private_method: function() {

                // code goes here

            }

        }

        // if a method as the given argument exists
        if (methods[method]) {

            // call the respective method
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));

        // if an object is given as method OR nothing is given as argument
        } else if (typeof method === 'object' || !method) {

            // call the initialization method
            return methods.init.apply(this, arguments);

        // otherwise
        } else {

            // trigger an error
            $.error( 'Method "' +  method + '" does not exist in pluginName plugin!');

        }

    }

    // plugin's default options
    $.fn.pluginName.defaults = {

        foo: 'bar'

    }

    // this will hold the merged default and user-provided options
    // you will have access to these options like:
    // this.pluginName.settings.propertyName from inside the plugin or
    // element.pluginName.settings.propertyName from outside the plugin, where "element" is the element the
    // plugin is attached to;
    $.fn.pluginName.settings = {}

})(jQuery);









var methods = {
    defaults: {
        clickCallback: function() {}
    },
    settings: {},

    bindOptions: function(var1, var2, var3) {
        // Stuff to bind elements
        // Hit the click callback
        methods.settings.clickCallback.call(this);
    },

    // Init method
    init: function(options) {
        methods.settings = $.extend({}, methods.defaults, options);

        return this.each(function() {
            if (element.is('select')) {
                $('option', element).each(function() {
                    // Stuff to create list elements
                    // Bind click handler to the new list elements
                    methods.bindOptions(var1, va2, var3);
                });
            }
        });
    },

    // Disable buttons method
    disable: function(options) {
        $(elementID).children('li')
                    .removeClass('disabled')
                    .each(function() {
            methods.bindOptions(var1, var2, var3);
        });
    }
};










(function($){
var methods = {
    init: function(options) {
        var settings = {};

        //this == context element of plugin, already jquery
        return this.each(function() {
            var $this = $(this);
            if( options ) {
                settings = $.extend({}, settings, options);
            }
            var data = $this.data('PluginData');
            if(!data) {
                //set up                    
            }

        });
    },
    some_fn: function() {
        //do some stuff
    },
    another_fn: function() {
        //do other stuff, then somehow call some_fn(), maybe via methods.some_fn() ?    
    }
};

jQuery.fn.SomePlugin = function(method) {
    if(methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call( arguments, 1));
    } else if (typeof(method) == 'object' || !method) {
        return methods.init.apply(this, arguments);
    } else {
        console.log('there was an error');
    }
};
})(jQuery);









(function($) {
	var privateFunction = function() {
		// code here
	}
 
	var methods = {
		init: function(options) {
			return this.each(function() {
				var $this = $(this);
				var settings = $this.data('pluginName');
 
				if(typeof(settings) == 'undefined') {
 
					var defaults = {
						propertyName: 'value',
						onSomeEvent: function() {}
					}
 
					settings = $.extend({}, defaults, options);
 
					$this.data('pluginName', settings);
				} else {
					settings = $.extend({}, settings, options);
				}
 
				// run code here
 
			});
		},
		destroy: function(options) {
			return $(this).each(function() {
				var $this = $(this);
 
				$this.removeData('pluginName');
			});
		},
		val: function(options) {
			var someValue = this.eq(0).html();
 
			return someValue;
		}
	};
 
	$.fn.pluginName = function() {
		var method = arguments[0];
 
		if(methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if( typeof(method) == 'object' || !method ) {
			method = methods.init;
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.pluginName' );
			return this;
		}
 
		return method.apply(this, arguments);
 
	}
 
})(jQuery);


(function($) {
 
	// Add the plugin to the jQuery (protected, "fn") namespace under "pluginName" as the function name.
	$.fn.pluginName = function(options) {
 
		// Return "this" (result of "each" is also "this") to allow for chaining the plugin
		return this.each(function() {
 
			// code here, reference each individual element by "this"
			// e.g. $(this).show();
			var $this = $(this);
 
		});
 
	}
 
})(jQuery);









(function($) {
 
	// Create a private function by creating a public variable within our plugin's container.
	var privateFunction = function() {
		// code here
	}
 
	// Create an object literal for our methods
	var methods = {
		// Define individual methods within the literal
		init: function() {
 
			// Repeat over each element in selector
			// Taken from our main function and moved into each method for flexibility
			return this.each(function() {
				// Create a jQuery object to use with this individual element
				var $this = $(this);
 
				// run code here
				// e.g. privateFunction();
			});
		},
		destroy: function() {
			// Repeat over each element in selector
			return this.each(function() {
				// run code here
			});
		}
	};
 
	$.fn.pluginName = function() {
		// Grab our method, sadly if we used function(method){}, it ruins it all
		var method = arguments[0];
 
		// Check if the passed method exists
		if(methods[method]) {
 
			// If the method exists, store it for use
			// Note: I am only doing this for repetition when using "each()", later.
			method = methods[method];
 
		// If the method is not found, check if the method is an object (JSON Object) or one was not sent.
		} else if( typeof(method) == 'object' || !method ) {
 
			// If we passed parameters as the first object or no arguments, just use the "init" methods
			method = methods.init;
		} else {
 
			// Not a method and not parameters, so return an error.  Something wasn't called correctly.
			$.error( 'Method ' +  method + ' does not exist on jQuery.pluginName' );
			return this;
		}
 
		// Call our selected method
		// Once again, note how we move the "each()" from here to the individual methods
		return method.call(this);
 
	}
 
})(jQuery);





// Shawn Khameneh
// ExtraordinaryThoughts.com
 
(function($) {
	var privateFunction = function() {
		// code here
	}
 
	var methods = {
		init: function(options) {
 
			// Repeat over each element in selector
			return this.each(function() {
				var $this = $(this);
 
				// Attempt to grab saved settings, if they don't exist we'll get "undefined".
				var settings = $this.data('pluginName');
 
				// If we could't grab settings, create them from defaults and passed options
				if(typeof(settings) == 'undefined') {
 
					var defaults = {
						propertyName: 'value',
						onSomeEvent: function() {}
					}
 
					settings = $.extend({}, defaults, options);
 
					// Save our newly created settings
					$this.data('pluginName', settings);
				} else {
					// We got settings, merge our passed options in with them (optional)
					settings = $.extend({}, settings, options);
 
					// If you wish to save options passed each time, add:
					// $this.data('pluginName', settings);
				}
 
				// run code here
 
			});
		},
		destroy: function(options) {
			// Repeat over each element in selector
			return $(this).each(function() {
				var $this = $(this);
 
				// run code here
 
				// Remove settings data when deallocating our plugin
				$this.removeData('pluginName');
			});
		},
		val: function(options) {
			// code here, use .eq(0) to grab first element in selector
			// we'll just grab the HTML of that element for our value
			var someValue = this.eq(0).html();
 
			// return one value
			return someValue;
		}
	};
 
	$.fn.pluginName = function() {
		var method = arguments[0];
 
		if(methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if( typeof(method) == 'object' || !method ) {
			method = methods.init;
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.pluginName' );
			return this;
		}
 
		return method.apply(this, arguments);
 
	}
 
})(jQuery);



/* Please note that these cases match the code posted earlier in this section.
Not all plugin layouts will use the same code structure. */
 
// Call method "init" on each element matching ".className"
$('.className').pluginName();
$('.className').pluginName('init');
$('.className').pluginName('init', {}); // Pass object "{}" to "init" as arguments
$('.className').pluginName({}); // Pass object "{}" to "init" as arguments
 
// Call method "destroy" on each element matching ".className"
$('.className').pluginName('destroy');
$('.className').pluginName('destroy', {}); // Pass object "{}" to "destroy" as arguments
 
// Also works
$('.className').pluginName('init', 'argument1', 'argument2'); // Pass "argument 1" and "argument 2" to "init"
 
// Incorrect
$('.className').pluginName('nonexistantMethod');
$('.className').pluginName('nonexistantMethod', {});
$('.className').pluginName('argument 1'); // Will attempt to call "argument 1" as method
$('.className').pluginName('argument 1', 'argument 2'); // Will attempt to call "argu








(function ($) {
 
    var methods = {
        init: function (options) {
            alert("here");
        },
        func1: function () {
            alert("func1");
        },
        func2: function () {
            alert("func2");
        }
    };
 
    $.fn.myPlugin = function (method) {
        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist');
        }
 
    };
 
})(jQuery);