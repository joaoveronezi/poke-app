import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
  FILTER_POKEMONS,
  FETCH_POKEMON_DATA,
} from "../../utils/constants/action-types";

export const fetchPokemonsPending = () => ({
  type: FETCH_POKEMONS_PENDING,
});

export const fetchPokemonData = (offset) => ({
  type: FETCH_POKEMON_DATA,
  payload: offset,
});

export const fetchPokemonsSuccess = (data) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: data,
});

export const fetchPokemonsError = (error) => ({
  type: FETCH_POKEMONS_ERROR,
  error: error,
});

export const filterPokemons = (pokemons, name) => ({
  type: FILTER_POKEMONS,
  payload: {
    name: name,
    items:
      name === ""
        ? pokemons
        : pokemons.filter((a) => a.name.indexOf(name.toUpperCase()) >= 0),
  },
});
