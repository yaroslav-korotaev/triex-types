export type PipelineNodeSpecSource = {
  name: string;
  block: string;
  input?: string;
  output?: void;
  config?: string;
  params?: object;
};

export type PipelineSpecSource = {
  name: string;
  nodes: PipelineNodeSpecSource[];
};
