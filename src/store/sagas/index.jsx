import { GET_PROD_DATA, IS_LOADING } from '../../utils/constants/action-types';

export const getSoupDataFromAPI = () => {
    return (dispatch) => {
        //BEGIN ACTION
        dispatch(loadingScreen())
        fetch("http://shopsoup.herokuapp.com/api/v1/product")
        .then((data) =>{
            return data.json()
        })
        //SUCCESS ACTION
        .then((products) => {
            dispatch(getSoupDataFromAPIAsync(products));
        })
        //FAIL ACTION
        .catch(dispatch(error => getSoupDataFromAPIFailure(error)));
    }
}

const getSoupDataFromAPIAsync = products => {
    return {
        type: GET_PROD_DATA,
        payload: products
    }
}

export const loading = () => {
    return {
        type: IS_LOADING,
        payload: true
    }
}