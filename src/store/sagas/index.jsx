//arquivo destinado a criação de actions
import axios from 'axios';
import { POKEMON_LIST } from '../../utils/constants/action-types';

export const loadPokemon = () => {
    return(dispatch) => {
        return axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((response) => {
            dispatch(pokeList(response.data));
            console.log(response.data);
        })
    }
};

export const pokeList = (data) => {
    return{
        type: POKEMON_LIST,
        payload: data
    }
}