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
    this.registerCapability('dim', 'genLevelCtrl', {
      endpoint: 0
    });
  }
}
module.exports = GledoptoRGB;



//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ------------------------------------------
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] Node: ee831f26-c67b-48c7-95b0-b92cf664d434
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] - Battery: false
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] - Endpoints: 0
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] -- Clusters:
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] --- zapp
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] --- genBasic
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- cid : genBasic
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- sid : attrs
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] --- genIdentify
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- cid : genIdentify
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- sid : attrs
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] --- genGroups
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- cid : genGroups
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- sid : attrs
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] --- genScenes
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- cid : genScenes
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- sid : attrs
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] --- genOnOff
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- cid : genOnOff
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- sid : attrs
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- onOff : 1
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] --- genLevelCtrl
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- cid : genLevelCtrl
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- sid : attrs
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- currentLevel : 76
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] - Endpoints: 1
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] -- Clusters:
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] --- zapp
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] --- lightLink
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- cid : lightLink
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ---- sid : attrs
//2018-10-15 20:48:36 [log] [ManagerDrivers] [gledopto_ww] [0] ------------------------------------------
