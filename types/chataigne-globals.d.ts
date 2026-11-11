/** A Chataigne object that can be a parameter or a trigger. */
interface ChataigneControllable {
  /** Script identifier for this object. */
  name: string;
  /** User-facing name shown in the Inspector. */
  niceName: string;
  /**
   * Host introspection method exposed by the runtime dump; details are unspecified.
   * @param {...*} args Arguments are not documented.
   * @return {*} Result is not documented.
   */
  is(...args: any[]): any;
  /**
   * Returns true for parameters and false for triggers.
   * @return {boolean} Whether this controllable is a value-bearing parameter.
   */
  isParameter(): boolean;
  /**
   * Returns the container that owns this controllable.
   * @return {ChataigneContainer} Parent container.
   */
  getParent(): ChataigneContainer;
  /**
   * Changes the object's name.
   * @param {string} name New script name.
   * @param {string} [shortName] Optional short script identifier.
   * @return {void}
   */
  setName(name: string, shortName?: string): void;
  /**
   * Sets a common or type-specific attribute.
   * @param {string} attribute Attribute name.
   * @param {*} value Attribute value.
   * @return {void}
   */
  setAttribute(attribute: string, value: any): void;
  /**
   * Reads a common or type-specific attribute.
   * @param {string} attribute Attribute name.
   * @return {*} Attribute value; exact type depends on the attribute.
   */
  getAttribute(attribute: string): any;
  /**
   * Returns the OSC-style control address, optionally relative to a container.
   * @param {ChataigneContainer} [reference] Container used as the address reference.
   * @return {string} Control address.
   */
  getControlAddress(reference?: ChataigneContainer): string;
  /**
   * Returns the address used to target the object from a script.
   * @return {string} Script control address.
   */
  getScriptControlAddress(): string;
  /**
   * Runtime-dump spelling of getScriptControlAddress().
   * @return {string} Script control address.
   */
  getScriptControlAdress(): string;
  /**
   * Returns serialized data for this object.
   * @return {*} Serialized object data.
   */
  getJSONData(): any;
  /**
   * Applies serialized data to this object.
   * @param {*} data Serialized object data.
   * @return {void}
   */
  loadJSONData(data: any): void;
}

/** A value-bearing Chataigne controllable. */
interface ChataigneParameter extends ChataigneControllable {
  /**
   * Reads the current value; its type depends on the parameter type.
   * @return {*} Current parameter value.
   */
  get(): any;
  /**
   * Sets the value; some changes may invoke moduleValueChanged.
   * @param {*} value New parameter value.
   * @return {void}
   */
  set(value: any): void;
  /**
   * Restores the parameter's default value.
   * @return {void}
   */
  resetValue(): void;
  /**
   * Returns the parameter range where supported; the result shape is unspecified.
   * @return {*} Parameter range, if available.
   */
  getRange(): any;
  /**
   * Changes the parameter range; supported types and overloads may vary.
   * @param {number} min Minimum range value.
   * @param {number} max Maximum range value.
   * @return {void}
   */
  setRange(min: number, max: number): void;
  /**
   * Reports whether this parameter has a range.
   * @return {boolean} True if the parameter has a range.
   */
  hasRange(): boolean;
}

/** An action-bearing Chataigne controllable. */
interface ChataigneTrigger extends ChataigneControllable {
  /**
   * Fires this trigger.
   * @return {void}
   */
  trigger(): void;
}

/** A child that can be added to or retrieved from a Chataigne container. */
type ChataigneChild = ChataigneParameter | ChataigneTrigger | ChataigneContainer;

