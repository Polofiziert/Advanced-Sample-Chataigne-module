var assert = require("assert");
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var scriptFiles = [
  "01_lifecycle.js",
  "02_parameters.js",
  "03_values.js",
  "04_osc.js",
  "05_osc_router.js"
];
var messages = [];
var registeredPattern = "";
var registeredCallback = "";
var environmentRefreshCount = 0;
var valuesContainerLookupCount = 0;
var valueLookupCount = 0;

/**
 * Creates a small mock for a Chataigne parameter or value.
 *
 * @param {string} name The mock object's visible name.
 * @param {*} initialValue Its starting value.
 * @param {boolean} isParameter Whether this is a parameter rather than a trigger.
 * @returns {Object} A mock exposing the methods used by the example scripts.
 */
function makeControllable(name, initialValue, isParameter) {
  var currentValue = initialValue;
  var controllable = { name: name };

  /** @returns {boolean} Whether the mock represents a parameter. */
  controllable.isParameter = function isParameterValue() {
    return isParameter;
  };

  /** @returns {*} The mock's current value. */
  controllable.get = function getValue() {
    return currentValue;
  };

  /**
   * Updates the mock value.
   *
   * @param {*} value The value to store.
   */
  controllable.set = function setValue(value) {
    currentValue = value;
  };

  return controllable;
}

var moduleParameters = {
  "Example Enabled": makeControllable("Example Enabled", true, true),
  "Device label": makeControllable("Device label", "Example device", true),
  "Log OSC details": makeControllable("Log OSC details", true, true)
};

/**
 * Creates a replaceable mock Values tree.
 *
 * @returns {Object} A fresh set of mock module values.
 */
function makeModuleValues() {
  return {
    Status: makeControllable("Status", "Ready", true),
    "Last OSC address": makeControllable("Last OSC address", "None", true),
    "Message count": makeControllable("Message count", 0, true)
  };
}

var moduleValues = makeModuleValues();
var heartbeatParameter = makeControllable("Show heartbeat", false, true);
var local = {
  parameters: moduleParameters,
  values: moduleValues,

  /**
   * Returns a fresh wrapper for the current module Values tree.
   *
   * @param {string} name The module child name.
   * @returns {Object} A wrapper whose children are from the current tree.
   */
  getChild: function getChild(name) {
    assert.strictEqual(name, "Values", "example should resolve the Values container");
    valuesContainerLookupCount += 1;
    var currentValues = moduleValues;
    return {
      /**
       * Resolves a direct child in this snapshot of the Values tree.
       *
       * @param {string} childName The module value name.
       * @returns {Object} The value object from this tree snapshot.
       */
      getChild: function getValueChild(childName) {
        valueLookupCount += 1;
        assert(currentValues[childName], "unknown module value: " + childName);
        return currentValues[childName];
      }
    };
  },

  /**
   * Stores an OSC route registration for assertions.
   *
   * @param {string} pattern The registered OSC pattern.
   * @param {string} callbackName The cross-script handler name.
   */
  register: function register(pattern, callbackName) {
    registeredPattern = pattern;
    registeredCallback = callbackName;
  },

  /**
   * Implements the one OSC wildcard pattern used by the example.
   *
   * @param {string} address The received address.
   * @param {string} pattern The address pattern to check.
   * @returns {boolean} Whether the address matches the example pattern.
   */
  match: function match(address, pattern) {
    return pattern === "/example/*" && address.indexOf("/example/") === 0;
  }
};

/**
 * Creates the script host mock for one isolated script engine.
 *
 * @param {string} fileName The script represented by this host.
 * @returns {Object} A mock `script` object.
 */
function makeScriptHost(fileName) {
  return {
    /**
     * Captures a script log message.
     *
     * @param {*} message The message to capture.
     */
    log: function log(message) {
      messages.push(String(message));
    },

    /**
     * Captures a warning-level script message.
     *
     * @param {*} message The warning to capture.
     */
    logWarning: function logWarning(message) {
      messages.push(String(message));
    },

    /**
     * Counts environment refresh requests made before module-tree access.
     */
    refreshEnvironment: function refreshEnvironment() {
      environmentRefreshCount += 1;
    },

    /**
     * Returns the mock script-owned heartbeat switch.
     *
     * @param {string} name The requested parameter name.
     * @param {string} description The parameter description.
     * @param {boolean} defaultValue The parameter's default value.
     * @returns {Object} The heartbeat parameter mock.
     */
    addBoolParameter: function addBoolParameter(name, description, defaultValue) {
      assert.strictEqual(name, "Show heartbeat", fileName + " parameter name");
      assert.strictEqual(defaultValue, false, fileName + " heartbeat default");
      return heartbeatParameter;
    },

    /**
     * Verifies the configured script update rate.
     *
     * @param {number} rate The requested update rate in hertz.
     */
    setUpdateRate: function setUpdateRate(rate) {
      assert.strictEqual(rate, 1, fileName + " update rate");
    }
  };
}

