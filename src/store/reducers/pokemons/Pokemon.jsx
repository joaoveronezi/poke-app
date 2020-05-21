import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "../../utils/constants/action-types";

const initialState = {
  pending: false,
  items: [],
  error: null,
};

export default (state = { initialState }, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        items: action.payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getProducts = (state) => state.items;
export const getProductsPending = (state) => state.pending;
export const getProductsError = (state) => state.error;
