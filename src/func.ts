import type { SchemaIs } from './common';

export type FuncArgsSpec = {
  is: SchemaIs<object> | null;
};

export type FuncResultSpec = {
  is: SchemaIs<object> | null;
};

export type FuncExecCallback<A, R> = (args: A) => Promise<R>;

export type FuncExecCallbackAny = FuncExecCallback<object | void, object | void>;

export type FuncSpec = {
  args: FuncArgsSpec | null;
  result: FuncResultSpec | null;
  exec: FuncExecCallbackAny;
};