/** A Chataigne object that can contain controls and nested containers. */
interface ChataigneContainer {
  /** Script identifier for this container. */
  name: string;
  /** User-facing name shown in the Inspector. */
  niceName: string;
  /**
   * Host introspection method exposed by the runtime dump; details are unspecified.
   * @param {...*} args Arguments are not documented.
   * @return {*} Result is not documented.
   */
  is(...args: any[]): any;
  /**
   * Looks up a direct child by script name. Missing-child behavior is unspecified.
   * @param {string} name Child script name.
   * @return {T} Matching child object.
   */
  getChild<T extends ChataigneChild = ChataigneChild>(name: string): T;
  /**
   * Returns the parent container.
   * @return {ChataigneContainer} Parent container.
   */
  getParent(): ChataigneContainer;
  /**
   * Changes this container's name and optionally its script identifier.
   * @param {string} name User-facing name.
   * @param {string} [shortName] Optional script identifier.
   * @return {void}
   */
  setName(name: string, shortName?: string): void;
  /**
   * Sets whether this container is collapsed in the Inspector.
   * @param {boolean} collapsed Whether to collapse the container.
   * @return {void}
   */
  setCollapsed(collapsed: boolean): void;
  /**
   * Selects this container in the Chataigne interface.
   * @return {void}
   */
  select(): void;
  /**
   * Adds a trigger child.
   * @param {string} name Trigger name.
   * @param {string} description Trigger description.
   * @return {ChataigneTrigger} Created trigger.
   */
  addTrigger(name: string, description: string): ChataigneTrigger;
  /**
   * Adds a Boolean parameter child.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @param {boolean} defaultValue Initial value.
   * @return {ChataigneParameter} Created parameter.
   */
  addBoolParameter(name: string, description: string, defaultValue: boolean): ChataigneParameter;
  /**
   * Adds an Integer parameter child with optional limits.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @param {number} defaultValue Initial value.
   * @param {number} [min] Optional minimum.
   * @param {number} [max] Optional maximum.
   * @return {ChataigneParameter} Created parameter.
   */
  addIntParameter(name: string, description: string, defaultValue: number, min?: number, max?: number): ChataigneParameter;
  /**
   * Adds a Float parameter child with optional limits.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @param {number} defaultValue Initial value.
   * @param {number} [min] Optional minimum.
   * @param {number} [max] Optional maximum.
   * @return {ChataigneParameter} Created parameter.
   */
  addFloatParameter(name: string, description: string, defaultValue: number, min?: number, max?: number): ChataigneParameter;
  /**
   * Adds a String parameter child.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @param {string} defaultValue Initial value.
   * @return {ChataigneParameter} Created parameter.
   */
  addStringParameter(name: string, description: string, defaultValue: string): ChataigneParameter;
  /**
   * Adds an Enum parameter from alternating label/value pairs.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @param {...*} labelValuePairs Alternating option labels and values.
   * @return {ChataigneParameter} Created parameter.
   */
  addEnumParameter(name: string, description: string, ...labelValuePairs: any[]): ChataigneParameter;
  /**
   * Adds a Target parameter child.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @return {ChataigneParameter} Created parameter.
   */
  addTargetParameter(name: string, description: string): ChataigneParameter;
  /**
   * Adds a Point2D parameter child.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @return {ChataigneParameter} Created parameter.
   */
  addPoint2DParameter(name: string, description: string): ChataigneParameter;
  /**
   * Adds a Point3D parameter child.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @return {ChataigneParameter} Created parameter.
   */
  addPoint3DParameter(name: string, description: string): ChataigneParameter;
  /**
   * Adds a Color parameter; the default may be an ARGB number or channel array.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @param {number|number[]} defaultValue Initial ARGB value or channels.
   * @return {ChataigneParameter} Created parameter.
   */
  addColorParameter(name: string, description: string, defaultValue: number | number[]): ChataigneParameter;
  /**
   * Adds a File parameter; directoryMode selects a directory when true.
   * @param {string} name Parameter name.
   * @param {string} description Parameter description.
   * @param {boolean} [directoryMode] Whether to select a directory instead of a file.
   * @return {ChataigneParameter} Created parameter.
   */
  addFileParameter(name: string, description: string, directoryMode?: boolean): ChataigneParameter;
  /**
   * Adds a nested container.
   * @param {string} name Container name.
   * @return {ChataigneContainer} Created container.
   */
  addContainer(name: string): ChataigneContainer;
  /**
   * Adds an automation/curve child; the returned API is not fully documented.
   * @param {string} name Automation name.
   * @return {*} Created automation object.
   */
  addAutomation(name: string): any;
  /**
   * Removes a named child container.
   * @param {string} name Container name.
   * @return {void}
   */
  removeContainer(name: string): void;
  /**
   * Removes a named child parameter.
   * @param {string} name Parameter name.
   * @return {void}
   */
  removeParameter(name: string): void;
  /**
   * Removes child containers and/or controllables; both are included by default.
   * @param {boolean} [clearContainers] Whether to remove child containers.
   * @param {boolean} [clearControllables] Whether to remove parameters and triggers.
   * @return {void}
   */
  clear(clearContainers?: boolean, clearControllables?: boolean): void;
  /**
   * Returns the child containers.
   * @return {ChataigneContainer[]} Child containers.
   */
  getContainers(): ChataigneContainer[];
  /**
   * Returns child parameters and triggers, optionally filtering either kind.
   * @param {boolean} [includeParameters] Whether to include parameters.
   * @param {boolean} [includeTriggers] Whether to include triggers.
   * @return {ChataigneControllable[]} Child controllables.
   */
  getControllables(includeParameters?: boolean, includeTriggers?: boolean): ChataigneControllable[];
  /**
   * Returns this container's OSC-style control address.
   * @param {ChataigneContainer} [reference] Container used as the address reference.
   * @return {string} Control address.
   */
  getControlAddress(reference?: ChataigneContainer): string;
  /**
   * Returns this container's script control address.
   * @return {string} Script control address.
   */
  getScriptControlAddress(): string;
  /**
   * Runtime-dump spelling of getScriptControlAddress().
   * @return {string} Script control address.
   */
  getScriptControlAdress(): string;
  /**
   * Returns serialized data for this container.
   * @return {*} Serialized container data.
   */
  getJSONData(): any;
  /**
   * Applies serialized data to this container.
   * @param {*} data Serialized container data.
   * @return {void}
   */
  loadJSONData(data: any): void;
}

