# Chataigne Module Development Guide

This guide explains how to build custom Chataigne modules and write scripts
for them. It covers module definitions, callbacks, host APIs, JavaScript
runtime compatibility, and the OSC routing pattern used by the Advanced
Example module.

Chataigne's script APIs and protocol behavior can vary between releases.
Treat version-specific details as guidance, then verify them in the target
application and its generated script templates. The [official Chataigne
documentation](https://benjamin.kuperberg.fr/chataigne/docs) and [public
source repository](https://github.com/benkuper/Chataigne) are useful references
for updates.

## Recommended reading order

1. [01_module_system.md](./01_module_system.md) — module folders, `module.json`,
   parameters, values, commands, scripts, and workflow.
2. [02_script_api_reference.md](./02_script_api_reference.md) — script
   contexts, callback signatures, and protocol-specific `local` APIs.
3. [04_osc_routing.md](./04_osc_routing.md) — OSC route registration and
   message handling in the Advanced Example module.
4. [05_api_catalog.md](./05_api_catalog.md) — Chataigne controllable,
   container, manager, automation, and command-link APIs.
5. [07_script_host_api.md](./07_script_host_api.md)
   — `script` and `util` methods registered in the cited public source revision.
6. [03_javascript_engine_constraints.md](./03_javascript_engine_constraints.md)
   — runtime compatibility and JavaScript language constraints.
7. [06_runtime_compatibility.md](./06_runtime_compatibility.md) — value
   notifications, native-backed objects, and runtime caveats.

## API reference format

API tables use a shared, JSDoc-inspired schema: **Method**, **Arguments and
types**, **Returns**, **Description**, and **Example**. Optional arguments are
marked `?`. Types are descriptive, not official Chataigne TypeScript
declarations. Unknown return types or behaviors are identified rather than
inferred. Examples use the supported JavaScript subset and note when a
Chataigne object must already exist.

This structure follows [JSDoc's `@param`
guidance](https://jsdoc.app/tags-param) and [`@returns`
guidance](https://jsdoc.app/tags-returns), as well as [Google's API reference
guidance](https://developers.google.com/style/api-reference-comments) to
describe methods, parameters, return values, and examples.

## Scope and known gaps

- The guide focuses on Module Scripts and the Advanced Example's OSC use. The
  official references name Condition, Consequence, Mapping Filter, and Mapping
  Output scripts, but complete context-specific callback/API signatures are
  not included here. Use the generated template for those script contexts.
- Public-source API types and return behavior are not specified for every
  method. Such details are marked as unspecified rather than inferred.
- Protocol `local` methods and module-base behaviors can vary by Chataigne
  version. The source-linked inventory describes a specific public source
  revision, not every release.
- The JavaScript built-in inventory is a compatibility overview, not an
  exhaustive reference for every method's overloads and edge cases.
