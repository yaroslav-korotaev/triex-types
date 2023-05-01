export type StorageId = {
  type: string;
  id: string;
};

export type StorageObject = StorageId & {
  spec: object;
  state?: object;
};

export type StorageState = StorageId & {
  state: object;
};

export type Storage = {
  create(objects: StorageObject[]): Promise<void>;
  delete(objects: StorageId[]): Promise<void>;
  save(objects: StorageState[]): Promise<void>;
  load(): Promise<StorageObject[]>;
};
