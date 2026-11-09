/**
 * @fileoverview Shows how module values can publish state to Chataigne.
 */
script.log("[03_values.js] File evaluated.");

/**
 * Announces that this script is ready to observe module value changes.
 */
function init() {
  script.log("[03_values.js] init(): ready to observe module values.");
}

/**
 * Observes module value changes without sending them back to the device.
 *
 * A value.set() performed by another script can invoke this callback too.
 * Keeping this callback read-only avoids accidental send/set feedback loops.
 *
 * @param {ChataigneParameter} value The changed module value or trigger.
 */
function moduleValueChanged(value) {
  if (!value.isParameter()) {
    script.log("[03_values.js] Module value trigger changed: " + value.name);
    return;
  }

  script.log("[03_values.js] Module value changed: " + value.name + " = " + value.get());
}
