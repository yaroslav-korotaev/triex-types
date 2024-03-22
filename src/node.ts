import type { RuntimeObject } from './common';
import type { InputSpec } from './input';
import type { OutputSpec } from './output';
import type { ResourceRef } from './resource';

export type AssertSpec = {
  expr: string | object;
};

export type LogSpec = {
  success?: string | object;
  error?: string | object;
};

export type NodeSpec = {
  block: string;
  input: InputSpec;
  output: OutputSpec;
  resource: ResourceRef | null;
  values: object | null;
  options: object | null;
  params: object | null;
  assert: AssertSpec | null;
  log: LogSpec | null;
};

export type NodeObject = RuntimeObject<'node', NodeSpec> & { state?: object };
