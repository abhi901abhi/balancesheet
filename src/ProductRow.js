import React from 'react';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        this.props.onDestroy(this.props.product);
    }
    render() {
        let product = this.props.product;
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stocked + ''}</td>
                <td><button onClick={this.handleDelete} style={{ cursor: 'pointer' }}>X</button></td>

            </tr>
        );
    }
}

export default ProductRow;