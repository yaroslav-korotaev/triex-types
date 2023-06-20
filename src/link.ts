import type { RuntimeObject } from './common';
import type { InletRef } from './input';
import type { OutletRef } from './output';

export type LinkSpec = {
  from: OutletRef;
  to: InletRef;
};

export type LinkObject = RuntimeObject<'link', LinkSpec> & { state?: object };
