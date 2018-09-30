import React from 'react';

const RESET_VALUES = { id: '', category: '', price: '', stocked: false, name: '' };

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);

        alert('ProductForm Construction');
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        }
        // this.state = {
        //     product: Object.assign({}, RESET_VALUES),
        //     errors: {}
        // };
    }
    handleChange(e) {

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState((prevState) => {

            prevState.product[name] = value;
            return {
                product: prevState.product
            }
        });
    }
    handleSave(e) {

        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        });

        alert(JSON.stringify(RESET_VALUES));

        e.preventDefault();
    }
    render() {
        console.log('ProductForm render');

        return (
            <form>
                <h3>Enter a new product</h3>
                <p>
                    <label>
                        Name
            <br />
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name} />
                    </label>
                </p>
                <p>
                    <label>
                        Category
            <br />
                        <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category} />
                    </label>
                </p>
                <p>
                    <label>
                        Price
            <br />
                        <input type="text" name="price" onChange={this.handleChange} value={this.state.product.price} />
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" name="stocked" onChange={this.handleChange} checked={this.state.product.stocked} />
                        &nbsp;In stock?
          </label>
                </p>
                <input type="submit" value="Save1" onClick={this.handleSave} />
            </form>


        );
    }
}

export default ProductForm;