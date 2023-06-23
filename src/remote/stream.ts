import type {
  Schema,
  Variant,
} from '../common';
import type { RemoteBlockResourceSpec } from './block';

export type RemoteStreamParamsSchemaRequest = {
  resource?: object | void;
};

export type RemoteStreamParamsSchemaResponse = {
  schema: Schema | null;
};

export type RemoteStreamEnumerateRequest = {
  resource?: object | void;
};

export type RemoteStreamEnumerateResponse = {
  variants: Variant<object>[];
};

export type RemoteStreamProcessRequest = {
  now: string;
  resource?: object | void;
  state?: object | void;
  params?: object | void;
};

export type RemoteStreamProcessResponse = {
  state?: object | void;
  output: object[];
};

export type RemoteStreamSpec = {
  name: string;
  resource: RemoteBlockResourceSpec | null;
  state: { is: Schema | null } | null;
  params: { is: Schema | null } | null;
};

export type RemoteStream = {
  paramsSchema(request: RemoteStreamParamsSchemaRequest): Promise<RemoteStreamParamsSchemaResponse>;
  enumerate(request: RemoteStreamEnumerateRequest): Promise<RemoteStreamEnumerateResponse>;
  process(request: RemoteStreamProcessRequest): Promise<RemoteStreamProcessResponse>;
};
