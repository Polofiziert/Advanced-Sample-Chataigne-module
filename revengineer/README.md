# Reverse-engineering notes

This folder is the working area for runtime observations and findings. Keep
evidence here until it has been reviewed and there is enough information for
one deliberate documentation update. Do not edit the root `README.md` or
anything under `docs/` during evidence gathering.

## Util probe run

[`06_util_probes.js`](../06_util_probes.js) runs read-only Util API probes
during module initialization. Enable that script's **Log** option in Chataigne,
then copy all `[UTIL-PROBE]` log lines into a Markdown report in this folder.
The default `utilProbeMode` is `HOST`, which runs bounded, privacy-safe
host/introspection probes, including selection state without selected-object
details. Set it to `PATH` for path probes or `ALL` for the full suite.
The initial suite avoids UI, filesystem, clipboard, and process side effects.
`PASS` and `FAIL` indicate checks against an explicit expected value;
undocumented behavior is labeled `OBSERVATION ONLY`, and runtime exceptions
appear as Chataigne Script errors. If a probe raises an error, the run stops;
the last logged test ID identifies the probe that was running.

For each run, record:

- Chataigne version and operating system.
- Date/time of the run.
- Any relevant module or script settings.
- The complete `[UTIL-PROBE]` output, unchanged.
- Human observations or interpretation, kept separate from raw output.

Use one report per run so results from different versions are not mixed.
Preserve failures and surprising output; do not edit the documentation based on
a single unexplained observation.