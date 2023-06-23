import type {
  SchemaIs,
  ShapeIs,
  Variant,
} from './common';
import type { BlueprintRef } from './blueprint';

export type BlockScheduler = {
  immediate(): void;
  timeout(ms: number): void;
};

export type BlockInput<T> = {
  read(): T | undefined;
};

export type BlockOutput<T> = {
  write(obj: T): void;
  write<K extends keyof T>(outlet: K, obj: T[K]): void;
};

export type BlockState<S> = {
  get(): S | undefined;
  save(next: S): void;
};

export type BlockContext<I, O, R, S, P> = {
  scheduler: BlockScheduler;
  input: BlockInput<I>;
  output: BlockOutput<O>;
  resource: R;
  state: BlockState<S>;
  values: object;
  params: P;
};

export type BlockEnumerateCallback<R, P> = (resource: R) => Promise<Variant<P>[]>;

export type BlockEnumerateCallbackAny = BlockEnumerateCallback<object | void, object>;

export type BlockMethodCallback<I, O, R, S, P> = (
  ctx: BlockContext<I, O, R, S, P>,
) => Promise<void>;

export type BlockMethodCallbackAny =
  BlockMethodCallback<object, object, object | void, object | void, object | void>;

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

export type BlockParamsSpec = {
  is: SchemaIs<object> | null;
};

export type BlockSpec = {
  input: BlockInputSpec | null;
  output: BlockOutputSpec | null;
  resource: BlockResourceSpec | null;
  state: BlockStateSpec | null;
  params: BlockParamsSpec | null;
  enumerate: BlockEnumerateCallbackAny | null;
  init: BlockMethodCallbackAny | null;
  trigger: BlockMethodCallbackAny | null;
  process: BlockMethodCallbackAny | null;
};
