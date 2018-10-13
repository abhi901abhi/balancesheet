import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {

    switch (action.type) {
        case types.CREATE_PRODUCT:
            const newState = [
                ...state,
                action.product
            ];
            return newState;
        case types.LOAD_PRODUCTS_SUCCESS:
            return action.products;
        case types.DELETE_PRODUCTS_SUCCESS:
            debugger;
            const newState1 = [
                ...state,
                action.product
            ];
            return newState1;
        default:
            return state;
    }
}
