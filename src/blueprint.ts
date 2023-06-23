import type { SchemaIs } from './common';

export type BlueprintExecuteCallback<R, C> = (resource: R | null, command: C) => Promise<R>;

export type BlueprintExecuteCallbackAny = BlueprintExecuteCallback<object, object>;

export type BlueprintSpec = {
  resource: SchemaIs<object> | null;
  command: SchemaIs<object> | null;
  execute: BlueprintExecuteCallbackAny;
};

export type BlueprintRef<T> = { blueprint: string };
