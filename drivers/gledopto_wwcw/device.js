'use strict';

const Homey = require('homey');
const ZigBeeXYLightDevice = require('homey-meshdriver').ZigBeeXYLightDevice;
const maxBrightness = 10;

class GledoptoRGB extends ZigBeeXYLightDevice {
	onMeshInit() {

	this.printNode();
	this.enableDebug();

	this.registerCapability('onoff', 'genOnOff', { endpoint: 0 });
	//this.registerCapability('onoff.1', 'genOnOff', { endpoint: 1 });
	this.registerCapability('dim', 'genLevelCtrl', { endpoint: 0 });
	//this.registerCapability('dim.1', 'genLevelCtrl', { endpoint: 1 });
	//this.registerCapability('light_hue', 'lightingColorCtrl', { endpoint: 1 });
	//this.registerCapability('light_saturation', 'lightingColorCtrl', { endpoint: 1 });
	//this.registerCapability('light_temperature', 'lightingColorCtrl', { endpoint: 1 });
	//this.registerCapability('light_mode', 'lightingColorCtrl', { endpoint: 1 });
//	if (this.hasCapability('light_temperature')){
							this.registerCapability('light_temperature', 'lightingColorCtrl', {
											set: 'moveToColorTemp',
											setParser: value => ({
														 colortemp: value * 1000,
														 transtime: this.getSetting('transtime'),
											}),
											get: 'colorTemperature',
											reportParser: value => value ,
							});
	//					}
    	}
}
module.exports = GledoptoRGB;
