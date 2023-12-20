import type { ViewBlock } from '../view';

export type RemoteBlueprintTransformRequest = {
  token: string;
  data: object | null;
  transform: object | null;
};

export type RemoteBlueprintTransformResponse = {
  data: object | null;
  caption: string | null;
};

export type RemoteBlueprintViewRequest = {
  token: string;
  data: object | null;
};

export type RemoteBlueprintViewResponse = {
  blocks: ViewBlock[];
};

export type RemoteBlueprintSpecPlain = {
  name: string;
  type: 'plain';
};

export type RemoteBlueprintSpecExternal = {
  name: string;
  type: 'external';
};

export type RemoteBlueprintSpec =
  | RemoteBlueprintSpecPlain
  | RemoteBlueprintSpecExternal
;

export type RemoteBlueprint = {
  transform(request: RemoteBlueprintTransformRequest): Promise<RemoteBlueprintTransformResponse>;
  view(request: RemoteBlueprintViewRequest): Promise<RemoteBlueprintViewResponse>;
};

export type RemoteBlueprintRef = { blueprint: string };
