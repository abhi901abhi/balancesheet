import { combineReducers } from 'redux';
import products from './productReducer';


//What ever we will give in combine reducers that will be called by
//components via state like state.products

const rootReducer = combineReducers({
    products: products
});

export default rootReducer;


