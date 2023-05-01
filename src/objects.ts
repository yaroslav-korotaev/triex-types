import type { NodeObject } from './node';
import type { LinkObject } from './link';
import type { PipelineObject } from './pipeline';

export type AnyObject =
  | NodeObject
  | LinkObject
  | PipelineObject
;
