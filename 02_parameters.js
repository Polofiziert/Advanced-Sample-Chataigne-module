/**
 * @fileoverview Shows the callback for module-owned parameters.
 */
script.log("[02_parameters.js] File evaluated.");

/**
 * Announces that this script is ready to observe module parameter changes.
 */
function init() {
  script.log("[02_parameters.js] init(): ready to observe module parameters.");
}

/**
 * Called when a parameter or trigger in the module's Parameters panel changes.
 *
 * @param {ChataigneParameter} param The changed module parameter or trigger.
 */
function moduleParameterChanged(param) {
  if (param.isParameter()) {
    script.log("[02_parameters.js] Module parameter changed: " + param.name + " = " + param.get());
    return;
  }

  script.log("[02_parameters.js] Module trigger changed: " + param.name);
}
