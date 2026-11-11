# Log Dump of the util probe script 01
```
11:41:28	CustomLoggerUI	Cleared.
11:41:31	Script : 06_util_probes	Script loaded succesfully
11:41:31	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: 2885.677001953125
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794393691
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four bytes.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 128, 0, 0] represent 1.0 in big-endian IEEE-754.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: undefined
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: FAIL
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four bytes to a 32-bit integer.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 2, 10]; big-endian interpretation is 522.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: undefined
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: FAIL
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 29.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: FAIL
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe color channel order, alpha handling, and output casing.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Channels [1, 0.5, 0, 1], then the same channels as separate arguments.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both outputs; documented formats are RRGGBB without alpha and AARRGGBB with alpha.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FF000000", "FF000000"]
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the output encoding and casing of SHA-256.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the raw output; the API documentation does not specify output encoding.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the output encoding and casing of SHA-512.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; record the raw output for later comparison with a standard digest.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the raw output; the API documentation does not specify output encoding.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
11:41:31	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the output encoding of HMAC-SHA1.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
11:41:31	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the raw output; the API documentation does not specify output encoding.
11:41:31	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
11:41:31	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:41:31	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=7 FAIL=3 OBSERVATION ONLY=10
11:41:31	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```

# Log Dump of the util probe script 02
```
11:52:46	CustomLoggerUI	Cleared.
11:52:48	Script : 06_util_probes	Script loaded succesfully
11:52:48	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3563.180908203125
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794394368
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four bytes.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 128, 0, 0] represent 1.0 in big-endian IEEE-754.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: 4.600602988224807e-41
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: FAIL
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four bytes to a 32-bit integer.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 2, 10]; big-endian interpretation is 522.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: 167903232
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, C0C00000, 0000C0C0.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: FAIL
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
11:52:48	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
11:52:48	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
11:52:48	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
11:52:48	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=11 FAIL=2 OBSERVATION ONLY=16
11:52:48	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```

# Log Dump of the util probe script 03
```
12:37:05	CustomLoggerUI	Cleared.
12:37:08	Script : 06_util_probes	Script loaded succesfully
12:37:08	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: 6223.158203125
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794397028
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
12:37:08	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:37:08	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
12:37:08	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:37:08	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=16
12:37:08	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```

# Log Dump of the util probe script 04
```
12:55:03	CustomLoggerUI	Cleared.
12:55:05	Script : 06_util_probes	Script loaded succesfully
12:55:05	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: 7299.5908203125
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794398105
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
12:55:05	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
12:55:05	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
12:55:05	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
12:55:05	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=16
12:55:05	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```

# Log Dump of the util probe script 05
```
13:03:16	CustomLoggerUI	Cleared.
13:03:18	Script : 06_util_probes	Script loaded succesfully
13:03:18	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: 7792.8779296875
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794398598
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:03:18	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:03:18	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:03:18	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:03:18	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=21
13:03:18	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```

# Log Dump of the util probe script 06
```
13:10:58	CustomLoggerUI	Cleared.
13:11:00	Script : 06_util_probes	Script loaded succesfully
13:11:00	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: 8255.3994140625
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794399060
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:11:00	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:11:00	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:11:00	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:11:00	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=25
13:11:00	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```

# Log Dump of the util probe script 07
```
13:16:06	CustomLoggerUI	Cleared.
13:16:07	Script : 06_util_probes	Script loaded succesfully
13:16:07	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: 8562.27734375
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794399367
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:16:07	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:16:07	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:16:07	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:16:07	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=27
13:16:07	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 08
```
13:21:15	CustomLoggerUI	Cleared.
13:21:17	Script : 06_util_probes	Script loaded succesfully
13:21:17	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: 8871.9189453125
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794399677
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-023
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect arithmetic and comparison behavior of native floating-point results.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, "number", "number", "number", "number", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", 0.0, 0.0]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:21:17	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:21:17	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:21:17	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:21:17	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=28
13:21:17	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 09
```
13:24:14	CustomLoggerUI	Cleared.
13:24:16	Script : 06_util_probes	Script loaded succesfully
13:24:16	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: 9051.0224609375
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794399856
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-023
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect arithmetic and comparison behavior of native floating-point results.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, "number", "number", "number", "number", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", 0.0, 0.0]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-024
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric results directly with arithmetic-produced values.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare parser/int32 results for 29 and float/double results for 1.0 with their +0 values and with each other.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and loose equality for original-to-transformed pairs, cross-method pairs, and literals to identify whether arithmetic changes equality representation.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:24:16	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:24:16	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:24:16	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:24:16	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=29
13:24:16	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```

# Log Dump of the util probe script 10
```
13:26:44	CustomLoggerUI	Cleared.
13:26:47	Script : 06_util_probes	Script loaded succesfully
13:26:47	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: 9201.8076171875
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794400007
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-023
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect arithmetic and comparison behavior of native floating-point results.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, "number", "number", "number", "number", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", 0.0, 0.0]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-024
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric results directly with arithmetic-produced values.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare parser/int32 results for 29 and float/double results for 1.0 with their +0 values and with each other.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and loose equality for original-to-transformed pairs, cross-method pairs, and literals to identify whether arithmetic changes equality representation.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-025
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric categories with literals and arithmetic-produced values.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Create parsed integer, decoded int32, float, and double values for 1; compare each with 1, 1.0, 0.5+0.5, 2/2, and 1+0.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return strict-equality rows for each native result, then cross-category native equality and cross-category equality after adding zero.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"]]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:26:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:26:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:26:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:26:47	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=30
13:26:47	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```

