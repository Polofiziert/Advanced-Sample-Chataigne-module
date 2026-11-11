# Util probe findings: Chataigne 1.10.4

- **Evidence:** [`dumps/06_util_probes.md`](./dumps/06_util_probes.md), runs 1
  through 20.
- **Latest run time in log:** 2026-11-11 14:30:53 (local log time)
- **Chataigne version:** 1.10.4, returned by `util.getAppVersion()`
- **Scope:** Read-only Util probes; no UI or external state changes were
  intentionally made.

## Latest run summary

The twentieth run completed the eight `HOST`-mode probes:

- 0 `PASS`
- 0 `FAIL`
- 8 `OBSERVATION ONLY`
- No parser/runtime error interrupted the run.

Run 19 completed six `HOST`-mode probes with 0 `PASS`, 0 `FAIL`, and 6
`OBSERVATION ONLY`.

Run 18 completed 12 `PATH`-mode probes with 0 `PASS`, 0 `FAIL`, and 12
`OBSERVATION ONLY`.

Run 17 completed 11 `PATH`-mode probes with 0 `PASS`, 0 `FAIL`, and 11
`OBSERVATION ONLY`.

Run 16 completed all 55 probes with 14 `PASS`, 0 `FAIL`, and 41
`OBSERVATION ONLY`.

Run 15 completed 54 probes with 14 `PASS`, 0 `FAIL`, and 40
`OBSERVATION ONLY`. Run 14 completed 53 probes with 14 `PASS`, 0 `FAIL`, and 39
`OBSERVATION ONLY`. Run 13 completed 52 probes with 14 `PASS`, 0 `FAIL`, and 38
`OBSERVATION ONLY`. Run 12 completed 49 probes with 14 `PASS`, 0 `FAIL`, and 35
`OBSERVATION ONLY`. Run 11 completed 45 probes with 14 `PASS`, 0 `FAIL`, and 31
`OBSERVATION ONLY`. Run 10 completed 44 probes with 14 `PASS`, 0 `FAIL`, and 30
`OBSERVATION ONLY`. Run 9 completed 43 probes with 14 `PASS`, 0 `FAIL`, and 29
`OBSERVATION ONLY`. Run 8 completed 42 probes with 14 `PASS`, 0 `FAIL`, and 28
`OBSERVATION ONLY`. Run 7 completed 41 probes with 14 `PASS`, 0 `FAIL`, and 27
`OBSERVATION ONLY`. Run 6 completed 39 probes with 14 `PASS`, 0 `FAIL`, and 25
`OBSERVATION ONLY`. Run 5 completed 35 probes with 14 `PASS`, 0 `FAIL`, and 21
`OBSERVATION ONLY`. Runs 3 and 4 had 14 `PASS`, 0 `FAIL`, and 16
`OBSERVATION ONLY`. Run 2 completed 29 probes with 11 `PASS`, 2 `FAIL`, and
16 `OBSERVATION ONLY`. One run-2 failure was a probe expectation bug for float
serialization of `-1.5`; that expectation was corrected.

## Findings

### Confirmed by this run

1. **Live Util method inventory was returned.** `util.getObjectMethods(util)`
   returned 50 names, including `is`, all conversion and encoding methods
   covered by this suite, filesystem helpers, UI helpers, and dynamic-library
   helpers. The current introspection assertion passed.
2. **`getTime()` behaves like an elapsed-seconds clock.** It returned
   `2885.677001953125`, `3563.180908203125`, `6223.158203125`,
   `7299.5908203125`, `7792.8779296875`, `8255.3994140625`,
   `8562.27734375`, `8871.9189453125`, `9051.0224609375`,
   `9201.8076171875`, `9557.3662109375`, `9945.9912109375`,
   `10134.54296875`, `10316.1982421875`, `10687.0302734375`, and
   `11270.2470703125`. Between runs 15 and 16 it advanced about `583.217`
   while logged wall time advanced 583 seconds. This strongly supports
   seconds as the unit, though its clock origin remains unknown.
