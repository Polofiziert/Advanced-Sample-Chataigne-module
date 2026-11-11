/**
 * @fileoverview Runs read-only, deterministic probes of selected util methods.
 * Results are logged in a format that can be copied into revengineer/dumps.
 */

var utilProbePassed = 0;
var utilProbeFailed = 0;
var utilProbeObserved = 0;
var utilProbeMode = "HOST";

/**
 * Converts a probe result to a compact, copyable string.
 *
 * @param {*} value The value returned by a util method.
 * @returns {string} A readable representation of the value.
 */
function describeUtilProbeResult(value) {
  var index;
  var items = [];

  if (value === undefined) {
    return "undefined";
  }
  if (value === null) {
    return "null";
  }
  if (typeof value === "string") {
    return "\"" + value + "\"";
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  if (typeof value === "number") {
    return "" + value;
  }
  if (typeof value.length === "number") {
    for (index = 0; index < value.length; index += 1) {
      items.push(describeUtilProbeResult(value[index]));
    }
    return "[" + items.join(", ") + "]";
  }
  return "" + value;
}

/**
 * Checks an array-like result for a method name without relying on indexOf.
 *
 * @param {*} methods The result from util.getObjectMethods().
 * @param {string} methodName Method name to find.
 * @returns {boolean} Whether the method name is present.
 */
function utilProbeHasMethod(methods, methodName) {
  var index;

  if (methods === null || typeof methods.length !== "number") {
    return false;
  }
  for (index = 0; index < methods.length; index += 1) {
    if (methods[index] === methodName) {
      return true;
    }
  }
  return false;
}

/**
 * Describes a condition using an if branch instead of coercing its value.
 *
 * @param {boolean} condition Condition to describe.
 * @returns {string} "TRUE" or "FALSE".
 */
function utilProbeDescribeCondition(condition) {
  if (condition) {
    return "TRUE";
  }
  return "FALSE";
}

/**
 * Returns an array-like length without dereferencing nullish values.
 *
 * @param {*} value Value to inspect.
 * @returns {number|string} Length or a short unavailable marker.
 */
function utilProbeListLength(value) {
  if (value === null || typeof value === "undefined") {
    return "no length";
  }
  if (typeof value.length !== "number") {
    return "no length";
  }
  return value.length;
}

/**
 * Executes one probe and logs its intent, starting point, result, and status.
 *
 * @param {string} id Stable probe identifier.
 * @param {string} intent Behavior being investigated.
 * @param {string} startingPoint Exact inputs or runtime state.
 * @param {string} expected Expected outcome or observation note.
 * @param {Function} probe Function that calls the host API.
 * @param {Function|null} check Optional predicate for a PASS/FAIL result.
 */
function runUtilProbe(id, intent, startingPoint, expected, probe, check) {
  var result;
  var status;

  if (utilProbeMode !== "ALL" && id.substring(0, 10) !== "UTIL-" + utilProbeMode + "-") {
    return;
  }

  script.log("[UTIL-PROBE] TEST: " + id);
  script.log("[UTIL-PROBE] INTENT: " + intent);
  script.log("[UTIL-PROBE] STARTING POINT: " + startingPoint);
  script.log("[UTIL-PROBE] EXPECTED: " + expected);
  result = probe();
  script.log("[UTIL-PROBE] RESULT TYPE: " + typeof result);
  script.log("[UTIL-PROBE] RESULT: " + describeUtilProbeResult(result));
  if (check === null) {
    status = "OBSERVATION ONLY";
    utilProbeObserved += 1;
  } else if (check(result)) {
    status = "PASS";
    utilProbePassed += 1;
  } else {
    status = "FAIL";
    utilProbeFailed += 1;
  }
  script.log("[UTIL-PROBE] STATUS: " + status);
}

/**
 * Runs selected util probes that avoid UI, filesystem, clipboard, and process
 * side effects. Enable this script's Log option before loading the module.
 */
function init() {
  script.log("[UTIL-PROBE] BEGIN: Read-only util behavior probes.");
  script.log("[UTIL-PROBE] MODE: " + utilProbeMode);
  script.log("[UTIL-PROBE] Copy all [UTIL-PROBE] lines into a structured report under revengineer/.");

  runUtilProbe(
    "UTIL-ENV-001",
    "Record the Chataigne build used for this run.",
    "No method arguments.",
    "A non-empty version string.",
    function () {
      return util.getAppVersion();
    },
    function (result) {
      return typeof result === "string" && result.length > 0;
    }
  );

  runUtilProbe(
    "UTIL-INTROSPECT-001",
    "Inspect method names exposed by the live util object.",
    "Argument: the global util host object.",
    "A list containing getFloatFromBytes and fileExists.",
    function () {
      return util.getObjectMethods(util);
    },
    function (result) {
      return utilProbeHasMethod(result, "getFloatFromBytes")
        && utilProbeHasMethod(result, "fileExists");
    }
  );

  runUtilProbe(
    "UTIL-TIME-001",
    "Observe the scale and value type returned by getTime().",
    "Called once with no arguments during module initialization.",
    "A numeric elapsed-time value; its epoch and units are not assumed.",
    function () {
      return util.getTime();
    },
    function (result) {
      return typeof result === "number" && result >= 0;
    }
  );

  runUtilProbe(
    "UTIL-TIME-002",
    "Observe the scale and value type returned by getTimestamp().",
    "Called once with no arguments during module initialization.",
    "A numeric timestamp; units and epoch are recorded, not assumed.",
    function () {
      return util.getTimestamp();
    },
    function (result) {
      return typeof result === "number";
    }
  );

  runUtilProbe(
    "UTIL-CONVERT-001",
    "Decode a known IEEE-754 single-precision value from four little-endian bytes.",
    "Bytes [0, 0, 128, 63] represent 1.0 in little-endian IEEE-754.",
    "Numeric value 1.0, within a tolerance of 0.000001.",
    function () {
      return util.getFloatFromBytes(0, 0, 128, 63);
    },
    function (result) {
      return typeof result === "number" && Math.abs(result - 1) < 0.000001;
    }
  );

  runUtilProbe(
    "UTIL-CONVERT-002",
    "Convert four little-endian bytes to a 32-bit integer.",
    "Bytes [10, 2, 0, 0]; little-endian interpretation is 522.",
    "Numeric value 522, within a tolerance of 0.000001.",
    function () {
      return util.getInt32FromBytes(10, 2, 0, 0);
    },
    function (result) {
      return typeof result === "number" && Math.abs(result - 522) < 0.000001;
    }
  );

  runUtilProbe(
    "UTIL-CONVERT-009",
    "Compare float decoding for the same IEEE-754 value in opposite byte orders.",
    "Calls use [63, 128, 0, 0] and [0, 0, 128, 63], each as four positional byte arguments.",
    "One result may decode as 1.0; record both values and their types.",
    function () {
      return [
        util.getFloatFromBytes(63, 128, 0, 0),
        util.getFloatFromBytes(0, 0, 128, 63)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-010",
    "Compare 32-bit integer decoding for the same bytes in opposite orders.",
    "Calls use [0, 0, 2, 10] and [10, 2, 0, 0], each as four positional byte arguments.",
    "Record both results and types to identify byte order and whether a value is returned.",
    function () {
      return [
        util.getInt32FromBytes(0, 0, 2, 10),
        util.getInt32FromBytes(10, 2, 0, 0)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-003",
    "Observe how the eight-byte integer helper handles a value above 32 bits.",
    "Bytes [0, 0, 0, 1, 0, 0, 0, 0]; big-endian unsigned interpretation is 4294967296.",
    "Record the actual return; do not assume the live build fixes the source-snapshot binding discrepancy.",
    function () {
      return util.getInt64FromBytes(0, 0, 0, 1, 0, 0, 0, 0);
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-004",
    "Decode a known IEEE-754 double-precision value from eight bytes.",
    "Bytes [63, 240, 0, 0, 0, 0, 0, 0] represent 1.0 in big-endian IEEE-754.",
    "Record the value and compare byte-order behavior; documentation does not establish it.",
    function () {
      return util.getDoubleFromBytes(63, 240, 0, 0, 0, 0, 0, 0);
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-011",
    "Decode the same IEEE-754 double value with its bytes reversed.",
    "Bytes [0, 0, 0, 0, 0, 0, 240, 63] are the reverse of the big-endian encoding of 1.0.",
    "Compare with UTIL-CONVERT-004; record the numeric result and type.",
    function () {
      return util.getDoubleFromBytes(0, 0, 0, 0, 0, 0, 240, 63);
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-012",
    "Identify which 32-bit word the eight-byte integer helper reads.",
    "Compare high-word [0,0,0,1,0,0,0,0], low-word [0,0,0,0,0,0,0,1], and reversed high-word [1,0,0,0,0,0,0,0].",
    "Record results and types; these inputs distinguish byte order and word selection.",
    function () {
      return [
        util.getInt64FromBytes(0, 0, 0, 1, 0, 0, 0, 0),
        util.getInt64FromBytes(0, 0, 0, 0, 0, 0, 0, 1),
        util.getInt64FromBytes(1, 0, 0, 0, 0, 0, 0, 0)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-005",
    "Observe floatToHexSeq output and the effect of its endian flag.",
    "Value 15.125, tested with littleEndian true and false.",
    "Record both representations and their ordering.",
    function () {
      return [
        util.floatToHexSeq(15.125, true),
        util.floatToHexSeq(15.125, false)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-006",
    "Observe doubleToHexSeq output and the effect of its endian flag.",
    "Value 15.125, tested with littleEndian true and false.",
    "Record both representations and their ordering.",
    function () {
      return [
        util.doubleToHexSeq(15.125, true),
        util.doubleToHexSeq(15.125, false)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-013",
    "Check floatToHexSeq output for positive and negative values against IEEE-754 bytes.",
    "Values 15.125 and -1.5; each tested with endian flags true and false.",
    "Expected hex strings: 41720000, 00007241, BFC00000, 0000C0BF.",
    function () {
      return [
        util.floatToHexSeq(15.125, true),
        util.floatToHexSeq(15.125, false),
        util.floatToHexSeq(-1.5, true),
        util.floatToHexSeq(-1.5, false)
      ];
    },
    function (result) {
      return result[0] === "41720000"
        && result[1] === "00007241"
        && result[2] === "BFC00000"
        && result[3] === "0000C0BF";
    }
  );

  runUtilProbe(
    "UTIL-CONVERT-014",
    "Check doubleToHexSeq output for positive and negative values against IEEE-754 bytes.",
    "Values 15.125 and -1.5; each tested with endian flags true and false.",
    "Expected hex strings: 402E400000000000, 0000000000402E40, BFF8000000000000, 000000000000F8BF.",
    function () {
      return [
        util.doubleToHexSeq(15.125, true),
        util.doubleToHexSeq(15.125, false),
        util.doubleToHexSeq(-1.5, true),
        util.doubleToHexSeq(-1.5, false)
      ];
    },
    function (result) {
      return result[0] === "402E400000000000"
        && result[1] === "0000000000402E40"
        && result[2] === "BFF8000000000000"
        && result[3] === "000000000000F8BF";
    }
  );

  runUtilProbe(
    "UTIL-CONVERT-007",
    "Parse a simple hexadecimal string.",
    "Input string \"1D\".",
    "Record value type and comparison results; the previous run displayed 29 but the strict equality check failed.",
    function () {
      return util.hexStringToInt("1D");
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-015",
    "Diagnose the hex parser result's type and numeric comparison behavior.",
    "Input string \"1D\"; evaluate typeof, strict equality with 29, and subtraction from 29.",
    "A numeric 29 should report [\"number\", true, 0].",
    function () {
      var result = util.hexStringToInt("1D");
      return [
        typeof result,
        result === 29,
        result - 29
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-008",
    "Observe how the hexadecimal parser handles a 0x prefix.",
    "Input string \"0x1D\".",
    "Record whether the prefix is accepted and the returned value.",
    function () {
      return util.hexStringToInt("0x1D");
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-016",
    "Compare prefixed and lowercase hexadecimal input handling.",
    "Inputs \"0x1D\" and \"1d\".",
    "Record both results and types; both might represent decimal 29.",
    function () {
      return [
        util.hexStringToInt("0x1D"),
        util.hexStringToInt("1d")
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-017",
    "Compare strict equality on a literal and a hex-parser result with its arithmetic behavior.",
    "Compare 29 === 29, hexStringToInt(\"1D\") === 29, hexStringToInt(\"1D\") - 29, and hexStringToInt(\"1D\") < 30.",
    "A conventional numeric result should produce true, true, 0, true.",
    function () {
      var result = util.hexStringToInt("1D");
      return [
        29 === 29,
        result === 29,
        result - 29,
        result < 30
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-018",
    "Inspect the types of literal and hex-parser comparison results.",
    "Evaluate typeof for 29 === 29, hexStringToInt(\"1D\") === 29, and the parser value itself.",
    "Record whether comparison expressions are boolean or numeric in this interpreter.",
    function () {
      var result = util.hexStringToInt("1D");
      var literalComparison = 29 === 29;
      var parsedComparison = result === 29;
      return [
        typeof literalComparison,
        typeof parsedComparison,
        typeof result
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-019",
    "Interpret comparison outcomes through explicit if branches.",
    "Check literal equality, parser-result equality, parser self-equality, and arithmetic/relational checks.",
    "Each result is returned as the literal string TRUE or FALSE, avoiding boolean value formatting.",
    function () {
      var result = util.hexStringToInt("1D");
      return [
        utilProbeDescribeCondition(29 === 29),
        utilProbeDescribeCondition(result === 29),
        utilProbeDescribeCondition(result === result),
        utilProbeDescribeCondition(result - 29 === 0),
        utilProbeDescribeCondition(result < 30)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-020",
    "Compare hex parsing with independently produced numeric values.",
    "Compare hexStringToInt(\"1D\") with literal 29, arithmetic expression 20+9, and getInt32FromBytes(29,0,0,0).",
    "Log TRUE/FALSE for strict equality in both directions and for equality between the two host API results.",
    function () {
      var parsed = util.hexStringToInt("1D");
      var arithmetic = 20 + 9;
      var nativeInteger = util.getInt32FromBytes(29, 0, 0, 0);
      return [
        utilProbeDescribeCondition(parsed === 29),
        utilProbeDescribeCondition(29 === parsed),
        utilProbeDescribeCondition(parsed === arithmetic),
        utilProbeDescribeCondition(parsed === nativeInteger),
        utilProbeDescribeCondition(nativeInteger === 29),
        utilProbeDescribeCondition(parsed == 29)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-021",
    "Test parser-result equality after arithmetic coercion and assignment.",
    "Compare the parsed value, parsed+0, parsed*1, parsed-0, and a separately stored copy against literal 29.",
    "Record strict and non-strict equality outcomes to identify whether arithmetic changes the comparison behavior.",
    function () {
      var parsed = util.hexStringToInt("1D");
      var copied = parsed;
      var added = parsed + 0;
      var multiplied = parsed * 1;
      var subtracted = parsed - 0;
      return [
        utilProbeDescribeCondition(parsed === 29),
        utilProbeDescribeCondition(copied === 29),
        utilProbeDescribeCondition(added === 29),
        utilProbeDescribeCondition(multiplied === 29),
        utilProbeDescribeCondition(subtracted === 29),
        utilProbeDescribeCondition(parsed == 29)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-022",
    "Check strict equality behavior across native numeric conversion methods.",
    "Compare hexStringToInt(\"1D\"), getInt32FromBytes(29,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63) with their literal values, each other, and arithmetic-coerced values.",
    "Record types and TRUE/FALSE outcomes to see whether the strict-equality anomaly affects multiple native numeric methods.",
    function () {
      var parsed = util.hexStringToInt("1D");
      var integer = util.getInt32FromBytes(29, 0, 0, 0);
      var floatValue = util.getFloatFromBytes(0, 0, 128, 63);
      var doubleValue = util.getDoubleFromBytes(0, 0, 0, 0, 0, 0, 240, 63);
      return [
        typeof parsed,
        typeof integer,
        typeof floatValue,
        typeof doubleValue,
        utilProbeDescribeCondition(parsed === 29),
        utilProbeDescribeCondition(integer === 29),
        utilProbeDescribeCondition(floatValue === 1),
        utilProbeDescribeCondition(doubleValue === 1),
        utilProbeDescribeCondition(parsed === integer),
        utilProbeDescribeCondition(floatValue === doubleValue),
        utilProbeDescribeCondition(parsed + 0 === 29),
        utilProbeDescribeCondition(integer + 0 === 29),
        utilProbeDescribeCondition(floatValue + 0 === 1),
        utilProbeDescribeCondition(doubleValue + 0 === 1)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-023",
    "Inspect arithmetic and comparison behavior of native floating-point results.",
    "Decode IEEE-754 1.0 as float and double, then compare each value with 1 and with arithmetic-transformed forms.",
    "Record original/transformed values, types, strict and loose equality, self-equality, ordering, and subtraction results.",
    function () {
      var floatValue = util.getFloatFromBytes(0, 0, 128, 63);
      var doubleValue = util.getDoubleFromBytes(0, 0, 0, 0, 0, 0, 240, 63);
      var floatAdded = floatValue + 0;
      var floatMultiplied = floatValue * 1;
      var floatSubtracted = floatValue - 0;
      var floatDivided = floatValue / 1;
      var doubleAdded = doubleValue + 0;
      var doubleMultiplied = doubleValue * 1;
      var doubleSubtracted = doubleValue - 0;
      var doubleDivided = doubleValue / 1;
      return [
        floatValue,
        floatAdded,
        floatMultiplied,
        floatSubtracted,
        floatDivided,
        doubleValue,
        doubleAdded,
        doubleMultiplied,
        doubleSubtracted,
        doubleDivided,
        typeof floatValue,
        typeof floatAdded,
        typeof doubleValue,
        typeof doubleAdded,
        utilProbeDescribeCondition(floatValue === floatValue),
        utilProbeDescribeCondition(doubleValue === doubleValue),
        utilProbeDescribeCondition(floatValue === 1),
        utilProbeDescribeCondition(doubleValue === 1),
        utilProbeDescribeCondition(floatValue == 1),
        utilProbeDescribeCondition(doubleValue == 1),
        utilProbeDescribeCondition(floatAdded === 1),
        utilProbeDescribeCondition(floatMultiplied === 1),
        utilProbeDescribeCondition(floatSubtracted === 1),
        utilProbeDescribeCondition(floatDivided === 1),
        utilProbeDescribeCondition(doubleAdded === 1),
        utilProbeDescribeCondition(doubleMultiplied === 1),
        utilProbeDescribeCondition(doubleSubtracted === 1),
        utilProbeDescribeCondition(doubleDivided === 1),
        utilProbeDescribeCondition(floatValue < 2),
        utilProbeDescribeCondition(doubleValue < 2),
        floatValue - 1,
        doubleValue - 1
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-024",
    "Compare native numeric results directly with arithmetic-produced values.",
    "Compare parser/int32 results for 29 and float/double results for 1.0 with their +0 values and with each other.",
    "Record strict and loose equality for original-to-transformed pairs, cross-method pairs, and literals to identify whether arithmetic changes equality representation.",
    function () {
      var parsed = util.hexStringToInt("1D");
      var integer = util.getInt32FromBytes(29, 0, 0, 0);
      var floatValue = util.getFloatFromBytes(0, 0, 128, 63);
      var doubleValue = util.getDoubleFromBytes(0, 0, 0, 0, 0, 0, 240, 63);
      var parsedAdded = parsed + 0;
      var integerAdded = integer + 0;
      var floatAdded = floatValue + 0;
      var doubleAdded = doubleValue + 0;
      return [
        utilProbeDescribeCondition(parsed === parsedAdded),
        utilProbeDescribeCondition(integer === integerAdded),
        utilProbeDescribeCondition(floatValue === floatAdded),
        utilProbeDescribeCondition(doubleValue === doubleAdded),
        utilProbeDescribeCondition(parsedAdded === integerAdded),
        utilProbeDescribeCondition(floatValue === doubleValue),
        utilProbeDescribeCondition(floatAdded === doubleAdded),
        utilProbeDescribeCondition(parsedAdded === 29),
        utilProbeDescribeCondition(integerAdded === 29),
        utilProbeDescribeCondition(floatAdded === 1),
        utilProbeDescribeCondition(doubleAdded === 1),
        utilProbeDescribeCondition(parsed == parsedAdded),
        utilProbeDescribeCondition(integer == integerAdded),
        utilProbeDescribeCondition(floatValue == floatAdded),
        utilProbeDescribeCondition(doubleValue == doubleAdded)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-025",
    "Compare native numeric categories with literals and arithmetic-produced values.",
    "Create parsed integer, decoded int32, float, and double values for 1; compare each with 1, 1.0, 0.5+0.5, 2/2, and 1+0.",
    "Return strict-equality rows for each native result, then cross-category native equality and cross-category equality after adding zero.",
    function () {
      var parsed = util.hexStringToInt("1");
      var integer = util.getInt32FromBytes(1, 0, 0, 0);
      var floatValue = util.getFloatFromBytes(0, 0, 128, 63);
      var doubleValue = util.getDoubleFromBytes(0, 0, 0, 0, 0, 0, 240, 63);
      var parsedAdded = parsed + 0;
      var integerAdded = integer + 0;
      var floatAdded = floatValue + 0;
      var doubleAdded = doubleValue + 0;
      return [
        [
          utilProbeDescribeCondition(parsed === 1),
          utilProbeDescribeCondition(parsed === 1.0),
          utilProbeDescribeCondition(parsed === 0.5 + 0.5),
          utilProbeDescribeCondition(parsed === 2 / 2),
          utilProbeDescribeCondition(parsed === 1 + 0)
        ],
        [
          utilProbeDescribeCondition(integer === 1),
          utilProbeDescribeCondition(integer === 1.0),
          utilProbeDescribeCondition(integer === 0.5 + 0.5),
          utilProbeDescribeCondition(integer === 2 / 2),
          utilProbeDescribeCondition(integer === 1 + 0)
        ],
        [
          utilProbeDescribeCondition(floatValue === 1),
          utilProbeDescribeCondition(floatValue === 1.0),
          utilProbeDescribeCondition(floatValue === 0.5 + 0.5),
          utilProbeDescribeCondition(floatValue === 2 / 2),
          utilProbeDescribeCondition(floatValue === 1 + 0)
        ],
        [
          utilProbeDescribeCondition(doubleValue === 1),
          utilProbeDescribeCondition(doubleValue === 1.0),
          utilProbeDescribeCondition(doubleValue === 0.5 + 0.5),
          utilProbeDescribeCondition(doubleValue === 2 / 2),
          utilProbeDescribeCondition(doubleValue === 1 + 0)
        ],
        [
          utilProbeDescribeCondition(parsed === integer),
          utilProbeDescribeCondition(parsed === floatValue),
          utilProbeDescribeCondition(parsed === doubleValue),
          utilProbeDescribeCondition(integer === floatValue),
          utilProbeDescribeCondition(integer === doubleValue),
          utilProbeDescribeCondition(floatValue === doubleValue)
        ],
        [
          utilProbeDescribeCondition(parsedAdded === integerAdded),
          utilProbeDescribeCondition(parsedAdded === floatAdded),
          utilProbeDescribeCondition(parsedAdded === doubleAdded),
          utilProbeDescribeCondition(integerAdded === floatAdded),
          utilProbeDescribeCondition(integerAdded === doubleAdded),
          utilProbeDescribeCondition(floatAdded === doubleAdded)
        ]
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-CONVERT-026",
    "Map strict equality among ordinary numeric expressions and native Util results.",
    "Compare literal 1, decimal literal 1.0, 0.5+0.5, 2/2, 1+0, 1*1, hexStringToInt(\"1\"), getInt32FromBytes(1,0,0,0), getFloatFromBytes(0,0,128,63), and getDoubleFromBytes(0,0,0,0,0,0,240,63).",
    "Return labels, typeof results, and a pairwise strict-equality matrix in the same order.",
    function () {
      var names = [
        "literal 1",
        "literal 1.0",
        "0.5+0.5",
        "2/2",
        "1+0",
        "1*1",
        "hex parser",
        "int32 decoder",
        "float decoder",
        "double decoder"
      ];
      var values = [
        1,
        1.0,
        0.5 + 0.5,
        2 / 2,
        1 + 0,
        1 * 1,
        util.hexStringToInt("1"),
        util.getInt32FromBytes(1, 0, 0, 0),
        util.getFloatFromBytes(0, 0, 128, 63),
        util.getDoubleFromBytes(0, 0, 0, 0, 0, 0, 240, 63)
      ];
      var types = [];
      var matrix = [];
      var row;
      var column;

      for (row = 0; row < values.length; row += 1) {
        types.push(typeof values[row]);
        matrix[row] = [];
        for (column = 0; column < values.length; column += 1) {
          matrix[row].push(
            utilProbeDescribeCondition(values[row] === values[column])
          );
        }
      }
      return [names, types, matrix];
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-001",
    "Observe file-name extraction with and without extensions.",
    "Call getFileName on a multi-extension filename, a dotfile, a filename without an extension, and a trailing-separator path; pass both true and false for the extension flag.",
    "Return each input followed by the true/false results to clarify extension and trailing-separator handling.",
    function () {
      var paths = [
        "/__util_probe__/archive.tar.gz",
        "/__util_probe__/.profile",
        "/__util_probe__/README",
        "/__util_probe__/folder/"
      ];
      var results = [];
      var index;

      for (index = 0; index < paths.length; index += 1) {
        results.push([
          paths[index],
          util.getFileName(paths[index], true),
          util.getFileName(paths[index], false)
        ]);
      }
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-002",
    "Observe parent-directory extraction for absolute, relative, and root paths.",
    "Call getParentDirectory on /__util_probe__/folder/file.txt, /__util_probe__/folder/, folder/file.txt, file.txt, and /.",
    "Return each input and its parent result in matching order; path normalization is not assumed.",
    function () {
      var paths = [
        "/__util_probe__/folder/file.txt",
        "/__util_probe__/folder/",
        "folder/file.txt",
        "file.txt",
        "/"
      ];
      var results = [];
      var index;

      for (index = 0; index < paths.length; index += 1) {
        results.push([
          paths[index],
          util.getParentDirectory(paths[index])
        ]);
      }
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-003",
    "Observe candidate-path generation for a deliberately nonexistent directory.",
    "Call getNonExistentFile(\"/__util_probe_missing_directory__\", \"capture.txt\"). No directory or file is created by this probe.",
    "Record the returned candidate path and whether the helper retains or changes the requested name.",
    function () {
      return util.getNonExistentFile(
        "/__util_probe_missing_directory__",
        "capture.txt"
      );
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-004",
    "Check file and directory existence for synthetic nonexistent paths.",
    "Call fileExists and directoryExists on /__util_probe_missing_directory__/absent.dat.",
    "Record result types and values; no files or directories are created.",
    function () {
      var path = "/__util_probe_missing_directory__/absent.dat";
      return [
        typeof util.fileExists(path),
        util.fileExists(path),
        typeof util.directoryExists(path),
        util.directoryExists(path)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-005",
    "Compare getFileName overloads and path-style handling.",
    "Call getFileName with one argument and with true/false extension flags for Unix-style, Windows-style, relative, bare-name, and dotfile inputs.",
    "Return each path and all three call results to distinguish overload and separator behavior.",
    function () {
      var paths = [
        "/__util_probe__/archive.tar.gz",
        "C:\\\\__util_probe__\\\\archive.tar.gz",
        "folder/archive.tar.gz",
        "archive.tar.gz",
        "/__util_probe__/.profile"
      ];
      var results = [];
      var index;

      for (index = 0; index < paths.length; index += 1) {
        results.push([
          paths[index],
          util.getFileName(paths[index]),
          util.getFileName(paths[index], true),
          util.getFileName(paths[index], false)
        ]);
      }
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-006",
    "Compare parent-directory handling for Unix-style and Windows-style paths.",
    "Call getParentDirectory on Unix-style, Windows-style, relative, bare-name, and root inputs.",
    "Return each input and result to identify whether the null results depend on path style.",
    function () {
      var paths = [
        "/__util_probe__/folder/file.txt",
        "C:\\\\__util_probe__\\\\folder\\\\file.txt",
        "folder/file.txt",
        "file.txt",
        "/",
        "C:\\\\"
      ];
      var results = [];
      var index;

      for (index = 0; index < paths.length; index += 1) {
        results.push([
          paths[index],
          util.getParentDirectory(paths[index])
        ]);
      }
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-007",
    "Observe getFilePath resolution for relative and absolute synthetic paths.",
    "Call getFilePath on a bare relative filename, a relative path with dot segments, and an absolute synthetic path.",
    "Record each result; no path is opened, read, or written.",
    function () {
      var paths = [
        "__util_probe__/sample.txt",
        "./__util_probe__/../sample.txt",
        "/__util_probe__/sample.txt"
      ];
      var results = [];
      var index;

      for (index = 0; index < paths.length; index += 1) {
        results.push([
          paths[index],
          util.getFilePath(paths[index])
        ]);
      }
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-008",
    "Inspect host-provided directory paths and pass them only to read-only path helpers.",
    "Read getDocumentsDirectory, getDesktopDirectory, getCurrentFileDirectory, and getCurrentFilePath; call directoryExists, fileExists, getParentDirectory, and getFilePath with selected returned paths. No directory contents are listed.",
    "Return method names, result types, returned paths, and helper results so null values can be distinguished from unsupported inputs.",
    function () {
      var names = [
        "documents",
        "desktop",
        "currentFileDirectory",
        "currentFilePath"
      ];
      var paths = [
        util.getDocumentsDirectory(),
        util.getDesktopDirectory(),
        util.getCurrentFileDirectory(),
        util.getCurrentFilePath()
      ];
      var results = [];
      var index;

      for (index = 0; index < paths.length; index += 1) {
        results.push([
          names[index],
          typeof paths[index],
          paths[index]
        ]);
      }

      results.push([
        "directoryExists(documents)",
        typeof util.directoryExists(paths[0]),
        util.directoryExists(paths[0])
      ]);
      results.push([
        "fileExists(currentFilePath)",
        typeof util.fileExists(paths[3]),
        util.fileExists(paths[3])
      ]);
      results.push([
        "getParentDirectory(currentFilePath)",
        typeof util.getParentDirectory(paths[3]),
        util.getParentDirectory(paths[3])
      ]);
      results.push([
        "getFilePath(currentFilePath)",
        typeof util.getFilePath(paths[3]),
        util.getFilePath(paths[3])
      ]);
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-009",
    "Compare empty, one-argument, and two-argument path-helper calls.",
    "Call getParentDirectory and getFilePath with no argument, an empty string, a non-empty synthetic absolute path, and an additional trailing argument.",
    "Record types and values to determine which argument forms are accepted without opening or creating any path.",
    function () {
      var path = "/__util_probe__/folder/file.txt";
      return [
        [
          "getParentDirectory()",
          typeof util.getParentDirectory(),
          util.getParentDirectory()
        ],
        [
          "getParentDirectory(\"\")",
          typeof util.getParentDirectory(""),
          util.getParentDirectory("")
        ],
        [
          "getParentDirectory(path)",
          typeof util.getParentDirectory(path),
          util.getParentDirectory(path)
        ],
        [
          "getParentDirectory(path, true)",
          typeof util.getParentDirectory(path, true),
          util.getParentDirectory(path, true)
        ],
        [
          "getFilePath()",
          typeof util.getFilePath(),
          util.getFilePath()
        ],
        [
          "getFilePath(\"\")",
          typeof util.getFilePath(""),
          util.getFilePath("")
        ],
        [
          "getFilePath(path)",
          typeof util.getFilePath(path),
          util.getFilePath(path)
        ],
        [
          "getFilePath(path, true)",
          typeof util.getFilePath(path, true),
          util.getFilePath(path, true)
        ]
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-010",
    "Compare getFileName results for empty and Chataigne-derived paths.",
    "Call getFileName with no argument, an empty string, Documents directory, Desktop directory, current-file directory, and current-file path, with and without the extension flag.",
    "Record each result type and value; do not inspect or enumerate any path.",
    function () {
      var names = [
        "no argument",
        "empty string",
        "documents",
        "desktop",
        "currentFileDirectory",
        "currentFilePath"
      ];
      var paths = [
        undefined,
        "",
        util.getDocumentsDirectory(),
        util.getDesktopDirectory(),
        util.getCurrentFileDirectory(),
        util.getCurrentFilePath()
      ];
      var results = [];
      var index;

      for (index = 0; index < paths.length; index += 1) {
        if (index === 0) {
          results.push([
            names[index],
            typeof util.getFileName(),
            util.getFileName()
          ]);
        } else {
          results.push([
            names[index],
            typeof util.getFileName(paths[index]),
            util.getFileName(paths[index]),
            typeof util.getFileName(paths[index], true),
            util.getFileName(paths[index], true),
            typeof util.getFileName(paths[index], false),
            util.getFileName(paths[index], false)
          ]);
        }
      }
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-011",
    "Compare read-only path helpers across paths returned by Chataigne.",
    "Read the Documents, Desktop, current-file directory/path, and current-script path/directory getters; pass each value to fileExists, directoryExists, getFileName, getParentDirectory, and getFilePath. Do not list or read contents.",
    "Return each source value and each helper's result type/value to distinguish which host-provided path forms each helper accepts.",
    function () {
      var names = [
        "documents",
        "desktop",
        "currentFileDirectory",
        "currentFilePath",
        "scriptPath",
        "scriptDirectory"
      ];
      var paths = [
        util.getDocumentsDirectory(),
        util.getDesktopDirectory(),
        util.getCurrentFileDirectory(),
        util.getCurrentFilePath(),
        script.getScriptPath(),
        script.getScriptDirectory()
      ];
      var results = [];
      var index;
      var fileExistsResult;
      var directoryExistsResult;
      var fileNameResult;
      var parentDirectoryResult;
      var filePathResult;

      for (index = 0; index < paths.length; index += 1) {
        fileExistsResult = util.fileExists(paths[index]);
        directoryExistsResult = util.directoryExists(paths[index]);
        fileNameResult = util.getFileName(paths[index]);
        parentDirectoryResult = util.getParentDirectory(paths[index]);
        filePathResult = util.getFilePath(paths[index]);
        results.push([
          names[index],
          typeof paths[index],
          paths[index],
          typeof fileExistsResult,
          fileExistsResult,
          typeof directoryExistsResult,
          directoryExistsResult,
          typeof fileNameResult,
          fileNameResult,
          typeof parentDirectoryResult,
          parentDirectoryResult,
          typeof filePathResult,
          filePathResult
        ]);
      }
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-PATH-012",
    "Compare path-helper behavior for an existing file, existing directory, and generated absent candidate.",
    "Use script.getScriptPath() and script.getScriptDirectory() as existing host paths; generate a candidate filename inside the script directory without creating it. Call fileExists, directoryExists, getFileName with true/false extension flags, getParentDirectory, and getFilePath on each.",
    "Record types and values to check whether helper results differ for existing files, existing directories, and a candidate that was not created.",
    function () {
      var scriptPath = script.getScriptPath();
      var scriptDirectory = script.getScriptDirectory();
      var candidatePath = util.getNonExistentFile(
        scriptDirectory,
        "__chataigne_util_probe_missing_20261111__.txt"
      );
      var names = ["scriptPath", "scriptDirectory", "uncreatedCandidate"];
      var paths = [scriptPath, scriptDirectory, candidatePath];
      var results = [];
      var index;
      var fileExistsResult;
      var directoryExistsResult;
      var fileNameWithExtension;
      var fileNameWithoutExtension;
      var parentDirectoryResult;
      var filePathResult;

      for (index = 0; index < paths.length; index += 1) {
        fileExistsResult = util.fileExists(paths[index]);
        directoryExistsResult = util.directoryExists(paths[index]);
        fileNameWithExtension = util.getFileName(paths[index], true);
        fileNameWithoutExtension = util.getFileName(paths[index], false);
        parentDirectoryResult = util.getParentDirectory(paths[index]);
        filePathResult = util.getFilePath(paths[index]);
        results.push([
          names[index],
          typeof paths[index],
          paths[index],
          typeof fileExistsResult,
          fileExistsResult,
          typeof directoryExistsResult,
          directoryExistsResult,
          typeof fileNameWithExtension,
          fileNameWithExtension,
          typeof fileNameWithoutExtension,
          fileNameWithoutExtension,
          typeof parentDirectoryResult,
          parentDirectoryResult,
          typeof filePathResult,
          filePathResult
        ]);
      }
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-HOST-001",
    "Observe getObjectProperties output and the includeParameters/includeObjects flags on the util object.",
    "Call getObjectProperties(util) with no optional flags and with all four Boolean flag combinations. The returned property names are logged; property values are not requested.",
    "Record each result type and property list so flag-dependent filtering can be compared.",
    function () {
      var omitted = util.getObjectProperties(util);
      var neither = util.getObjectProperties(util, false, false);
      var parameters = util.getObjectProperties(util, true, false);
      var objects = util.getObjectProperties(util, false, true);
      var both = util.getObjectProperties(util, true, true);

      return [
        ["omitted flags", typeof omitted, omitted],
        ["false,false", typeof neither, neither],
        ["true,false", typeof parameters, parameters],
        ["false,true", typeof objects, objects],
        ["true,true", typeof both, both]
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-HOST-002",
    "Inspect the shape of getOSInfos without logging potentially identifying values.",
    "Call getOSInfos once; record only the returned type and enumerable field names with each field's value type. Do not log any field values.",
    "Return a list of field names and types, without user, computer, language, or other host values.",
    function () {
      var info = util.getOSInfos();
      var properties;
      var fields = [];
      var index;

      if (info === null || typeof info === "undefined") {
        return [typeof info, fields];
      }
      properties = util.getObjectProperties(info);
      if (properties === null || typeof properties.length !== "number") {
        return [typeof info, typeof properties, "property names unavailable"];
      }
      for (index = 0; index < properties.length; index += 1) {
        fields.push([
          properties[index],
          typeof info[properties[index]]
        ]);
      }
      return [typeof info, fields];
    },
    null
  );

  runUtilProbe(
    "UTIL-HOST-003",
    "Observe the shape and element types returned by getIPs without logging IP addresses.",
    "Call getIPs once; record the result type, array-like length, and element types only. Never log address values.",
    "Determine whether the result is array-like and what types its elements have, without disclosing network addresses.",
    function () {
      var addresses = util.getIPs();
      var elementTypes = [];
      var index;

      if (addresses === null || typeof addresses === "undefined") {
        return [typeof addresses, "no length"];
      }
      if (typeof addresses.length !== "number") {
        return [typeof addresses, "no numeric length"];
      }
      for (index = 0; index < addresses.length; index += 1) {
        elementTypes.push(typeof addresses[index]);
      }
      return [typeof addresses, addresses.length, elementTypes];
    },
    null
  );

  runUtilProbe(
    "UTIL-HOST-004",
    "Observe getEnvironmentVariable behavior for a deliberately unlikely variable name without exposing its value.",
    "Query __CHATAIGNE_UTIL_PROBE_UNSET_20261111__; record only result type and whether the result is null, undefined, empty, or non-empty.",
    "Record missing-variable representation without logging environment-variable contents.",
    function () {
      var value = util.getEnvironmentVariable(
        "__CHATAIGNE_UTIL_PROBE_UNSET_20261111__"
      );
      var state;

      if (value === null) {
        state = "null";
      } else if (typeof value === "undefined") {
        state = "undefined";
      } else if (value === "") {
        state = "empty";
      } else {
        state = "non-empty";
      }
      return [typeof value, state];
    },
    null
  );

  runUtilProbe(
    "UTIL-HOST-005",
    "Measure the effect of a bounded 10 ms delayThreadMS call.",
    "Read getTime, call delayThreadMS(10), then read getTime again; record the delay method's return type and elapsed change.",
    "Determine whether the call blocks for approximately 10 ms; timing is observational and no other state is changed.",
    function () {
      var before = util.getTime();
      var delayResult = util.delayThreadMS(10);
      var after = util.getTime();
      return [typeof delayResult, after - before];
    },
    null
  );

  runUtilProbe(
    "UTIL-HOST-006",
    "Observe selection helper results without exposing selected-object details.",
    "Call getSelectedObjectsCount() and getSelectedObject(); log the count's type/value and only the selected object's type/null/undefined state.",
    "Record selection state while keeping object names and properties out of the log; result depends on the current Chataigne selection.",
    function () {
      var count = util.getSelectedObjectsCount();
      var selected = util.getSelectedObject();
      return [
        ["selectedCount", typeof count, count],
        [
          "selectedObjectState",
          typeof selected,
          selected === null,
          typeof selected === "undefined"
        ]
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-HOST-007",
    "Compare method and property introspection on the script host and OS-info objects.",
    "Call getObjectMethods on script and on an OS-info object. Call getObjectProperties on the script host with omitted flags and all four Boolean flag combinations. Log method names and property-list result types/counts only; never log property names or OS-info values.",
    "Compare method lists and property filtering with the util-object results without exposing script-specific property names.",
    function () {
      var osInfo = util.getOSInfos();
      var scriptMethods = util.getObjectMethods(script);
      var osInfoMethods = util.getObjectMethods(osInfo);
      var omitted = util.getObjectProperties(script);
      var neither = util.getObjectProperties(script, false, false);
      var parameters = util.getObjectProperties(script, true, false);
      var objects = util.getObjectProperties(script, false, true);
      var both = util.getObjectProperties(script, true, true);

      return [
        ["scriptMethods", typeof scriptMethods, scriptMethods],
        ["osInfoMethods", typeof osInfoMethods, osInfoMethods],
        ["scriptPropertiesOmitted", typeof omitted, utilProbeListLength(omitted)],
        ["scriptPropertiesFalseFalse", typeof neither, utilProbeListLength(neither)],
        ["scriptPropertiesTrueFalse", typeof parameters, utilProbeListLength(parameters)],
        ["scriptPropertiesFalseTrue", typeof objects, utilProbeListLength(objects)],
        ["scriptPropertiesTrueTrue", typeof both, utilProbeListLength(both)]
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-HOST-008",
    "Compare introspection result types and counts across local and root without logging session-specific names or values.",
    "Call getObjectMethods and getObjectProperties on local and root, including all optional property-filter flag combinations. Log only result types and array-like lengths.",
    "Compare introspection availability and filtering across the module and session host objects without exposing their property or method names.",
    function () {
      var targets = [
        ["local", local],
        ["root", root]
      ];
      var results = [];
      var index;
      var target;
      var methods;
      var omitted;
      var neither;
      var parameters;
      var objects;
      var both;

      for (index = 0; index < targets.length; index += 1) {
        target = targets[index][1];
        methods = util.getObjectMethods(target);
        omitted = util.getObjectProperties(target);
        neither = util.getObjectProperties(target, false, false);
        parameters = util.getObjectProperties(target, true, false);
        objects = util.getObjectProperties(target, false, true);
        both = util.getObjectProperties(target, true, true);
        results.push([
          targets[index][0],
          typeof target,
          typeof methods,
          utilProbeListLength(methods),
          typeof omitted,
          utilProbeListLength(omitted),
          typeof neither,
          utilProbeListLength(neither),
          typeof parameters,
          utilProbeListLength(parameters),
          typeof objects,
          utilProbeListLength(objects),
          typeof both,
          utilProbeListLength(both)
        ]);
      }
      return results;
    },
    null
  );

  runUtilProbe(
    "UTIL-HOST-009",
    "Compare introspection result types and counts for the currently selected object without exposing its identity or values.",
    "Call getSelectedObject once. If it is non-null and defined, call getObjectMethods and getObjectProperties with omitted flags and all four Boolean flag combinations. Log only types and array-like lengths.",
    "Record whether selection is absent and, when present, compare method/property counts without logging object names or property values.",
    function () {
      var selected = util.getSelectedObject();
      var methods;
      var omitted;
      var neither;
      var parameters;
      var objects;
      var both;

      if (selected === null || typeof selected === "undefined") {
        return [typeof selected, selected === null, typeof selected === "undefined"];
      }
      methods = util.getObjectMethods(selected);
      omitted = util.getObjectProperties(selected);
      neither = util.getObjectProperties(selected, false, false);
      parameters = util.getObjectProperties(selected, true, false);
      objects = util.getObjectProperties(selected, false, true);
      both = util.getObjectProperties(selected, true, true);
      return [
        ["selectedObjectType", typeof selected],
        ["methods", typeof methods, utilProbeListLength(methods)],
        ["propertiesOmitted", typeof omitted, utilProbeListLength(omitted)],
        ["propertiesFalseFalse", typeof neither, utilProbeListLength(neither)],
        ["propertiesTrueFalse", typeof parameters, utilProbeListLength(parameters)],
        ["propertiesFalseTrue", typeof objects, utilProbeListLength(objects)],
        ["propertiesTrueTrue", typeof both, utilProbeListLength(both)]
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-FORMAT-001",
    "Format a decimal number with a fixed number of decimal places.",
    "Value 3.14159 and decimals 2.",
    "String \"3.14\".",
    function () {
      return util.toStringFixed(3.14159, 2);
    },
    function (result) {
      return result === "3.14";
    }
  );

  runUtilProbe(
    "UTIL-FORMAT-002",
    "Compare color conversion for black, primary colors, white, and normalized versus byte-scale channels.",
    "Test RGB arrays, RGBA arrays, and positional RGB/RGBA calls with values in [0,1] and [0,255].",
    "Record output strings to determine accepted signatures, channel scale, alpha handling, and casing.",
    function () {
      return [
        util.colorToHex([0, 0, 0]),
        util.colorToHex([1, 0, 0]),
        util.colorToHex([0, 1, 0]),
        util.colorToHex([0, 0, 1]),
        util.colorToHex([1, 1, 1]),
        util.colorToHex([1, 0.5, 0, 1]),
        util.colorToHex([255, 128, 0, 255]),
        util.colorToHex(1, 0, 0),
        util.colorToHex(0, 1, 0),
        util.colorToHex(0, 0, 1),
        util.colorToHex(1, 0.5, 0, 1),
        util.colorToHex(255, 128, 0, 255)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-FORMAT-003",
    "Observe how colorToHex handles an explicit zero alpha and omitted alpha.",
    "Compare [1,0,0,0], [1,0,0,1], positional (1,0,0), and positional (1,0,0,0).",
    "Record each result to distinguish default alpha from explicit alpha behavior.",
    function () {
      return [
        util.colorToHex([1, 0, 0, 0]),
        util.colorToHex([1, 0, 0, 1]),
        util.colorToHex(1, 0, 0),
        util.colorToHex(1, 0, 0, 0)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-FORMAT-004",
    "Map colorToHex output while varying only one RGB channel at a time.",
    "For red, green, and blue independently, test channel levels [0, 0.25, 0.5, 0.75, 1, 127, 128, 255] with other channels zero.",
    "Return three output rows in level order to reveal channel mapping and scaling.",
    function () {
      var levels = [0, 0.25, 0.5, 0.75, 1, 127, 128, 255];
      var red = [];
      var green = [];
      var blue = [];
      var index;

      for (index = 0; index < levels.length; index += 1) {
        red.push(util.colorToHex([levels[index], 0, 0]));
        green.push(util.colorToHex([0, levels[index], 0]));
        blue.push(util.colorToHex([0, 0, levels[index]]));
      }
      return [red, green, blue];
    },
    null
  );

  runUtilProbe(
    "UTIL-FORMAT-005",
    "Compare array and positional colorToHex forms across a red-to-blue ramp.",
    "Test values 0, 0.5, 1, 127, 128, and 255 in the red and blue channels using arrays and positional RGB arguments.",
    "Return outputs in groups: array red, positional red, array blue, positional blue.",
    function () {
      var levels = [0, 0.5, 1, 127, 128, 255];
      var arrayRed = [];
      var positionalRed = [];
      var arrayBlue = [];
      var positionalBlue = [];
      var index;

      for (index = 0; index < levels.length; index += 1) {
        arrayRed.push(util.colorToHex([levels[index], 0, 0]));
        positionalRed.push(util.colorToHex(levels[index], 0, 0));
        arrayBlue.push(util.colorToHex([0, 0, levels[index]]));
        positionalBlue.push(util.colorToHex(0, 0, levels[index]));
      }
      return [arrayRed, positionalRed, arrayBlue, positionalBlue];
    },
    null
  );

  runUtilProbe(
    "UTIL-FORMAT-006",
    "Map alpha output independently of RGB channel values.",
    "Hold RGB at [1, 0.5, 0.25] and test alpha [0, 0.25, 0.5, 0.75, 1, 127, 128, 255], as both array RGBA and positional RGBA.",
    "Return array-form and positional-form outputs in alpha order.",
    function () {
      var alphaLevels = [0, 0.25, 0.5, 0.75, 1, 127, 128, 255];
      var arrayColors = [];
      var positionalColors = [];
      var index;

      for (index = 0; index < alphaLevels.length; index += 1) {
        arrayColors.push(util.colorToHex([1, 0.5, 0.25, alphaLevels[index]]));
        positionalColors.push(util.colorToHex(1, 0.5, 0.25, alphaLevels[index]));
      }
      return [arrayColors, positionalColors];
    },
    null
  );

  runUtilProbe(
    "UTIL-FORMAT-007",
    "Refine colorToHex channel thresholds near zero and one.",
    "For red, green, and blue independently, test [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2] using both array and positional RGB forms.",
    "Return array-form rows first, then positional-form rows, with each row in level order.",
    function () {
      var levels = [0, 0.001, 0.0039, 0.01, 0.1, 0.5, 0.99, 1, 1.001, 2];
      var arrayRed = [];
      var arrayGreen = [];
      var arrayBlue = [];
      var positionalRed = [];
      var positionalGreen = [];
      var positionalBlue = [];
      var index;

      for (index = 0; index < levels.length; index += 1) {
        arrayRed.push(util.colorToHex([levels[index], 0, 0]));
        arrayGreen.push(util.colorToHex([0, levels[index], 0]));
        arrayBlue.push(util.colorToHex([0, 0, levels[index]]));
        positionalRed.push(util.colorToHex(levels[index], 0, 0));
        positionalGreen.push(util.colorToHex(0, levels[index], 0));
        positionalBlue.push(util.colorToHex(0, 0, levels[index]));
      }
      return [
        arrayRed,
        arrayGreen,
        arrayBlue,
        positionalRed,
        positionalGreen,
        positionalBlue
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-FORMAT-008",
    "Compare RGB and RGBA overloads for the same channel values.",
    "Compare array [0,0,1] with [0,0,1,1], positional (0,0,1) with (0,0,1,1), and corresponding red/green samples.",
    "Record results to determine whether adding alpha changes RGB channel interpretation.",
    function () {
      return [
        util.colorToHex([1, 0, 0]),
        util.colorToHex([1, 0, 0, 1]),
        util.colorToHex([0, 1, 0]),
        util.colorToHex([0, 1, 0, 1]),
        util.colorToHex([0, 0, 1]),
        util.colorToHex([0, 0, 1, 1]),
        util.colorToHex(1, 0, 0),
        util.colorToHex(1, 0, 0, 1),
        util.colorToHex(0, 1, 0),
        util.colorToHex(0, 1, 0, 1),
        util.colorToHex(0, 0, 1),
        util.colorToHex(0, 0, 1, 1)
      ];
    },
    null
  );

  runUtilProbe(
    "UTIL-FORMAT-009",
    "Narrow the low-value transition in array-form blue color conversion.",
    "Call colorToHex([0,0,value]) for values [0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01].",
    "Return the input levels and corresponding outputs in matching order; prior samples changed from black at 0 to near-white by 0.0039.",
    function () {
      var levels = [
        0, 0.0001, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003,
        0.0035, 0.0039, 0.004, 0.005, 0.006, 0.008, 0.01
      ];
      var results = [];
      var index;

      for (index = 0; index < levels.length; index += 1) {
        results.push(util.colorToHex([0, 0, levels[index]]));
      }
      return [levels, results];
    },
    null
  );

  runUtilProbe(
    "UTIL-ENCODE-001",
    "Check Base64 encoding against a known ASCII vector.",
    "Input string \"hello\".",
    "String \"aGVsbG8=\".",
    function () {
      return util.toBase64("hello");
    },
    function (result) {
      return result === "aGVsbG8=";
    }
  );

  runUtilProbe(
    "UTIL-ENCODE-002",
    "Check Base64 decoding against a known ASCII vector.",
    "Input string \"aGVsbG8=\".",
    "String \"hello\".",
    function () {
      return util.fromBase64("aGVsbG8=");
    },
    function (result) {
      return result === "hello";
    }
  );

  runUtilProbe(
    "UTIL-ENCODE-003",
    "Observe the representation returned by Base64-to-bytes decoding.",
    "Input Base64 string \"AQID\", which represents bytes [1, 2, 3].",
    "Record the returned type and contents; the representation is undocumented.",
    function () {
      return util.fromBase64Bytes("AQID");
    },
    null
  );

  runUtilProbe(
    "UTIL-ENCODE-004",
    "Verify SHA-256 output against a standard known vector.",
    "Input string \"abc\"; known digest is ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad.",
    "Exact lowercase hexadecimal digest shown in the starting point.",
    function () {
      return util.encodeSHA256("abc");
    },
    function (result) {
      return result === "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad";
    }
  );

  runUtilProbe(
    "UTIL-ENCODE-005",
    "Verify SHA-512 output against a standard known vector.",
    "Input string \"abc\"; known digest is ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f.",
    "Exact lowercase hexadecimal digest shown in the starting point.",
    function () {
      return util.encodeSHA512("abc");
    },
    function (result) {
      return result === "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f";
    }
  );

  runUtilProbe(
    "UTIL-ENCODE-006",
    "Verify HMAC-SHA1 output against a standard known vector.",
    "Text \"The quick brown fox jumps over the lazy dog\"; key \"key\".",
    "Expected Base64 output \"3nybhbi3iqa8ino29wqQcBydtNk=\".",
    function () {
      return util.encodeHMAC_SHA1(
        "The quick brown fox jumps over the lazy dog",
        "key"
      );
    },
    function (result) {
      return result === "3nybhbi3iqa8ino29wqQcBydtNk=";
    }
  );

  script.log(
    "[UTIL-PROBE] SUMMARY: PASS=" + utilProbePassed
      + " FAIL=" + utilProbeFailed
      + " OBSERVATION ONLY=" + utilProbeObserved
  );
  script.log("[UTIL-PROBE] END: No UI or external state was intentionally changed.");
}
