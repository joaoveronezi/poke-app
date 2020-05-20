import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "../../utils/constants/action-types";

import api from "../../utils/services/api.js";

/*const fetchProducts = () => {
  return (dispatch) => {
    //BEGIN action
    dispatch(fetchProductsPending());
    api
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
*/

const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsPending());
    try {
      const response = await api.get("/users", {});
      dispatch(fetchProductsSuccess(response.data));
      console.log(response.data);
    } catch (error) {
      dispatch(fetchProductsError(error));
      console.log(error);
    }
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