# Log Dump of the util probe script 11
```
13:32:41	CustomLoggerUI	Cleared.
13:32:42	Script : 06_util_probes	Script loaded succesfully
13:32:42	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: 9557.3662109375
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794400362
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-023
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect arithmetic and comparison behavior of native floating-point results.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, "number", "number", "number", "number", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", 0.0, 0.0]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-024
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric results directly with arithmetic-produced values.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare parser/int32 results for 29 and float/double results for 1.0 with their +0 values and with each other.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and loose equality for original-to-transformed pairs, cross-method pairs, and literals to identify whether arithmetic changes equality representation.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-025
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric categories with literals and arithmetic-produced values.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Create parsed integer, decoded int32, float, and double values for 1; compare each with 1, 1.0, 0.5+0.5, 2/2, and 1+0.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return strict-equality rows for each native result, then cross-category native equality and cross-category equality after adding zero.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"]]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-026
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map strict equality among ordinary numeric expressions and native Util results.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare literal 1, decimal literal 1.0, 0.5+0.5, 2/2, 1+0, 1*1, hexStringToInt("1"), getInt32FromBytes(1,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63).
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return labels, typeof results, and a pairwise strict-equality matrix in the same order.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["literal 1", "literal 1.0", "0.5+0.5", "2/2", "1+0", "1*1", "hex parser", "int32 decoder", "float decoder", "double decoder"], ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], [["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"]]]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:32:42	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:32:42	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:32:42	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:32:42	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=31
13:32:42	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 12
```
13:39:08	CustomLoggerUI	Cleared.
13:39:11	Script : 06_util_probes	Script loaded succesfully
13:39:11	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: 9945.9912109375
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794400751
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-023
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect arithmetic and comparison behavior of native floating-point results.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, "number", "number", "number", "number", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", 0.0, 0.0]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-024
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric results directly with arithmetic-produced values.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare parser/int32 results for 29 and float/double results for 1.0 with their +0 values and with each other.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and loose equality for original-to-transformed pairs, cross-method pairs, and literals to identify whether arithmetic changes equality representation.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-025
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric categories with literals and arithmetic-produced values.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Create parsed integer, decoded int32, float, and double values for 1; compare each with 1, 1.0, 0.5+0.5, 2/2, and 1+0.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return strict-equality rows for each native result, then cross-category native equality and cross-category equality after adding zero.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"]]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-026
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map strict equality among ordinary numeric expressions and native Util results.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare literal 1, decimal literal 1.0, 0.5+0.5, 2/2, 1+0, 1*1, hexStringToInt("1"), getInt32FromBytes(1,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63).
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return labels, typeof results, and a pairwise strict-equality matrix in the same order.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["literal 1", "literal 1.0", "0.5+0.5", "2/2", "1+0", "1*1", "hex parser", "int32 decoder", "float decoder", "double decoder"], ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], [["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"]]]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-001
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe file-name extraction with and without extensions.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName on a multi-extension filename, a dotfile, a filename without an extension, and a trailing-separator path; pass both true and false for the extension flag.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input followed by the true/false results to clarify extension and trailing-separator handling.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null], ["/__util_probe__/.profile", null, null], ["/__util_probe__/README", null, null], ["/__util_probe__/folder/", null, null]]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-002
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe parent-directory extraction for absolute, relative, and root paths.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on /__util_probe__/folder/file.txt, /__util_probe__/folder/, folder/file.txt, file.txt, and /.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and its parent result in matching order; path normalization is not assumed.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["/__util_probe__/folder/", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"]]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-003
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe candidate-path generation for a deliberately nonexistent directory.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getNonExistentFile("/__util_probe_missing_directory__", "capture.txt"). No directory or file is created by this probe.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned candidate path and whether the helper retains or changes the requested name.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: "/__util_probe_missing_directory__/capture.txt"
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-004
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check file and directory existence for synthetic nonexistent paths.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call fileExists and directoryExists on /__util_probe_missing_directory__/absent.dat.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record result types and values; no files or directories are created.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, "number", 0]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:39:11	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:39:11	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:39:11	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:39:11	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=35
13:39:11	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 13
```
13:42:18	CustomLoggerUI	Cleared.
13:42:20	Script : 06_util_probes	Script loaded succesfully
13:42:20	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: 10134.54296875
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794400940
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-023
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect arithmetic and comparison behavior of native floating-point results.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, "number", "number", "number", "number", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", 0.0, 0.0]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-024
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric results directly with arithmetic-produced values.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare parser/int32 results for 29 and float/double results for 1.0 with their +0 values and with each other.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and loose equality for original-to-transformed pairs, cross-method pairs, and literals to identify whether arithmetic changes equality representation.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-025
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric categories with literals and arithmetic-produced values.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Create parsed integer, decoded int32, float, and double values for 1; compare each with 1, 1.0, 0.5+0.5, 2/2, and 1+0.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return strict-equality rows for each native result, then cross-category native equality and cross-category equality after adding zero.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-026
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map strict equality among ordinary numeric expressions and native Util results.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare literal 1, decimal literal 1.0, 0.5+0.5, 2/2, 1+0, 1*1, hexStringToInt("1"), getInt32FromBytes(1,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63).
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return labels, typeof results, and a pairwise strict-equality matrix in the same order.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["literal 1", "literal 1.0", "0.5+0.5", "2/2", "1+0", "1*1", "hex parser", "int32 decoder", "float decoder", "double decoder"], ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], [["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"]]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-001
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe file-name extraction with and without extensions.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName on a multi-extension filename, a dotfile, a filename without an extension, and a trailing-separator path; pass both true and false for the extension flag.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input followed by the true/false results to clarify extension and trailing-separator handling.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null], ["/__util_probe__/.profile", null, null], ["/__util_probe__/README", null, null], ["/__util_probe__/folder/", null, null]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-002
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe parent-directory extraction for absolute, relative, and root paths.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on /__util_probe__/folder/file.txt, /__util_probe__/folder/, folder/file.txt, file.txt, and /.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and its parent result in matching order; path normalization is not assumed.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["/__util_probe__/folder/", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-003
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe candidate-path generation for a deliberately nonexistent directory.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getNonExistentFile("/__util_probe_missing_directory__", "capture.txt"). No directory or file is created by this probe.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned candidate path and whether the helper retains or changes the requested name.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: "/__util_probe_missing_directory__/capture.txt"
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-004
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check file and directory existence for synthetic nonexistent paths.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call fileExists and directoryExists on /__util_probe_missing_directory__/absent.dat.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record result types and values; no files or directories are created.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, "number", 0]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-005
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare getFileName overloads and path-style handling.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName with one argument and with true/false extension flags for Unix-style, Windows-style, relative, bare-name, and dotfile inputs.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each path and all three call results to distinguish overload and separator behavior.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null, null], ["C:\\__util_probe__\\archive.tar.gz", null, null, null], ["folder/archive.tar.gz", null, null, null], ["archive.tar.gz", null, null, null], ["/__util_probe__/.profile", null, null, null]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-006
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare parent-directory handling for Unix-style and Windows-style paths.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on Unix-style, Windows-style, relative, bare-name, and root inputs.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and result to identify whether the null results depend on path style.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["C:\\__util_probe__\\folder\\file.txt", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"], ["C:\\", null]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-007
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getFilePath resolution for relative and absolute synthetic paths.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFilePath on a bare relative filename, a relative path with dot segments, and an absolute synthetic path.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result; no path is opened, read, or written.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["__util_probe__/sample.txt", null], ["./__util_probe__/../sample.txt", null], ["/__util_probe__/sample.txt", null]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:42:20	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:42:20	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:42:20	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:42:20	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=38
13:42:20	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 14
```
13:45:20	CustomLoggerUI	Cleared.
13:45:21	Script : 06_util_probes	Script loaded succesfully
13:45:21	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: 10316.1982421875
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794401121
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-023
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect arithmetic and comparison behavior of native floating-point results.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, "number", "number", "number", "number", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", 0.0, 0.0]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-024
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric results directly with arithmetic-produced values.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare parser/int32 results for 29 and float/double results for 1.0 with their +0 values and with each other.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and loose equality for original-to-transformed pairs, cross-method pairs, and literals to identify whether arithmetic changes equality representation.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-025
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric categories with literals and arithmetic-produced values.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Create parsed integer, decoded int32, float, and double values for 1; compare each with 1, 1.0, 0.5+0.5, 2/2, and 1+0.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return strict-equality rows for each native result, then cross-category native equality and cross-category equality after adding zero.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-026
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map strict equality among ordinary numeric expressions and native Util results.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare literal 1, decimal literal 1.0, 0.5+0.5, 2/2, 1+0, 1*1, hexStringToInt("1"), getInt32FromBytes(1,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63).
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return labels, typeof results, and a pairwise strict-equality matrix in the same order.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["literal 1", "literal 1.0", "0.5+0.5", "2/2", "1+0", "1*1", "hex parser", "int32 decoder", "float decoder", "double decoder"], ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], [["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"]]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-001
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe file-name extraction with and without extensions.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName on a multi-extension filename, a dotfile, a filename without an extension, and a trailing-separator path; pass both true and false for the extension flag.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input followed by the true/false results to clarify extension and trailing-separator handling.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null], ["/__util_probe__/.profile", null, null], ["/__util_probe__/README", null, null], ["/__util_probe__/folder/", null, null]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-002
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe parent-directory extraction for absolute, relative, and root paths.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on /__util_probe__/folder/file.txt, /__util_probe__/folder/, folder/file.txt, file.txt, and /.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and its parent result in matching order; path normalization is not assumed.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["/__util_probe__/folder/", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-003
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe candidate-path generation for a deliberately nonexistent directory.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getNonExistentFile("/__util_probe_missing_directory__", "capture.txt"). No directory or file is created by this probe.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned candidate path and whether the helper retains or changes the requested name.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: "/__util_probe_missing_directory__/capture.txt"
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-004
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check file and directory existence for synthetic nonexistent paths.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call fileExists and directoryExists on /__util_probe_missing_directory__/absent.dat.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record result types and values; no files or directories are created.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, "number", 0]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-005
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare getFileName overloads and path-style handling.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName with one argument and with true/false extension flags for Unix-style, Windows-style, relative, bare-name, and dotfile inputs.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each path and all three call results to distinguish overload and separator behavior.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null, null], ["C:\\__util_probe__\\archive.tar.gz", null, null, null], ["folder/archive.tar.gz", null, null, null], ["archive.tar.gz", null, null, null], ["/__util_probe__/.profile", null, null, null]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-006
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare parent-directory handling for Unix-style and Windows-style paths.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on Unix-style, Windows-style, relative, bare-name, and root inputs.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and result to identify whether the null results depend on path style.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["C:\\__util_probe__\\folder\\file.txt", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"], ["C:\\", null]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-007
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getFilePath resolution for relative and absolute synthetic paths.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFilePath on a bare relative filename, a relative path with dot segments, and an absolute synthetic path.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result; no path is opened, read, or written.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["__util_probe__/sample.txt", null], ["./__util_probe__/../sample.txt", null], ["/__util_probe__/sample.txt", null]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-008
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect host-provided directory paths and pass them only to read-only path helpers.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Read getDocumentsDirectory, getDesktopDirectory, getCurrentFileDirectory, and getCurrentFilePath; call directoryExists, fileExists, getParentDirectory, and getFilePath with selected returned paths. No directory contents are listed.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return method names, result types, returned paths, and helper results so null values can be distinguished from unsupported inputs.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["documents", "string", "/Users/polo/Documents"], ["desktop", "string", "/Users/polo/Desktop"], ["currentFileDirectory", "string", ""], ["currentFilePath", "string", ""], ["directoryExists(documents)", "number", 1], ["fileExists(currentFilePath)", "number", 0], ["getParentDirectory(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules"], ["getFilePath(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:45:21	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:45:21	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:45:21	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:45:21	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=39
13:45:21	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```

# Log Dump of the util probe script 15
```
13:51:30	CustomLoggerUI	Cleared.
13:51:32	Script : 06_util_probes	Script loaded succesfully
13:51:32	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: 10687.0302734375
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794401492
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-023
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect arithmetic and comparison behavior of native floating-point results.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, "number", "number", "number", "number", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", 0.0, 0.0]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-024
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric results directly with arithmetic-produced values.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare parser/int32 results for 29 and float/double results for 1.0 with their +0 values and with each other.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and loose equality for original-to-transformed pairs, cross-method pairs, and literals to identify whether arithmetic changes equality representation.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-025
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric categories with literals and arithmetic-produced values.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Create parsed integer, decoded int32, float, and double values for 1; compare each with 1, 1.0, 0.5+0.5, 2/2, and 1+0.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return strict-equality rows for each native result, then cross-category native equality and cross-category equality after adding zero.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-026
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map strict equality among ordinary numeric expressions and native Util results.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare literal 1, decimal literal 1.0, 0.5+0.5, 2/2, 1+0, 1*1, hexStringToInt("1"), getInt32FromBytes(1,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63).
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return labels, typeof results, and a pairwise strict-equality matrix in the same order.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["literal 1", "literal 1.0", "0.5+0.5", "2/2", "1+0", "1*1", "hex parser", "int32 decoder", "float decoder", "double decoder"], ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], [["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"]]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-001
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe file-name extraction with and without extensions.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName on a multi-extension filename, a dotfile, a filename without an extension, and a trailing-separator path; pass both true and false for the extension flag.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input followed by the true/false results to clarify extension and trailing-separator handling.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null], ["/__util_probe__/.profile", null, null], ["/__util_probe__/README", null, null], ["/__util_probe__/folder/", null, null]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-002
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe parent-directory extraction for absolute, relative, and root paths.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on /__util_probe__/folder/file.txt, /__util_probe__/folder/, folder/file.txt, file.txt, and /.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and its parent result in matching order; path normalization is not assumed.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["/__util_probe__/folder/", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-003
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe candidate-path generation for a deliberately nonexistent directory.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getNonExistentFile("/__util_probe_missing_directory__", "capture.txt"). No directory or file is created by this probe.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned candidate path and whether the helper retains or changes the requested name.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: "/__util_probe_missing_directory__/capture.txt"
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-004
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check file and directory existence for synthetic nonexistent paths.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call fileExists and directoryExists on /__util_probe_missing_directory__/absent.dat.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record result types and values; no files or directories are created.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, "number", 0]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-005
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare getFileName overloads and path-style handling.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName with one argument and with true/false extension flags for Unix-style, Windows-style, relative, bare-name, and dotfile inputs.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each path and all three call results to distinguish overload and separator behavior.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null, null], ["C:\\__util_probe__\\archive.tar.gz", null, null, null], ["folder/archive.tar.gz", null, null, null], ["archive.tar.gz", null, null, null], ["/__util_probe__/.profile", null, null, null]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-006
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare parent-directory handling for Unix-style and Windows-style paths.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on Unix-style, Windows-style, relative, bare-name, and root inputs.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and result to identify whether the null results depend on path style.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["C:\\__util_probe__\\folder\\file.txt", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"], ["C:\\", null]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-007
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getFilePath resolution for relative and absolute synthetic paths.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFilePath on a bare relative filename, a relative path with dot segments, and an absolute synthetic path.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result; no path is opened, read, or written.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["__util_probe__/sample.txt", null], ["./__util_probe__/../sample.txt", null], ["/__util_probe__/sample.txt", null]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-008
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect host-provided directory paths and pass them only to read-only path helpers.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Read getDocumentsDirectory, getDesktopDirectory, getCurrentFileDirectory, and getCurrentFilePath; call directoryExists, fileExists, getParentDirectory, and getFilePath with selected returned paths. No directory contents are listed.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return method names, result types, returned paths, and helper results so null values can be distinguished from unsupported inputs.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["documents", "string", "/Users/polo/Documents"], ["desktop", "string", "/Users/polo/Desktop"], ["currentFileDirectory", "string", ""], ["currentFilePath", "string", ""], ["directoryExists(documents)", "number", 1], ["fileExists(currentFilePath)", "number", 0], ["getParentDirectory(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules"], ["getFilePath(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-009
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare empty, one-argument, and two-argument path-helper calls.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory and getFilePath with no argument, an empty string, a non-empty synthetic absolute path, and an additional trailing argument.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and values to determine which argument forms are accepted without opening or creating any path.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["getParentDirectory()", "void", null], ["getParentDirectory("")", "string", "/Users/polo/Documents/Chataigne/modules"], ["getParentDirectory(path)", "void", null], ["getParentDirectory(path, true)", "void", null], ["getFilePath()", "void", null], ["getFilePath("")", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"], ["getFilePath(path)", "void", null], ["getFilePath(path, true)", "void", null]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
13:51:32	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
13:51:32	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
13:51:32	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
13:51:32	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=40
13:51:32	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 16
```
14:01:13	CustomLoggerUI	Cleared.
14:01:15	Script : 06_util_probes	Script loaded succesfully
14:01:15	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENV-001
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Record the Chataigne build used for this run.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: No method arguments.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A non-empty version string.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: "1.10.4"
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-INTROSPECT-001
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect method names exposed by the live util object.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Argument: the global util host object.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A list containing getFloatFromBytes and fileExists.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["is", "getTime", "getTimestamp", "delayThreadMS", "getFloatFromBytes", "getDoubleFromBytes", "floatToHexSeq", "getInt32FromBytes", "getInt64FromBytes", "doubleToHexSeq", "hexStringToInt", "toStringFixed", "colorToHex", "getObjectProperties", "getObjectMethods", "getIPs", "encodeHMAC_SHA1", "encodeSHA256", "encodeSHA512", "toBase64", "fromBase64", "fromBase64Bytes", "getDocumentsDirectory", "getDesktopDirectory", "getCurrentFileDirectory", "getCurrentFilePath", "getParentDirectory", "fileExists", "getNonExistentFile", "getFileName", "getFilePath", "readFile", "writeFile", "writeBytes", "directoryExists", "createDirectory", "listFiles", "listDirectories", "launchFile", "killApp", "getOSInfos", "getAppVersion", "getEnvironmentVariable", "gotoURL", "copyToClipboard", "getFromClipboard", "showMessageBox", "showOkCancelBox", "showYesNoCancelBox", "getSelectedObject", "getSelectedObjectsCount", "loadDynamicLibrary", "unloadDynamicLibrary", "findFunctionInDynamicLibrary"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-001
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTime().
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric elapsed-time value; its epoch and units are not assumed.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: 11270.2470703125
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-TIME-002
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the scale and value type returned by getTimestamp().
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Called once with no arguments during module initialization.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric timestamp; units and epoch are recorded, not assumed.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1794402075
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-001
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 single-precision value from four little-endian bytes.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 1.0, within a tolerance of 0.000001.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-002
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Convert four little-endian bytes to a 32-bit integer.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [10, 2, 0, 0]; little-endian interpretation is 522.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Numeric value 522, within a tolerance of 0.000001.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: 522
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-009
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare float decoding for the same IEEE-754 value in opposite byte orders.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: One result may decode as 1.0; record both values and their types.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [4.600602988224807e-41, 1.0]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-010
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare 32-bit integer decoding for the same bytes in opposite orders.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types to identify byte order and whether a value is returned.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [167903232, 522]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-003
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the eight-byte integer helper handles a value above 32 bits.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: 16777216
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-004
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode a known IEEE-754 double-precision value from eight bytes.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the value and compare byte-order behavior; documentation does not establish it.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: 3.038651941617419e-319
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-011
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Decode the same IEEE-754 double value with its bytes reversed.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare with UTIL-CONVERT-004; record the numeric result and type.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: 1.0
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-012
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Identify which 32-bit word the eight-byte integer helper reads.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results and types; these inputs distinguish byte order and word selection.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [16777216, 0, 1]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-005
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe floatToHexSeq output and the effect of its endian flag.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-006
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe doubleToHexSeq output and the effect of its endian flag.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 15.125, tested with littleEndian true and false.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both representations and their ordering.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-013
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["41720000", "00007241", "BFC00000", "0000C0BF"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-014
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Values 15.125 and -1.5; each tested with endian flags true and false.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["402E400000000000", "0000000000402E40", "BFF8000000000000", "000000000000F8BF"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-007
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Parse a simple hexadecimal string.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-015
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Diagnose the hex parser result's type and numeric comparison behavior.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "1D"; evaluate typeof, strict equality with 29, and subtraction from 29.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A numeric 29 should report ["number", true, 0].
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, 0]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-008
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how the hexadecimal parser handles a 0x prefix.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "0x1D".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether the prefix is accepted and the returned value.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: number
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: 29
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-016
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare prefixed and lowercase hexadecimal input handling.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Inputs "0x1D" and "1d".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record both results and types; both might represent decimal 29.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [29, 29]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-017
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare 29 === 29, hexStringToInt("1D") === 29, hexStringToInt("1D") - 29, and hexStringToInt("1D") < 30.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: A conventional numeric result should produce true, true, 0, true.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 0, 0, 1]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-018
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the types of literal and hex-parser comparison results.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Evaluate typeof for 29 === 29, hexStringToInt("1D") === 29, and the parser value itself.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record whether comparison expressions are boolean or numeric in this interpreter.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-019
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Interpret comparison outcomes through explicit if branches.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["TRUE", "FALSE", "TRUE", "TRUE", "TRUE"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-020
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare hex parsing with independently produced numeric values.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-021
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Test parser-result equality after arithmetic coercion and assignment.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-022
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check strict equality behavior across native numeric conversion methods.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare hexStringToInt("1D"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", "number", "number", "number", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-023
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect arithmetic and comparison behavior of native floating-point results.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, "number", "number", "number", "number", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", 0.0, 0.0]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-024
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric results directly with arithmetic-produced values.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare parser/int32 results for 29 and float/double results for 1.0 with their +0 values and with each other.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record strict and loose equality for original-to-transformed pairs, cross-method pairs, and literals to identify whether arithmetic changes equality representation.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "TRUE", "TRUE"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-025
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare native numeric categories with literals and arithmetic-produced values.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Create parsed integer, decoded int32, float, and double values for 1; compare each with 1, 1.0, 0.5+0.5, 2/2, and 1+0.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return strict-equality rows for each native result, then cross-category native equality and cross-category equality after adding zero.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE"]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-CONVERT-026
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map strict equality among ordinary numeric expressions and native Util results.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare literal 1, decimal literal 1.0, 0.5+0.5, 2/2, 1+0, 1*1, hexStringToInt("1"), getInt32FromBytes(1,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63).
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return labels, typeof results, and a pairwise strict-equality matrix in the same order.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["literal 1", "literal 1.0", "0.5+0.5", "2/2", "1+0", "1*1", "hex parser", "int32 decoder", "float decoder", "double decoder"], ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], [["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["TRUE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE", "FALSE", "FALSE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"], ["FALSE", "TRUE", "TRUE", "TRUE", "FALSE", "FALSE", "FALSE", "FALSE", "TRUE", "TRUE"]]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-001
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe file-name extraction with and without extensions.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName on a multi-extension filename, a dotfile, a filename without an extension, and a trailing-separator path; pass both true and false for the extension flag.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input followed by the true/false results to clarify extension and trailing-separator handling.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null], ["/__util_probe__/.profile", null, null], ["/__util_probe__/README", null, null], ["/__util_probe__/folder/", null, null]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-002
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe parent-directory extraction for absolute, relative, and root paths.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on /__util_probe__/folder/file.txt, /__util_probe__/folder/, folder/file.txt, file.txt, and /.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and its parent result in matching order; path normalization is not assumed.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["/__util_probe__/folder/", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-003
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe candidate-path generation for a deliberately nonexistent directory.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getNonExistentFile("/__util_probe_missing_directory__", "capture.txt"). No directory or file is created by this probe.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned candidate path and whether the helper retains or changes the requested name.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: "/__util_probe_missing_directory__/capture.txt"
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-004
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check file and directory existence for synthetic nonexistent paths.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call fileExists and directoryExists on /__util_probe_missing_directory__/absent.dat.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record result types and values; no files or directories are created.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, "number", 0]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-005
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare getFileName overloads and path-style handling.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName with one argument and with true/false extension flags for Unix-style, Windows-style, relative, bare-name, and dotfile inputs.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each path and all three call results to distinguish overload and separator behavior.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null, null], ["C:\\__util_probe__\\archive.tar.gz", null, null, null], ["folder/archive.tar.gz", null, null, null], ["archive.tar.gz", null, null, null], ["/__util_probe__/.profile", null, null, null]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-006
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare parent-directory handling for Unix-style and Windows-style paths.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on Unix-style, Windows-style, relative, bare-name, and root inputs.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and result to identify whether the null results depend on path style.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["C:\\__util_probe__\\folder\\file.txt", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"], ["C:\\", null]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-007
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getFilePath resolution for relative and absolute synthetic paths.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFilePath on a bare relative filename, a relative path with dot segments, and an absolute synthetic path.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result; no path is opened, read, or written.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["__util_probe__/sample.txt", null], ["./__util_probe__/../sample.txt", null], ["/__util_probe__/sample.txt", null]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-008
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect host-provided directory paths and pass them only to read-only path helpers.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Read getDocumentsDirectory, getDesktopDirectory, getCurrentFileDirectory, and getCurrentFilePath; call directoryExists, fileExists, getParentDirectory, and getFilePath with selected returned paths. No directory contents are listed.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return method names, result types, returned paths, and helper results so null values can be distinguished from unsupported inputs.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["documents", "string", "/Users/polo/Documents"], ["desktop", "string", "/Users/polo/Desktop"], ["currentFileDirectory", "string", ""], ["currentFilePath", "string", ""], ["directoryExists(documents)", "number", 1], ["fileExists(currentFilePath)", "number", 0], ["getParentDirectory(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules"], ["getFilePath(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-009
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare empty, one-argument, and two-argument path-helper calls.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory and getFilePath with no argument, an empty string, a non-empty synthetic absolute path, and an additional trailing argument.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and values to determine which argument forms are accepted without opening or creating any path.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["getParentDirectory()", "void", null], ["getParentDirectory("")", "string", "/Users/polo/Documents/Chataigne/modules"], ["getParentDirectory(path)", "void", null], ["getParentDirectory(path, true)", "void", null], ["getFilePath()", "void", null], ["getFilePath("")", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"], ["getFilePath(path)", "void", null], ["getFilePath(path, true)", "void", null]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-010
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare getFileName results for empty and Chataigne-derived paths.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName with no argument, an empty string, Documents directory, Desktop directory, current-file directory, and current-file path, with and without the extension flag.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result type and value; do not inspect or enumerate any path.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["no argument", "void", null], ["empty string", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module"], ["documents", "string", "Documents", "string", "Documents", "string", "Documents"], ["desktop", "string", "Desktop", "string", "Desktop", "string", "Desktop"], ["currentFileDirectory", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module"], ["currentFilePath", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module"]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-001
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Format a decimal number with a fixed number of decimal places.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Value 3.14159 and decimals 2.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "3.14".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3.14"
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-002
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "000000", "000000", "FFFFFF", "FF0000", "FF000000", "FF000000", "000000", "000000", "FFFFFF", "FF000000", "FF000000"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-003
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe how colorToHex handles an explicit zero alpha and omitted alpha.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result to distinguish default alpha from explicit alpha behavior.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["00000000", "FF000000", "000000", "00000000"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-004
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map colorToHex output while varying only one RGB channel at a time.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return three output rows in level order to reveal channel mapping and scaling.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-005
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare array and positional colorToHex forms across a red-to-blue ramp.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return outputs in groups: array red, positional red, array blue, positional blue.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-006
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Map alpha output independently of RGB channel values.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form and positional-form outputs in alpha order.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["00FF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000", "FFFF0000"], ["00000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000", "FF000000"]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-007
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Refine colorToHex channel thresholds near zero and one.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return array-form rows first, then positional-form rows, with each row in level order.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "414141", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000", "000000"], ["000000", "000000", "000000", "000000", "000000", "000000", "000000", "FFFFFF", "FFFFFF", "FFFFFF"]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-008
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare RGB and RGBA overloads for the same channel values.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record results to determine whether adding alpha changes RGB channel interpretation.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF", "000000", "FF000000", "000000", "FF000000", "FFFFFF", "FFFFFFFF"]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-FORMAT-009
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Narrow the low-value transition in array-form blue color conversion.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [[0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01], ["000000", "070707", "212121", "414141", "626262", "828282", "A3A3A3", "C3C3C3", "E4E4E4", "FEFEFE", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF", "FFFFFF"]]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-001
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 encoding against a known ASCII vector.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "hello".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "aGVsbG8=".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: "aGVsbG8="
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-002
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check Base64 decoding against a known ASCII vector.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "aGVsbG8=".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: String "hello".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: "hello"
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-003
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the representation returned by Base64-to-bytes decoding.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input Base64 string "AQID", which represents bytes [1, 2, 3].
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned type and contents; the representation is undocumented.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: [1, 2, 3]
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-004
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-256 output against a standard known vector.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-005
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify SHA-512 output against a standard known vector.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Input string "abc"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Exact lowercase hexadecimal digest shown in the starting point.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-ENCODE-006
14:01:15	Script : 06_util_probes	[UTIL-PROBE] INTENT: Verify HMAC-SHA1 output against a standard known vector.
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Text "The quick brown fox jumps over the lazy dog"; key "key".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Expected Base64 output "3nybhbi3iqa8ino29wqQcBydtNk=".
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:01:15	Script : 06_util_probes	[UTIL-PROBE] RESULT: "3nybhbi3iqa8ino29wqQcBydtNk="
14:01:15	Script : 06_util_probes	[UTIL-PROBE] STATUS: PASS
14:01:15	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=14 FAIL=0 OBSERVATION ONLY=41
14:01:15	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 17
```
14:09:33	CustomLoggerUI	Cleared.
14:09:34	Script : 06_util_probes	Script loaded succesfully
14:09:34	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] MODE: PATH
14:09:34	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-001
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe file-name extraction with and without extensions.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName on a multi-extension filename, a dotfile, a filename without an extension, and a trailing-separator path; pass both true and false for the extension flag.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input followed by the true/false results to clarify extension and trailing-separator handling.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null], ["/__util_probe__/.profile", null, null], ["/__util_probe__/README", null, null], ["/__util_probe__/folder/", null, null]]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-002
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe parent-directory extraction for absolute, relative, and root paths.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on /__util_probe__/folder/file.txt, /__util_probe__/folder/, folder/file.txt, file.txt, and /.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and its parent result in matching order; path normalization is not assumed.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["/__util_probe__/folder/", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"]]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-003
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe candidate-path generation for a deliberately nonexistent directory.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getNonExistentFile("/__util_probe_missing_directory__", "capture.txt"). No directory or file is created by this probe.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned candidate path and whether the helper retains or changes the requested name.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: "/__util_probe_missing_directory__/capture.txt"
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-004
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check file and directory existence for synthetic nonexistent paths.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call fileExists and directoryExists on /__util_probe_missing_directory__/absent.dat.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record result types and values; no files or directories are created.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, "number", 0]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-005
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare getFileName overloads and path-style handling.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName with one argument and with true/false extension flags for Unix-style, Windows-style, relative, bare-name, and dotfile inputs.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each path and all three call results to distinguish overload and separator behavior.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null, null], ["C:\\__util_probe__\\archive.tar.gz", null, null, null], ["folder/archive.tar.gz", null, null, null], ["archive.tar.gz", null, null, null], ["/__util_probe__/.profile", null, null, null]]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-006
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare parent-directory handling for Unix-style and Windows-style paths.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on Unix-style, Windows-style, relative, bare-name, and root inputs.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and result to identify whether the null results depend on path style.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["C:\\__util_probe__\\folder\\file.txt", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"], ["C:\\", null]]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-007
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getFilePath resolution for relative and absolute synthetic paths.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFilePath on a bare relative filename, a relative path with dot segments, and an absolute synthetic path.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result; no path is opened, read, or written.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["__util_probe__/sample.txt", null], ["./__util_probe__/../sample.txt", null], ["/__util_probe__/sample.txt", null]]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-008
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect host-provided directory paths and pass them only to read-only path helpers.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Read getDocumentsDirectory, getDesktopDirectory, getCurrentFileDirectory, and getCurrentFilePath; call directoryExists, fileExists, getParentDirectory, and getFilePath with selected returned paths. No directory contents are listed.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return method names, result types, returned paths, and helper results so null values can be distinguished from unsupported inputs.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["documents", "string", "/Users/polo/Documents"], ["desktop", "string", "/Users/polo/Desktop"], ["currentFileDirectory", "string", ""], ["currentFilePath", "string", ""], ["directoryExists(documents)", "number", 1], ["fileExists(currentFilePath)", "number", 0], ["getParentDirectory(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules"], ["getFilePath(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"]]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-009
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare empty, one-argument, and two-argument path-helper calls.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory and getFilePath with no argument, an empty string, a non-empty synthetic absolute path, and an additional trailing argument.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and values to determine which argument forms are accepted without opening or creating any path.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["getParentDirectory()", "void", null], ["getParentDirectory("")", "string", "/Users/polo/Documents/Chataigne/modules"], ["getParentDirectory(path)", "void", null], ["getParentDirectory(path, true)", "void", null], ["getFilePath()", "void", null], ["getFilePath("")", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"], ["getFilePath(path)", "void", null], ["getFilePath(path, true)", "void", null]]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-010
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare getFileName results for empty and Chataigne-derived paths.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName with no argument, an empty string, Documents directory, Desktop directory, current-file directory, and current-file path, with and without the extension flag.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result type and value; do not inspect or enumerate any path.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["no argument", "void", null], ["empty string", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module"], ["documents", "string", "Documents", "string", "Documents", "string", "Documents"], ["desktop", "string", "Desktop", "string", "Desktop", "string", "Desktop"], ["currentFileDirectory", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module"], ["currentFilePath", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module"]]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-011
14:09:34	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare read-only path helpers across paths returned by Chataigne.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Read the Documents, Desktop, current-file directory/path, and current-script path/directory getters; pass each value to fileExists, directoryExists, getFileName, getParentDirectory, and getFilePath. Do not list or read contents.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each source value and each helper's result type/value to distinguish which host-provided path forms each helper accepts.
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:09:34	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["documents", "string", "/Users/polo/Documents", "number", 0, "number", 1, "string", "Documents", "string", "/Users/polo", "string", "/Users/polo/Documents"], ["desktop", "string", "/Users/polo/Desktop", "number", 0, "number", 1, "string", "Desktop", "string", "/Users/polo", "string", "/Users/polo/Desktop"], ["currentFileDirectory", "string", "", "number", 0, "number", 1, "string", "Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"], ["currentFilePath", "string", "", "number", 0, "number", 1, "string", "Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"], ["scriptPath", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module/06_util_probes.js", "number", 1, "number", 0, "string", "06_util_probes.js", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module/06_util_probes.js"], ["scriptDirectory", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module", "number", 0, "number", 1, "string", "Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"]]
14:09:34	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:09:34	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=0 FAIL=0 OBSERVATION ONLY=11
14:09:34	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 18
```
14:12:45	CustomLoggerUI	Cleared.
14:12:47	Script : 06_util_probes	Script loaded succesfully
14:12:47	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] MODE: PATH
14:12:47	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-001
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe file-name extraction with and without extensions.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName on a multi-extension filename, a dotfile, a filename without an extension, and a trailing-separator path; pass both true and false for the extension flag.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input followed by the true/false results to clarify extension and trailing-separator handling.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null], ["/__util_probe__/.profile", null, null], ["/__util_probe__/README", null, null], ["/__util_probe__/folder/", null, null]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-002
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe parent-directory extraction for absolute, relative, and root paths.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on /__util_probe__/folder/file.txt, /__util_probe__/folder/, folder/file.txt, file.txt, and /.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and its parent result in matching order; path normalization is not assumed.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["/__util_probe__/folder/", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-003
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe candidate-path generation for a deliberately nonexistent directory.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getNonExistentFile("/__util_probe_missing_directory__", "capture.txt"). No directory or file is created by this probe.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record the returned candidate path and whether the helper retains or changes the requested name.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: string
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: "/__util_probe_missing_directory__/capture.txt"
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-004
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Check file and directory existence for synthetic nonexistent paths.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call fileExists and directoryExists on /__util_probe_missing_directory__/absent.dat.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record result types and values; no files or directories are created.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0, "number", 0]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-005
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare getFileName overloads and path-style handling.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName with one argument and with true/false extension flags for Unix-style, Windows-style, relative, bare-name, and dotfile inputs.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each path and all three call results to distinguish overload and separator behavior.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/archive.tar.gz", null, null, null], ["C:\\__util_probe__\\archive.tar.gz", null, null, null], ["folder/archive.tar.gz", null, null, null], ["archive.tar.gz", null, null, null], ["/__util_probe__/.profile", null, null, null]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-006
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare parent-directory handling for Unix-style and Windows-style paths.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory on Unix-style, Windows-style, relative, bare-name, and root inputs.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each input and result to identify whether the null results depend on path style.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["/__util_probe__/folder/file.txt", null], ["C:\\__util_probe__\\folder\\file.txt", null], ["folder/file.txt", null], ["file.txt", null], ["/", "/"], ["C:\\", null]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-007
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getFilePath resolution for relative and absolute synthetic paths.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFilePath on a bare relative filename, a relative path with dot segments, and an absolute synthetic path.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result; no path is opened, read, or written.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["__util_probe__/sample.txt", null], ["./__util_probe__/../sample.txt", null], ["/__util_probe__/sample.txt", null]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-008
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect host-provided directory paths and pass them only to read-only path helpers.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Read getDocumentsDirectory, getDesktopDirectory, getCurrentFileDirectory, and getCurrentFilePath; call directoryExists, fileExists, getParentDirectory, and getFilePath with selected returned paths. No directory contents are listed.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return method names, result types, returned paths, and helper results so null values can be distinguished from unsupported inputs.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["documents", "string", "/Users/polo/Documents"], ["desktop", "string", "/Users/polo/Desktop"], ["currentFileDirectory", "string", ""], ["currentFilePath", "string", ""], ["directoryExists(documents)", "number", 1], ["fileExists(currentFilePath)", "number", 0], ["getParentDirectory(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules"], ["getFilePath(currentFilePath)", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-009
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare empty, one-argument, and two-argument path-helper calls.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getParentDirectory and getFilePath with no argument, an empty string, a non-empty synthetic absolute path, and an additional trailing argument.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and values to determine which argument forms are accepted without opening or creating any path.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["getParentDirectory()", "void", null], ["getParentDirectory("")", "string", "/Users/polo/Documents/Chataigne/modules"], ["getParentDirectory(path)", "void", null], ["getParentDirectory(path, true)", "void", null], ["getFilePath()", "void", null], ["getFilePath("")", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"], ["getFilePath(path)", "void", null], ["getFilePath(path, true)", "void", null]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-010
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare getFileName results for empty and Chataigne-derived paths.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getFileName with no argument, an empty string, Documents directory, Desktop directory, current-file directory, and current-file path, with and without the extension flag.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result type and value; do not inspect or enumerate any path.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["no argument", "void", null], ["empty string", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module"], ["documents", "string", "Documents", "string", "Documents", "string", "Documents"], ["desktop", "string", "Desktop", "string", "Desktop", "string", "Desktop"], ["currentFileDirectory", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module"], ["currentFilePath", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module"]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-011
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare read-only path helpers across paths returned by Chataigne.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Read the Documents, Desktop, current-file directory/path, and current-script path/directory getters; pass each value to fileExists, directoryExists, getFileName, getParentDirectory, and getFilePath. Do not list or read contents.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return each source value and each helper's result type/value to distinguish which host-provided path forms each helper accepts.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["documents", "string", "/Users/polo/Documents", "number", 0, "number", 1, "string", "Documents", "string", "/Users/polo", "string", "/Users/polo/Documents"], ["desktop", "string", "/Users/polo/Desktop", "number", 0, "number", 1, "string", "Desktop", "string", "/Users/polo", "string", "/Users/polo/Desktop"], ["currentFileDirectory", "string", "", "number", 0, "number", 1, "string", "Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"], ["currentFilePath", "string", "", "number", 0, "number", 1, "string", "Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"], ["scriptPath", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module/06_util_probes.js", "number", 1, "number", 0, "string", "06_util_probes.js", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module/06_util_probes.js"], ["scriptDirectory", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module", "number", 0, "number", 1, "string", "Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-PATH-012
14:12:47	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare path-helper behavior for an existing file, existing directory, and generated absent candidate.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Use script.getScriptPath() and script.getScriptDirectory() as existing host paths; generate a candidate filename inside the script directory without creating it. Call fileExists, directoryExists, getFileName with true/false extension flags, getParentDirectory, and getFilePath on each.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record types and values to check whether helper results differ for existing files, existing directories, and a candidate that was not created.
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:12:47	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["scriptPath", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module/06_util_probes.js", "number", 1, "number", 0, "string", "06_util_probes.js", "string", "06_util_probes", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module/06_util_probes.js"], ["scriptDirectory", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module", "number", 0, "number", 1, "string", "Advanced-Sample-Chataigne-module", "string", "Advanced-Sample-Chataigne-module", "string", "/Users/polo/Documents/Chataigne/modules", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module"], ["uncreatedCandidate", "string", "/Users/polo/Documents/Chataigne/modules/Advanced-Sample-Chataigne-module/__chataigne_util_probe_missing_20261111__.txt", "number", 0, "number", 0, "void", null, "void", null, "void", null, "void", null]]
14:12:47	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:12:47	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=0 FAIL=0 OBSERVATION ONLY=12
14:12:47	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 19
```
14:25:10	CustomLoggerUI	Cleared.
14:25:12	Script : 06_util_probes	Script loaded succesfully
14:25:12	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] MODE: HOST
14:25:12	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-001
14:25:12	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getObjectProperties output and the includeParameters/includeObjects flags on the util object.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getObjectProperties(util) with no optional flags and with all four Boolean flag combinations. The returned property names are logged; property values are not requested.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result type and property list so flag-dependent filtering can be compared.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["omitted flags", "object", ["_ptr", "_type", "_script", "scriptPath"]], ["false,false", "void", null], ["true,false", "void", null], ["false,true", "object", ["_ptr", "_type", "_script", "scriptPath"]], ["true,true", "object", ["_ptr", "_type", "_script", "scriptPath"]]]
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:25:12	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-002
14:25:12	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the shape of getOSInfos without logging potentially identifying values.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getOSInfos once; record only the returned type and enumerable field names with each field's value type. Do not log any field values.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return a list of field names and types, without user, computer, language, or other host values.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["object", [["name", "string"], ["type", "number"], ["computerName", "string"], ["language", "string"], ["username", "string"]]]
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:25:12	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-003
14:25:12	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the shape and element types returned by getIPs without logging IP addresses.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getIPs once; record the result type, array-like length, and element types only. Never log address values.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Determine whether the result is array-like and what types its elements have, without disclosing network addresses.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["object", 4, ["string", "string", "string", "string"]]
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:25:12	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-004
14:25:12	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getEnvironmentVariable behavior for a deliberately unlikely variable name without exposing its value.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Query __CHATAIGNE_UTIL_PROBE_UNSET_20261111__; record only result type and whether the result is null, undefined, empty, or non-empty.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record missing-variable representation without logging environment-variable contents.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["string", "empty"]
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:25:12	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-005
14:25:12	Script : 06_util_probes	[UTIL-PROBE] INTENT: Measure the effect of a bounded 10 ms delayThreadMS call.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Read getTime, call delayThreadMS(10), then read getTime again; record the delay method's return type and elapsed change.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Determine whether the call blocks for approximately 10 ms; timing is observational and no other state is changed.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0.0107421875]
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:25:12	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-006
14:25:12	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe selection helper results without exposing selected-object details.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getSelectedObjectsCount() and getSelectedObject(); log the count's type/value and only the selected object's type/null/undefined state.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record selection state while keeping object names and properties out of the log; result depends on the current Chataigne selection.
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:25:12	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["selectedCount", "number", 1], ["selectedObjectState", "object", 0, 0]]
14:25:12	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:25:12	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=0 FAIL=0 OBSERVATION ONLY=6
14:25:12	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```


# Log Dump of the util probe script 20
```
14:30:51	CustomLoggerUI	Cleared.
14:30:53	Script : 06_util_probes	Script loaded succesfully
14:30:53	Script : 06_util_probes	[UTIL-PROBE] BEGIN: Read-only util behavior probes.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] MODE: HOST
14:30:53	Script : 06_util_probes	[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-001
14:30:53	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getObjectProperties output and the includeParameters/includeObjects flags on the util object.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getObjectProperties(util) with no optional flags and with all four Boolean flag combinations. The returned property names are logged; property values are not requested.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record each result type and property list so flag-dependent filtering can be compared.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["omitted flags", "object", ["_ptr", "_type", "_script", "scriptPath"]], ["false,false", "void", null], ["true,false", "void", null], ["false,true", "object", ["_ptr", "_type", "_script", "scriptPath"]], ["true,true", "object", ["_ptr", "_type", "_script", "scriptPath"]]]
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:30:53	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-002
14:30:53	Script : 06_util_probes	[UTIL-PROBE] INTENT: Inspect the shape of getOSInfos without logging potentially identifying values.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getOSInfos once; record only the returned type and enumerable field names with each field's value type. Do not log any field values.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Return a list of field names and types, without user, computer, language, or other host values.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["object", [["name", "string"], ["type", "number"], ["computerName", "string"], ["language", "string"], ["username", "string"]]]
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:30:53	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-003
14:30:53	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe the shape and element types returned by getIPs without logging IP addresses.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getIPs once; record the result type, array-like length, and element types only. Never log address values.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Determine whether the result is array-like and what types its elements have, without disclosing network addresses.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["object", 4, ["string", "string", "string", "string"]]
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:30:53	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-004
14:30:53	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe getEnvironmentVariable behavior for a deliberately unlikely variable name without exposing its value.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Query __CHATAIGNE_UTIL_PROBE_UNSET_20261111__; record only result type and whether the result is null, undefined, empty, or non-empty.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record missing-variable representation without logging environment-variable contents.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["string", "empty"]
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:30:53	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-005
14:30:53	Script : 06_util_probes	[UTIL-PROBE] INTENT: Measure the effect of a bounded 10 ms delayThreadMS call.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Read getTime, call delayThreadMS(10), then read getTime again; record the delay method's return type and elapsed change.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Determine whether the call blocks for approximately 10 ms; timing is observational and no other state is changed.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT: ["number", 0.0107421875]
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:30:53	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-006
14:30:53	Script : 06_util_probes	[UTIL-PROBE] INTENT: Observe selection helper results without exposing selected-object details.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getSelectedObjectsCount() and getSelectedObject(); log the count's type/value and only the selected object's type/null/undefined state.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Record selection state while keeping object names and properties out of the log; result depends on the current Chataigne selection.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["selectedCount", "number", 1], ["selectedObjectState", "object", 0, 0]]
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:30:53	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-007
14:30:53	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare method and property introspection on the script host and OS-info objects.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getObjectMethods on script and on an OS-info object. Call getObjectProperties on the script host with omitted flags and all four Boolean flag combinations. Log method names and property-list result types/counts only; never log property names or OS-info values.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare method lists and property filtering with the util-object results without exposing script-specific property names.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["scriptMethods", "object", ["is", "getChild", "getParent", "setName", "setCollapsed", "select", "addTrigger", "addBoolParameter", "addIntParameter", "addFloatParameter", "addStringParameter", "addEnumParameter", "addTargetParameter", "addPoint2DParameter", "addPoint3DParameter", "addColorParameter", "addFileParameter", "addContainer", "addAutomation", "removeContainer", "removeParameter", "clear", "getContainers", "getControllables", "getControlAddress", "getScriptControlAdress", "getJSONData", "loadJSONData", "getType", "log", "logWarning", "logError", "setUpdateRate", "setExecutionTimeout", "refreshEnvironment", "getScriptDirectory", "getScriptPath"]], ["osInfoMethods", "void", null], ["scriptPropertiesOmitted", "object", 15], ["scriptPropertiesFalseFalse", "void", "no length"], ["scriptPropertiesTrueFalse", "object", 11], ["scriptPropertiesFalseTrue", "object", 4], ["scriptPropertiesTrueTrue", "object", 15]]
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:30:53	Script : 06_util_probes	[UTIL-PROBE] TEST: UTIL-HOST-008
14:30:53	Script : 06_util_probes	[UTIL-PROBE] INTENT: Compare introspection result types and counts across local and root without logging session-specific names or values.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STARTING POINT: Call getObjectMethods and getObjectProperties on local and root, including all optional property-filter flag combinations. Log only result types and array-like lengths.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] EXPECTED: Compare introspection availability and filtering across the module and session host objects without exposing their property or method names.
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT TYPE: object
14:30:53	Script : 06_util_probes	[UTIL-PROBE] RESULT: [["local", "object", "object", 33, "object", 18, "void", "no length", "object", 14, "object", 4, "object", 18], ["root", "object", "object", 28, "object", 12, "void", "no length", "object", 8, "object", 4, "object", 12]]
14:30:53	Script : 06_util_probes	[UTIL-PROBE] STATUS: OBSERVATION ONLY
14:30:53	Script : 06_util_probes	[UTIL-PROBE] SUMMARY: PASS=0 FAIL=0 OBSERVATION ONLY=8
14:30:53	Script : 06_util_probes	[UTIL-PROBE] END: No UI or external state was intentionally changed.
```