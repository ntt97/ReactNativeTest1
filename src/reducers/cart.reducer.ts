import { ADD_TO_CART, DECREASE_COUNT, DELETE_ALL_CART, DELETE_ITEM, INCREASE_COUNT, INIT_CART } from '@actions/types';
import { addToCart } from 'helpers';

export interface CartState {
  listCart: Array<any>;
}

const defaultState: CartState = {
  listCart: [],
};
const CartReducer = (state: CartState = defaultState, action: any) => {
  switch (action.type) {
    case INIT_CART: {
      return { ...state, listCart: action.payload.listCart };
    }

    case INCREASE_COUNT: {
      const newCart = state.listCart.map(e => {
        if (e.item.id !== action.payload.id) return e;
        return { item: e.item, quantity: e.quantity + 1 };
      });
      addToCart({ ...state, listCart: newCart });
      return { ...state, listCart: newCart };
    }

    case DECREASE_COUNT: {
      const newCart = state.listCart.map(e => {
        if (e.item.id !== action.payload.id) return e;
        return { item: e.item, quantity: e.quantity - 1 };
      });
      addToCart({ ...state, listCart: newCart });
      return { ...state, listCart: newCart };
    }

    case ADD_TO_CART: {
      const isExist = state.listCart.some(e => e.item.id === action.payload.item.id);
      if (isExist) return state;
      const newState = { ...state };
      newState.listCart.push({ item: action.payload.item, quantity: action.payload.quantity });
      addToCart({ ...state, listCart: [...newState.listCart] });
      return { ...state, listCart: [...newState.listCart] };
    }

    case DELETE_ITEM: {
      const newCart = state.listCart.filter(e => e.item.id !== action.payload.item.id);
      addToCart({ ...state, listCart: newCart });
      return { ...state, listCart: newCart };
    }

    case DELETE_ALL_CART: {
      addToCart('');
      return { ...state, listCart: [] };
    }

    default: {
      return state;
    }
  }
};

export default CartReducer;
