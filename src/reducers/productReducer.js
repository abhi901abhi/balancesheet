import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.products, action) {
    debugger;
    switch (action.type) {
        case types.CREATE_PRODUCT:
            const newState = [
                ...state,
                action.product
            ];
            return newState;

        case types.FETCH_PRODUCTS:
            return state;

        default:
            return state;
    }
}
