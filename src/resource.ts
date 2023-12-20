import type { RuntimeObject } from './common';

export type ResourceSpec = {
  blueprint: string;
  data: object | null;
};

export type ResourceObject = RuntimeObject<'resource', ResourceSpec>;

export type ResourceRef = string;
