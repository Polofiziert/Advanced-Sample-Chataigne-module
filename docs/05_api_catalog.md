# Chataigne Object API Reference

This reference covers the Chataigne object-model APIs used by module scripts. Host-provided `script` and `util` APIs are cataloged separately in [07_script_host_api.md](./07_script_host_api.md); protocol-specific `local` APIs and callbacks are in [02_script_api_reference.md](./02_script_api_reference.md).

## Reading signatures and examples

Every reference table uses the same fields:

- **Method** — callable method or property name and signature.
- **Arguments and types** — argument names and documented or source-established types.
- **Returns** — documented return type/value, or `Not specified` if the reference does not say.
- **Description** — behavior and any known caveat.
- **Example** — short JavaScript in the Chataigne interpreter's supported style.

Types such as `Parameter`, `Container`, and `TargetObject` mean Chataigne host objects, not JavaScript classes that can be constructed with `new`. `JSON` means a JSON-compatible value; `number[]` is an array of numbers. A `?` marks an optional argument. When an exact host return type is not documented, this reference says so rather than guessing. Examples with a named object assume that variable already refers to the appropriate Chataigne object; use **Copy Script Control Address** or look it up from `local`/`root` first. The examples use ES5-compatible syntax.

## Controllables: parameters and triggers

Parameters store values; triggers are actions and do not have a typed value. Some methods apply to both kinds of controllable.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `getParent()` | none | `Container` | Returns the containing object. | `var parent = myParam.getParent();` |
| `setName(name)` | `name: string` | Not specified | Changes the object's name. | `myParam.setName("level");` |
| `setAttribute(attribute, value)` | `attribute: string`, `value: any` | Not specified | Sets a common or type-specific attribute. Common names include `"readonly"`, `"description"`, `"enabled"`, and `"alwaysNotify"`. | `myParam.setAttribute("enabled", false);` |
| `isParameter()` | none | `boolean` | Returns `true` for a parameter and `false` for a trigger. | `if (myControl.isParameter()) { script.log(myControl.name); }` |
| `name` | none (property) | `string` | Script identifier for the object. | `script.log(myParam.name);` |
| `niceName` | none (property) | `string` | User-facing Inspector name. | `script.log(myParam.niceName);` |
| `getControlAddress(reference?)` | `reference?: Container` | `string` | Returns the OSC-style control address; an optional container makes the address relative to it. | `var address = myParam.getControlAddress();` |
| `getScriptControlAddress()` | none | `string` | Returns the address used to target the object from a script. | `var address = myParam.getScriptControlAddress();` |
| `resetValue()` | none | Not specified | Restores a parameter's default value. | `myParam.resetValue();` |
| `getJSONData()` | none | `JSON` | Returns serialized object data. | `var saved = myParam.getJSONData();` |
| `loadJSONData(data)` | `data: JSON` | Not specified | Applies serialized object data, for example data returned by `getJSONData()`. | `targetParam.loadJSONData(sourceParam.getJSONData());` |
| `get()` | none | Type-specific value | Reads a parameter's current value. The value type depends on the parameter type. | `var current = myFloat.get();` |
| `set(value)` | `value: Type-specific value` | Not specified | Sets a parameter's value. A set may notify `moduleValueChanged`; see [06_runtime_compatibility.md](./06_runtime_compatibility.md). | `myFloat.set(0.5);` |
| `getRange()` | none | Not specified | Returns the range, where supported. The exact return shape is not fully specified. | `var range = myFloat.getRange();` |
| `setRange(min, max)` | `min: number`, `max: number` (observed; verify overload) | Not specified | Changes a parameter's range. Signature and supported types are not fully specified. | `myFloat.setRange(0, 1);` |
| `hasRange()` | none | `boolean` | Reports whether a range is present; observed in local object dumps. | `script.log(myFloat.hasRange());` |
| `trigger()` | none | Not specified | Fires a Trigger controllable. | `myTrigger.trigger();` |