3. **`getTimestamp()` behaves like Unix seconds.** It returned `1794393691`,
   `1794394368`, `1794397028`, `1794398105`, `1794398598`, `1794399060`,
   `1794399367`, `1794399677`, `1794399856`, `1794400007`, `1794400362`, and
   `1794400751`, `1794400940`, `1794401121`, `1794401492`, and `1794402075`.
   Between runs 15 and 16 it advanced 583 seconds, matching the logged
   interval. This strongly supports Unix seconds in Chataigne 1.10.4.
4. **`toStringFixed(3.14159, 2)` returned `"3.14"`.**
5. **Base64 text round trip passed for ASCII.** `"hello"` encoded to
   `"aGVsbG8="` and decoded back to `"hello"`.
6. **`fromBase64Bytes("AQID")` formatted as `[1, 2, 3]`.** The returned value
   is array-like with those elements; the log formatter does not establish its
   concrete host-side type.
7. **Digest output formats match standard known vectors.**
   - SHA-256 of `"abc"` was lowercase hexadecimal:
     `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad`
   - SHA-512 of `"abc"` was lowercase hexadecimal:
     `ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f`
   - HMAC-SHA1 for text `"The quick brown fox jumps over the lazy dog"` and key
     `"key"` was Base64:
     `3nybhbi3iqa8ino29wqQcBydtNk=`

### Unexpected results requiring follow-up

1. **Byte decoders are little-endian in the tested cases.**
   - `getFloatFromBytes(63, 128, 0, 0)` returned
     `4.600602988224807e-41`; reversing the bytes to
     `(0, 0, 128, 63)` returned `1.0`.
   - `getInt32FromBytes(0, 0, 2, 10)` returned `167903232`; reversing them to
     `(10, 2, 0, 0)` returned `522`.
   - `getDoubleFromBytes(63, 240, 0, 0, 0, 0, 0, 0)` returned
     `3.038651941617419e-319`; reversed bytes returned `1.0`.

   The third run confirmed that the corrected canonical cases now pass:
   little-endian float `1.0` and little-endian int32 `522`. The first run's
   `undefined` values were not reproducible and are superseded by later runs.
2. **`getInt64FromBytes` appears to consume only the first four arguments as
   little-endian int32.**
   - `[0,0,0,1,0,0,0,0]` -> `16777216`
   - `[0,0,0,0,0,0,0,1]` -> `0`
   - `[1,0,0,0,0,0,0,0]` -> `1`

   The outputs exactly match decoding only the first four bytes as little-endian
   int32. This supports the checked source finding that the exposed method is
   bound to the 32-bit implementation. It does not characterize signedness,
   out-of-range values, or behavior if passed fewer arguments.
3. **The `littleEndian` Boolean has reversed semantics in the tested
   serialization calls.**
   - `floatToHexSeq(15.125, true)` returned `"41720000"`; `false` returned
     `"00007241"`.
   - `doubleToHexSeq(15.125, true)` returned `"402E400000000000"`; `false`
     returned `"0000000000402E40"`.

   The third run confirms positive and negative float/double sequences. The
   `littleEndian` parameter behaves opposite to its name: `true` produces
   big-endian hex and `false` produces little-endian hex. The float run-2
   failure was caused by the probe's incorrect expected bytes for `-1.5`;
   run 3 has no failure on this test after correcting them.
