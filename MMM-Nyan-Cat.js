/* global Module */

/* Magic Mirror
 * Module: Nyan_Cat
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("MMM-Nyan-Cat",{

	// Default module config.
	defaults: {
     	
		gif: 'http://forum.videogameszone.de/attachments/4200d1421366280-machs-gut-gameone-willkommen-rocketbeans-tv-photo.jpg',
	//	gif: 'https://img.clipartfest.com/9ee297869fc328d119a428b213ce95ef_data-visualization-virtual-clipart-gif-nyan-cat_1750-800.gif',
		imageSize: 600,
	},
	
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		var image = document.createElement("img");
		image.src = this.config.gif;
		
		
		image.width = this.config.imageSize.toString();
		image.height = this.config.imageSize.toString();

		wrapper.appendChild(image);
		return wrapper;
	};
});
