import {
    FETCH_PRODUCTS_PENDING, 
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR 
} from '../../utils/constants/action-types';

const fetchProducts = () => {
    return dispatch => {
        //BEGIN ACTION
        dispatch(fetchProductsPending());
        fetch('http://shopsoup.herokuapp.com/api/v1/product')
        .then(res => res.json())
        .then(res => {
            console.log("tanka =>", res.results);
            
            if (res.error) {
                throw(res.error);
            }
            //SUCCESS ACTION
            dispatch(fetchProductsSuccess(res.results[1].description));
            return res.results;
        })
        //FAIL ACTION
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}


const fetchProductsPending = () => {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

const fetchProductsSuccess = product => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: product
    }
}

const fetchProductsError = error => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}

export default fetchProducts;