4. **`hexStringToInt` returns a number, but strict equality appears anomalous.**
   For `"1D"`, the result type is `number`, the displayed value is `29`, and
   subtracting 29 gives 0. Yet `result === 29` is logged as `0` (false) in
   the diagnostic array. `"0x1D"` and lowercase `"1d"` both display 29.
   Runs 3–6 logged comparison results as numeric `1`/`0`. Run 5's
   `typeof` probe returned `["number", "number", "number"]` for the literal
   comparison, parser-result comparison, and parser result. Its explicit
   `if` probe returned `["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]` for
   literal equality, parser-result equality, parser self-equality, arithmetic
   equivalence, and relational comparison, respectively. Therefore, this
   runtime represents comparison-expression results as numbers, and the
   `hexStringToInt("1D")` result behaves numerically like 29 in arithmetic and
   ordering but is unequal under strict equality to the literal 29. Run 6
   added these comparisons:

   - Parser result against literal 29 and arithmetic `20 + 9`: false.
   - Parser result against `getInt32FromBytes(29, 0, 0, 0)`: true, although
     that native result compared with literal 29 is false.
   - Loose equality `parsed == 29`: true.
   - An assigned copy of the parsed result still compared false to 29;
     `parsed + 0`, `parsed * 1`, and `parsed - 0` each compared true.

   This points to a difference in how native-method numeric return values
   participate in strict equality, rather than a bad parsed magnitude.
   Arithmetic produces a value that compares equal to a literal for the
   parser and int32 outputs; the exact internal representation remains
   unknown. Run 7 tested float and double decoder results as well:

   - All four native return values reported type `"number"`.
   - Parsed integer and int32 results were each strictly unequal to literal
     29, but strictly equal to each other; adding zero made each equal to 29.
   - Float and double results for 1.0 were each strictly unequal to literal
     1, but strictly equal to each other.
   - Adding zero to either float or double result still compared false to 1.

   The anomaly therefore also affects decoded floating-point values. Run 8
   added detailed float/double comparisons:

   - Both original values and the results of `+ 0`, `* 1`, `- 0`, and `/ 1`
     displayed as `1.0`; all original and transformed values reported type
     `"number"`.
   - Each native result was strictly equal to itself and loosely equal to
     literal 1, but strictly unequal to literal 1.
   - Every transformed float and double value also remained strictly unequal
     to literal 1.
   - Both native values were less than 2, and subtracting 1 from each
     returned `0.0`.

   Ordinary numeric display, loose equality, ordering, and subtraction all
   agree with the value 1, while strict equality against literal 1 does not.
   This makes a simple value-magnitude error unlikely, but does not identify
   the runtime representation or comparison rule. Run 9 compared each native
   value directly with its `+ 0` result:

   - Parser and int32 outputs were each strictly unequal to their own
     `+ 0` result, while those two transformed outputs were strictly equal
     to one another and to literal 29.
   - Float and double outputs were each strictly equal to their own `+ 0`
     result and to each other.
   - The transformed float and double outputs remained strictly unequal to
     literal 1.
   - All corresponding loose-equality comparisons returned true.

   Thus `+ 0` changes strict-equality behavior for parser/int32 results but
   preserves it for float/double results. Cross-type native outputs compare
   strictly equal when both come from integer APIs or both from floating-point
   APIs, but these tests do not establish the underlying mechanism. Run 10
   compared native values against five forms of 1:

   | Native value | `1` | `1.0` | `0.5 + 0.5` | `2 / 2` | `1 + 0` |
   |---|---:|---:|---:|---:|---:|
   | `hexStringToInt("1")` | false | false | false | false | false |
   | `getInt32FromBytes(1,0,0,0)` | false | false | false | false | false |
   | `getFloatFromBytes(...)` (1.0) | false | true | true | true | false |
   | `getDoubleFromBytes(...)` (1.0) | false | true | true | true | false |

   The float and double rows behaved identically. Parsed/int32 results were
   strictly equal to each other but not to either floating result; float and
   double results were strictly equal to each other. After adding zero,
   equality relationships remained within the integer pair and floating
   pair, while cross-pair comparisons remained false.

   Run 11 added a full pairwise matrix among those native outputs and ordinary
   numeric expressions. Every value reported `typeof "number"`. The matrix
   groups them into three strict-equality classes:

   - Literal `1`, `1 + 0`, and `1 * 1`.
   - Literal `1.0`, `0.5 + 0.5`, `2 / 2`, and the float/double decoder
     results.
   - The hex parser and int32 decoder results.

   Equality was true within each class and false between classes. In
   particular, literal `1` was not strictly equal to `1.0`, although both
   report type `"number"` and their values display as 1. This same-run matrix
   confirms expression-form-dependent equality, but does not explain the
   runtime's internal representation or comparison rule. No further probe is
   needed to map the tested values; new investigation should move to other
   undocumented Util methods rather than extend this equality matrix again.
