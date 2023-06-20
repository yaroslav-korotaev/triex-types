export type InletSpec = {
  name: string;
};

export type InputSpec = {
  inlets: InletSpec[];
};

export type InletRef = {
  node: string;
  inlet: string;
};
