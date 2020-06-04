import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
  FILTER_POKEMONS,
} from "../../utils/constants/action-types";

export const fetchPokemonsPending = () => ({
  type: FETCH_POKEMONS_PENDING,
});

export const fetchPokemonsSuccess = (data) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: data,
});

export const fetchPokemonsError = (error) => ({
  type: FETCH_POKEMONS_ERROR,
  error: error,
});

export const filterPokemons = (filter) => ({
  type: FILTER_POKEMONS,
  payload: filter,
});
