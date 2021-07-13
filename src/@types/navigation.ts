export type PayloadAction<T extends string, P> = {
  type: T;
  payload: P;
};

export interface Menu {
  [x: string]: any;
  icon: any;
  name: string;
}
