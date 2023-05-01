import type { RuntimeObject } from './common';

export type LinkSpec = {
  from: string;
  to: string;
};

export type LinkObject = RuntimeObject<'link', LinkSpec> & { state?: object };