### Type-specific parameter values and attributes

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| Float `get()` / `set(value)` | `value: number` | `number` for `get`; `set` return not specified | Reads or sets a Float. UI attributes documented: `"time"`, `"slider"`, `"stepper"`, `"label"`; also `unitSteps` and `stringDecimals`. | `myFloat.set(0.5); var n = myFloat.get();` |
| Integer `get()` / `set(value)` | `value: number` (integer) | `number` for `get`; `set` return not specified | Reads or sets an Integer. The `"hexMode"` attribute controls hexadecimal display. | `myInteger.set(2); var n = myInteger.get();` |
| Boolean `get()` / `set(value)` | `value: boolean` | `boolean` for `get`; `set` return not specified | Reads or sets a Boolean. | `myBoolean.set(true);` |
| String `get()` / `set(value)` | `value: string` | `string` for `get`; `set` return not specified | Reads or sets a String. Attributes include `multiline`, `prefix`, and `suffix`. | `myString.set("ready");` |
| Color `get()` | none | `number[]` (`[r,g,b,α]`, channels 0–1) | Reads normalized RGBA components. | `var rgba = myColor.get(); script.log(rgba[1]);` |
| Color `set(value)` | `number` ARGB hex, `number[]` channels, or 3–4 numeric channels | Not specified | Accepts an ARGB hexadecimal value, a channel rgbα array, or separate channels. RGB channels are 0–1; alpha is optional. | `myColor.set([0.5, 1, 0.2, 0.9]);` |
| Target `get()` / `set(address)` | `address: string` | `string` for `get`; `set` return not specified | Reads or sets the target's script address. | `myTarget.set("/root/modules/example");` |
| Target `getTarget()` | none | Chataigne object or no target | Returns the resolved target object. Exact empty-target behavior is not specified. | `var selected = myTarget.getTarget();` |
| Enum `get()` / `set(value)` | `value`: enum value (version-dependent) | Version-dependent | Reads or sets the selected option. The source warns that `get()` semantics differ between versions; verify the installed version. | `myEnum.set(1); var selection = myEnum.get();` |
| Enum `getKey()` | none | Not specified | Returns the selected option key in versions where documented (source notes 1.7.x). | `var key = myEnum.getKey();` |
| Enum `getData()` / `setData(data)` | `data: any` | Not specified | Reads or changes enum option data in versions where documented; source notes `getData()` in 1.6.x. | `myEnum.setData("custom");` |
| Enum `addOption(label, value)` | `label: string`, `value: any` | Not specified | Adds an enum option. | `myEnum.addOption("Low", 0);` |
| Enum `removeOptions()` | none | Not specified | Removes enum options. | `myEnum.removeOptions();` |
| Enum `getAllOptions()` | none | Not specified | Returns the enum's options. Exact element shape is not specified. | `var options = myEnum.getAllOptions();` |
| Enum `getOptionAt(index)` | `index: number` | Not specified | Returns an option at a zero-based index. Exact element shape is not specified. | `var option = myEnum.getOptionAt(0);` |
| Enum `getIndex()` | none | `number` | Returns the selected option index. | `var index = myEnum.getIndex();` |
| Enum `setNext(loop?)` / `setPrevious(loop?)` | `loop?: boolean` | Not specified | Moves selection to the next or previous option; `loop` controls wrapping where supported. | `myEnum.setNext(true);` |
| File `getAbsolutePath()` | none | `string` | Returns the selected absolute file path. | `var path = myFile.getAbsolutePath();` |
| File `readFile(asJSON?)` | `asJSON?: boolean` | `string` or `JSON` when true | Reads the selected file. | `var text = myFile.readFile();` |
| File `writeFile(data, overwriteIfExists?)` | `data: string \| JSON`, `overwriteIfExists?: boolean` (default `false` in reference) | Not specified | Writes text or serialized object data to the selected file. | `myFile.writeFile("hello", false);` |
| File `launchFile(arguments?)` | `arguments?: string` | Not specified | Opens or launches the selected file, optionally with arguments. | `myFile.launchFile();` |
| Type-specific `setAttribute(attribute, value)` | `attribute: string`, `value: any` | Not specified | Float: `ui`, `unitSteps`, `stringDecimals`; Integer: `hexMode`; String: `multiline`, `prefix`, `suffix`; Target: `targetType`, `root`, `searchLevel`, `showParameters`, `showTriggers`, `labelLevel`, `allowedTypes`, `excludedTypes`; File: `directoryMode`, `saveMode`, `autoReload`; Point2D: `canvasInvertX`, `canvasInvertY`, `canvasStretchMode`; points also use `ui` and `stringDecimals`. | `myFloat.setAttribute("ui", "slider"); myTarget.setAttribute("targetType", "controllable"); myFile.setAttribute("directoryMode", true);` |
| Point2D `get()` / `set(x, y)` | `x: number`, `y: number` | `number[]` for `get`; `set` return not specified | Reads or sets a two-dimensional point. | `myPoint2D.set(0.5, 2);` |
| Point3D `get()` / `set(x, y, z)` | `x: number`, `y: number`, `z: number` | `number[]` for `get`; `set` return not specified | Reads or sets a three-dimensional point. | `myPoint3D.set(0.5, 2, -1);` |
| Point `setAttribute(attribute, value)` | `attribute: string`, `value: any` | Not specified | Point UI attributes include `ui`, `stringDecimals`; Point2D also documents `canvasInvertX`, `canvasInvertY`, `canvasStretchMode`. | `myPoint2D.setAttribute("canvasInvertX", true);` |

