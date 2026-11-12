# Chataigne Script API Reference

Chataigne scripts run in different contexts, and each context provides different callbacks and `local` methods. Use the script editor's generated template for the selected context and verify APIs against the target application version. See the [official Chataigne documentation](https://benjamin.kuperberg.fr/chataigne/docs) for updates.

## How to read the reference

Each API table uses **Method**, **Arguments and types**, **Returns**, **Description**, and **Example**. Types are JavaScript/host-facing descriptions, not TypeScript declarations. `any` means the protocol or source does not establish a narrower type; optional arguments use `?`. Callback return values are not used unless explicitly stated. All examples use ES5 syntax.

## Script contexts

Chataigne supports Module, Condition, Consequence, Mapping Filter, and Mapping Output scripts. A script's context determines what `local` means and which callbacks are invoked. The generated script template is the best starting point for the correct callback names.

## Common callbacks

Define only the callbacks needed by a script. `update()` is called only when present and uses the configured update rate; `deltaTime` is documented in seconds.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `init()` | none | No return used | Called after the script loads. | `function init() { script.log("Ready"); }` |
| `update(deltaTime)` | `deltaTime: number` (seconds) | No return used | Called regularly at the script's update rate. Set the rate with `script.setUpdateRate(rate)` in Hz. | `function update(deltaTime) { script.log("dt=" + deltaTime); }` |
| `messageBoxCallback(id, result)` | `id: string`, `result: any` (depends on dialog) | No return used | Called after the user responds to a dialog opened by this script. | `function messageBoxCallback(id, result) { script.log(id + ": " + result); }` |
| `scriptParameterChanged(param)` | `param: Parameter` | No return used | Called when a script-owned parameter changes. | `function scriptParameterChanged(param) { script.log(param.name); }` |

## Module callbacks

These are called for a module script when the corresponding module parameter, value, or protocol event changes.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `moduleParameterChanged(param)` | `param: Parameter \| Trigger` | No return used | Called when a parameter or trigger in the module's Parameters panel changes. | `function moduleParameterChanged(param) { script.log("Parameter: " + param.name); }` |
| `moduleValueChanged(value)` | `value: Parameter \| Trigger` | No return used | Called when a value or trigger in the module's Values panel changes. `value.isParameter()` distinguishes parameters from triggers. Script-driven `.set()` may also invoke this callback. | `function moduleValueChanged(value) { if (value.isParameter()) { script.log(value.name + "=" + value.get()); } }` |

## Protocol callbacks

Only the callback relevant to a module's protocol is used. Payload types may depend on module settings (for example, serial line mode versus raw bytes).

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| OSC `oscEvent(address, args, originIp)` | `address: string`, `args: any[]`, `originIp: string` | No return used | Called for a received OSC message. | `function oscEvent(address, args, originIp) { script.log(originIp + " " + address + " (" + args.length + ")"); }` |
| MIDI `noteOnEvent(channel, pitch, velocity)` | three `number`s | No return used | Called for a received Note On event. | `function noteOnEvent(channel, pitch, velocity) { script.log("Note " + pitch + " on"); }` |
| MIDI `noteOffEvent(channel, pitch, velocity)` | three `number`s | No return used | Called for a received Note Off event. | `function noteOffEvent(channel, pitch, velocity) { script.log("Note " + pitch + " off"); }` |
| MIDI `ccEvent(channel, number, value)` | three `number`s | No return used | Called for a received Control Change event. | `function ccEvent(channel, number, value) { script.log("CC " + number + "=" + value); }` |
| MIDI `sysExEvent(data)` | `data: number[]` | No return used | Called for a received SysEx message. | `function sysExEvent(data) { script.log("SysEx bytes: " + data.length); }` |
| MIDI `channelPressureEvent(channel, value)` | two `number`s | No return used | Called for channel pressure. | `function channelPressureEvent(channel, value) { script.log("Pressure " + value); }` |
| MIDI `afterTouchEvent(channel, note, value)` | three `number`s | No return used | Called for aftertouch; preserve this callback spelling. | `function afterTouchEvent(channel, note, value) { script.log("Aftertouch " + note + "=" + value); }` |
| MQTT `dataEvent(data, topic)` | `data: any` (payload), `topic: string` | No return used | Called for a received MQTT message. Payload type depends on the module configuration. | `function dataEvent(data, topic) { script.log(topic + ": " + data); }` |
| DMX `dmxEvent(values)` | `values: number[]` | No return used | Called for a received group of DMX values; the array starts at channel 1. | `function dmxEvent(values) { script.log("DMX values: " + values.length); }` |
| Serial / UDP / TCP `dataReceived(data)` | `data: string \| number[]` | No return used | Called when data arrives. In Lines mode data is a line string without the ending newline; otherwise it is a byte array. | `function dataReceived(data) { script.log("Received: " + data); }` |
| WebSocket `wsDataReceived(data)` | `data: number[]` (binary packet) | No return used | Called for a received binary packet. | `function wsDataReceived(data) { script.log("Packet bytes: " + data.length); }` |
| WebSocket `wsMessageReceived(client, message)` | `client: object`, `message: string` | No return used | Called for a received text message. | `function wsMessageReceived(client, message) { script.log(message); }` |
| HTTP `dataEvent(data, requestURL)` | `data: any` (response body), `requestURL: string` | No return used | Called when the module receives an HTTP response. | `function dataEvent(data, requestURL) { script.log(requestURL + ": " + data); }` |
| System `processDataReceived(data, originCommand)` | `data: string`, `originCommand: string` | No return used | Called with process output when a process was launched asynchronously. | `function processDataReceived(data, originCommand) { script.log(originCommand + ": " + data); }` |

