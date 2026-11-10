# Runtime Behavior and Compatibility

Chataigne exposes native-backed objects and callbacks to scripts. The details
can depend on the protocol and application version; verify important behavior
in the target Chataigne build.

## Value change notifications

Setting a module value from script can invoke `moduleValueChanged(value)`
after the value changes. An observer that sends every changed value back to
the source can create a feedback loop.

```js
function moduleValueChanged(value) {
  if (!value.isParameter()) {
    return;
  }

  script.log(value.name + " = " + value.get());
}
```

Keep value observers read-only unless the script explicitly tracks update
origins or suppresses duplicate updates.

## Native-backed object references

Chataigne exposes parameters, containers, and values through host objects.
After a tree is cleared or rebuilt, an earlier object reference may no longer
refer to the current object. Refresh the script environment and perform fresh
lookups after tree changes:

```js
script.refreshEnvironment();
var status = local.getChild("Values").getChild("Status");
status.set("Ready");
```

The Advanced Example's OSC handler follows this pattern when it resolves
module values. Do not retain parameter, container, or value references across
operations that can rebuild their tree.

Object dumps can expose implementation metadata such as `_ptr`. Such
process-specific values are not stable identifiers and should not be stored
or used to find objects.

## Protocol-provided controls

An OSC module can provide protocol-owned controls in addition to the custom
parameters declared by a module. Common controls include input/output
configuration and options for handling incoming messages. Their exact names,
defaults, and behavior can vary by Chataigne version; inspect the controls in
the target application rather than assuming a fixed schema.

Actions such as clearing values may also affect values declared by a custom
module. Test inherited actions before relying on them to preserve module
state, and avoid replacing protocol-provided controls without verifying the
result in the target version.

## JavaScript compatibility

The Chataigne scripting engine is not a browser or Node.js runtime. Use the
compatibility notes in
[03_javascript_engine_constraints.md](./03_javascript_engine_constraints.md)
and test language features and built-ins in the target application.
