import type { RemoteBlueprintRef } from './blueprint';

// TODO: unwrap data/result
// TODO: use something like ErrorLike instead of Error

export type RemoteBlockPullRequest = {
  data: {
    resource: object | undefined;
    state: object | undefined;
    options: object | undefined;
  };
};

export type RemoteBlockPullResponse = {
  error?: Error;
  result?: {
    next: string | undefined;
    state: object | undefined;
    objects: object[];
    metrics?: Record<string, number>;
  };
};

export type RemoteBlockProcessRequest = {
  data: {
    input: object;
    resource: object | undefined;
    state: object | undefined;
    params: object | undefined;
  };
};

export type RemoteBlockProcessResponse = {
  error?: Error;
  result?: {
    state: object | undefined;
    output: object[];
    metrics?: Record<string, number>;
  };
};

export type RemoteBlockQueueSpec = {};

export type RemoteBlockInputOneSpec = {
  type: 'one';
};

export type RemoteBlockInputManySpec = {
  type: 'many';
};

export type RemoteBlockInputSpec = RemoteBlockInputOneSpec | RemoteBlockInputManySpec;

export type RemoteBlockOutputOneSpec = {
  type: 'one';
};

export type RemoteBlockOutputManySpec = {
  type: 'many';
};

export type RemoteBlockOutputSpec = RemoteBlockOutputOneSpec | RemoteBlockOutputManySpec;

export type RemoteBlockResourceOneSpec = {
  type: 'one';
  ref: RemoteBlueprintRef;
};

export type RemoteBlockResourceSpec = RemoteBlockResourceOneSpec;

export type RemoteBlockStateSpec = {};

export type RemoteBlockOptionsSpec = {};

export type RemoteBlockParamsSpec = {};

export type RemoteBlockSpec = {
  name: string;
  queue: RemoteBlockQueueSpec | null;
  input: RemoteBlockInputSpec | null;
  output: RemoteBlockOutputSpec | null;
  resource: RemoteBlockResourceSpec | null;
  state: RemoteBlockStateSpec | null;
  options: RemoteBlockOptionsSpec | null;
  params: RemoteBlockParamsSpec | null;
  pull: boolean;
  process: boolean;
};

export type RemoteBlock = {
  pull(request: RemoteBlockPullRequest): Promise<RemoteBlockPullResponse>;
  process(request: RemoteBlockProcessRequest): Promise<RemoteBlockProcessResponse>;
};
