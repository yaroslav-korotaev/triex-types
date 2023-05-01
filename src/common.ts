export type Schema = object;

export type Is<T> = (value: any) => value is T;
export type SchemaIs<T> = Is<T> & { schema: Schema };

export type Labels = Record<string, string>;

export type Variant<P> = {
  params: P;
  schema?: Schema;
  labels?: Labels;
  meta?: {
    title: string;
    description?: string;
  };
};

export type RuntimeObjectId<T> = {
  type: T;
  id: string;
};

export type RuntimeObject<T, S> = RuntimeObjectId<T> & {
  spec: S;
};
