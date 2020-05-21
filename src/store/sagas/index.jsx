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
const PokeResponse = {
  name: "",
  url: "",
};

const pokeData = {
  data: {},
};

const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsPending());
    try {
      const response = await api.get();
      const itemsData = await Promise.all(
        response.data.results.map((k = { PokeResponse }) => api.get(k.url))
      );

      const pokemons = itemsData.map((j = { pokeData }) => api.get(j.data));

      console.log("Console da action => ", response.data.results);
      console.log("Console 2 da action => ", itemsData);
      //  const poker = itemsData.map((pokeData, index) => api.get(pokeData.data));
    } catch (error) {
      //dispatch(fetchProductsError(error));
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
