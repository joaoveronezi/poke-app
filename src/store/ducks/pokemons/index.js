import Types from "./Types";

const initialState = {
  items: [],
  pending: false,
  error: null,
  nextPage: null,
  prevPage: null,
};

export default (state = { initialState }, action) => {
  switch (action.type) {
    case Types.FETCH_POKEMON_DATA: {
      return {
        ...state,
        offset: action.payload,
      };
    }
    case Types.FETCH_POKEMONS_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case Types.FETCH_POKEMONS_SUCCESS: {
      return {
        ...state,
        pending: false,
        items: action.payload,
      };
    }
    case Types.SET_OFFSET: {
      console.log(
        "Pagina anterior ->",
        action.payload.prevPage,
        "Proxima Pagina ->",
        action.payload.nextPage
      );
      return {
        ...state,
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage,
      };
    }
    case Types.FETCH_POKEMONS_ERROR: {
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
