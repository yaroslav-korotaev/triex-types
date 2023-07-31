export type Execution = {
  method: string;
  start: string;
  end: string;
  context: object;
  result: object | undefined;
  error: Error | undefined;
};
