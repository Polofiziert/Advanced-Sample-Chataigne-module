# Advanced Example Chataigne Module

A small OSC module illustrating a practical multi-script structure: each file
owns one concern, while module parameters and values provide shared
configuration and state.

## Install and try it

1. Copy this folder into `Documents/Chataigne/modules/`.
2. In Chataigne, select **File > Reload custom modules**, then add **Advanced Example**.
3. Enable the **Log** option on each script to see its evaluation and
   initialization messages. Chataigne gates `script.log()` per script, so
   logging may not be visible until this is enabled.
4. On `01_lifecycle.js`, turn on **Show heartbeat** to see a low-frequency
   `update(deltaTime)` example in the log. It is off by default to avoid noise.
5. To exercise the OSC path, enable the module's OSC input and send an address
   under `/example/`, such as `/example/ping`. The module's **Parameters** and
   **Values** panels show the configuration and state changes.
6. Turn **Example Enabled** off to see the router reject messages; change
   **Device label** or **Log OSC details** to see how configuration influences
   a handler. The distinct name separates this custom setting from options
   supplied by Chataigne's OSC base module.

OSC input is disabled by default so the example does not claim a port or
receive traffic until you choose to enable and configure it.

## Script responsibilities

| File | Responsibility |
| --- | --- |
| `01_lifecycle.js` | File evaluation, `init()`, a script-owned parameter, and a throttled `update()` loop. |
| `02_parameters.js` | Observes module Parameters-panel changes through `moduleParameterChanged()`. |
| `03_values.js` | Observes published module state through `moduleValueChanged()`. |
| `04_osc.js` | Registers the OSC route and handles unmatched protocol events. |
| `05_osc_router.js` | Handles matching OSC messages and updates module state. |

The flow is intentionally small: `04_osc.js` registers
`/example/*` to `handleExampleOsc`; that named handler lives in
`05_osc_router.js`. The handler reads settings from `local.parameters`, writes
state to `local.values`, and does not send anything back. `03_values.js`
observes those writes. This demonstrates cross-script routing without assuming
that JavaScript variables are shared.

Chataigne objects are native-backed wrappers. Do not retain parameter,
container, or value references across operations that can rebuild or clear a
tree. The OSC handler calls `script.refreshEnvironment()` before looking up
module objects on every invocation. For values it uses
`local.getChild("Values").getChild(name)` rather than caching wrappers from
`local.values`. If code changes a tree during one callback, reacquire affected
objects after that change with fresh `getChild()` lookups; do not keep using
the old wrappers. A refresh re-registers the script environment, while
`getChild()` performs the fresh tree lookup. The smoke test replaces its mock
Values tree between events to verify that the router updates the new objects.

## Multi-script rules and patterns

Chataigne evaluates each listed script in its own JavaScript engine. Each file
has its own globals and `init()`; duplicate callback names are intentional
because they belong to separate script engines. Do not rely on globals,
`import`, `export`, or `require` to share state. Prefer:

- **Module parameters** (`local.parameters`) for user-editable settings shared
  by module scripts.
- **Module values** (`local.values`) for state that scripts publish to the UI
  or other Chataigne features.
- **Documented callbacks and registration**, such as `local.register()`, for
  protocol dispatch between concerns.
- **Small, focused scripts** with clear ownership of lifecycle, configuration,
  state observation, transport, or message handling.

`moduleValueChanged()` may run after a script calls `value.set()`. Keep an
observer read-only unless you deliberately manage update origins; otherwise a
send/set feedback loop is easy to create. The example's observer only logs.

The API and callback names can vary by Chataigne version. Check the script
editor's generated template and test in the target application. See the
[script API reference](./docs/02_script_api_reference.md),
[OSC routing guide](./docs/04_osc_routing.md), and
[runtime notes](./docs/06_runtime_compatibility.md).

## Inspiration and development setup

The module boundaries are also inspired by other integration systems such as
[Bitfocus Companion's module API](https://github.com/bitfocus/companion-module-base),
which separates the plugin API from host lifecycle and dispatch. Chataigne has
its own scripting model, so this example uses Chataigne's script engines and
host APIs rather than copying Companion's implementation.

Runtime scripts are listed in `module.json`. `types/` and the lint/editor files
are development aids and are not loaded by Chataigne.

- `npm install` installs the development dependencies.
- `npm run lint` checks the ES5 runtime scripts.
- `npm run typecheck` checks the scripts against the local host declarations.
- `npm test` runs a Node smoke test with isolated script contexts and a shared
  mock module host. It is not a substitute for testing in Chataigne.