/** Host API for the currently executing script container. */
interface ChataigneScriptHost extends ChataigneContainer {
  /**
   * Returns the container that owns this script.
   * @return {ChataigneScriptContainer} Owning script container.
   */
  getParent(): ChataigneScriptContainer;
  /** The script's own parameter container. */
  params: ChataigneScriptParameters;
  /**
   * Returns the script/container type name.
   * @return {string} Type name.
   */
  getType(): string;
  /**
   * Writes a message to the script log.
   * @param {*} message Message to log.
   * @return {void}
   */
  log(message: any): void;
  /**
   * Writes a warning-level message to the script log.
   * @param {*} message Warning to log.
   * @return {void}
   */
  logWarning(message: any): void;
  /**
   * Writes an error-level message to the script log.
   * @param {*} message Error to log.
   * @return {void}
   */
  logError(message: any): void;
  /**
   * Sets the rate at which update(deltaTime) is called, in hertz.
   * @param {number} rate Update frequency in hertz.
   * @return {void}
   */
  setUpdateRate(rate: number): void;
  /**
   * Sets the maximum execution time for a script call, in seconds.
   * @param {number} seconds Maximum execution time.
   * @return {void}
   */
  setExecutionTimeout(seconds: number): void;
  /**
   * Resynchronizes environment references such as local and root after hierarchy changes.
   * @return {void}
   */
  refreshEnvironment(): void;
  /**
   * Returns the directory containing the current script.
   * @return {string} Script directory.
   */
  getScriptDirectory(): string;
  /**
   * Returns the current script's path.
   * @return {string} Script path.
   */
  getScriptPath(): string;
}

/** Script container whose parent is the module host. */
interface ChataigneScriptContainer extends ChataigneContainer {
  /**
   * Returns the module containing this script.
   * @return {ChataigneModuleHost} Owning module.
   */
  getParent(): ChataigneModuleHost;
}

/** Container of script-owned parameters, also accessible by script name. */
interface ChataigneScriptParameters extends ChataigneContainer {
  /** Script-owned parameter addressable by its script name. */
  [name: string]: any;
}

/** Module Parameters or Values container, also accessible by script name. */
interface ChataigneModuleParameters extends ChataigneContainer {
  /** Module parameter or value addressable by its script name. */
  [name: string]: any;
}

