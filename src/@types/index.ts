export type PayloadAction<T extends string, P> = {
  type: T;
  payload: P;
};
export type PropsItemProduct = {
  addToCart?: any;
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  onChangeValue?: any;
};
export type PropsItemProductInCart = {
  addToCart?: any;
  onRemove?: any;
  quantity?: number;
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity?: number;
  };
};
export type ParamsGetProduct = {
  pagination: {
    page: number;
    limit: number;
  };
  refresh?: boolean;
};

export type ItemProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export interface PaginationState {
  page: number;
  limit: number;
}
