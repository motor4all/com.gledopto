'use strict';

const Homey = require('homey');
const ZigBeeXYLightDevice = require('homey-meshdriver').ZigBeeXYLightDevice;

class GledoptoRGB extends ZigBeeXYLightDevice {
  onMeshInit() {

    this.printNode();
    //this.enableDebug();

    this.registerCapability('onoff', 'genOnOff', {
      endpoint: 0
    });
    this.registerCapability('dim', 'genLevelCtrl', {
      endpoint: 0
    });
    if (this.hasCapability('light_temperature')) {
      this.registerCapability('light_temperature', 'lightingColorCtrl', {
        set: 'moveToColorTemp',
        setParser: value => ({
          colortemp: value * 1000,
          transtime: this.getSetting('transtime'),
        }),
        get: 'colorTemperature',
        reportParser: value => value,
      });
    }
  }
}
module.exports = GledoptoRGB;
