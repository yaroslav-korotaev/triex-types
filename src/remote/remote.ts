import type { RemoteBlueprintSpec } from './blueprint';
import type { RemoteBlockSpec } from './block';

export type RemoteIndexSpec = {
  blueprints: RemoteBlueprintSpec[];
  blocks: RemoteBlockSpec[];
};
