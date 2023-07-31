import type { OutletRef } from './output';

export type ResourceSpecSource = {
  name: string;
  blueprint: string;
  commands: object[];
};

export type PipelineNodeInletSpecSource = {
  [key: string]: string | string[];
};

export type PipelineNodeInputSpecSource =
  | PipelineNodeInputSpecNormal
  | string | string[]
  | PipelineNodeInletSpecSource[]
  | { inlets: PipelineNodeInletSpecSource[] }
;

export type PipelineNodeInletSpecNormal = {
  name: string;
  from: OutletRef[];
};

export type PipelineNodeInputSpecNormalOne = {
  type: 'one';
  from: OutletRef[];
};

export type PipelineNodeInputSpecNormalMany = {
  type: 'many';
  inlets: PipelineNodeInletSpecNormal[];
};

export type PipelineNodeInputSpecNormal =
  | PipelineNodeInputSpecNormalOne
  | PipelineNodeInputSpecNormalMany
;

export type PipelineNodeOutputSpecSource =
  | PipelineNodeOutputSpecNormal
  | string[]
;

export type PipelineNodeOutletSpecNormal = {
  name: string;
};

export type PipelineNodeOutputSpecNormalMany = {
  type: 'many';
  outlets: PipelineNodeOutletSpecNormal[];
};

export type PipelineNodeOutputSpecNormal =
  | PipelineNodeOutputSpecNormalMany
;

export type PipelineNodeSpecSource = {
  name: string;
  block: string;
  input?: PipelineNodeInputSpecSource;
  output?: PipelineNodeOutputSpecSource;
  resource?: string;
  values?: object;
  options?: object;
  params?: object;
};

export type PipelineNodeSpecNormal = {
  name: string;
  block: string;
  input: PipelineNodeInputSpecNormal | null;
  output: PipelineNodeOutputSpecNormal | null;
  resource: string | null;
  values: object | null;
  options: object | null;
  params: object | null;
};

export type PipelineSpecSource = {
  name: string;
  nodes: PipelineNodeSpecSource[];
};
