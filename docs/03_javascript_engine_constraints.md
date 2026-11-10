# JUCE / Chataigne JavaScript Engine Notes

## What the current public source establishes

The public Chataigne repository references `Modules/juce_organicui` as a submodule at commit `faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3`. Its `Script.cpp` constructs a `JavascriptEngine`, registers native objects named `script`, `local`, and `util`, and evaluates script text. The corresponding JUCE fork's `juce_Javascript.h` calls the engine “a simple javascript interpreter” and explicitly says it is not fully standards-compliant; its constructor documentation says it defines basic `Object`, `String`, `Array`, and `Math` methods.

Sources:

- [Chataigne repository](https://github.com/benkuper/Chataigne)
- [Pinned Chataigne `juce_organicui` submodule](https://github.com/benkuper/juce_organicui/tree/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3)
- [`Script.cpp` at the pinned submodule revision](https://github.com/benkuper/juce_organicui/blob/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3/script/Script.cpp)
- [`ScriptUtil.cpp` at the pinned submodule revision](https://github.com/benkuper/juce_organicui/blob/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3/script/ScriptUtil.cpp)
- [JUCE `juce_Javascript.h` in the `develop-local` fork](https://github.com/benkuper/JUCE/blob/d8b1e81eca9bd52a2f0e0783f687f991fa084a7f/modules/juce_core/javascript/juce_Javascript.h)
- [JUCE `juce_Javascript.cpp` in the same fork](https://github.com/benkuper/JUCE/blob/d8b1e81eca9bd52a2f0e0783f687f991fa084a7f/modules/juce_core/javascript/juce_Javascript.cpp)

The checked public source describes a JUCE JavaScript interpreter; it does not establish that Chataigne uses QuickJS or provides ES2023 support. Do not assume compatibility with a different JavaScript engine.

This source snapshot may not match the installed Chataigne build. Re-check the relevant source revision when the target application version changes.

## Reported runtime limitations

Do not assume that `RegExp` or `String.slice` is available:

Their availability is not established by the inspected source and may vary by version. Test these features in the target application before relying on them. Value-change notification behavior is described in [06_runtime_compatibility.md](./06_runtime_compatibility.md).

## Built-in name inventory (not a per-method API reference)

The linked `juce_Javascript.cpp` registers the following names. This is a compatibility inventory, not a complete per-method reference: signatures and edge-case semantics should be checked in that source and in the target application.

- Global functions: `exec`, `eval`, `trace`, `charToInt`, `parseInt`, `parseFloat`, `typeof`.
- `Object`: `dump`, `clone`.
- `Array`: `contains`, `remove`, `join`, `push`, `splice`, `indexOf`.
- `String`: `substring`, `indexOf`, `charAt`, `charCodeAt`, `fromCharCode`, `split`, `replace`, `replaceCharacters`, `trim`, `retainCharacters`, `startsWith`, `endsWith`, `contains`, `matches`, `toLowerCase`, `toUpperCase`, `getFloat`, `getInt`, `fromFloat`.
- `Math` methods: `abs`, `round`, `random`, `randInt`, `min`, `max`, `range`, `sign`, `toDegrees`, `toRadians`, `sin`, `asin`, `sinh`, `asinh`, `cos`, `acos`, `cosh`, `acosh`, `tan`, `atan`, `tanh`, `atanh`, `log`, `log10`, `exp`, `pow`, `sqr`, `sqrt`, `ceil`, `floor`, `hypot`, `lerp`, `atan2`. Constants: `PI`, `E`, `SQRT2`, `SQRT1_2`, `LN2`, `LN10`, `LOG2E`, `LOG10E`.
- `JSON`: `stringify`, `parse`.
- `Integer`: `parseInt`, `toHexString`.

Representative, directly usable examples:

```js
var values = [1, 2];
values.push(3);
script.log(values.join(","));

var label = "  device ready  ".trim().toUpperCase();
script.log(label);

var data = JSON.parse("{\"enabled\":true}");
script.log(data.enabled);
```

`String.matches()` is implemented through JUCE wildcard matching, not regular expressions. The inspected `Array` registration does not include `map`, `filter`, `forEach`, or `reduce`; the inspected `String` registration does not include `slice`.

The parser's keyword list in that source includes `var`, `if`, `else`, `do`, `null`, `while`, `for`, `break`, `continue`, `undefined`, `function`, `return`, `true`, `false`, `new`, and `typeof`. It does not list `let`, `const`, `class`, or arrow-function syntax. This is a more useful compatibility guide than calling it broadly “ES5”: still validate against the exact runtime build because Chataigne can change its JUCE dependency or wrapper.

## Conservative coding profile

For Chataigne scripts, use the inspected interpreter's documented subset as a conservative compatibility target. The Advanced Example uses `var` and plain functions. Test any feature outside the listed grammar and built-ins in the actual Chataigne version before adopting it.

Do not assume the runtime is a browser or Node.js:

- Host APIs are supplied by Chataigne (`script`, `local`, `root`, `util`, and callbacks); see [02_script_api_reference.md](./02_script_api_reference.md), [05_api_catalog.md](./05_api_catalog.md), and [07_script_host_api.md](./07_script_host_api.md).
- Browser APIs and Node APIs are not established by these docs.
- `module.json` supports a list of script files, but the docs do not define ES module imports/exports or enough detail to rely on a specific script initialization order.

Editor targets and declarations are static-analysis aids. They do not prove that the runtime supports or lacks a JavaScript feature. See [07_script_host_api.md](./07_script_host_api.md) for source-registered host methods.

## References

- [Official Chataigne documentation](https://benjamin.kuperberg.fr/chataigne/docs)
- [Chataigne public source repository](https://github.com/benkuper/Chataigne)
- [Pinned `juce_organicui` script wrapper](https://github.com/benkuper/juce_organicui/tree/faf9b5eccaec9e0cabf32bbf220496b2a1cd2ad3/script)
- [JUCE JavaScript interpreter header](https://github.com/benkuper/JUCE/blob/d8b1e81eca9bd52a2f0e0783f687f991fa084a7f/modules/juce_core/javascript/juce_Javascript.h)
