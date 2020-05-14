import { 
    GET_PROD_DATA, 
    IS_LOADING, 
    GET_PROD_DATA_FAIL 
} from '../../utils/constants/action-types';
import axios from 'axios';

export const getSoupDataFromAPI = () => {
    return (dispatch) => {
        //BEGIN action
        dispatch(loadingScreen());
       return axios.get("http://shopsoup.herokuapp.com/api/v1/product")
       .then(({data}) => {
            console.log("log da action", data);
            //SUCCES action
            dispatch(getSoupDataFromAPIAsync(data));
            return data;
       })
       //FAIL action
       .catch(dispatch(error => getSoupDataFromAPIFailure(error)));
    }
}

//BEGIN action
export const loadingScreen = () => {
    return {
        type: IS_LOADING,
        payload: true
    }
}

//SUCCES action
export const getSoupDataFromAPIAsync = products => {
    return {
        type: GET_PROD_DATA,
        payload: products
    }
}


//FAIL action
export const getSoupDataFromAPIFailure = error => {
    return {
        type: GET_PROD_DATA_FAIL,
        payload: error
    }
}