/** Host API for the current module in a module script. */
interface ChataigneModuleHost extends ChataigneContainer {
  /** Module's user-editable Parameters container. */
  parameters: ChataigneModuleParameters;
  /** Module's published Values container. */
  values: ChataigneModuleParameters;
  /**
   * Sends an OSC message through the module's enabled outputs.
   * @param {string} address OSC address.
   * @param {...*} args OSC arguments.
   * @return {void}
   */
  send(address: string, ...args: any[]): void;
  /**
   * Sends an OSC message directly to the given host and port.
   * @param {string} ip Destination IP address.
   * @param {number} port Destination port.
   * @param {string} address OSC address.
   * @param {...*} args OSC arguments.
   * @return {void}
   */
  sendTo(ip: string, port: number, address: string, ...args: any[]): void;
  /**
   * Tests whether an OSC address matches an OSC pattern.
   * @param {string} address OSC address to test.
   * @param {string} pattern OSC pattern.
   * @return {boolean} Whether the address matches the pattern.
   */
  match(address: string, pattern: string): boolean;
  /**
   * Routes matching OSC messages to a named script callback.
   * @param {string} pattern OSC address pattern.
   * @param {string} callbackName Name of the callback function.
   * @return {void}
   */
  register(pattern: string, callbackName: string): void;
}

/** Minimal root shape for looking up modules by script name. */
interface ChataigneRootHost {
  /** Modules in the current Chataigne session. */
  modules: { [name: string]: ChataigneModuleHost };
}

/** Host object for the currently executing script. */
declare var script: ChataigneScriptHost;
/** Host object for the current module in a module script. */
declare var local: ChataigneModuleHost;
/** Root object for the current Chataigne session. */
declare var root: ChataigneRootHost;

/** Fields observed on the Chataigne 1.10.4 getOSInfos() result. */
interface ChataigneOSInfo {
  /** Operating-system name. */
  name: string;
  /** Numeric operating-system type code. */
  type: number;
  /** Name of the host computer. */
  computerName: string;
  /** Host operating-system language. */
  language: string;
  /** Name of the current operating-system user. */
  username: string;
}

