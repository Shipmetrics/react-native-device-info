/**
 * @providesModule react-native-device-info
 */

var RNDeviceInfo = require('react-native').NativeModules.RNDeviceInfo;

module.exports = {
  getUniqueID: function () {
    return RNDeviceInfo.uniqueId;
  },
  getInstanceID: function() {
    return RNDeviceInfo.instanceId;
  },
  getDeviceId: function () {
    return RNDeviceInfo.deviceId;
  },
  getManufacturer: function () {
    return RNDeviceInfo.systemManufacturer;
  },
  getModel: function () {
    return RNDeviceInfo.model;
  },
  getBrand: function () {
    return RNDeviceInfo.brand;
  },
  getSystemName: function () {
    return RNDeviceInfo.systemName;
  },
  getSystemVersion: function () {
    return RNDeviceInfo.systemVersion;
  },
  getBundleId: function() {
    return RNDeviceInfo.bundleId;
  },
  getBuildNumber: function() {
    return RNDeviceInfo.buildNumber;
  },
  getVersion: function() {
    return RNDeviceInfo.appVersion;
  },
  getReadableVersion: function() {
    return RNDeviceInfo.appVersion + "." + RNDeviceInfo.buildNumber;
  },
  getDeviceName: function() {
    return RNDeviceInfo.deviceName;
  },
  getUserAgent: function() {
    return RNDeviceInfo.userAgent;
  },
  getDeviceLocale: function() {
    return RNDeviceInfo.deviceLocale;
  },
  getDeviceCountry: function() {
    return RNDeviceInfo.deviceCountry;
  },
  getTimezone: function() {
    return RNDeviceInfo.timezone;
  },
  isEmulator: function() {
    return RNDeviceInfo.isEmulator;
  },
  isTablet: function() {
    return RNDeviceInfo.isTablet;
  },
  getSerial: function () {
    return RNDeviceInfo.deviceSerial
  },
  getDeviceBuildDisplay: function() {
    return RNDeviceInfo.deviceBuildDisplay;
  },
  getDeviceBuildFingerprint: function() {
    return RNDeviceInfo.deviceBuildFingerprint;
  },
  getDeviceBuildID: function () {
    return RNDeviceInfo.deviceBuildID
  },
  getUptime: async function () {
    let uptime = await RNDeviceInfo.getUptime()
    return uptime.uptime
  },
  getSimDetails: function () {
    let ret = {
      hasSimDetails: RNDeviceInfo.hasSimDetails,
      phoneNumber: RNDeviceInfo.phoneNumber,
      dualSim: RNDeviceInfo.dualSim
    }
    ret.subscriptionList = []
    if (RNDeviceInfo.simCountryIso0) {
      ret.subscriptionList.push({
        simNumber: RNDeviceInfo.simNumber0,
        simNetwork: RNDeviceInfo.simNetwork0,
        simCountryIso: RNDeviceInfo.simCountryIso0,
        simSlotIndex: RNDeviceInfo.simSlotIndex0,
        simSlotMcc: RNDeviceInfo.simSlotMcc0,
        simSlotMnc: RNDeviceInfo.simSlotMnc0
      })
    }

    ret.slotList = []
    ret.slotList.push({
      slotImei: RNDeviceInfo.slotImei0
    })
    if (RNDeviceInfo.dualSim) {
      if (RNDeviceInfo.simCountryIso1) {
        ret.subscriptionList.push({
          simNumber: RNDeviceInfo.simNumber1,
          simNetwork: RNDeviceInfo.simNetwork1,
          simCountryIso: RNDeviceInfo.simCountryIso1,
          simSlotIndex: RNDeviceInfo.simSlotIndex1,
          simSlotMcc: RNDeviceInfo.simSlotMcc1,
          simSlotMnc: RNDeviceInfo.simSlotMnc1
        })
      }
      ret.slotList.push({
        slotImei: RNDeviceInfo.slotImei1
      })
    }
    return ret
  }
};
