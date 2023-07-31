export type InletSpec = {
  name: string;
};

export type InputType = 'none' | 'one' | 'many';

export type InputManyMode = 'parallel' | 'memoize';

export type InputNoneSpec = {
  type: 'none';
};

export type InputOneSpec = {
  type: 'one';
};

export type InputManySpec = {
  type: 'many';
  mode: InputManyMode;
  inlets: InletSpec[];
};

export type InputSpec =
  | InputNoneSpec
  | InputOneSpec
  | InputManySpec
;

export type InletRef = {
  node: string;
  inlet: string;
};
