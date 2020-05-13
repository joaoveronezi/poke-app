//arquivo destinado a criação de actions
import axios from 'axios';
import {
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_BEGIN,
    FETCH_POKEMONS_FAILURE
} from '../../utils/constants/action-types';

//BEGIN action
export const loadPokemon = () => {
    return(dispatch) => {
        return axios.get('https://pokeapi.co/api/v2/pokemon/1/')
        .then(handleErrors)
        .then((response) => {
            dispatch(fetchPokemonsSuccess(response.data))
            return response.data;
        })
        .catch(error => dispatch(fetchPokemonsFailure(error)));
    }
};

export const handleErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}

export const fetchPokemonsBegin = () => ({
    type: FETCH_POKEMONS_BEGIN
});


export const fetchPokemonsSuccess = data => {
    return {
        type: FETCH_POKEMONS_SUCCESS,
        payload: data
    }
}

export const fetchPokemonsFailure = error => ({
    type: FETCH_POKEMONS_FAILURE,
    payload:  error 
});