/**
 * Finds the first captured message containing a substring.
 *
 * @param {string} fragment The text to search for.
 * @returns {number} The matching message index, or -1.
 */
function findMessage(fragment) {
  var index;
  for (index = 0; index < messages.length; index += 1) {
    if (messages[index].indexOf(fragment) !== -1) {
      return index;
    }
  }
  return -1;
}

var contexts = {};
var fileIndex;
for (fileIndex = 0; fileIndex < scriptFiles.length; fileIndex += 1) {
  var fileName = scriptFiles[fileIndex];
  var context = {
    local: local,
    script: makeScriptHost(fileName)
  };
  var source = fs.readFileSync(path.join(__dirname, "..", fileName), "utf8");

  vm.runInNewContext(source, context, { filename: fileName });
  contexts[fileName] = context;
  assert(findMessage("[" + fileName + "] File evaluated") !== -1, fileName + " must log evaluation");
}

var initFiles = scriptFiles.slice(0, 4);
for (fileIndex = 0; fileIndex < initFiles.length; fileIndex += 1) {
  var initFile = initFiles[fileIndex];
  assert.strictEqual(typeof contexts[initFile].init, "function", initFile + " must define init()");
  contexts[initFile].init();
}

assert.strictEqual(registeredPattern, "/example/*", "OSC setup must register the example route");
assert.strictEqual(registeredCallback, "handleExampleOsc", "OSC setup must name the router handler");
assert.strictEqual(typeof contexts["05_osc_router.js"].handleExampleOsc, "function", "route handler must exist in its own script");

contexts["02_parameters.js"].moduleParameterChanged(moduleParameters["Device label"]);
assert(findMessage("Module parameter changed: Device label = Example device") !== -1, "module parameters must be observable");

contexts["03_values.js"].moduleValueChanged(moduleValues.Status);
assert(findMessage("Module value changed: Status = Ready") !== -1, "module values must be observable");

contexts["04_osc.js"].oscEvent("/unmatched", [1], "127.0.0.1");
assert(findMessage("Unrouted OSC from 127.0.0.1: /unmatched") !== -1, "unmatched OSC must be logged");

contexts["05_osc_router.js"].handleExampleOsc("/example/ping", [1, "hello"]);
assert.strictEqual(environmentRefreshCount, 1, "router must refresh before resolving module objects");
assert.strictEqual(valuesContainerLookupCount, 3, "router must resolve each value from a fresh Values wrapper");
assert.strictEqual(valueLookupCount, 3, "router must resolve each value by name with getChild()");
assert.strictEqual(moduleValues["Message count"].get(), 1, "routed message count must increment");
assert.strictEqual(moduleValues["Last OSC address"].get(), "/example/ping", "routed address must be published");
assert.strictEqual(
  moduleValues.Status.get(),
  "Received /example/ping for Example device",
  "status must use the module's configured device label"
);

var previousValues = moduleValues;
moduleValues = makeModuleValues();
contexts["05_osc_router.js"].handleExampleOsc("/example/rebuilt", []);
assert.strictEqual(moduleValues["Message count"].get(), 1, "rebuilt tree must receive updates through fresh lookups");
assert.strictEqual(moduleValues["Last OSC address"].get(), "/example/rebuilt", "rebuilt tree must receive the new address");
assert.strictEqual(previousValues["Message count"].get(), 1, "old tree objects must not receive later updates");
assert.strictEqual(environmentRefreshCount, 2, "router must refresh after a tree replacement");

moduleParameters["Example Enabled"].set(false);
contexts["05_osc_router.js"].handleExampleOsc("/example/ping", []);
assert.strictEqual(environmentRefreshCount, 3, "router must refresh on every invocation");
assert.strictEqual(moduleValues["Message count"].get(), 1, "disabled module must not count messages");
assert(findMessage("because the module is disabled") !== -1, "disabled route must emit a warning");

contexts["01_lifecycle.js"].scriptParameterChanged(heartbeatParameter);
heartbeatParameter.set(true);
for (fileIndex = 0; fileIndex < 10; fileIndex += 1) {
  contexts["01_lifecycle.js"].update(1);
}
assert(findMessage("heartbeat after 10 seconds") !== -1, "enabled heartbeat must demonstrate update()");

console.log("Multi-script runtime smoke test passed.");
