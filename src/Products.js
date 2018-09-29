import React from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm';

var PRODUCTS = {
    '1': { id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet' },
    '2': { id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord' },
    '3': { id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano' },
    '4': { id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge' },
    '5': { id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table' },
    '6': { id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag' }
};

// let filteredInput = '';
class Products extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilter = this.handleFilter.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.state = {
            inStockOnly: false,
            filterText: '',
            products: PRODUCTS
        }
    }

    handleFilter(filteredInput) {
        this.setState(filteredInput);
    }
    handleDelete(id) {
        this.setState((prevState) => {
            let products = prevState.products;
            delete products[id];
            return {
                products: products
            };
        });
    }
    handleSave(product) {
        debugger;
        if (!product.id) {
            product.id = new Date().getTime();
        }
        this.setState((prevState) => {
            let products = prevState.products;
            products[product.id] = product;
            return { products };
        });
    }
    render() {
        return (
            <div>
                <Filters
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilter={this.handleFilter}>
                </Filters>

                <ProductTable
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    products={this.state.products}
                    onDelete={this.handleDelete}
                >
                </ProductTable>

                <ProductForm
                    onSave={this.handleSave}>
                </ProductForm>
                Products = {JSON.stringify(this.state.products)}
            </div>
        );
    }
}

export default Products;