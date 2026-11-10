# Script Host and Utility API Reference

This reference covers the `script` and `util` host objects registered in the cited public Chataigne source revision. It complements the [official Chataigne documentation](https://benjamin.kuperberg.fr/chataigne/docs) and does not guarantee availability in every release.

## Source revisions and confidence

- Chataigne pins `Modules/juce_organicui` to [`faf9b5e`](https://github.com/benkuper/juce_organicui/tree/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3).
- Host registrations: [`Script.cpp`](https://github.com/benkuper/juce_organicui/blob/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3/script/Script.cpp) and [`ScriptUtil.cpp`](https://github.com/benkuper/juce_organicui/blob/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3/script/ScriptUtil.cpp).
- Interpreter grammar and built-ins: [JUCE `juce_Javascript.cpp`](https://github.com/benkuper/JUCE/blob/d8b1e81eca9bd52a2f0e0783f687f991fa084a7f/modules/juce_core/javascript/juce_Javascript.cpp).

The method names are source-registered. Argument and return types below use published API documentation where available and otherwise describe the apparent native contract; behavior not established by either source is marked **Not specified**. Check runtime availability and edge cases in the target Chataigne version.

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
| `delayThreadMS(milliseconds)` | `milliseconds: number` | Not specified | Delays the calling script thread. Blocking behavior may depend on the execution context. | `util.delayThreadMS(100);` |
| `getFloatFromBytes(byte1, byte2, byte3, byte4)` | four `number` byte values | `number` | Reinterprets four bytes as a float. The documented byte order is big-endian (first byte most significant). | `var value = util.getFloatFromBytes(0, 0, 2, 10);` |
| `getDoubleFromBytes(byte1, ..., byte8)` | eight `number` byte values | `number` | Reinterprets eight bytes as a double. Byte-order details are not fully documented. | `var value = util.getDoubleFromBytes(0, 0, 0, 0, 0, 0, 0, 0);` |
| `getInt32FromBytes(byte1, byte2, byte3, byte4)` | four `number` byte values | `number` | Converts four bytes to a 32-bit integer; the documented byte order is big-endian. | `var value = util.getInt32FromBytes(0, 0, 2, 10);` |
| `getInt64FromBytes(byte1, ..., byte8)` | eight `number` byte values | **Unreliable in inspected revision** | The registration is bound to the 32-bit implementation in the checked source, despite a separate 64-bit implementation. Verify before use; see caveats below. | `var value = util.getInt64FromBytes(0, 0, 0, 0, 0, 0, 0, 1);` |
| `floatToHexSeq(value, littleEndian)` | `value: number`, `littleEndian: boolean` | Not specified | Converts a float to a hexadecimal byte sequence using the requested byte order. | `var bytes = util.floatToHexSeq(15.125, true);` |
| `doubleToHexSeq(value, littleEndian)` | `value: number`, `littleEndian: boolean` | Not specified | Converts a double to a hexadecimal byte sequence using the requested byte order. | `var bytes = util.doubleToHexSeq(15.125, true);` |
| `hexStringToInt(value)` | `value: string` | `number` | Parses a hexadecimal string as an integer. | `var value = util.hexStringToInt("1D");` |
| `toStringFixed(value, decimals)` | `value: number`, `decimals: number` (integer) | `string` | Formats a number to a fixed number of decimal places. | `var text = util.toStringFixed(3.14159, 2);` |
| `colorToHex(r, g, b, a?)` or `colorToHex(channels)` | normalized channel `number`s, optional alpha; or `number[]` | `string` | Converts normalized channels to hexadecimal text. With alpha, the documented format is AARRGGBB; without alpha, RRGGBB. | `var hex = util.colorToHex([1, 0.5, 0, 1]);` |

## `util`: host, files, and process helpers

| Method | Arguments and types | Returns | Description | Example |
|---|---|---|---|---|
| `getAppVersion()` | none | `string` | Returns the Chataigne version. | `var version = util.getAppVersion();` |
| `getOSInfos()` | none | object with OS/user fields | Returns host information such as `name`, `type`, `computerName`, `language`, and `username`. | `var info = util.getOSInfos(); script.log(info.username);` |
| `getEnvironmentVariable(name)` | `name: string` | Not specified | Reads an environment variable. Missing-variable behavior is not specified. | `var pathEnv = util.getEnvironmentVariable("PATH");` |
| `getIPs()` | none | `string[]` | Returns available local IP addresses. | `var ips = util.getIPs();` |
| `getDocumentsDirectory()` / `getDesktopDirectory()` | none | `string` | Returns the corresponding user directory path. | `var docs = util.getDocumentsDirectory();` |
| `getCurrentFileDirectory()` / `getCurrentFilePath()` | none | `string` | Returns the current session file's directory or full path. | `var sessionPath = util.getCurrentFilePath();` |
| `getParentDirectory(path)` | `path: string` | `string` | Returns the parent directory of a path. | `var parent = util.getParentDirectory("/tmp/example.txt");` |
| `getFileName(path, withExtension?)` | `path: string`, `withExtension?: boolean` | `string` | Extracts the file name; optional flag controls whether the extension is retained. | `var name = util.getFileName("/tmp/example.txt", true);` |
| `getFilePath(relativePath)` | `relativePath: string` | `string` | Resolves a relative path to an absolute path. | `var absolute = util.getFilePath("settings.json");` |
| `fileExists(path)` / `directoryExists(path)` | `path: string` | `boolean` | Checks whether the path refers to an existing file or directory. | `var exists = util.fileExists(script.getScriptPath());` |
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
| `encodeHMAC_SHA1(text, key)` | `text: string`, `key: string` | Not specified | Computes an HMAC-SHA1 value. Output encoding is not specified. | `var digest = util.encodeHMAC_SHA1("message", "secret");` |
| `encodeSHA256(text)` / `encodeSHA512(text)` | `text: string` | Not specified | Computes a SHA-256 or SHA-512 digest. Output encoding is not specified. | `var digest = util.encodeSHA256("message");` |
| `toBase64(value)` / `fromBase64(value)` | `value: string` | `string` | Encodes text to Base64 or decodes Base64 text. | `var encoded = util.toBase64("hello");` |
| `fromBase64Bytes(value)` | `value: string` | Not specified | Decodes Base64 to bytes; exact return representation is not documented. | `var bytes = util.fromBase64Bytes("AQID");` |
| `getObjectProperties(object, includeParameters?, includeObjects?)` | `object: object`, optional `boolean`s | Not specified | Enumerates an object's properties, with optional parameter/object filtering. | `var properties = util.getObjectProperties(local, true, true);` |
| `getObjectMethods(object)` | `object: object` | `string[]` | Enumerates method names exposed by an object. | `var methods = util.getObjectMethods(local);` |
| `getSelectedObject()` | none | Chataigne object or no selection | Returns the selected Chataigne object. Empty-selection behavior is not specified. | `var selected = util.getSelectedObject();` |
| `getSelectedObjectsCount()` | none | `number` | Returns the number of selected objects. | `var count = util.getSelectedObjectsCount();` |
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
3. This inventory establishes method registration, not universal availability. Validate API presence, return values, and failure behavior against the installed Chataigne build.
4. `local` is protocol-specific and `root` depends on the loaded session. Their method surfaces are described in [02_script_api_reference.md](./02_script_api_reference.md) and [05_api_catalog.md](./05_api_catalog.md).
