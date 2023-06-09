export type RemoteFuncExecRequest = {
  args?: object | void;
};

export type RemoteFuncExecResponse = {
  result?: object | void;
};

export type RemoteFunc = {
  name: string;
  exec(request: RemoteFuncExecRequest): Promise<RemoteFuncExecResponse>;
};
