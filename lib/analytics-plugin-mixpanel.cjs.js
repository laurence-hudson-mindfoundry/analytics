'use strict';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var config = {};
var name = 'mixpanel';

var logMessage = function logMessage() {
  console.log("".concat(name, " not available in node.js yet. Todo implement https://github.com/mixpanel/mixpanel-node"));
};
/* Export the integration */


function mixpanelPlugin() {
  var userConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Allow for userland overides of base methods
  return {
    name: name,
    config: _objectSpread2(_objectSpread2({}, config), userConfig),
    initialize: function initialize(_ref) {
      var config = _ref.config;
      logMessage();
    },
    // page view
    page: function page(_ref2) {
      var payload = _ref2.payload,
          config = _ref2.config;
      logMessage();
    },
    // track event
    track: function track(_ref3) {
      var payload = _ref3.payload,
          config = _ref3.config;
      logMessage();
    },
    // identify user
    identify: function identify(_ref4) {
      var payload = _ref4.payload;
      logMessage();
    }
  };
}

/* This module will shake out unused code and work in browser and node 🎉 */

var index =  mixpanelPlugin;

module.exports = index;
