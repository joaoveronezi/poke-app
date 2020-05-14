import { 
    GET_PROD_DATA, 
    IS_LOADING, 
    GET_PROD_DATA_FAIL 
} from '../../utils/constants/action-types';

const initialState = {
    products: []
}

export default (state = {initialState}, action) => {
    switch(action.type) {
        case GET_PROD_DATA:
            return {
                ...state,
                loading: false,
                products: action.payload
            };
        case IS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_PROD_DATA_FAIL:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
}