5. **`colorToHex` output is reproducible but its channel contract remains
   unexplained.**
   The 12 results, in probe order, were:

   | Input form | Result |
   |---|---|
   | Array `[0,0,0]` | `"000000"` |
   | Array `[1,0,0]` | `"000000"` |
   | Array `[0,1,0]` | `"000000"` |
   | Array `[0,0,1]` | `"FFFFFF"` |
   | Array `[1,1,1]` | `"FF0000"` |
   | Array `[1,0.5,0,1]` | `"FF000000"` |
   | Array `[255,128,0,255]` | `"FF000000"` |
   | Positional `(1,0,0)` | `"000000"` |
   | Positional `(0,1,0)` | `"000000"` |
   | Positional `(0,0,1)` | `"FFFFFF"` |
   | Positional `(1,0.5,0,1)` | `"FF000000"` |
   | Positional `(255,128,0,255)` | `"FF000000"` |

   Runs 3–11 reproduced the earlier matrix results. Run 5's additional
   single-channel ramps show that:

   - Array red and green channel changes across `0`, fractions, and byte-like
     values all returned `"000000"`.
   - Array blue returned `"000000"` at 0 and `"FFFFFF"` for every tested
     nonzero value from 0.25 through 255.
   - Positional red also remained `"000000"` for every tested value.
   - Positional blue returned `"000000"` at 0 and 0.5, then `"FFFFFF"` from
     1 through 255.

   Run 6 refined channel levels:

   - Array red and green remained `"000000"` from 0 through 2.
   - Array blue returned `"000000"` at 0, `"414141"` at 0.001,
     `"FEFEFE"` at 0.0039, and `"FFFFFF"` from 0.01 through 2.
   - Positional red and green remained `"000000"` from 0 through 2.
   - Positional blue returned `"000000"` through 1, then `"FFFFFF"` at
     1.001 and 2.

   Run 7 densely sampled array-form blue near zero. For inputs
   `[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035,
   0.0039, 0.004, 0.005, 0.006, 0.008, 0.01]`, output progressed from
   `"000000"` through grayscale values `"070707"`, `"212121"`, `"414141"`,
   `"626262"`, `"828282"`, `"A3A3A3"`, `"C3C3C3"`, and `"E4E4E4"`, then
   `"FEFEFE"` at 0.0039 and `"FFFFFF"` from 0.004 onward.

   The array-blue response is gradual over this interval and reaches full
   white at 0.004; prior wording that described a sharp transition is too
   broad. Other tested channels and overloads remain inconsistent with this
   pattern.

   The alpha ramp with fixed RGB returned `"00FF0000"` for array-form alpha 0
   and `"FFFF0000"` for every tested nonzero alpha. Positional RGBA returned
   `"00000000"` at alpha 0 and `"FF000000"` for every tested nonzero alpha.
   These results support a discontinuous, form-dependent behavior, not a
   conventional normalized or byte-scale channel mapping. They do not yet
   reveal the intended input contract.

   The earlier follow-up alpha tests
   returned `["00000000", "FF000000", "000000", "00000000"]` for array RGBA
   with alpha 0/1 followed by positional RGB/RGBA with alpha omitted/0.
   Three-channel calls produce six hex digits and four-channel calls produce
   eight in those tests; explicit zero alpha is represented as `00`. Channel
   mapping and accepted input contract remain unknown.

