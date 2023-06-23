import type { ResourceObject } from './resource';
import type { NodeObject } from './node';
import type { LinkObject } from './link';
import type { PipelineObject } from './pipeline';

export type AnyObject =
  | ResourceObject
  | NodeObject
  | LinkObject
  | PipelineObject
;