Use `processDataReceived` for the System callback and confirm callback names in the target version.

## `local` methods by module protocol

`local` represents the current module in a Module Script. These APIs are protocol-specific; they are not methods available in every script context. Unless specified, methods send/control data and their return values are not documented.

### OSC

OSC arguments may be numbers, strings, or other OSC-supported values. Address patterns follow OSC matching conventions.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `send(address, ...)` | `address: string`, one or more OSC values (`number`, `string`, etc.) | Not specified | Sends to enabled outputs configured on the module. | `local.send("/device/level", 0.5);` |
| `sendTo(ip, port, address, ...)` | `ip: string`, `port: number`, `address: string`, one or more OSC values | Not specified | Sends directly to the given host/port, ignoring configured module outputs. | `local.sendTo("192.168.0.30", 9000, "/device/level", 0.5);` |
| `match(address, pattern)` | `address: string`, `pattern: string` | `boolean` | Tests whether an address matches an OSC [pattern](https://opensoundcontrol.stanford.edu/spec-1_0.html#osc-message-dispatching-and-pattern-matching). | `if (local.match("/device/level", "/device/*")) { script.log("Matched"); }` `if (local.match("/device?", "/device/*")) { script.log("Matched"); }` `if (local.match("/device[0-9]", "/device/*")) { script.log("Matched"); }`|
| `register(pattern, callbackName)` | `pattern: string`, `callbackName: string` | Not specified | Registers a named script function for [matching](https://opensoundcontrol.stanford.edu/spec-1_0.html#osc-message-dispatching-and-pattern-matching) messages; registration can route to a handler in another module script. | `function init() { local.register("/device/*", "onDeviceMessage"); } function onDeviceMessage(address, args) { script.log(address); }` |

### MIDI

Channel, pitch, velocity, and controller values are numeric; consult the MIDI module settings for the accepted ranges.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `sendNoteOn(channel, pitch, velocity)` | three `number`s | Not specified | Sends a Note On event. | `local.sendNoteOn(1, 60, 100);` |
| `sendNoteOff(channel, pitch)` | two `number`s | Not specified | Sends a Note Off event. | `local.sendNoteOff(1, 60);` |
| `sendCC(channel, number, value)` | three `number`s | Not specified | Sends a Control Change event. | `local.sendCC(1, 20, 65);` |
| `sendSysex(...)` | one or more byte `number`s | Not specified | Sends a SysEx message. | `local.sendSysex(10, 15, 20, 0);` |
| `sendPitchWheel(channel, value)` | two `number`s | Not specified | Sends a Pitch Wheel event. | `local.sendPitchWheel(1, 2000);` |
| `sendChannelPressure(channel, value)` | two `number`s | Not specified | Sends Channel Pressure. | `local.sendChannelPressure(1, 67);` |
| `sendAfterTouch(channel, note, value)` | three `number`s | Not specified | Sends After Touch. | `local.sendAfterTouch(1, 60, 65);` |
| `sendProgramChange(channel, program)` | two `number`s | Not specified | Sends Program Change. | `local.sendProgramChange(1, 5);` |

### DMX

DMX values are numbers in the documented range 0–255. The destination universe comes from module settings unless the explicit-universe method is used.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `send(startChannel, value1, ...)` | `startChannel: number`, one or more `number`s or `number[]` values | Not specified | Sends channel values to the module's configured universe. | `local.send(32, 255, 0, 128);` |
| `sendUniverse(net, subnet, universe, startChannel, value1, ...)` | four `number`s, then values as above | Not specified | Sends to an explicitly selected universe. | `local.sendUniverse(0, 4, 1, 32, 255);` |

### Serial, UDP, TCP, and WebSocket

`sendBytes` accepts individual byte numbers and arrays of bytes, or a mixture; verify the accepted forms in the target version.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `send(message)` | `message: string` | Not specified | Sends text/ASCII data using the module's configured output. | `local.send("status");` |
| `sendBytes(byte1, ...)` | one or more `number` bytes and/or `number[]` arrays | Not specified | Sends raw bytes. | `local.sendBytes(30, 210, [255, 0, 0], 5);` |
| UDP `sendTo(ip, port, message)` | `ip: string`, `port: number`, `message: string` | Not specified | Sends text to a specific UDP destination. | `local.sendTo("192.168.1.10", 8888, "status");` |
| UDP `sendBytesTo(ip, port, byte1, ...)` | `ip: string`, `port: number`, bytes as above | Not specified | Sends raw bytes to a specific UDP destination. | `local.sendBytesTo("192.168.1.10", 8888, 30, [255, 0]);` |

### HTTP

Request URLs are appended to the module's configured Base Address. The API supports inline arguments and an options object with optional `dataType`, `extraHeaders`, `arguments`, and `payload` fields. An object payload may be serialized automatically.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `sendGET(url, options?)` | `url: string`, `options?: object` (or documented inline optional values) | Not specified; response arrives in `dataEvent` | Sends an HTTP GET request. Options can include response `dataType` (`"json"`/`"raw"`), headers, arguments, or payload as documented. | `local.sendGET("status");` |
| `sendPOST(url, optionsOrName, value, ...)` | `url: string`, options object or repeated `string`/`any` pairs | Not specified; response arrives in `dataEvent` | Sends an HTTP POST request. | `local.sendPOST("control", "enabled", true);` |
| `sendPUT(url, optionsOrName, value, ...)` | `url: string`, options object or repeated `string`/`any` pairs | Not specified; response arrives in `dataEvent` | Sends an HTTP PUT request. | `local.sendPUT("control", "level", 0.5);` |
| `sendPATCH(url, optionsOrName, value, ...)` | `url: string`, options object or repeated `string`/`any` pairs | Not specified; response arrives in `dataEvent` | Sends an HTTP PATCH request. | `local.sendPATCH("control", "level", 0.5);` |
| `sendDELETE(url, optionsOrName, value, ...)` | `url: string`, options object or repeated `string`/`any` pairs | Not specified; response arrives in `dataEvent` | Sends an HTTP DELETE request. | `local.sendDELETE("control", "itemId", 12);` |

For example, the documented options-object shape is:

```js
var options = {
  dataType: "json",
  extraHeaders: "Content-Type: application/json",
  arguments: ["enabled", true],
  payload: {level: 0.5}
};
local.sendPOST("control", options);
```

### System

Process-launching methods affect the host computer. Use only commands and applications you intend to run.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `launchApp(appPath, arguments)` | `appPath: string`, `arguments: string` | Not specified | Launches an application with arguments. | `local.launchApp("<path-to-application>", "--help");` |
| `launchCommand(command, silentMode?)` | `command: string`, `silentMode?: boolean` | Not specified | Launches a command. | `local.launchCommand("echo ready", true);` |
| `launchProcess(command, blocking)` | `command: string`, `blocking: boolean` | `string` when blocking; asynchronous output uses callback | Launches a process. Non-blocking output is delivered to `processDataReceived(data, originCommand)`. | `var output = local.launchProcess("echo ready", true);` |
| `getRunningProcesses()` | none | `string[]` | Lists running processes. | `var processes = local.getRunningProcesses();` |
| `isProcessRunning(process)` | `process: string` | `boolean` | Checks whether a process is running. | `var running = local.isProcessRunning("ExampleApp");` |

## `root`, `script`, and `util`

- `root` represents the Chataigne engine hierarchy. Use **Copy Script Control Address** from an object's context menu to find script addresses.
- `script` and `util` host methods are in [07_script_host_api.md](./07_script_host_api.md).
- `local` varies outside module scripts; protocol methods above apply only where the corresponding module exposes them.
- Parameter, container, manager, and automation object methods are in [05_api_catalog.md](./05_api_catalog.md).

## Evidence and known naming caveats

API names and details can change between Chataigne versions. Use the script editor's generated template and test against the target version. Runtime and object-reference caveats are collected in [06_runtime_compatibility.md](./06_runtime_compatibility.md).
