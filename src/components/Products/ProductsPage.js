import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';

import * as productActions from './../../redux/actions/productActions';


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Full',
  dataIndex: "stockIn['full']",
  key: `stockIn['full'`,
  width: 70,
},
{
  title: 'Half',
  dataIndex: "stockIn['half']",
  key: `stockIn['half'`,
  width: 70,
},
{
  title: 'Quarter',
  dataIndex: "stockIn['quarter']",
  key: `stockIn['quarter'`,
  width: 70,
},
{
  title: '90',
  dataIndex: "stockIn['ninty']",
  key: `stockIn['ninty'`,
  width: 70,
}, {
  title: 'Category',
  dataIndex: 'category',
  key: 'category',
}, {
  title: 'Action',
  key: 'action',
  width: 360,
  render: (text, record) => (
    <span>
      <a href="javascript:;" onClick={() => this.editItem(record)}>Edit-{record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];




const expandedRowRender = record => <p>{record.description}</p>;
const title = function () {
  debugger;
  return <h4 className="text-success">Products</h4>;
};


const showHeader = true;
let footer = () => 0;
const scroll = { y: 300 };
const pagination = { position: 'bottom' };

editItem = (product) => {
  alert(JSON.stringify(product));
}

class ProductsPage extends React.Component {

  constructor(props) {
    super(props);
    this.onProductSave = this.onProductSave.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      bordered: true,
      loading: false,
      pagination,
      size: 'small',
      expandedRowRender,
      title: title,
      showHeader,
      footer,
      rowSelection: {},
      hasData: true,
    }


  }


  handleToggle = (prop) => {
    return (enable) => {
      this.setState({ [prop]: enable });
    };
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  handleExpandChange = (enable) => {
    this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
  }

  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  }

  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  }

  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  }

  handleRowSelectionChange = (enable) => {
    this.setState({ rowSelection: enable ? {} : undefined });
  }

  handleScollChange = (enable) => {
    this.setState({ scroll: enable ? scroll : undefined });
  }

  handleDataChange = (hasData) => {
    this.setState({ hasData });
  }

  handlePaginationChange = (e) => {
    const { value } = e.target;
    this.setState({
      pagination: value === 'none' ? false : { position: value },
    });
  }


  componentDidMount() {
    debugger;
    const props = this.props;
    props.actions.loadProducts();

  }

  courseRow(item, index) {
    return <li key={index}>{item.name}</li>;
  }

  onProductSave(product) {

    this.props.actions.createProduct(product);
    this.setState({
      product: ""
    });
  }

  onChange(e) {
    this.setState({
      product: e.target.value
    });
  }

  getFooterDetails(products) {
    return <label class="text-success">Total Records Count is {products.length}</label>;
  }
  render() {
    const state = this.state;
    return (
      <div>
        {/* <p>Products</p> */}
        {/* <ul>
          {this.props.products.map(this.courseRow)}
        </ul>
        <hr />
        <input type="text"
          onChange={this.onChange}
          value={this.state.product}
        />
        <button onClick={() => this.onProductSave(this.state.product)}>Save</button> */}
        {/* <hr /> */}
        <div>
          <Table {...this.state}
            columns={columns}
            dataSource={state.hasData ? this.props.products : null}
            footer={() => this.getFooterDetails(this.props.products)}
            pagination={{ pageSize: 5 }}
          />
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

    //In Component: onSave click => call like this.props.actions.createProduct(this.state.product)
    //2nd Way of creating mdtp
// mapDispatchToProps(dispatch) {
//   return {
//     createProduct: product => dispatch(productActions.createProduct(product))
//   }
// }
//In Component: onSave click => call like this.props.createProduct(this.state.product)


