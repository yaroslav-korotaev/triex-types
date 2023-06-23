import type { RuntimeObject } from './common';

export type ResourceSpec = {
  blueprint: string;
  value: object;
};

export type ResourceObject = RuntimeObject<'resource', ResourceSpec>;

export type ResourceRef = string;