## Containers

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `getChild(name)` | `name: string` | `Container \| Controllable` or no child | Looks up a direct child by script name. Missing-child behavior is not specified. | `var child = myContainer.getChild("gain");` |
| `getParent()` | none | `Container` | Returns the parent container. | `var parent = myContainer.getParent();` |
| `setName(name, shortName?)` | `name: string`, `shortName?: string` | Not specified | Renames the container and optionally sets its script identifier. | `myContainer.setName("Controls", "controls");` |
| `setCollapsed(value)` | `value: boolean` | Not specified | Changes the Inspector's collapsed state. | `myContainer.setCollapsed(false);` |
| `name` / `niceName` | none (properties) | `string` | Script identifier and user-facing name. | `script.log(myContainer.name);` |
| `addTrigger(name, description)` | `name: string`, `description: string` | `Trigger` | Adds a trigger child. | `var trigger = myContainer.addTrigger("Reset", "Reset values");` |
| `addBoolParameter(name, description, defaultValue)` | `string`, `string`, `boolean` | `Parameter` | Adds a Boolean parameter. | `var enabled = myContainer.addBoolParameter("Enabled", "Enable feature", false);` |
| `addIntParameter(name, description, defaultValue, min?, max?)` | `string`, `string`, `number`, `number?`, `number?` | `Parameter` | Adds an Integer parameter, optionally ranged. | `var count = myContainer.addIntParameter("Count", "Item count", 2, 0, 10);` |
| `addFloatParameter(name, description, defaultValue, min?, max?)` | `string`, `string`, `number`, `number?`, `number?` | `Parameter` | Adds a Float parameter, optionally ranged. | `var gain = myContainer.addFloatParameter("Gain", "Output gain", 0.5, 0, 1);` |
| `addStringParameter(name, description, defaultValue)` | `string`, `string`, `string` | `Parameter` | Adds a String parameter. | `var label = myContainer.addStringParameter("Label", "Display label", "");` |
| `addColorParameter(name, description, defaultValue)` | `string`, `string`, ARGB `number` or `number[]` | `Parameter` | Adds a Color parameter. | `var tint = myContainer.addColorParameter("Tint", "Display color", [1, 0, 1, 1]);` |
| `addPoint2DParameter(name, description)` | `string`, `string` | `Parameter` | Adds a Point2D parameter. | `var position = myContainer.addPoint2DParameter("Position", "2D position");` |
| `addPoint3DParameter(name, description)` | `string`, `string` | `Parameter` | Adds a Point3D parameter. | `var position = myContainer.addPoint3DParameter("Position3D", "3D position");` |
| `addTargetParameter(name, description)` | `string`, `string` | `Parameter` | Adds a Target parameter. | `var target = myContainer.addTargetParameter("Target", "Choose an object");` |
| `addFileParameter(name, description, directoryMode?)` | `string`, `string`, `boolean?` | `Parameter` | Adds a File parameter; `directoryMode` selects a directory rather than a file. | `var file = myContainer.addFileParameter("Preset", "Preset file", false);` |
| `addEnumParameter(name, description, label1, value1, ...)` | `string`, `string`, repeated `string`, `any` pairs | `Parameter` | Adds an Enum parameter from alternating label/value pairs. | `var mode = myContainer.addEnumParameter("Mode", "Select a mode", "Off", 0, "On", 1);` |
| `addContainer(name)` | `name: string` | `Container` | Adds a nested container. | `var advanced = myContainer.addContainer("Advanced");` |
| `addAutomation(name)` | `name: string` | Automation object | Adds an automation/curve child. | `var curve = myContainer.addAutomation("Envelope");` |
| `removeContainer(name)` | `name: string` | Not specified | Removes a named child container. | `myContainer.removeContainer("Advanced");` |
| `removeParameter(name)` | `name: string` | Not specified | Removes a named child parameter. | `myContainer.removeParameter("Gain");` |
| `getContainers()` | none | `Container[]` | Returns child containers; use it to obtain a current list after changes. | `var children = myContainer.getContainers();` |
| `getControllables(includeParameters?, includeTriggers?)` | optional `boolean`, optional `boolean` (both default `true` in reference) | `Controllable[]` | Returns child parameters/triggers, optionally filtering each kind. | `var parameters = myContainer.getControllables(true, false);` |
| `clear(clearContainers?, clearControllables?)` | optional `boolean`, optional `boolean` (both default `true` in reference) | Not specified | Removes child containers and/or controllables. | `myContainer.clear(true, false);` |
| `getControlAddress(reference?)` / `getScriptControlAddress()` | `reference?: Container` | `string` | Returns the control or script-control address. | `var address = myContainer.getControlAddress();` |
| `getJSONData()` / `loadJSONData(data)` | `data: JSON` for load | `JSON` for get; load return not specified | Serializes or restores container data. | `var data = myContainer.getJSONData();` |

