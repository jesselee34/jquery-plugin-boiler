/*
	* Project: Jquery Plugin Boiler
	* Description: Discription Here
	* Author: Jesse Lee Schmucker
	* Version: 1.0
	* License: GPL3.0
	
	* Based on Essential jQuery Plugin Patterns by Addy Osamani http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/
 */

/* Notes:

	To use: 
	$('#yourElement').PluginName();
	
	To pass in some options:
	$('#yourElement').PluginName({
		option: value,
		option2: value
	});

	To call a method:
	$('#yourElement').data('PluginName').methodName( options );

*/

;(function($) {
	
	$.PluginName = function( el, options ) {
		
		//Private Vars Here
		var privateVar1;
		var privateVar2;
		
		//Public Vars in here
		var defaults = {
			startFrame: '00',
			totalFrames: 0,
			path: 'images/'
		};
		
		this.settings = {};
		
		var $el = $(el);
		
		this.init = function() {
			self.settings = $.extend({}, defaults, options);
			// Code here.
		};
		
		this.update = function( newFrame ) {
			
		};
		
		this.anotherPublicMethod = function(  ){
			//Code here
		};
				
		// Private methods here.
		var _privateMethodOne = function(  ){
			//Code here
		};
		
		var _privateMethodTwo = function(  ){
			//Codes here
		};
		
		this.init();
		
	};
	
	$.fn.PluginName = function( options ) {
		
		return this.each(function() {
			if (undefined === $(this).data('PluginName')) {
				var plugin = new $.PluginName(this, options);
				$(this).data('PluginName', plugin);
			}
		});
		
	};

})(jQuery);
