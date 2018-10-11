// Essentially actions describe something happening, 
//and the reducer responds to the action.

import * as type from './actionTypes';
import productApi from './../api/mockProductApi';
import configureStore from './../store/configureStore';

export function createProduct(product) {
    return {
        type: type.CREATE_PRODUCT,
        product: product
    }
}

export function loadProductsSuccess(products) {
    return {
        type: type.LOAD_PRODUCTS_SUCCESS,
        products: products
    }
}

//Thunk_action_creator => making actions async 
export function loadProducts() {

    return function (dispatch, getState) {
        return productApi.getAllproducts()
            .then(data => {
                console.log(':Products data loaded successfully:');
                dispatch({ type: type.LOAD_PRODUCTS_SUCCESS, products: data });
            })
            .catch(err => {
                throw (err);
            });
    };
};