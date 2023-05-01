import type {
  Schema,
  Variant,
} from '../common';

export type RemoteStreamParamsSchemaRequest = {
  config?: object | void;
};

export type RemoteStreamParamsSchemaResponse = {
  schema: Schema | null;
};

export type RemoteStreamEnumerateRequest = {
  config?: object | void;
};

export type RemoteStreamEnumerateResponse = {
  variants: Variant<object>[];
};

export type RemoteStreamProcessRequest = {
  now: string;
  state?: object | void;
  config?: object | void;
  params?: object | void;
};

export type RemoteStreamProcessResponse = {
  state?: object | void;
  output: object[];
};

export type RemoteStream = {
  name: string;
  paramsSchema(request: RemoteStreamParamsSchemaRequest): Promise<RemoteStreamParamsSchemaResponse>;
  enumerate(request: RemoteStreamEnumerateRequest): Promise<RemoteStreamEnumerateResponse>;
  process(request: RemoteStreamProcessRequest): Promise<RemoteStreamProcessResponse>;
};
