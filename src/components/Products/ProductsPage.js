import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from './../../actions/productActions';


class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ""
    }
    this.onProductSave = this.onProductSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    this.props.actions.fetchProducts();
  }

  onProductSave(product) {
    this.props.actions.createProduct(product);
  }

  onChange(e) {
    this.setState({
      product: e.target.value
    });
  }
  render() {
    return (
      <div>
        <p>Products</p>
        <ul>
          {
            this.props.products.map(item =>
              <li key={item}>{item}</li>
            )
          }
        </ul>
        <hr />
        <input type="text" onChange={this.onChange} />
        <button onClick={() => this.onProductSave(this.state.product)}>Save</button>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  //In state.products, product is coming from root reducer, if you change 
  //the name products to abhi_products , then here you need to call products:state.abhi_products 
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}
//In Component: onSave click => call like this.props.actions.createProduct(this.state.product)


//2nd Way
// mapDispatchToProps(dispatch) {
//   return {
//     createProduct: product => dispatch(productActions.createProduct(product))
//   }
// }
//In Component: onSave click => call like this.props.createProduct(this.state.product)


export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