6. **Path-helper results are unexpectedly null for synthetic paths.**
   - `getFileName(path, true)` and `getFileName(path, false)` returned `null`
     for `/__util_probe__/archive.tar.gz`, `/__util_probe__/.profile`,
     `/__util_probe__/README`, and `/__util_probe__/folder/`.
   - `getParentDirectory(path)` returned `null` for synthetic absolute,
     relative, bare-filename, and trailing-separator paths. For `/`, it
     returned `/`.
   - `getNonExistentFile("/__util_probe_missing_directory__", "capture.txt")`
     returned the unchanged joined candidate path, despite the directory not
     existing. No file or directory was created.
   - `fileExists` and `directoryExists` both returned numeric `0` (type
     `"number"`) for the synthetic absent path, rather than a boolean.

   Run 13 repeated the null results with further inputs:

   - `getFileName` returned null for every one-argument, `true`, and `false`
     call across Unix-style, Windows-style, relative, bare-name, and dotfile
     paths.
   - `getParentDirectory` returned null for all tested Unix-style,
     Windows-style, relative, bare-name, and Windows-root paths; `/` still
     returned `/`.
   - `getFilePath` returned null for relative, dot-segment, and absolute
     synthetic paths.

   Run 14 explains the earlier nulls for `getParentDirectory` and
   `getFilePath`: those helpers work when given the empty string returned by
   `getCurrentFilePath()`:

   - `getDocumentsDirectory()` -> `"/Users/polo/Documents"` and
     `getDesktopDirectory()` -> `"/Users/polo/Desktop"`; both are strings.
   - `getCurrentFileDirectory()` and `getCurrentFilePath()` both returned
     the empty string, type `"string"`.
   - `directoryExists(documents)` returned numeric `1`; `fileExists("")`
     returned numeric `0`.
   - `getParentDirectory("")` returned
     `"/Users/polo/Documents/Chataigne/modules"`.
   - `getFilePath("")` returned
     `"/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"`.

   Run 15 distinguishes empty, omitted, and non-empty arguments:

   - `getParentDirectory("")` and `getFilePath("")` returned the same strings
     observed in run 14.
   - Calls with no argument returned result type `"void"` and formatted as
     `null`.
   - Calls with a non-empty synthetic path, with or without an extra `true`
     argument, also returned result type `"void"` and formatted as `null`.

   The helpers therefore behave differently for the empty-string argument
   than for omitted or non-empty synthetic inputs. This is reproducible in
   two runs, but the reason empty input resolves to those paths is unknown.
   No directory contents or file contents were accessed.

   Run 16 shows `getFileName` also behaves differently for omitted versus
   supplied paths:

   - With no argument, it returned type `"void"` and formatted as `null`.
   - With the empty string, Documents, Desktop, current-file directory, and
     current-file path inputs, it returned a string basename. Both
     extension-flag values produced the same basename.
   - The returned names were `"Advanced-Sample-Chataigne-module"`,
     `"Documents"`, and `"Desktop"` as appropriate; no extension difference
     was observable because these inputs resolved to directory-like paths.

   Run 17 applied the path helpers to six values returned by Chataigne:
   Documents, Desktop, current-file directory/path (both empty strings), and
   the current script's path/directory.

   - Documents and Desktop were recognized as directories (`directoryExists`
     returned numeric `1`); `fileExists` returned numeric `0`.
   - The script path was recognized as a file (`fileExists` -> numeric `1`,
     `directoryExists` -> numeric `0`); the script directory had the inverse
     results.
   - `getFileName`, `getParentDirectory`, and `getFilePath` returned strings
     for all six values. On the script path, these were
     `"06_util_probes.js"`, the script directory, and the unchanged script
     path, respectively.
   - Empty current-file values again resolved relative to the module context.
     The path helper results for these real/host-derived inputs contrast with
     the nulls from synthetic paths. This suggests the inputs' resolution or
     existence matters, but does not yet prove which condition causes the
     difference.

   Run 18 compared the existing script file and directory with a generated
   candidate path in the existing script directory. The candidate was not
   created:

   - The script file and directory again produced the expected numeric
     existence results and string path-helper results.
   - The generated candidate returned numeric `0` from both existence checks.
     `getFileName`, `getParentDirectory`, and `getFilePath` returned type
     `"void"` (formatted as `null`) for that candidate.
   - On the actual script filename, `getFileName(path, true)` returned
     `"06_util_probes.js"` and `getFileName(path, false)` returned
     `"06_util_probes"`. Thus the Boolean controls whether the extension is
     included for this existing filename.

   Together, runs 17-18 show that the tested path helpers accept existing
   Chataigne-provided paths and reject the generated missing candidate. The
   tests do not distinguish whether rejection is caused by nonexistence,
   path provenance, or another validation rule. Further path probes are not
   currently needed to record this limitation.

