import type {
  Schema,
  SchemaIs,
  Hint,
} from './common';

export type StreamProcessContext<S, P> = {
  now: Date;
  state?: S;
  params: P;
};

export type StreamProcessResult<S> = {
  state: S;
  output: object[];
};

export type StreamHintsCallback<P> = (param: string, partial: Partial<P>) => Promise<Hint[]>;
export type StreamOutputCallback<P> = (params: P) => Promise<Schema>;
export type StreamProcessCallback<S, P> = (
  ctx: StreamProcessContext<S, P>,
) => Promise<StreamProcessResult<S>>;

export type StreamParamsSpec = {
  is: SchemaIs<object>;
  mandatory: string[];
  hints: StreamHintsCallback<object> | null;
  output: StreamOutputCallback<object> | null;
};

export type StreamSpec = {
  params: StreamParamsSpec | null;
  process: StreamProcessCallback<object, object | void>;
};
