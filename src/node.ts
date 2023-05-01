import type { RuntimeObject } from './common';

export type NodeSpec = {
  block: string;
  config: string | null;
  params: object | null;
};

export type NodeObject = RuntimeObject<'node', NodeSpec> & { state?: object };
