import type { Execution } from './execution';

export type PipelineNodeTrace = {
  name: string;
  history: Execution[];
};

export type PipelineTrace = {
  nodes: PipelineNodeTrace[];
};
