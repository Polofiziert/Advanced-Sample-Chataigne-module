# Script Host and Utility API Reference

This reference covers the `script` and `util` host objects registered in the cited public Chataigne source revision. It complements the [official Chataigne documentation](https://benjamin.kuperberg.fr/chataigne/docs) and does not guarantee availability in every release.

## Source revisions and confidence

- Chataigne pins `Modules/juce_organicui` to [`faf9b5e`](https://github.com/benkuper/juce_organicui/tree/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3).
- Host registrations: [`Script.cpp`](https://github.com/benkuper/juce_organicui/blob/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3/script/Script.cpp) and [`ScriptUtil.cpp`](https://github.com/benkuper/juce_organicui/blob/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3/script/ScriptUtil.cpp).
- Interpreter grammar and built-ins: [JUCE `juce_Javascript.cpp`](https://github.com/benkuper/JUCE/blob/d8b1e81eca9bd52a2f0e0783f687f991fa084a7f/modules/juce_core/javascript/juce_Javascript.cpp).

The method names are source-registered. Argument and return types below use published API documentation where available and otherwise describe the apparent native contract; behavior not established by either source is marked **Not specified**. Runtime observations from Chataigne 1.10.4 are called out explicitly and are not guarantees for other versions. See the [probe findings](../revengineer/util-probe-findings-1.10.4.md) and [raw logs](../revengineer/dumps/06_util_probes.md) for test inputs and results.

Each table uses **Method**, **Arguments and types**, **Returns**, **Description**, and a short **Example**. `JSON` means a JSON-compatible value; `number[]` and `string[]` are arrays. Optional arguments are marked `?`. In examples, `<...>` is an explanatory placeholder that must be replaced with a real path/value before use.

## `script` object

`script` refers to the current script container. Script-created parameters are script-owned and may be rebuilt when the script reloads.

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `log(message)` | `message: string` | Not specified | Writes a script log message; enable the script's Log parameter to see it. | `script.log("Ready");` |
| `logWarning(message)` | `message: string` | Not specified | Writes a warning-level message. | `script.logWarning("Check the input");` |
| `logError(message)` | `message: string` | Not specified | Writes an error-level message. | `script.logError("Request failed");` |
| `setUpdateRate(rate)` | `rate: number` (Hz) | Not specified | Sets the rate at which `update(deltaTime)` runs. | `script.setUpdateRate(30);` |
| `setExecutionTimeout(seconds)` | `seconds: number` | Not specified | Sets the maximum execution time for a script call. | `script.setExecutionTimeout(10);` |
| `refreshEnvironment()` | none | Not specified | Resynchronizes environment references such as `root` and `local`; useful after hierarchy changes. | `script.refreshEnvironment();` |
| `getScriptDirectory()` | none | `string` | Returns the directory containing the current script. | `var dir = script.getScriptDirectory();` |
| `getScriptPath()` | none | `string` | Returns the current script's path. | `var path = script.getScriptPath();` |
| `addTrigger(name, description)` | `string`, `string` | `Trigger` | Adds a script-owned trigger. | `var trigger = script.addTrigger("Reset", "Reset state");` |
| `addBoolParameter(name, description, defaultValue)` | `string`, `string`, `boolean` | `Parameter` | Adds a script-owned Boolean parameter. | `var enabled = script.addBoolParameter("Enabled", "Enable feature", false);` |
| `addIntParameter(name, description, defaultValue, min?, max?)` | `string`, `string`, `number`, `number?`, `number?` | `Parameter` | Adds a script-owned Integer parameter with optional limits. | `var count = script.addIntParameter("Count", "Item count", 1, 0, 10);` |
| `addFloatParameter(name, description, defaultValue, min?, max?)` | `string`, `string`, `number`, `number?`, `number?` | `Parameter` | Adds a script-owned Float parameter with optional limits. | `var gain = script.addFloatParameter("Gain", "Output gain", 0.5, 0, 1);` |
| `addStringParameter(name, description, defaultValue)` | `string`, `string`, `string` | `Parameter` | Adds a script-owned String parameter. | `var label = script.addStringParameter("Label", "Display label", "");` |
| `addEnumParameter(name, description, label1, value1, ...)` | `string`, `string`, repeated `string`, `any` pairs | `Parameter` | Adds a script-owned Enum from alternating labels and associated values. | `var mode = script.addEnumParameter("Mode", "Choose mode", "Off", 0, "On", 1);` |
| `addTargetParameter(name, description)` | `string`, `string` | `Parameter` | Adds a script-owned Target parameter. | `var target = script.addTargetParameter("Target", "Choose an object");` |
| `addPoint2DParameter(name, description)` | `string`, `string` | `Parameter` | Adds a script-owned Point2D parameter. | `var point = script.addPoint2DParameter("Position", "2D position");` |
| `addPoint3DParameter(name, description)` | `string`, `string` | `Parameter` | Adds a script-owned Point3D parameter. | `var point = script.addPoint3DParameter("Position3D", "3D position");` |
| `addColorParameter(name, description, defaultValue)` | `string`, `string`, ARGB `number` or `number[]` | `Parameter` | Adds a script-owned Color parameter. | `var color = script.addColorParameter("Color", "Tint", [1, 0, 1, 1]);` |
| `addFileParameter(name, description, directoryMode?)` | `string`, `string`, `boolean?` (default `false`) | `Parameter` | Adds a File parameter; optional `true` selects a directory. | `var file = script.addFileParameter("File", "Choose a file", false);` |
| `scriptParameterChanged(param)` callback | `param: Parameter` | Callback; no return used | Called when a parameter owned by this script changes. | `function scriptParameterChanged(param) { script.log(param.name); }` |

## `util`: time, conversion, and formatting

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `getTime()` | none | `number` | Elapsed system time in seconds. | `var seconds = util.getTime();` |
| `getTimestamp()` | none | `number` | Unix time in seconds. | `var unixSeconds = util.getTimestamp();` |
| `delayThreadMS(milliseconds)` | `milliseconds: number` | `number` observed | Delays the calling script thread. A 10 ms call advanced `getTime()` by about 10.74 ms in one 1.10.4 run; other execution contexts may differ. | `util.delayThreadMS(100);` |
| `getFloatFromBytes(byte1, byte2, byte3, byte4)` | four `number` byte values | `number` | Reinterprets four bytes as a float. Tested 1.10.4 vectors decoded little-endian (first byte least significant), contrary to the cited source documentation. | `var value = util.getFloatFromBytes(0, 0, 128, 63); // 1.0 in tested 1.10.4` |
| `getDoubleFromBytes(byte1, ..., byte8)` | eight `number` byte values | `number` | Reinterprets eight bytes as a double. Tested 1.10.4 vectors decoded little-endian. | `var value = util.getDoubleFromBytes(0, 0, 0, 0, 0, 0, 240, 63); // 1.0 in tested 1.10.4` |
| `getInt32FromBytes(byte1, byte2, byte3, byte4)` | four `number` byte values | `number` | Converts four bytes to a 32-bit integer. Tested 1.10.4 vectors decoded little-endian; this differs from the cited source documentation. | `var value = util.getInt32FromBytes(10, 2, 0, 0); // 522 in tested 1.10.4` |
| `getInt64FromBytes(byte1, ..., byte8)` | eight `number` byte values | `number` | **Unreliable in inspected revision.** Source registration binds this method to the 32-bit implementation, and tested 1.10.4 results matched decoding only the first four bytes as little-endian int32. | `var value = util.getInt64FromBytes(0, 0, 0, 1, 0, 0, 0, 0);` |
| `floatToHexSeq(value, littleEndian)` | `value: number`, `littleEndian: boolean` | `string` observed | Converts a float to hexadecimal bytes. In tested 1.10.4 calls, `true` produced big-endian and `false` little-endian output—the reverse of the parameter name. | `var bytes = util.floatToHexSeq(15.125, true); // "41720000" in tested 1.10.4` |
| `doubleToHexSeq(value, littleEndian)` | `value: number`, `littleEndian: boolean` | `string` observed | Converts a double to hexadecimal bytes. In tested 1.10.4 calls, `true` produced big-endian and `false` little-endian output—the reverse of the parameter name. | `var bytes = util.doubleToHexSeq(15.125, true); // "402E400000000000" in tested 1.10.4` |
| `hexStringToInt(value)` | `value: string` | `number` | Parses hexadecimal text numerically. In the tested runtime, some parser results that displayed as `29` behaved anomalously under strict equality with the literal `29`; see the runtime caveat below. | `var value = util.hexStringToInt("1D");` |
| `toStringFixed(value, decimals)` | `value: number`, `decimals: number` (integer) | `string` | Formats a number to a fixed number of decimal places. | `var text = util.toStringFixed(3.14159, 2);` |
| `colorToHex(r, g, b, a?)` or `colorToHex(channels)` | `number`s or `number[]` | `string` | Channel interpretation is unresolved. Repeated 1.10.4 probes produced form- and channel-dependent results inconsistent with a conventional normalized or byte-scale RGB mapping; do not rely on the example until behavior is confirmed for the target version. | `var hex = util.colorToHex([1, 0.5, 0, 1]);` |

## `util`: host, files, and process helpers

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `getAppVersion()` | none | `string` | Returns the Chataigne version. | `var version = util.getAppVersion();` |
| `getOSInfos()` | none | object | In 1.10.4, observed fields were `name: string`, `type: number`, `computerName: string`, `language: string`, and `username: string`. Values may identify the host. | `var info = util.getOSInfos();` |
| `getEnvironmentVariable(name)` | `name: string` | `string` observed | Reads an environment variable. A deliberately unlikely missing name returned an empty string in 1.10.4; behavior for other names/versions is not established. | `var pathEnv = util.getEnvironmentVariable("PATH");` |
| `getIPs()` | none | `string[]` observed | Returned four strings in the tested 1.10.4 environment. The count is environment-dependent; address values can reveal network information. | `var ips = util.getIPs();` |
| `getDocumentsDirectory()` / `getDesktopDirectory()` | none | `string` | Returns the corresponding user directory path. | `var docs = util.getDocumentsDirectory();` |
| `getCurrentFileDirectory()` / `getCurrentFilePath()` | none | `string` | Returns the current session file's directory or full path. Both returned empty strings in the tested context; empty-string path-helper calls resolved relative to the module directory there. | `var sessionPath = util.getCurrentFilePath();` |
| `getParentDirectory(path)` | `path: string` | `string` or void observed | Returns a parent directory for tested existing host paths. Returned void for tested synthetic or uncreated paths; empty input resolved relative to the module in the tested context. | `var parent = util.getParentDirectory(script.getScriptPath());` |
| `getFileName(path, withExtension?)` | `path: string`, `withExtension?: boolean` | `string` or void observed | Extracts the file name for tested existing paths; `true` retained `.js` and `false` removed it on the current script path. Returned void for tested uncreated paths. | `var name = util.getFileName(script.getScriptPath(), true);` |
| `getFilePath(relativePath)` | `relativePath: string` | `string` or void observed | Resolves tested existing host paths. Returned void for tested synthetic or uncreated paths; empty input resolved to the module path in the tested context. | `var absolute = util.getFilePath(script.getScriptPath());` |
| `fileExists(path)` / `directoryExists(path)` | `path: string` | `number` observed | Checks whether the path is a file or directory. Returned numeric `0`/`1`, not booleans, in the tested 1.10.4 cases. | `var exists = util.fileExists(script.getScriptPath());` |
| `getNonExistentFile(directory, fileName)` | `directory: string`, `fileName: string` | `string` (candidate path) | Produces a path based on the requested directory/name that does not currently exist, for avoiding accidental overwrite. It does not itself write or reserve the path; a race is possible if another process creates it before the write. | `var candidate = util.getNonExistentFile(util.getDocumentsDirectory(), "capture.txt");` |
| `listFiles(path, recursive?, returnNameOnly?)` | `path: string`, `recursive?: boolean`, `returnNameOnly?: boolean` | `string[]` | Lists files in a directory, optionally recursively or as names only. | `var files = util.listFiles(util.getDocumentsDirectory(), false, true);` |
| `listDirectories(path, recursive?, returnNameOnly?)` | `path: string`, `recursive?: boolean`, `returnNameOnly?: boolean` | `string[]` | Lists directories, optionally recursively or as names only. | `var folders = util.listDirectories(util.getDocumentsDirectory(), false, true);` |
| `readFile(path, asJSON?)` | `path: string`, `asJSON?: boolean` | `string` or `JSON` | Reads file contents; `true` requests parsed JSON. Error behavior is not specified. | `var text = util.readFile(script.getScriptPath());` |
| `writeFile(path, data, overwriteIfExists?)` | `path: string`, `data: string \| JSON`, `overwriteIfExists?: boolean` (default `false`) | Not specified | Writes text or serialized object data to the specified path. | `var path = util.getDocumentsDirectory() + "/chataigne-example.txt"; util.writeFile(path, "hello", false);` |
| `writeBytes(path, bytes, overwriteIfExists?)` | `path: string`, `bytes: number[]`, `overwriteIfExists?: boolean` | Not specified | Writes byte data to a file. | `var path = util.getDocumentsDirectory() + "/chataigne-bytes.bin"; util.writeBytes(path, [0, 1, 255], false);` |
| `createDirectory(path)` | `path: string` | Not specified | Creates a directory. | `util.createDirectory(util.getDocumentsDirectory() + "/ChataigneExample");` |
| `launchFile(path, arguments?)` | `path: string`, `arguments?: string` | Not specified | Opens or launches a file/application. | `util.launchFile(script.getScriptPath());` |
| `killApp(process, hardKill?)` | `process: string`, `hardKill?: boolean` | Not specified | Terminates an application/process; use cautiously. | `util.killApp("ExampleApp", false);` |
| `gotoURL(url)` | `url: string` | Not specified | Opens a URL using the host. | `util.gotoURL("https://example.com");` |

## `util`: encoding, introspection, UI, and advanced helpers

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `encodeHMAC_SHA1(text, key)` | `text: string`, `key: string` | `string` observed | Computes an HMAC-SHA1 value. The tested standard vector matched Base64 output. | `var digest = util.encodeHMAC_SHA1("The quick brown fox jumps over the lazy dog", "key");` |
| `encodeSHA256(text)` / `encodeSHA512(text)` | `text: string` | `string` observed | Computes SHA-256 or SHA-512. Tested standard vectors matched lowercase hexadecimal output. | `var digest = util.encodeSHA256("abc");` |
| `toBase64(value)` / `fromBase64(value)` | `value: string` | `string` | Encodes text to Base64 or decodes Base64 text. | `var encoded = util.toBase64("hello");` |
| `fromBase64Bytes(value)` | `value: string` | Array-like observed | Decodes Base64 to bytes; `"AQID"` formatted as `[1, 2, 3]`, but the concrete host-side type is not established. | `var bytes = util.fromBase64Bytes("AQID");` |
| `getObjectProperties(object, includeParameters?, includeObjects?)` | `object: object`, optional `boolean`s | `string[]` or void observed | Returns property names on tested host objects. In 1.10.4, `(false, false)` returned void; the other tested flag combinations gave object-dependent results. Flags appear to filter parameter/object properties, but this remains provisional. | `var properties = util.getObjectProperties(local, true, true);` |
| `getObjectMethods(object)` | `object: object` | `string[]` or void observed | Returned method-name arrays for `util`, `script`, `local`, and `root`; returned void for the tested OS-info object. | `var methods = util.getObjectMethods(local);` |
| `is(...)` | Signature not specified | Not specified | Present in the live Util method inventory, but its argument and behavior contract have not been established; it was not invoked by the probes. | No safe example established. |
| `getSelectedObject()` | none | Chataigne object, null, or void | Returned a non-null object when one object was selected in the probe context. Empty-selection behavior remains untested. | `var selected = util.getSelectedObject();` |
| `getSelectedObjectsCount()` | none | `number` | Returned `1` in the probe context; result depends on the current UI selection. | `var count = util.getSelectedObjectsCount();` |
| `copyToClipboard(data, ...)` | one or more values; exact accepted types not specified | Not specified | Copies supplied data to the clipboard. | `util.copyToClipboard("Copied from Chataigne");` |
| `getFromClipboard()` | none | Not specified | Reads clipboard content. | `var clipboard = util.getFromClipboard();` |
| `showMessageBox(title, message, icon?, buttonText?)` | strings; `icon?: string` (`"info"`, `"warning"`, `"question"`) | Not specified | Shows a one-button dialog. | `util.showMessageBox("Info", "Ready", "info", "OK");` |
| `showOkCancelBox(id, title, message, icon?, button1Text?, button2Text?)` | strings; optional icon/button labels | `boolean` | Shows an OK/Cancel dialog; the result is also delivered to `messageBoxCallback(id, result)`. | `util.showOkCancelBox("confirm", "Confirm", "Continue?", "question", "OK", "Cancel");` |
| `showYesNoCancelBox(id, title, message, icon?, button1Text?, button2Text?, button3Text?)` | strings; optional icon/button labels | Numeric choice | Shows a three-choice dialog; also reports through `messageBoxCallback`. Exact result mapping is not specified. | `util.showYesNoCancelBox("save", "Save changes", "Save before closing?", "question", "Yes", "No", "Cancel");` |
| `loadDynamicLibrary(path)` | `path: string` | Opaque handle (not fully specified) | Loads a native dynamic library. Platform-specific and advanced; use only with libraries you are authorized to load. | `var handle = util.loadDynamicLibrary("<path-to-library>");` |
| `unloadDynamicLibrary(handle)` | `handle: opaque library handle` | Not specified | Unloads a previously loaded library. | `util.unloadDynamicLibrary(handle);` |
| `findFunctionInDynamicLibrary(handle, name)` | `handle: opaque library handle`, `name: string` | Opaque function handle (not fully specified) | Looks up a function exported by a loaded library. Native ABI and invocation details are not specified here. | `var fn = util.findFunctionInDynamicLibrary(handle, "functionName");` |

## Discrepancies and version caveats

1. The published scripting reference may omit methods registered by this source snapshot, including `getDoubleFromBytes`, `toStringFixed`, `encodeSHA256`, `encodeSHA512`, `fromBase64Bytes`, `writeBytes`, `gotoURL`, selection helpers, and dynamic-library helpers.
2. In the checked `ScriptUtil.cpp`, `getInt64FromBytes` is registered to `ScriptUtil::getInt32FromBytes` despite a separate 64-bit implementation. Treat the exposed result as unreliable in this revision.
3. Runtime probes on Chataigne 1.10.4 found the float, double, and int32 byte decoders to use little-endian inputs, while the `floatToHexSeq` and `doubleToHexSeq` Boolean behavior was opposite the `littleEndian` parameter name. These observations conflict with some source/reference descriptions and should be verified before relying on byte order.
4. The same 1.10.4 probes found expression-form-dependent strict equality for tested numeric results: values all reported `typeof "number"` yet results that displayed identically were not always strictly equal. This appears to be a runtime behavior, not a documented guarantee of `hexStringToInt`.
5. Repeated `colorToHex` probes produced form- and channel-dependent results that did not establish a reliable channel contract. Treat its table description as unresolved pending further investigation.
6. File/path helper observations were limited to selected existing host paths and generated missing paths. Existence helpers returned numeric `0`/`1` in tested cases, and path parsing helpers returned void for tested uncreated candidates. Do not assume these results cover all path formats or platforms.
7. Methods that access files, the clipboard, processes, URLs, dialogs, or dynamic libraries have not been behaviorally validated by this read-only probe series. Use them only with deliberate, isolated testing and appropriate safeguards.
8. This inventory establishes method registration, not universal availability. Validate API presence, return values, and failure behavior against the installed Chataigne build.
9. `local` is protocol-specific and `root` depends on the loaded session. Their method surfaces are described in [02_script_api_reference.md](./02_script_api_reference.md) and [05_api_catalog.md](./05_api_catalog.md).
