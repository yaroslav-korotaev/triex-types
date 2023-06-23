import type {
  BlockStateSpec,
  BlockResourceSpec,
  BlockParamsSpec,
  BlockEnumerateCallbackAny,
} from './block';

export type StreamProcessContext<R, S, P> = {
  now: Date;
  resource: R;
  state: S;
  params: P;
};

export type StreamProcessResult<S> = {
  state: S;
  output: object[];
};

export type StreamProcessCallback<R, S, P> = (
  ctx: StreamProcessContext<R, S, P>,
) => Promise<StreamProcessResult<S>>;

export type StreamProcessCallbackAny =
  StreamProcessCallback<object | void, object | void, object | void>;

export type StreamSpec = {
  resource: BlockResourceSpec | null;
  state: BlockStateSpec | null;
  params: BlockParamsSpec | null;
  enumerate: BlockEnumerateCallbackAny | null;
  process: StreamProcessCallbackAny;
};
