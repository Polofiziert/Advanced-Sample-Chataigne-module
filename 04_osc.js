/**
 * @fileoverview Shows protocol callbacks and registration of a route handled
 * by another script in this module.
 */
script.log("[04_osc.js] File evaluated.");

/**
 * Registers the example OSC route.
 *
 * local.register() is Chataigne's documented way to direct matching OSC
 * messages to a named function, including a handler in another module script.
 */
function init() {
  local.register("/example/*", "handleExampleOsc");
  script.log("[04_osc.js] init(): registered /example/* -> handleExampleOsc in 05_osc_router.js.");
}

/**
 * Receives OSC messages through the module's protocol callback.
 *
 * Registered routes are handled in 05_osc_router.js. This callback logs
 * messages that do not match the example route.
 *
 * @param {string} address The OSC address pattern received.
 * @param {Array.<*>} args The OSC arguments.
 * @param {string} originIp The sender's IP address.
 */
function oscEvent(address, args, originIp) {
  if (local.match(address, "/example/*")) {
    return;
  }

  script.log("[04_osc.js] Unrouted OSC from " + originIp + ": " + address + " (" + args.length + " arguments).");
}
