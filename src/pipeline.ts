import type { RuntimeObject } from './common';

export type PipelineSpec = {
  nodes: string[];
  links: string[];
};

export type PipelineObject = RuntimeObject<'pipeline', PipelineSpec>;
