'use strict';

const Homey = require('homey');
const ZigBeeXYLightDevice = require('homey-meshdriver').ZigBeeXYLightDevice;
const maxBrightness = 10;

class GledoptoRGB extends ZigBeeXYLightDevice {
	onMeshInit() {

	this.printNode();
	this.enableDebug();

                // Register onoff capability
                this.registerCapability('onoff', 'genOnOff', {
                        set: value => value ? 'on' : 'off',
                        setParser: () => ({}),
                        get: 'onOff',
                        reportParser: value => value === 1,
                });

                // Register dim capability
                this.registerCapability('dim', 'genLevelCtrl', {
                        set: 'moveToLevel',
                        setParser: value => ({
                                level: value * maxBrightness,
                                transtime: this.getSetting('transtime'),
                        }),
                        get: 'currentLevel',
                        reportParser: value => value / maxBrightness,
                });

                // Register light color capability
                //this.registerCapability('light_saturation', 'lightingColorCtrl', {
                       //set: 'moveToSaturation',
                        //setParser: value => ({
                                //saturation: value * maxBrightness,
                                //transtime: this.getSetting('transtime'),
                        //}),
                        //get: 'currentSaturation',
                        //reportParser: value => value / maxBrightness,
                //});

                // Register light color capability
                //this.registerCapability('light_temperature', 'lightingColorCtrl', {
                        //set: 'moveToColor',
                        //setParser: value => ({
                                //colorx: x * value * maxBrightness,
                                //colory: y * value * maxBrightness,
                                //transtime: this.getSetting('transtime'),
                        //}),
                        //get: 'colorTemperature',
                        //reportParser: value => value / maxBrightness,
                //});

                // Register light color capability
		if (this.hasCapability('light_temperature')){
                	this.registerCapability('light_temperature', 'lightingColorCtrl', {
                       	set: 'moveToColorTemp',
                       	setParser: value => ({
                               colortemp: value * 1000,
                               transtime: this.getSetting('transtime'),
                       	}),
                        get: 'colorTemperature',
                       	reportParser: value => value ,
                });
		}

                // Not useful in this case, but using registerReportListener you can subscribe to incoming reports
                this.registerReportListener('genLevelCtrl', 'move', report => {
                        console.log(report);
                });

	//this.registerCapability('onoff', 'genOnOff', { endpoint: 0 });
	//this.registerCapability('onoff.1', 'genOnOff', { endpoint: 1 });
	//this.registerCapability('dim', 'genLevelCtrl', { endpoint: 0 });
	//this.registerCapability('dim.1', 'genLevelCtrl', { endpoint: 1 });
	//this.registerCapability('cwww', 'lightingColorCtrl', { endpoint: 0 });
	//this.registerCapability('cwww.1', 'lightingColorCtrl', { endpoint: 1 });
	}
}
module.exports = GledoptoRGB;
