'use strict';

const Homey = require('homey');
const ZigBeeXYLightDevice = require('homey-meshdriver').ZigBeeXYLightDevice;

class GledoptoRGB extends ZigBeeXYLightDevice {
  onMeshInit() {
    this.printNode();
    this.enableDebug();
    this.registerCapability('onoff', 'genOnOff', {
      endpoint: 0
    });
    this.registerCapability('onoff.1', 'genOnOff', {
      endpoint: 1
    });
    this.registerCapability('dim', 'genLevelCtrl', {
      endpoint: 0
    });
    this.registerCapability('dim.1', 'genLevelCtrl', {
      endpoint: 1
    });
    this.registerCapability('light_hue', 'lightingColorCtrl', {
      endpoint: 1
    });
    this.registerCapability('light_saturation', 'lightingColorCtrl', {
      endpoint: 1
    });
    this.registerCapability('light_temperature', 'lightingColorCtrl', {
      endpoint: 1
    });
    this.registerCapability('light_mode', 'lightingColorCtrl', {
      endpoint: 1
    });
  }
}
module.exports = GledoptoRGB;



// ─────────────── Logging stdout & stderr ───────────────
// 2018-08-23 21:58:59 [log] [GledoptoZigBeeApp] init GledoptoZigBeeApp
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ZigBeeDevice has been inited
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ------------------------------------------
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] Node: 8a4e601c-a11c-4ebc-8ff1-60addfff7e72
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] - Battery: false
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] - Endpoints: 0
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] -- Clusters:
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- zapp
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genBasic
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genBasic
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genIdentify
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genIdentify
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genGroups
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genGroups
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genScenes
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genScenes
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genOnOff
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genOnOff
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- onOff : 1
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genLevelCtrl
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genLevelCtrl
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- currentLevel : 76
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] - Endpoints: 1
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] -- Clusters:
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- zapp
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genBasic
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genBasic
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genIdentify
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genIdentify
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genGroups
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genGroups
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genScenes
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genScenes
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genOnOff
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genOnOff
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- genLevelCtrl
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : genLevelCtrl
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- lightingColorCtrl
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : lightingColorCtrl
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- colorTempPhysicalMin : null
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- colorTempPhysicalMax : null
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- currentHue : 136
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- currentSaturation : 0
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- colorTemperature : 293
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- colorMode : 1
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] - Endpoints: 2
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] -- Clusters:
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- zapp
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] --- lightLink
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- cid : lightLink
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ---- sid : attrs
// 2018-08-23 21:59:00 [log] [ManagerDrivers] [gledopto_rgb] [0] ------------------------------------------
