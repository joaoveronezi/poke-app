import { POKEMON_LIST } from '../../utils/constants/action-types';

export default (state, action) => {
    switch(action.type) {
        case POKEMON_LIST:
            return {
                ...state,
                payload:action.payload
            }
            default:
                return{
                    ...state
                } 
    }
}