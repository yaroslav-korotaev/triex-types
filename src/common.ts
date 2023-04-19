export type Schema = object;

export type Is<T> = (value: any) => value is T;
export type SchemaIs<T> = Is<T> & { schema: Schema };

export type Labels = Record<string, string>;

export type Hint = {
  value: any;
  meta?: {
    title: string;
    description?: string;
  },
  labels?: Labels;
};
