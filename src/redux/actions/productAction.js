import { actionTypes } from '../container/action-types';
import fakeApi from '../../fakeApis/fakeApi';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fakeApi.get('/products');
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const selectedProduct = (id) => {
  return async (dispatch) => {
    const response = await fakeApi.get(`/products/${id}`);
    dispatch({
      type: actionTypes.SELECTED_PRODUCT,
      payload: response.data,
    });
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
