import type { SchemaIs, RuntimeObject } from './common';
import type { ViewBlock } from './view';

export type BlueprintType = 'plain' | 'external';

export type BlueprintTransformParams<D, T> = {
  token: string;
  data: D | null;
  transform: T | null;
};

export type BlutprintTransformResult<D> = {
  data: D | null;
  caption: string | null;
};

export type BlueprintViewParams<D> = {
  token: string;
  data: D | null;
};

export type BlueptinViewResult = {
  blocks: ViewBlock[];
};

export type BlueprintTransformCallback<D, T> = (
  params: BlueprintTransformParams<D, T>,
) => Promise<BlutprintTransformResult<D>>;

export type BlueprintTransformCallbackAny = BlueprintTransformCallback<object, object>;

export type BlueprintViewCallback<D> = (
  params: BlueprintViewParams<D>,
) => Promise<BlueptinViewResult>;

export type BlueprintViewCallbackAny = BlueprintViewCallback<object>;

export type BlueprintDataSpec = {
  is: SchemaIs<object>;
};

export type BlueprintSpecPlain = {
  type: 'plain';
  data: BlueprintDataSpec | null;
};

export type BlueprintSpecExternal = {
  type: 'external';
  transform: BlueprintTransformCallbackAny;
  view: BlueprintViewCallbackAny;
};

export type BlueprintSpec =
  | BlueprintSpecPlain
  | BlueprintSpecExternal
;

export type BlueprintObject = RuntimeObject<'blueprint', BlueprintSpec>;

export type BlueprintRef<T> = { blueprint: string };
