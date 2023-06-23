import type { Schema } from '../common';

export type RemoteBlueprintExecuteRequest = {
  resource: object | null;
  command: object;
};

export type RemoteBlueprintExecuteResponse = {
  resource: object;
};

export type RemoteBlueprintSpec = {
  name: string;
  resource: Schema | null;
  command: Schema | null;
};

export type RemoteBlueprint = {
  execute(request: RemoteBlueprintExecuteRequest): Promise<RemoteBlueprintExecuteResponse>;
};

export type RemoteBlueprintRef = { blueprint: string };
