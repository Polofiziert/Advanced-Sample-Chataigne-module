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
  [name: string]: any;
}

/** Module Parameters or Values container, also accessible by script name. */
interface ChataigneModuleParameters extends ChataigneContainer {
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
