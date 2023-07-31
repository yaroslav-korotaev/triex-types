export type OutletSpec = {
  name: string;
};

export type OutputType = 'none' | 'one' | 'many';

export type OutputNoneSpec = {
  type: 'none';
};

export type OutputOneSpec = {
  type: 'one';
};

export type OutputManySpec = {
  type: 'many';
  outlets: OutletSpec[];
};

export type OutputSpec =
  | OutputNoneSpec
  | OutputOneSpec
  | OutputManySpec
;

export type OutletRef = {
  node: string;
  outlet: string;
};
