// Essentially actions describe something happening, 
//and the reducer responds to the action.

import * as type from './actionTypes';

export function createProduct(product) {
    return {
        type: type.CREATE_PRODUCT,
        product: product
    }
}

export function fetchProducts() {

    var products = [];
    return {
        type: type.FETCH_PRODUCTS,
        products: products
    }
}