# JavaScript runtime quirks

Findings in this file are observations from a running Chataigne build, not
claims about every version of the JUCE JavaScript engine. Keep the original
error text and record the Chataigne version whenever available.

## JRQ-001: `try` statement rejected while parsing a module script

- **Status:** Observed; needs versioned reproduction.
- **Observed:** 2026-11-11.
- **Chataigne version:** 1.10.4 (reported by `util.getAppVersion()` in this run).
- **Script:** `06_util_probes.js`.
- **Starting point:** The script contained a `try { ... } catch (error) { ... }`
  statement inside `runUtilProbe()`.
- **Intent:** Catch a failing Util API call, log the exception, and continue
  running the remaining probes.
- **Exact Chataigne log:**

  ```text
  11:32:25 CustomLoggerUI Cleared.
  11:32:27 Script : 06_util_probes Script error : Line 61, column 7 : Found '{' when expecting ';'
  ```

- **Result:** The script failed to parse at the opening brace of `try`. No
  probe results were produced in that run.
- **Interpretation:** The installed script parser does not accept this `try`
  statement syntax in this context. This is evidence about the tested build,
  not proof that all Chataigne or JUCE JavaScript versions reject
  `try`/`catch`.
- **Workaround used:** Remove `try`/`catch`. If a probe throws, Chataigne
  reports a Script error and execution stops; the last logged test ID
  identifies the active probe.
- **Follow-up:** Re-run the probe script and record the Chataigne version. If
  possible, make a minimal isolated test containing only `try`/`catch` to
  determine whether the rejection is specific to this construct or affected by
  surrounding syntax. Test other exception-handling constructs separately
  before documenting broader language support.
- **Documentation candidate:** Add a version-qualified runtime limitation and
  the confirmed syntax-safe error-reporting approach to the JavaScript engine
  notes after the finding has been reproduced and reviewed.

## JRQ-002: Global `String(value)` call fails at runtime

- **Status:** Observed on Chataigne 1.10.4; needs isolated reproduction.
- **Observed:** 2026-11-11.
- **Script:** `06_util_probes.js`.
- **Starting point:** `UTIL-TIME-001` called `util.getTime()`, then passed its
  numeric result to `describeUtilProbeResult()`. That function attempted
  `String(value)`.
- **Intent:** Convert the host result to readable text for the probe log.
- **Relevant Chataigne output:**

  ```text
  [UTIL-PROBE] TEST: UTIL-TIME-001
  [UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
  [UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
  [UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
  06_util_probes Script Error :
                   Line 30, column 18 : This expression is not a function!
  ```

- **Result:** The probe stopped before logging the `getTime()` result or status.
- **Interpretation:** In this call context, `String(value)` was not callable in
  the Chataigne 1.10.4 runtime. The log does not establish whether the global
  `String` name is absent, non-callable, or behaves differently in other
  contexts.
- **Workaround used:** Replace `String(value)` with `"" + value`; this uses
  string concatenation for primitive and fallback result formatting.
- **Follow-up:** Re-run the full probes. If further conversion errors occur,
  add a minimal isolated test for global `String` before making a broader
  runtime-compatibility claim.
- **Documentation candidate:** Note only the confirmed version/context
  limitation after an isolated reproduction.

## JRQ-003: `for...in` statement rejected while parsing a module script

- **Status:** Observed on Chataigne 1.10.4; indexed-loop workaround validated.
- **Observed:** 2026-11-11.
- **Script:** `06_util_probes.js`.
- **Starting point:** `UTIL-HOST-002` used `for (key in info)` to enumerate
  field names from `util.getOSInfos()`.
- **Intent:** Record OS-info field names and value types without exposing
  potentially identifying values.
- **Exact Chataigne log:**

  ```text
  14:22:43 Script : 06_util_probes Script error : Line 1201, column 16 : Found identifier when expecting ';'
  ```

- **Result:** The script failed to parse before probes ran. The error points
  to the `for...in` statement; it does not establish whether other object
  enumeration syntax is supported.
- **Workaround used:** Obtain property names through `util.getObjectProperties`
  and iterate its array-like result with a conventional indexed `for` loop.
- **Follow-up:** Re-run the updated script. If object enumeration syntax is
  needed elsewhere, test it in a minimal isolated script before relying on it.
  The updated script subsequently loaded successfully and completed all six
  `HOST` probes in run 19; the workaround resolved the parse failure.

## Probe result note: introspection false negative

The same Chataigne 1.10.4 run returned a method list visibly containing both
`getFloatFromBytes` and `fileExists`, but `UTIL-INTROSPECT-001` reported
`FAIL`. Its check depended on `result.indexOf`. The returned list is clearly
array-like for formatting, but this run did not establish that its
`indexOf` member is callable. The probe now checks method names by iterating
the list instead. Re-run to confirm the corrected check reports `PASS`.