## Probe inventory

The probe suite includes:

- The attempted Boolean formatting change did not alter the diagnostic
  output: comparisons still appear as `1`/`0`. This is now itself a runtime
  observation, not evidence that the updated file failed to load.
- `UTIL-CONVERT-018` records `typeof` for literal comparison, parser-result
  comparison, and parser result values.
- `UTIL-CONVERT-019` uses explicit `if` branches to map each equality,
  self-equality, arithmetic, and relational condition to `"TRUE"` or
  `"FALSE"` strings.
- `UTIL-FORMAT-004` varies one RGB channel at a time over normalized-like and
  byte-like levels.
- `UTIL-FORMAT-005` compares array and positional RGB forms over a red/blue
  ramp.
- `UTIL-FORMAT-006` varies alpha while holding RGB fixed, comparing array and
  positional RGBA forms.
- `UTIL-CONVERT-020/021` compare the parsed integer with a literal, arithmetic
  result, another native integer result, and values coerced by arithmetic.
- `UTIL-FORMAT-007` samples finer channel levels around zero and one across
  array and positional RGB forms.
- `UTIL-FORMAT-008` compares RGB and RGBA calls to see whether adding alpha
  changes RGB channel interpretation.
- `UTIL-CONVERT-022` tests strict equality with results from four native
  numeric conversion methods and compares their arithmetic-coerced values.
- `UTIL-FORMAT-009` samples array-form blue values more densely below 0.01.
- `UTIL-CONVERT-023` records native float/double decoder values and compares
  their self, loose, strict, arithmetic, and relational behavior.
- `UTIL-CONVERT-024` compares native numeric results directly with values
  produced by adding zero, including cross-method comparisons.
- `UTIL-CONVERT-025` compares parser/int32/float/double results against
  literal and computed forms of 1, plus cross-category equality.
- `UTIL-CONVERT-026` produces a pairwise strict-equality matrix for ordinary
  numeric expressions and four native Util results.
- `UTIL-PATH-001` tests filename extraction across extensions, dotfiles,
  extension flags, and trailing separators.
- `UTIL-PATH-002` tests parent-directory extraction for absolute, relative,
  bare-filename, trailing-separator, and root paths.
- `UTIL-PATH-003/004` observe candidate generation and existence checks using
  a synthetic path; neither probe creates a file or directory.
- `UTIL-PATH-005` compares one- and two-argument `getFileName` calls across
  Unix-style, Windows-style, relative, bare, and dotfile inputs.
- `UTIL-PATH-006` compares `getParentDirectory` across Unix-style,
  Windows-style, relative, bare, and root paths.
- `UTIL-PATH-007` records `getFilePath` results for relative and absolute
  synthetic paths.
- `UTIL-PATH-008` records directory getter paths and passes them only to
  read-only existence and path helpers; it does not list directory contents.
- `UTIL-PATH-009` compares omitted, empty, non-empty, and extra-argument
  forms of `getParentDirectory` and `getFilePath`.
- `UTIL-PATH-010` tests `getFileName` with empty and host-derived path
  arguments.
- `UTIL-PATH-011` compares read-only helpers across Documents, Desktop,
  current-file, and current-script path values; it does not open or list them.
