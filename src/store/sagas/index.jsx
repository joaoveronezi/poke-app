import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
} from "../../utils/constants/action-types";

import api from "../../utils/services/api.js";

const PokeResponse = {
  name: "",
  url: "",
};

const fetchPokemons = () => {
  return async (dispatch) => {
    dispatch(fetchPokemonsPending());
    try {
      const response = await api.get();
      const requests = response.data.results.map((k = { PokeResponse }) =>
        api.get(k.url)
      );
      const res = await Promise.all(requests);
      const pokemons = res.map((res) => res.data);
      pokemons.sort((a, b) => a.id < b.id);
      console.log("Console da action => ", response.data.results);
      console.log("Console 2 da action => ", pokemons);
      dispatch(fetchPokemonsSuccess(pokemons));
    } catch (error) {
      dispatch(fetchPokemonsError(error));
      console.log(error);
    }
  };
};

const fetchPokemonsPending = () => {
  return {
    type: FETCH_POKEMONS_PENDING,
  };
};

const fetchPokemonsSuccess = (data) => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: data,
  };
};

const fetchPokemonsError = (error) => {
  return {
    type: FETCH_POKEMONS_ERROR,
    error: error,
  };
};

export default fetchPokemons;
