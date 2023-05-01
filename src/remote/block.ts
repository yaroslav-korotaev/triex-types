// import type {
//   Schema,
//   Hint,
// } from '../common';

// export type RemoteStreamParamsResponse = {
//   schema: null,
// } | {
//   schema: Schema;
//   mandatory: string[];
// };

// export type RemoteStreamHintsRequest = {
//   param: string;
//   partial: object;
// };

// export type RemoteStreamHintsResponse = {
//   hints: Hint[];
// };

// export type RemoteStreamOutputRequest = {
//   params: object;
// };

// export type RemoteStreamOutputResponse = {
//   schema: Schema | null;
// };

// export type RemoteStreamProcessRequest = {
//   now: string;
//   state?: object;
//   params?: object;
// };

// export type RemoteStreamProcessResponse = {
//   state: object;
//   output: object[];
// };

// export type RemoteBlock = {
//   name: string;
//   params(): RemoteStreamParamsResponse;
//   hints(request: RemoteStreamHintsRequest): Promise<RemoteStreamHintsResponse>;
//   output(request: RemoteStreamOutputRequest): Promise<RemoteStreamOutputResponse>;
//   process(request: RemoteStreamProcessRequest): Promise<RemoteStreamProcessResponse>;
// };
