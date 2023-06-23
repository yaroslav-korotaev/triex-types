import type { OutletRef } from './output';

export type ResourceSpecSource = {
  name: string;
  blueprint: string;
  commands: object[];
};

export type PipelineNodeInletSpecNormal = {
  name: string;
  from: OutletRef[];
};

export type PipelineNodeInputSpecNormal = {
  inlets: PipelineNodeInletSpecNormal[];
};

export type PipelineNodeInputSpecSource =
  | string
  | { [key: string]: string }
  | PipelineNodeInputSpecNormal
;

export type PipelineNodeOutletSpecNormal = {
  name: string;
};

export type PipelineNodeOutputSpecNormal = {
  outlets: PipelineNodeOutletSpecNormal[];
};

export type PipelineNodeOutputSpecSource =
  | string[]
  | PipelineNodeOutputSpecNormal
;

export type PipelineNodeSpecSource = {
  name: string;
  block: string;
  input?: PipelineNodeInputSpecSource;
  output?: PipelineNodeOutputSpecSource;
  resource?: string;
  values?: object;
  params?: object;
};

export type PipelineNodeSpecNormal = {
  name: string;
  block: string;
  input: PipelineNodeInputSpecNormal;
  output: PipelineNodeOutputSpecNormal;
  resource: string | null;
  values: object | null;
  params: object | null;
};

export type PipelineSpecSource = {
  name: string;
  nodes: PipelineNodeSpecSource[];
};