## Managers, states, automations, and command links

Manager methods vary by manager type. Some require a type argument; consult the target manager and version before calling `addItem()`.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `addItem(type?)` | `type?: string` (manager-dependent) | Manager item | Creates an item. | `var item = manager.addItem();` |
| `removeItem(item)` | `item: ManagerItem \| string` | Not specified | Removes an item by object or, where supported, matching name. | `manager.removeItem(item);` |
| `removeAll()` | none | Not specified | Removes all manager items. | `manager.removeAll();` |
| `getItems()` | none | `ManagerItem[]` | Returns the manager's items. | `var items = manager.getItems();` |
| `getItemWithName(name)` | `name: string` | `ManagerItem` or no match | Finds an item by name. | `var item = manager.getItemWithName("Main");` |
| `getItemAt(index)` | `index: number` | `ManagerItem` or no item | Returns the item at a zero-based index. | `var first = manager.getItemAt(0);` |
| `getItemIndex(item)` | `item: ManagerItem` | `number` | Returns an item's index. | `var index = manager.getItemIndex(item);` |
| `getItemBefore(item)` / `getItemAfter(item)` | `item: ManagerItem` | `ManagerItem` or no item | Returns the adjacent item. | `var next = manager.getItemAfter(item);` |
| `reorderItems()` | none | Not specified | Reorders manager items after edits. | `manager.reorderItems();` |
| `addTransition(source, dest)` | `source: State`, `dest: State` | Not specified | Adds a transition between states. | `stateManager.addTransition(sourceState, destinationState);` |
| `addKey(position, value)` | `position: number`, `value: number` | Key object (not fully specified) | Adds an automation key. | `curve.addKey(0.5, 1);` |
| `setLength(length, stretch, stickToEnd)` | `number`, `boolean`, `boolean` | Not specified | Changes automation length and optionally stretches or anchors keys. | `curve.setLength(10, true, false);` |
| `getValueAtPosition(position)` | `position: number` | `number` | Returns the curve value at a position. | `var value = curve.getValueAtPosition(0.5);` |
| `getKeyAtPosition(position)` | `position: number` | Key object (not fully specified) | Returns the closest key to a position. | `var key = curve.getKeyAtPosition(0.5);` |
| `getKeysBetween(start, end)` | `start: number`, `end: number` | Key array | Returns keys within the requested interval. | `var keys = curve.getKeysBetween(0, 1);` |
| `linkParamToMappingIndex(parameter, index)` | `parameter: Parameter`, `index: number` (1-based) | Not specified | Links a command parameter to a mapping input. | `command.linkParamToMappingIndex(parameter, 1);` |
| `setParamLink(parameter, linkDef)` | `parameter: Parameter`, `linkDef: {type: string, value: any}` | Not specified | Sets a command link. Documented `type` values: `"input"`, `"index"`, `"index0"`, `"list"`; `value` depends on the type. | `command.setParamLink(parameter, {type: "index", value: 1});` |
| `unlinkParam(parameter)` | `parameter: Parameter` | Not specified | Removes the link from a command parameter. | `command.unlinkParam(parameter);` |

## Related references

- Script lifecycle, callback signatures, `local`, `root`, protocol APIs: [02_script_api_reference.md](./02_script_api_reference.md)
- Script-host and utility signatures: [07_script_host_api.md](./07_script_host_api.md)
- Module JSON, data types, and command setup: [01_module_system.md](./01_module_system.md)
- Runtime-notification and stale-reference caveats: [06_runtime_compatibility.md](./06_runtime_compatibility.md)
