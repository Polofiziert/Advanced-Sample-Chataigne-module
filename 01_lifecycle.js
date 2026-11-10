/**
 * @fileoverview Shows script evaluation, initialization, a script-owned
 * parameter, and a low-noise update loop.
 */
script.log("[01_lifecycle.js] File evaluated; this script has its own engine.");

/** @type {number} Seconds accumulated while the optional heartbeat is enabled. */
var heartbeatSeconds = 0;

/** @type {ChataigneParameter | null} The script-owned heartbeat switch. */
var heartbeatParameter = null;

/**
 * Initializes this script and demonstrates the script host API.
 *
 * Chataigne calls init() once for this script. The parameter belongs to this
 * script, not to the module's shared Parameters panel.
 */
function init() {
  script.log("[01_lifecycle.js] init(): adding a script-owned heartbeat switch.");
  heartbeatParameter = script.addBoolParameter(
    "Show heartbeat",
    "Log a heartbeat every 10 seconds to demonstrate update().",
    false
  );

  script.getParent().getParent().parameters.addTrigger("Module Parameter from getChild()", "Shows in the top of the Module with Parameters from module.json");
  root.modules.advancedExample.parameters.addTrigger("Module Parameter from root", "Shows in the bottom of the Module, in the Container of each Script. You can get this path from an right-click at any parameter or value in the Chataigne UI");
  local.parameters.addTrigger("Module Parameter from local", "Shows in the bottom of the Module, in the Container of each Script.");
  
  script.addTrigger("Script Parameter", "Shows in the bottom of the Module, in the Container of each Script.");
  
  script.setUpdateRate(1);
  script.log("[01_lifecycle.js] update() is scheduled at 1 Hz; heartbeat is off by default.");
}

/**
 * Runs at the update rate configured in init().
 *
 * @param {number} deltaTime Elapsed time since the previous update, in seconds.
 */
function update(deltaTime) {
  if (heartbeatParameter === null || !heartbeatParameter.get()) {
    heartbeatSeconds = 0;
    return;
  }

  heartbeatSeconds += deltaTime;
  if (heartbeatSeconds >= 10) {
    script.log("[01_lifecycle.js] update(): heartbeat after 10 seconds.");
    heartbeatSeconds = 0;
  }
}

/**
 * Reports edits to parameters owned by this script.
 *
 * @param {ChataigneParameter} param The changed script-owned parameter.
 */
function scriptParameterChanged(param) {
  script.log("[01_lifecycle.js] Script parameter changed: " + param.name);
}
