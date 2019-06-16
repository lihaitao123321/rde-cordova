cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "jpush-phonegap-plugin.JPushPlugin",
      "file": "plugins/jpush-phonegap-plugin/www/JPushPlugin.js",
      "pluginId": "jpush-phonegap-plugin",
      "clobbers": [
        "JPush"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "1.1.7",
    "cordova-plugin-jcore": "1.2.8",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "jpush-phonegap-plugin": "3.3.3"
  };
});