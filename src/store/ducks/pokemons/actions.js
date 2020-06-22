import Types from "./Types";

export const fetchPokemonsPending = () => ({
  type: Types.FETCH_POKEMONS_PENDING,
});

export const fetchPokemonData = (offset) => ({
  type: Types.FETCH_POKEMON_DATA,
  payload: offset,
});

export const fetchPokemonsSuccess = (data) => ({
  type: Types.FETCH_POKEMONS_SUCCESS,
  payload: data,
});

export const fetchPokemonsError = (error) => ({
  type: Types.FETCH_POKEMONS_ERROR,
  error: error,
});

export const setOffsetPokemons = (prevPage, nextPage) => ({
  type: Types.SET_OFFSET,
  payload: {
    prevPage,
    nextPage,
  },
});

export const filterPokemon = (keyword) => ({
  type: Types.FILTER_POKEMONS,
  payload: keyword,
});
