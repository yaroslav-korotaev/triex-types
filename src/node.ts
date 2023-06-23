import type { RuntimeObject } from './common';
import type { InputSpec } from './input';
import type { OutputSpec } from './output';
import type { ResourceRef } from './resource';

export type NodeSpec = {
  block: string;
  input: InputSpec;
  output: OutputSpec;
  resource: ResourceRef | null;
  values: object | null;
  params: object | null;
};

export type NodeObject = RuntimeObject<'node', NodeSpec> & { state?: object };
