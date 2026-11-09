interface ChataigneParameter {
  name: string;
  niceName: string;
  get(): any;
  set(value: any): void;
  isParameter(): boolean;
}

interface ChataigneScriptHost {
  log(message: any): void;
  logWarning(message: any): void;
  logError(message: any): void;
  setUpdateRate(rate: number): void;
  setExecutionTimeout(seconds: number): void;
  refreshEnvironment(): void;
  getScriptDirectory(): string;
  getScriptPath(): string;
  addTrigger(name: string, description: string): ChataigneParameter;
  addBoolParameter(name: string, description: string, defaultValue: boolean): ChataigneParameter;
  addIntParameter(name: string, description: string, defaultValue: number, min?: number, max?: number): ChataigneParameter;
  addFloatParameter(name: string, description: string, defaultValue: number, min?: number, max?: number): ChataigneParameter;
  addStringParameter(name: string, description: string, defaultValue: string): ChataigneParameter;
  addEnumParameter(name: string, description: string, ...labelValuePairs: any[]): ChataigneParameter;
  addTargetParameter(name: string, description: string): ChataigneParameter;
  addPoint2DParameter(name: string, description: string): ChataigneParameter;
  addPoint3DParameter(name: string, description: string): ChataigneParameter;
  addColorParameter(name: string, description: string, defaultValue: number | number[]): ChataigneParameter;
  addFileParameter(name: string, description: string, directoryMode?: boolean): ChataigneParameter;
}

interface ChataigneContainer {
  getChild(name: string): ChataigneParameter;
}

interface ChataigneModuleHost {
  getChild(name: string): ChataigneContainer;
  parameters: { [name: string]: ChataigneParameter };
  values: { [name: string]: ChataigneParameter };
  send(address: string, ...args: any[]): void;
  sendTo(ip: string, port: number, address: string, ...args: any[]): void;
  match(address: string, pattern: string): boolean;
  register(pattern: string, callbackName: string): void;
}

declare var script: ChataigneScriptHost;
declare var local: ChataigneModuleHost;
