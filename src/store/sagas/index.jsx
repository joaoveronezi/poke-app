import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "../../utils/constants/action-types";

import api from "../../utils/services/api.js";

const PokeResponse = {
  name: "",
  url: "",
};

const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsPending());
    try {
      //primeiro pegamos os pokemons, com seus nomes e urls
      const response = await api.get();
      //depois demos um map nos resultados para pegarmos sómente as URLs
      const requests = response.data.results.map((k = { PokeResponse }) =>
        api.get(k.url)
      );
      //usamos um promise.all para garantir a sincronia da nossa funçao assincrona
      const res = await Promise.all(requests);
      //usamos um map no res, dessa forma a gente consegue pegar somente o que está presente no objeto data
      const pokemons = res.map((res) => res.data);
      //ordenaçao
      pokemons.sort((a, b) => a.id < b.id);

      console.log("Console da action => ", response.data.results);
      console.log("Console 2 da action => ", pokemons);
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
