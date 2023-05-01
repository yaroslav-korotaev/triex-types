import type {
  Schema,
  SchemaIs,
  Variant,
} from './common';

export type BlockParamsSchemaCallback<C> = (config: C) => Promise<Schema | null>;

export type BlockParamsValidateCallback<C, P> = (
  config: C,
  params: P,
) => Promise<void>;

export type BlockDynamicParamsSetup<C, P> = {
  schema: BlockParamsSchemaCallback<C>;
  validate: BlockParamsValidateCallback<C, P>;
};

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

export type BlockContext<I, O, S, C, P> = {
  scheduler: BlockScheduler;
  input: BlockInput<I>;
  output: BlockOutput<O>;
  state: BlockState<S>;
  config: C;
  params: P;
};

export type BlockEnumerateCallback<C, P> = (config: C) => Promise<Variant<P>[]>;

export type BlockEnumerateCallbackAny = BlockEnumerateCallback<object | void, object>;

export type BlockMethodCallback<I, O, S, C, P> = (
  ctx: BlockContext<I, O, S, C, P>,
) => Promise<void>;

export type BlockMethodCallbackAny =
  BlockMethodCallback<object, object, object | void, object | void, object | void>;

export type BlockInputOneSpec = {
  type: 'one';
  is: SchemaIs<object> | null;
};

export type BlockInputSpec = BlockInputOneSpec;

export type BlockOutputOneSpec = {
  type: 'one';
  is: SchemaIs<object> | null;
};

export type BlockOutputSpec = BlockOutputOneSpec;

export type BlockStateSpec = {
  is: SchemaIs<object> | null;
};

export type BlockConfigOneSpec = {
  type: 'one';
  configurator: string;
};

export type BlockConfigSpec = BlockConfigOneSpec;

export type BlockParamsStaticSpec = {
  type: 'static';
  is: SchemaIs<object> | null;
};

export type BlockParamsDynamicSpec = {
  type: 'dynamic';
  setup: BlockDynamicParamsSetup<object | void, object | void>;
};

export type BlockParamsSpec = BlockParamsStaticSpec | BlockParamsDynamicSpec;

export type BlockSpec = {
  input: BlockInputSpec | null;
  output: BlockOutputSpec | null;
  state: BlockStateSpec | null;
  config: BlockConfigSpec | null;
  params: BlockParamsSpec | null;
  enumerate: BlockEnumerateCallbackAny | null;
  init: BlockMethodCallbackAny | null;
  trigger: BlockMethodCallbackAny | null;
  process: BlockMethodCallbackAny | null;
};
