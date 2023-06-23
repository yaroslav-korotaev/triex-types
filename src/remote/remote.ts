import type { RemoteBlueprintSpec } from './blueprint';
import type { RemoteFuncSpec } from './func';
import type { RemoteStreamSpec } from './stream';

export type RemoteIndexSpec = {
  blueprints: RemoteBlueprintSpec[];
  functions: RemoteFuncSpec[];
  streams: RemoteStreamSpec[];
};