- `UTIL-PATH-012` compares those helpers for an existing script file,
  existing script directory, and an uncreated candidate path; it also checks
  the extension flag on a real script filename.

`UTIL-CONVERT-024` completed in run 9. `UTIL-CONVERT-025` completed in run
10, and `UTIL-CONVERT-026` completed in run 11. The latest matrix maps three
strict-equality classes for the tested values. Further work on this behavior
is not currently planned. Runs 14-16 confirm that `getParentDirectory` and
`getFilePath` return host-derived strings for empty input but `"void"` for
omitted or non-empty synthetic inputs. Runs 17-18 show that path helpers
return strings for existing Chataigne-provided paths but `"void"` for the
generated missing candidate; `getFileName`'s `false` flag strips the extension
on the tested existing script path. This is sufficient to document the
observed behavior and its remaining ambiguity; no further path-only run is
currently planned. The probe script defaults to path probes for shorter runs;
set `utilProbeMode` to `"ALL"` to execute the full suite. No directory listing,
file read, or write is planned.
Byte-order and serialization findings, digest vectors, and time-unit evidence
remain consistent with earlier runs.

## Coverage status and next batch

The live inventory returned 50 methods, but the suite is not a complete
behavioral reverse engineering of all 50. It currently has focused evidence
for time, conversions, formatting, encoding, paths, and several host helpers.
Run 19 completed the privacy-safe host batch:

- `getObjectProperties(util)` with omitted and all four optional-flag
  combinations returned property names for omitted, `(false, true)`, and
  `(true, true)`; `(false, false)` and `(true, false)` returned type `"void"`.
- `getOSInfos()` returned an object with `name` (string), `type` (number),
  `computerName` (string), `language` (string), and `username` (string).
  Values were not logged.
- `getIPs()` returned an array-like object of length 4 with string elements;
  addresses were not logged.
- A deliberately unlikely environment-variable name returned an empty string.
- `delayThreadMS(10)` returned a number-typed result and the measured
  `getTime()` delta was about 10.74 ms.
- `getSelectedObjectsCount()` returned 1; `getSelectedObject()` returned a
  non-null object. Its identity/details were not logged.

Other inventory methods remain untested or intentionally deferred. File and
directory listing/reading/writing/creation, clipboard access, process control,
URL launching, dynamic-library loading, and dialogs can affect or expose
external state and need a deliberate, isolated test design. Selection
observations depend on the current UI selection; probes record only count,
type, and null state, not object details.

Run 20's cross-object introspection observations:

- `getObjectMethods(script)` returned an array-like object with 37 method
  names; `getObjectMethods(getOSInfos())` returned type `"void"`.
- `getObjectProperties(script)` returned 15 entries by default. The
  `(true, false)` and `(false, true)` forms returned 11 and 4 entries,
  respectively; `(true, true)` returned 15, and `(false, false)` returned
  `"void"`.
- For `local`, the corresponding method/property counts were 33 methods and
  18 default properties; `(true, false)` returned 14, `(false, true)` 4,
  `(true, true)` 18, while `(false, false)` returned `"void"`.
- For `root`, the counts were 28 methods and 12 default properties;
  `(true, false)` returned 8, `(false, true)` 4, `(true, true)` 12, while
  `(false, false)` returned `"void"`.

These are counts from this session/build, not stable API guarantees. The
consistent four-entry `(false, true)` results and combined totals suggest
the flags select object and parameter properties, but the meaning of
`"void"` for `(false, false)` remains uncertain. The next `HOST` batch applies
the same count-only matrix to the current selected object, guarded for no
selection. The `is` method is present in the live inventory, but its
signature/semantics are not known well enough to invoke safely. Thus this is
a staged reverse-engineering effort, not a claim of exhaustive coverage.

These are runtime observations for the logged 1.10.4 build. They are evidence
for a later documentation review, not edits to the reference documentation.
