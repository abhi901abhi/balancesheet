// Essentially actions describe something happening, 
//and the reducer responds to the action.
import { ToastContainer, toast, Rotate } from 'react-toastify';
import { css } from 'glamor';

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

export function deleteProduct(product) {
    return {
        type: type.DELETE_PRODUCT,
        product: product
    }
}

export function deleteProductSuccess(product) {
    return {
        type: type.DELETE_PRODUCTS_SUCCESS,
        product: product
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


export function deleteAProduct(product) {

    return function (dispatch, getState) {
        //api call

        let toastId = toast.info("Deletion in progress", { autoClose: false, closeOnClick: false, closeButton: false });

        return productApi.deleteProduct(product.id)
            .then(data => {

                setTimeout(() => {
                    toast.update(toastId, {
                        render: "Product deleted successfully",
                        type: toast.TYPE.SUCCESS,
                        className: css({
                            transform: "rotateY(360deg)",
                            transition: "transform 0.6s"
                        }),
                        autoClose: 2000
                    });
                }, 1000);

                // toast.success('Product deleted successfully');
                dispatch(deleteProductSuccess(product));

            }).catch(err => {
                debugger;
                toast.update(toastId, {
                    render: "Reason:" + err,
                    type: toast.TYPE.ERROR,
                    className: css({
                        transform: "rotateY(360deg)",
                        transition: "transform 0.6s"
                    }),
                    autoClose: 2000
                });
                throw (err);
            });
    }

}