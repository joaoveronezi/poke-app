import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
} from "../../../utils/constants/action-types";

const initialState = {
  items: [],
  pending: false,
  error: null,
};

export default (state = { initialState }, action) => {
  switch (action.type) {
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
