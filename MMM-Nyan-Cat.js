/* global Module */

/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("Nyan_Cat",{

	// Default module config.
	defaults: {
		"Header": "Nyan Cat",
     		"gif": "https://img.clipartfest.com/9ee297869fc328d119a428b213ce95ef_data-visualization-virtual-clipart-gif-nyan-cat_1750-800.gif" ,
	},
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.gif;
		return wrapper;
	}
);
