MMM-Nyan-Cat
===================
This a module for the [MagicMirror](https://github.com/MichMich/MagicMirror). It can display GIF´s on your Mirror, for example Nyan Cat. 

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/heyheyhexi/MMM-Nyan-Cat.git`. 
2. Configure youre `config.js`.



## Config
The entry in `config.js` can include the following options:

|Option|Description|
|---|---|
|`gif`|Here you can insert your GIF-URL.<br><br>**Default** `Nyan Cat` (https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif)<br>This value is **REQUIRED**|
|`imageSize`|Defines the size of the displayed image in pixels. <br><br>**Default value:** `400`|

Here is an example of an entry in `config.js`
```
{
			module: 'MMM-Nyan-Cat', 
			position: 'top_center', 
			config: {
				gif: 'https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif',
				imageSize: 400, 		
		}
		},
```

## Important Notes
- This is my first project. 

## Special Thanks
- [Michael Teeuw](https://github.com/MichMich) for creating the awesome [MagicMirror2](https://github.com/MichMich/MagicMirror/tree/develop) project that made this module possible.
- [LukeSkywalker92](https://github.com/LukeSkywalker92) to inspire me with his [MMM-Globe](https://github.com/LukeSkywalker92/MMM-Globe) module.

