import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
} from "../../../utils/constants/action-types";

const initialState = {
  pending: false,
  data: [],
  error: null,
};

export default (state = { initialState }, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    case FETCH_POKEMONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getPokemons = (state) => state.items;
export const getPokemonsPending = (state) => state.pending;
export const getPokemonsError = (state) => state.error;