/** Utility host object registered by Chataigne for script API probes. */
interface ChataigneUtilHost {
  /**
   * Returns the running Chataigne application version.
   * @return {string} Application version.
   */
  getAppVersion(): string;
  /**
   * Lists host methods when supported by the supplied object.
   * Chataigne 1.10.4 returned void for the OS-info object.
   * @param {object} object Host object to inspect.
   * @return {string[]|void} Method names, or void when unavailable.
   */
  getObjectMethods(object: object): string[] | void;
  /**
   * Lists host property names. On Chataigne 1.10.4, some flag combinations
   * returned void; the Boolean filtering behavior is not fully established.
   * @param {object} object Host object to inspect.
   * @param {boolean} [includeParameters] Whether to include parameter properties.
   * @param {boolean} [includeObjects] Whether to include object properties.
   * @return {string[]|void} Property names, or void for unsupported combinations.
   */
  getObjectProperties(
    object: object,
    includeParameters?: boolean,
    includeObjects?: boolean
  ): string[] | void;
  /**
   * Returns elapsed system time in seconds.
   * @return {number} Elapsed time; the clock origin is unspecified.
   */
  getTime(): number;
  /**
   * Returns the current Unix timestamp in seconds.
   * @return {number} Unix timestamp.
   */
  getTimestamp(): number;
  /**
   * Delays the calling script thread for the requested duration.
   * @param {number} milliseconds Delay duration in milliseconds.
   * @return {number} Host return value; observed as a number in Chataigne 1.10.4.
   */
  delayThreadMS(milliseconds: number): number;
  /**
   * Decodes four bytes as an IEEE-754 single-precision value.
   * Tested Chataigne 1.10.4 results use little-endian byte order.
   * @param {number} byte1 First byte.
   * @param {number} byte2 Second byte.
   * @param {number} byte3 Third byte.
   * @param {number} byte4 Fourth byte.
   * @return {number} Decoded floating-point value.
   */
  getFloatFromBytes(byte1: number, byte2: number, byte3: number, byte4: number): number;
  /**
   * Decodes four bytes as a 32-bit integer.
   * Tested Chataigne 1.10.4 results use little-endian byte order.
   * @param {number} byte1 First byte.
   * @param {number} byte2 Second byte.
   * @param {number} byte3 Third byte.
   * @param {number} byte4 Fourth byte.
   * @return {number} Decoded integer.
   */
  getInt32FromBytes(byte1: number, byte2: number, byte3: number, byte4: number): number;
  /**
   * Returns a number, but the tested 1.10.4 binding behaved like the int32
   * decoder and did not demonstrate 64-bit decoding.
   * @param {number} byte1 First byte.
   * @param {number} byte2 Second byte.
   * @param {number} byte3 Third byte.
   * @param {number} byte4 Fourth byte.
   * @param {number} byte5 Fifth byte.
   * @param {number} byte6 Sixth byte.
   * @param {number} byte7 Seventh byte.
   * @param {number} byte8 Eighth byte.
   * @return {number} Host-decoded integer; 64-bit behavior is not confirmed.
   */
  getInt64FromBytes(byte1: number, byte2: number, byte3: number, byte4: number, byte5: number, byte6: number, byte7: number, byte8: number): number;
  /**
   * Decodes eight bytes as an IEEE-754 double-precision value.
   * Tested Chataigne 1.10.4 results use little-endian byte order.
   * @param {number} byte1 First byte.
   * @param {number} byte2 Second byte.
   * @param {number} byte3 Third byte.
   * @param {number} byte4 Fourth byte.
   * @param {number} byte5 Fifth byte.
   * @param {number} byte6 Sixth byte.
   * @param {number} byte7 Seventh byte.
   * @param {number} byte8 Eighth byte.
   * @return {number} Decoded floating-point value.
   */
  getDoubleFromBytes(byte1: number, byte2: number, byte3: number, byte4: number, byte5: number, byte6: number, byte7: number, byte8: number): number;
  /**
   * Converts a number to a hexadecimal float byte sequence.
   * In tested Chataigne 1.10.4 behavior, true produced big-endian output.
   * @param {number} value Number to encode.
   * @param {boolean} littleEndian Byte-order flag; tested behavior is opposite the name.
   * @return {string} Hexadecimal byte sequence.
   */
  floatToHexSeq(value: number, littleEndian: boolean): string;
  /**
   * Converts a number to a hexadecimal double byte sequence.
   * In tested Chataigne 1.10.4 behavior, true produced big-endian output.
   * @param {number} value Number to encode.
   * @param {boolean} littleEndian Byte-order flag; tested behavior is opposite the name.
   * @return {string} Hexadecimal byte sequence.
   */
  doubleToHexSeq(value: number, littleEndian: boolean): string;
  /**
   * Parses a hexadecimal string as an integer.
   * @param {string} value Hexadecimal text.
   * @return {number} Parsed integer.
   */
  hexStringToInt(value: string): number;
  /**
   * Formats a number with a fixed number of decimal places.
   * @param {number} value Number to format.
   * @param {number} decimals Number of decimal places.
   * @return {string} Formatted number.
   */
  toStringFixed(value: number, decimals: number): string;
  /**
   * Converts RGB/RGBA channel values to hexadecimal text.
   * Tested behavior varies by call form; channel semantics are not established.
   * @param {number[]} channels RGB or RGBA channel array.
   * @return {string} Hexadecimal color text.
   */
  colorToHex(channels: number[]): string;
  /**
   * Converts positional RGB/RGBA channel values to hexadecimal text.
   * Tested behavior varies by call form; channel semantics are not established.
   * @param {number} red Red channel.
   * @param {number} green Green channel.
   * @param {number} blue Blue channel.
   * @param {number} [alpha] Optional alpha channel.
   * @return {string} Hexadecimal color text.
   */
  colorToHex(red: number, green: number, blue: number, alpha?: number): string;
  /**
   * Returns the user's Documents directory path.
   * @return {string} Documents directory path.
   */
  getDocumentsDirectory(): string;
  /**
   * Returns the user's Desktop directory path.
   * @return {string} Desktop directory path.
   */
  getDesktopDirectory(): string;
  /**
   * Returns the current session file's directory; observed as empty in the tested context.
   * @return {string} Current file directory path.
   */
  getCurrentFileDirectory(): string;
  /**
   * Returns the current session file path; observed as empty in the tested context.
   * @return {string} Current file path.
   */
  getCurrentFilePath(): string;
  /**
   * Returns the parent directory for a path accepted by the host.
   * @param {string} path Path to resolve.
   * @return {string|void} Parent directory, or void for some unsupported paths.
   */
  getParentDirectory(path: string): string | void;
  /**
   * Returns the final path component, optionally including its extension.
   * @param {string} path Path to inspect.
   * @param {boolean} [withExtension] Whether to retain the extension.
   * @return {string|void} File name, or void for some unsupported paths.
   */
  getFileName(path: string, withExtension?: boolean): string | void;
  /**
   * Resolves a path using the host's current context.
   * @param {string} relativePath Path to resolve.
   * @return {string|void} Resolved path, or void for some unsupported paths.
   */
  getFilePath(relativePath: string): string | void;
  /**
   * Tests whether a path exists as a file.
   * @param {string} path File path to test.
   * @return {number} Numeric 0/1 result in tested Chataigne 1.10.4 behavior.
   */
  fileExists(path: string): number;
  /**
   * Tests whether a path exists as a directory.
   * @param {string} path Directory path to test.
   * @return {number} Numeric 0/1 result in tested Chataigne 1.10.4 behavior.
   */
  directoryExists(path: string): number;
  /**
   * Produces a candidate path that does not currently exist.
   * @param {string} directory Directory in which to form the candidate.
   * @param {string} fileName Requested candidate name.
   * @return {string} Candidate path; it is not reserved or created.
   */
  getNonExistentFile(directory: string, fileName: string): string;
  /**
   * Returns operating-system metadata.
   * @return {ChataigneOSInfo} OS information; some fields may identify the host.
   */
  getOSInfos(): ChataigneOSInfo;
  /**
   * Returns local IP addresses.
   * @return {string[]} IP address strings; values may be network-identifying.
   */
  getIPs(): string[];
  /**
   * Reads an environment variable by name.
   * @param {string} name Environment variable name.
   * @return {string} Variable value; observed as empty for a missing name.
   */
  getEnvironmentVariable(name: string): string;
  /**
   * Returns the currently selected Chataigne object, if any.
   * @return {object|null|void} Selected object or an empty-selection result.
   */
  getSelectedObject(): object | null | void;
  /**
   * Returns the number of selected Chataigne objects.
   * @return {number} Selected-object count.
   */
  getSelectedObjectsCount(): number;
  /**
   * Encodes text as Base64.
   * @param {string} value Text to encode.
   * @return {string} Base64-encoded text.
   */
  toBase64(value: string): string;
  /**
   * Decodes Base64 text to a string.
   * @param {string} value Base64-encoded text.
   * @return {string} Decoded text.
   */
  fromBase64(value: string): string;
  /**
   * Decodes Base64 text to a byte sequence.
   * @param {string} value Base64-encoded bytes.
   * @return {*} Host byte-sequence representation.
   */
  fromBase64Bytes(value: string): any;
  /**
   * Computes a SHA-256 digest.
   * @param {string} value Input text.
   * @return {string} Digest as lowercase hexadecimal in the tested vector.
   */
  encodeSHA256(value: string): string;
  /**
   * Computes a SHA-512 digest.
   * @param {string} value Input text.
   * @return {string} Digest as lowercase hexadecimal in the tested vector.
   */
  encodeSHA512(value: string): string;
  /**
   * Computes an HMAC-SHA1 digest.
   * @param {string} value Input text.
   * @param {string} key Secret key.
   * @return {string} Digest; tested output was Base64 encoded.
   */
  encodeHMAC_SHA1(value: string, key: string): string;
}

