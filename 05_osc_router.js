/**
 * @fileoverview Owns the example OSC message behavior, separate from protocol
 * setup and module state observation.
 */
script.log("[05_osc_router.js] File evaluated; this script owns the example OSC handler.");

/**
 * Handles OSC messages registered by 04_osc.js.
 *
 * Refreshing the script environment before resolving module parameters/values
 * helps avoid stale native-backed object references after another script or
 * the user rebuilds a module tree.
 *
 * The handler reads module configuration, updates published module values,
 * and does not send anything back. This keeps input, configuration, and state
 * responsibilities distinct.
 *
 * @param {string} address The matching OSC address.
 * @param {Array.<*>} args The OSC arguments.
 */
function handleExampleOsc(address, args) {
  script.refreshEnvironment();

  var enabled = local.parameters["Example Enabled"];
  if (!enabled.get()) {
    script.logWarning("[05_osc_router.js] Ignoring " + address + " because the module is disabled.");
    return;
  }

  var messageCount = getModuleValue("Message count");
  messageCount.set(messageCount.get() + 1);
  getModuleValue("Last OSC address").set(address);
  getModuleValue("Status").set(
    "Received " + address + " for " + local.parameters["Device label"].get()
  );

  if (local.parameters["Log OSC details"].get()) {
    script.log("[05_osc_router.js] Routed " + address + " with " + args.length + " argument(s).");
  }
}

/**
 * Resolves a module value from the current Values tree.
 *
 * A fresh lookup is important after the tree has been cleared or rebuilt:
 * Chataigne objects are native-backed wrappers and an earlier wrapper may no
 * longer refer to the current tree.
 *
 * @param {string} name The script name of the module value.
 * @returns {ChataigneParameter} The current value object.
 */
function getModuleValue(name) {
  return local.getChild("Values").getChild(name);
}
