import { DELETE_ALL_CART } from '@actions/types';
import { ADD_TO_CART, DECREASE_COUNT, DELETE_ITEM, INCREASE_COUNT, INIT_CART } from './types';

const addToCart = (payload: any) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};

const deleteItem = (payload: any) => {
  return {
    type: DELETE_ITEM,
    payload: payload,
  };
};

const initCart = (payload: any) => {
  return {
    type: INIT_CART,
    payload: payload,
  };
};

const deleteAllCart = () => {
  return {
    type: DELETE_ALL_CART,
    payload: null,
  };
};

const increaseCount = (payload: any) => ({ type: INCREASE_COUNT, payload });
const decreaseCount = (payload: any) => ({ type: DECREASE_COUNT, payload });

export { addToCart, deleteItem, increaseCount, decreaseCount, initCart, deleteAllCart };