/** Utility object exposed by Chataigne to scripts. */
declare var util: ChataigneUtilHost;

/**
 * Receives OSC messages through the module's protocol callback.
 *
 * @param {string} address The received OSC address.
 * @param {any[]} args The OSC arguments.
 * @param {string} originIp The sender's IP address.
 * @return {void}
 */
declare function oscEvent(address: string, args: any[], originIp: string): void;

/**
 * Observes module value changes without sending them back to the device.
 *
 * A value.set() performed by another script can invoke this callback too.
 * Keeping this callback read-only avoids accidental send/set feedback loops.
 *
 * @param {ChataigneParameter} value The changed module value or trigger.
 */
declare function moduleValueChanged(value: ChataigneParameter): void;

/**
 * Called when a parameter or trigger in the module's Parameters panel changes.
 *
 * @param {ChataigneParameter} param The changed module parameter or trigger.
 */
function moduleParameterChanged(param: ChataigneParameter): void;

/**
 * Initializes this script and demonstrates the script host API.
 *
 * Chataigne calls init() once for this script. The parameter belongs to this
 * script, not to the module's shared Parameters panel.
 */
function init(): void;

/**
 * Runs at the update rate configured in init().
 *
 * @param {number} deltaTime Elapsed time since the previous update, in seconds.
 */
function update(deltaTime: number): void;