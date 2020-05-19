import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "../../utils/constants/action-types";

import axios from "../../utils/services/api.js";

const fetchProducts = () => {
  return (dispatch) => {
    //BEGIN action
    dispatch(fetchProductsPending());
    axios
      .get("/users", {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        //SUCCESS action
        dispatch(fetchProductsSuccess(data));
      })
      .catch((error) => {
        //FAIL action
        dispatch(fetchProductsError(error));
      });
  };
};

const fetchProductsPending = () => {
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
};

const fetchProductsSuccess = (items) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: items,
  };
};

const fetchProductsError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error,
  };
};

export default fetchProducts;
