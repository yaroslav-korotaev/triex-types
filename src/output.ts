export type OutletSpec = {
  name: string;
};

export type OutputSpec = {
  outlets: OutletSpec[];
};

export type OutletRef = {
  node: string;
  outlet: string;
};
