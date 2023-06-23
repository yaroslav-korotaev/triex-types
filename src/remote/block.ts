import type { RemoteBlueprintRef } from './blueprint';

export type RemoteBlockResourceOneSpec = {
  type: 'one';
  ref: RemoteBlueprintRef;
};

export type RemoteBlockResourceSpec = RemoteBlockResourceOneSpec;
