import {
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_BEGIN,
    FETCH_POKEMONS_FAILURE
} from '../../utils/constants/action-types';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMONS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case FETCH_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                items: []
            }
        default:
            return state;
    }
}























/*export default (state = {}, action) => {
    console.log("action type => ", action.type);
    const pokemon = action.payload;
    switch(action.type) {
        case POKEMON_LIST:
            return {
                ...state,
                pokemon
            }
            default:
                return{
                    ...state
                } 
    }
}*/