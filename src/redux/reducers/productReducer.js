import { actionTypes } from '../container/action-types';

const initialState = {
  products: [],
};

export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
