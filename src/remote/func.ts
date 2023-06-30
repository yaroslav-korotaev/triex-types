import type { Schema } from '../common';

export type RemoteFuncExecRequest = {
  args?: object | void;
};

export type RemoteFuncExecResponse = {
  result?: object | object[] | void;
};

export type RemoteFuncSpec = {
  name: string;
  args: { is: Schema | null } | null;
  result: { is: Schema | null } | null;
};

export type RemoteFunc = {
  exec(request: RemoteFuncExecRequest): Promise<RemoteFuncExecResponse>;
};
