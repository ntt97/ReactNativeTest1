import { HIDE_LOADING_WITH_SAGA, SHOW_LOADING_WITH_SAGA } from "@constants/index";
export interface LoadingState {
  isLoading: boolean;
}

const defaultState = {
  isLoading:false ,
};
export default function LoadingReducer(
  state: LoadingState = defaultState,
  action: any
) {
  switch (action.type) {
    case SHOW_LOADING_WITH_SAGA:
      return {...state,isLoading:true};
    case HIDE_LOADING_WITH_SAGA:
      return {...state,isLoading:false};
    default:
      return state;
  }
}
