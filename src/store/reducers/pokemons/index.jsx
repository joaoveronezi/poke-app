import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
  // FILTER_POKEMONS,
  FETCH_POKEMON_DATA,
} from "../../../utils/constants/action-types";

const initialState = {
  items: [],
  offset: 0,
  pending: false,
  error: null,
  nextPage: null,
  prevPage: null,
};

export default (state = { initialState }, action) => {
  switch (action.type) {
    case FETCH_POKEMON_DATA: {
      return {
        ...state,
        offset: action.payload,
      };
    }
    case FETCH_POKEMONS_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case FETCH_POKEMONS_SUCCESS: {
      console.log("Console do reducer ->", action.payload);
      return {
        ...state,
        pending: false,
        items: action.payload,
      };
    }
    // case FILTER_POKEMONS: {
    //   console.log("Console 2 do reducer =>", action.payload.items);
    //   return {
    //     ...state,
    //     pending: false,
    //     filteredItems: action.payload.items,
    //     name: action.payload.name,
    //   };
    // }
    case FETCH_POKEMONS_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
};
