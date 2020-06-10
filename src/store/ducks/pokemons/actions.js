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

export const filterPokemons = (pokemons, name) => ({
  type: Types.FILTER_POKEMONS,
  payload: {
    name: name,
    items:
      name === ""
        ? pokemons
        : pokemons.filter((a) => a.name.indexOf(name.toUpperCase()) >= 0),
  },
});
