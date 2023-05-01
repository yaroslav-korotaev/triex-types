import type {
  BlockStateSpec,
  BlockConfigSpec,
  BlockParamsSpec,
  BlockEnumerateCallbackAny,
} from './block';

export type StreamProcessContext<S, C, P> = {
  now: Date;
  state: S;
  config: C;
  params: P;
};

export type StreamProcessResult<S> = {
  state: S;
  output: object[];
};

export type StreamProcessCallback<S, C, P> = (
  ctx: StreamProcessContext<S, C, P>,
) => Promise<StreamProcessResult<S>>;

export type StreamProcessCallbackAny =
  StreamProcessCallback<object | void, object | void, object | void>;

export type StreamSpec = {
  state: BlockStateSpec | null;
  config: BlockConfigSpec | null;
  params: BlockParamsSpec | null;
  enumerate: BlockEnumerateCallbackAny | null;
  process: StreamProcessCallbackAny;
};
