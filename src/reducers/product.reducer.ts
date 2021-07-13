import {
  GET_PRODUCT_WITH_SAGA,
  GET_PRODUCT_WITH_SAGA_FAILED,
  GET_PRODUCT_WITH_SAGA_SUCCESS,
  REFRESH_PRODUCT_LIST,
} from '@actions/types';
import { ItemProduct, PaginationState, PayloadAction } from '@types';
import produce from 'immer';
export interface ProductState {
  pagination: PaginationState;
  listProduct: Array<ItemProduct>;
  isError: boolean;
  message: string;
  isLoading: boolean;
  isEndData: boolean;
  refreshing: boolean;
}
const defaultState: ProductState = {
  pagination: {
    page: 1,
    limit: 10,
  },
  listProduct: [],
  isEndData: false,
  refreshing: false,
  isLoading: true,
  isError: false,
  message: '',
};
export default function ProductReducer(state: ProductState = defaultState, action: PayloadAction<string, any>) {
  switch (action.type) {
    case GET_PRODUCT_WITH_SAGA:
      return produce(state, draftState => {
        draftState.isLoading = true;
        draftState.listProduct = action.payload.refresh ? [] : [...state.listProduct];
        draftState.pagination = action.payload.refresh
          ? {
              page: 1,
              limit: 10,
            }
          : { ...state.pagination };
      });
    case GET_PRODUCT_WITH_SAGA_SUCCESS:
      const { newData, pagination } = action.payload;

      return produce(state, draftState => {
        draftState.listProduct = [...state.listProduct, ...newData];
        draftState.pagination = { ...pagination };
        draftState.isEndData = newData.length !== pagination.limit;
        draftState.refreshing = false;
        draftState.isLoading = false;
      });
    case GET_PRODUCT_WITH_SAGA_FAILED:
      return produce(state, draftState => {
        draftState.listProduct = [];
        draftState.isLoading = false;
      });

    case REFRESH_PRODUCT_LIST: {
      return produce(state, draftState => {
        draftState.refreshing = action.payload;
      });
    }
    default:
      return state;
  }
}
