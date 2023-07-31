import type {
  SchemaIs,
  ShapeIs,
  Variant,
} from './common';
import type { BlueprintRef } from './blueprint';

export type BlockContextBuffer<T> = {
  push(objects: T[]): void;
};

export type BlockContextState<T> = {
  get(): T | undefined;
  set(value: T): void;
};

export type BlockContextTimer = {
  at(when: Date): void;
};

export type BlockPullContext<I, R, S, N> = {
  signal: AbortSignal;
  timer: BlockContextTimer;
  queue: BlockContextBuffer<I>;
  resource: R;
  state: BlockContextState<S>;
  options: N;
};

export type BlockPullContextAny =
  BlockPullContext<object, object | void, object | void, object | void>;

export type BlockProcessContext<I, O, R, S, P> = {
  signal: AbortSignal;
  input: I;
  output: BlockContextBuffer<O>;
  resource: R;
  state: BlockContextState<S>;
  params: P;
};

export type BlockProcessContextAny =
  BlockProcessContext<object, object | void, object | void, object | void, object | void>;

export type BlockEnumerateCallback<R, P> = (
  resource: R,
) => Promise<Variant<P>[]>;

export type BlockEnumerateCallbackAny =
  BlockEnumerateCallback<object | void, object>;

export type BlockPullCallback<I, R, S, N> = (
  ctx: BlockPullContext<I, R, S, N>,
) => Promise<void>;

export type BlockPullCallbackAny =
  BlockPullCallback<object, object | void, object | void, object | void>;

export type BlockProcessCallback<I, O, R, S, P> = (
  ctx: BlockProcessContext<I, O, R, S, P>,
) => Promise<void>;

export type BlockProcessCallbackAny =
  BlockProcessCallback<object, object | void, object | void, object | void, object | void>;

export type BlockQueueSpec = {
  is: SchemaIs<object> | null;
};

export type BlockInputOneSpec = {
  type: 'one';
  is: SchemaIs<object> | null;
};

export type BlockInputManySpec = {
  type: 'many';
  is: ShapeIs<object> | null;
};

export type BlockInputSpec = BlockInputOneSpec | BlockInputManySpec;

export type BlockOutputOneSpec = {
  type: 'one';
  is: SchemaIs<object> | null;
};

export type BlockOutputManySpec = {
  type: 'many';
  is: ShapeIs<object> | null;
};

export type BlockOutputSpec = BlockOutputOneSpec | BlockOutputManySpec;

export type BlockResourceOneSpec = {
  type: 'one';
  ref: BlueprintRef<object>;
};

export type BlockResourceSpec = BlockResourceOneSpec;

export type BlockStateSpec = {
  is: SchemaIs<object> | null;
};

export type BlockOptionsSpec = {
  is: SchemaIs<object> | null;
};

export type BlockParamsSpec = {
  is: SchemaIs<object> | null;
};

export type BlockSpec = {
  queue: BlockQueueSpec | null;
  input: BlockInputSpec | null;
  output: BlockOutputSpec | null;
  resource: BlockResourceSpec | null;
  state: BlockStateSpec | null;
  options: BlockOptionsSpec | null;
  params: BlockParamsSpec | null;
  enumerate: BlockEnumerateCallbackAny | null;
  pull: BlockPullCallbackAny | null;
  process: BlockProcessCallbackAny | null;
};
