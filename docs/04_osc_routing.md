# OSC Routing in the Advanced Example

The Advanced Example module uses an OSC route to separate protocol setup from
message handling. [04_osc.js](../04_osc.js) registers the route, while
[05_osc_router.js](../05_osc_router.js) handles matching messages and updates
module values.

## Register a route

Register a named handler from a module script's `init()` callback:

```js
function init() {
  local.register("/example/*", "handleExampleOsc");
}
```

The registered function can live in another script listed in `module.json`.
Each script runs in its own JavaScript engine, so use Chataigne's documented
registration and module objects to communicate rather than relying on shared
JavaScript globals.

## Handle matching messages

An OSC handler receives the matching address and its arguments. Read shared
configuration from module parameters and publish state through module values:

```js
function handleExampleOsc(address, args) {
  script.refreshEnvironment();

  if (!local.parameters["Example Enabled"].get()) {
    return;
  }

  var count = local.getChild("Values").getChild("Message count");
  count.set(count.get() + 1);
  local.getChild("Values").getChild("Last OSC address").set(address);
}
```

The example's complete handler also updates a status value and optionally logs
message details. It does not send a reply, which avoids creating an
input/output feedback loop.

## Handle unmatched messages

The protocol callback can handle messages that do not match a registered
route. The example uses `local.match()` to distinguish its routed addresses:

```js
function oscEvent(address, args, originIp) {
  if (local.match(address, "/example/*")) {
    return;
  }

  script.log("Unrouted OSC from " + originIp + ": " + address);
}
```

OSC input is disabled by default in this module. Enable and configure it in
Chataigne before sending test messages. Use the module's `/example/` address
space to exercise the handler.

## Runtime considerations

- Confirm the module's OSC input is enabled and its port is available.
- Keep OSC base-module settings separate from custom module parameters; use
  distinct names such as `Example Enabled`.
- Module values can invoke `moduleValueChanged()` when set by script. Keep
  observers read-only unless update origins are deliberately managed.
- Chataigne objects are native-backed wrappers. After rebuilding or clearing a
  tree, refresh the script environment and look up current objects again.
- Verify route behavior and callback signatures in the target Chataigne
  version. See [02_script_api_reference.md](./02_script_api_reference.md) and
  [06_runtime_compatibility.md](./06_runtime_compatibility.md).
