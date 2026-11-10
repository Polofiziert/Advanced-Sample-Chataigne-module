# Writing Chataigne Modules

This guide covers custom-module structure and authoring, independent of any particular device or protocol. Consult the [official Chataigne documentation](https://benjamin.kuperberg.fr/chataigne/docs) and the target application for changes to accepted fields.

## Module folder and installation

A custom module is a folder containing a `module.json` definition, one or more JavaScript script files, and optional assets such as a `32 × 32` `icon.png`.

- User modules go under `<Documents>/Chataigne/modules/<module-folder>/`.
- A session-local module can be placed in a `modules` folder beside the session file; it is available when that session is loaded.
- After editing `module.json`, use **File > Reload custom modules**. The source guide notes that an existing module instance may need to be removed and re-created.

## Minimal generic module example

This example shows the main pieces together. `type` must name a base module type available in the target Chataigne installation; `"OSC"` is used here as an example transport. The JSON file and script are placed in the same module directory.

`module.json`:

```json
{
  "name": "Example Device",
  "type": "OSC",
  "path": "Custom",
  "version": "1.0.0",
  "description": "Example custom module",
  "scripts": ["main.js"],
  "parameters": {
    "Enabled": {
      "type": "Boolean",
      "default": true,
      "description": "Enable the example behavior"
    }
  },
  "values": {
    "Status": {
      "type": "String",
      "default": "idle",
      "readOnly": true
    }
  },
  "commands": {
    "Reset": {
      "menu": "General",
      "callback": "resetExample",
      "parameters": {}
    }
  }
}
```

`main.js`:

```js
function init() {
  script.log("Example Device module loaded");
}

function oscEvent(address, args, originIp) {
  script.log("OSC from " + originIp + ": " + address);
}

function resetExample() {
  script.log("Reset command received");
}
```

This is a starter, not a protocol implementation: it logs received OSC events but does not send data or modify the `Status` value. Add behavior for the selected base module and verify the accepted `module.json` fields in your target version.

## `module.json` fields

### Metadata and base-module behavior

| Area | Key | Purpose |
|---|---|---|
| Metadata | `name` | Display name of the custom module. |
| Metadata | `type` | Base module type to extend. |
| Metadata | `path` | Optional submenu path in the module menu. |
| Metadata | `version` | Optional module version string. |
| Metadata | `description` | Optional module description. |
| Metadata | `url` / `downloadURL` | Optional project information and download links. |
| Base module | `hasInput` / `hasOutput` | Optional flags to disable unsupported input/output features. |
| Base module | `defaults` | Optional object containing default values for base-module parameters. |
| Base module | `hideDefaultParameters` | Optional list of base-module parameter addresses to hide. |
| Base module | `hideDefaultCommands` | Optional flag to hide commands inherited from the base module. |
| Base module | `alwaysShowValues` | Optional flag to show the Values panel in cases where it would otherwise be hidden. |
| Module structure | `parameters` / `values` | Define user-editable settings and module state, respectively. |
| Module structure | `commands` | Defines custom commands and their script callbacks. |
| Module structure | `scripts` | Array of script file names attached to the module. |

Hovering base-module controls can reveal their short/control address for use in `defaults` or `hideDefaultParameters`. Exact key behavior is tied to the selected base module.

### Protocol-owned parameters versus custom module parameters

The protocol `type` contributes its own parameters and behavior. These are separate from the custom entries declared under `parameters` in `module.json`. For example, an OSC-derived module can show OSC options even when none of those options is declared in its custom `parameters` object.

### OSC base-module parameter tree

The OSC base module exposes the following controls in the referenced runtime configuration. Exact names, descriptions, and parent containers can vary between Chataigne versions, so treat this as an example rather than a fixed schema.

| Parent | Script identifier | Display name | Type | Description |
|---|---|---|---|---|
| `OSC Input` (`oscInput`) | `enabled` | Enabled | Boolean | Enable or disable this element. Most of the time it will mean stopping the process of what's going on inside it. |
| `OSC Input` (`oscInput`) | `localPort` | Local Port | Integer | Local Port to bind to receive OSC Messages |
| `OSC Outputs` (`oscOutputs`) | `enabled` | Enabled | Boolean | Enable or disable this element. Most of the time it will mean stopping the process of what's going on inside it. |
| Each output (`oscOutput`) | `enabled` | Enabled | Boolean | Enable or disable this element. Most of the time it will mean stopping the process of what's going on inside it. |
| Each output (`oscOutput`) | `miniMode` | MiniMode | Boolean | Set the mini mode |
| Each output (`oscOutput`) | `listSize` | ListSize | Float | Size in list |
| Each output (`oscOutput`) | `viewUIPosition` | ViewUIPosition | Point2D | Position the view |
| Each output (`oscOutput`) | `viewUISize` | ViewUISize | Point2D | Size in the view |
| Each output (`oscOutput`) | `locked` | Locked | Boolean | if checked, item is locked in UI |
| Each output (`oscOutput`) | `local` | Local | Boolean | Send to Local IP (127.0.0.1). Allow to quickly switch between local and remote IP. |
| Each output (`oscOutput`) | `remoteHost` | Remote Host | String | Remote Host to send to. |
| Each output (`oscOutput`) | `remotePort` | Remote port | Integer | Port on which the remote host is listening to |
| Each output (`oscOutput`) | `listenToFeedback` | Listen to Feedback | Boolean | If checked, this will listen to the (randomly set) bound port of this sender. This is useful when some softwares automatically detect incoming host and port to send back messages. |
| Root Parameters | `networkInterface` | Network Interface | Enum | Specify on which interface you want to send or receive stuff. Choose Auto to have automatic detection. |
| Root Parameters | `autoAdd` | Auto Add | Boolean | Add automatically any message that is received and try to create the corresponding value depending on the message content. |
| Root Parameters | `splitArguments` | Split Arguments | Boolean | If checked, a message with multiple arguments will be exploded in multiple values. |
| Root Parameters | `useHierarchy` | Use Hierarchy | Boolean | If checked, incoming messages will be sorted in nested containers instead of 1-level. |
| Root Parameters | `autoFeedback` | Auto Feedback | Boolean | If checked, all changed values will be automatically sent back to the outputs. |
| Root Parameters | `colorSendMode` | Color Send Mode | Enum | The way to send color arguments. Color will send a 'r' argument with the encoded color. RGB Float will send 3 floats and RGBA Float will send 4 floats. |
| Root Parameters | `booleanSendMode` | Boolean Send Mode | Enum | The way to send boolean arguments. Int will send an 'i' argument with the value to 0 or 1. Float will send an 'f' argument with the value to 0.0 or 1.0. T-F will send T or F arguments for True or False. |
| Root Parameters | `clearValues` | Clear Values | Trigger | Clear all values in the module |

The listed tree also includes a `Pass-through` (`pass_through`) container, but no child parameter or description is shown for it. It uses `networkInterface` (singular); it does not show a root parameter named `networkInterfaces` or `deviceName`. Do not use those unverified spellings.

Current parameter values, defaults, and enum option lists are runtime-dependent and are not specified here. In particular, the `Auto` interface description indicates an option, but does not establish that Auto is the default. Inspect the live controls or a parameter JSON snapshot to determine those details.

Use `defaults` to configure the base module's defaults and `hideDefaultParameters` to hide inherited controls from its UI. Hiding a control is not evidence that its built-in behavior was removed. Do not redeclare protocol-owned names in a custom module unless you have checked the target version's behavior. Prefer distinct names (for example, `Example Enabled`) for custom settings so users can distinguish them from host controls.

The `clearValues` behavior is especially important when a module declares persistent values in `module.json`: an OSC base-module clear action may also clear custom values. Do not assume that inherited actions affect only dynamically learned values. Verify the behavior in the target Chataigne build before relying on an override.

### Parameter/value data definitions

These are common module data types:

| Type | Typical purpose |
|---|---|
| `Container` | Groups child parameters or values; may have `collapsed`. |
| `Boolean` | True/false toggle. |
| `Float` | Floating-point value; may use `min`, `max`, and `ui`. |
| `Integer` | Whole-number value; may use `min` and `max`. |
| `Enum` | Selection from an `options` map of display labels to associated values. |
| `String` | Text value. |
| `File` | File or directory selection. |
| `Point2D` / `Point3D` | Two- or three-component value; ranges/defaults may be arrays. |
| `Target` | Reference to another object in the Chataigne hierarchy. |
| `Color` | Color value. |

Common data-definition keys include:

| Key | Meaning |
|---|---|
| `type` | Required data type from the list above. |
| `readOnly` | Optional flag preventing user edits. |
| `shortName` | Optional script-friendly identifier. |
| `description` | Optional tooltip text. |
| `min` / `max` | Optional bounds where supported; Point2D/Point3D may use arrays. |
| `default` | Optional initial/default value; point values may use arrays. |
| `dependency` | Optional conditional UI behavior; not used for a `Container`. |
| `collapsed` | Container-only option to start with its children hidden. |
| `options` | Enum-only map of display labels to associated values. |
| `ui` | Float UI style; documented values include `"stepper"`, `"slider"`, `"label"`, and `"time"`. |

Example Enum definition:

```json
{
  "type": "Enum",
  "options": {
    "Continuous": "continuous",
    "Single": "single"
  },
  "default": "continuous"
}
```

An optional `dependency` contains all four fields below. The checks listed by the source are `equals`, `notEquals`, `lessThan`, and `greaterThan`; actions are `show` and `enable`.

```json
{
  "type": "Float",
  "dependency": {
    "source": "mode",
    "value": "continuous",
    "check": "equals",
    "action": "show"
  }
}
```

## Commands and callbacks

Each custom command has a `callback` naming a function in a module script. Its `parameters` define the command's input controls; the callback receives corresponding values as arguments. Optional `menu` groups the command in the UI. Optional `setupCallback` names a function used when creating the command, for dynamic setup.

```json
{
  "menu": "General",
  "callback": "setLevel",
  "parameters": {
    "Level": {
      "type": "Float",
      "min": 0,
      "max": 1,
      "default": 0.5
    }
  }
}
```

```js
function setLevel(level) {
  script.log("Set level to " + level);
}
```

## Scripts and callbacks

The `scripts` array may list multiple script files. The source confirms this form, but does not establish a reliable load order or ES module import/export support. Do not rely on `import`, `export`, or cross-file initialization ordering without confirming it in the target Chataigne build.

Common lifecycle and module callbacks, and protocol-specific callbacks, are documented in [02_script_api_reference.md](./02_script_api_reference.md). Chataigne's script runtime is a limited JUCE JavaScript interpreter; see [03_javascript_engine_constraints.md](./03_javascript_engine_constraints.md) for the source-verified compatibility notes.

## Practical authoring workflow

1. Choose the closest built-in module `type`; check its base controls and protocol behavior in Chataigne.
2. Create the module folder, `module.json`, and one script file with the smallest needed callback set.
3. Add parameters for configuration, values for observable state, and commands for user-invoked actions.
4. Reload custom modules, remove/re-create the module instance if needed, and test callbacks in Chataigne.
5. Add optional parameters or scripts incrementally, testing after each change.
6. Document version-specific behavior and test with the Chataigne release that users will run.

## Further references

- [Script callbacks and protocol APIs](./02_script_api_reference.md)
- [Chataigne parameter/container API](./05_api_catalog.md)
- [Script host and utility API](./07_script_host_api.md)
- [Official Chataigne documentation](https://benjamin.kuperberg.fr/chataigne/docs)
