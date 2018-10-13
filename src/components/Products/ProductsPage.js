import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Icon, Switch, Radio, Form, Divider, Button, Modal, Popconfirm, message } from 'antd';

import * as productActions from './../../redux/actions/productActions';


const expandedRowRender = record => <p>{record.name}</p>;
const title = function () {
  debugger;
  return <h4 className="text-success">Products</h4>;
};


const showHeader = true;
let footer = () => 0;
const scroll = { y: 300 };
const pagination = { position: 'bottom' };
let selectedProduct = null;

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
    };

    //Popup and submit button
    this.state.buttonSubmitLoader = false;
    this.state.visibleDeletePopup = false;
  }

  handleEdit = (product) => {
    this.setState({
      visibleDeletePopup: true
    });

    selectedProduct = [...[], product];

    debugger;
  }

  showModal = () => {
    this.setState({
      visibleDeletePopup: true,
    });
  }

  handleOk = () => {
    this.setState({ buttonSubmitLoader: true });
    setTimeout(() => {
      this.setState({ buttonSubmitLoader: false, visibleDeletePopup: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visibleDeletePopup: false });
  }



  render() {
    const state = this.state;


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
      key: `stockIn['ninty']`,
      width: 70,
    }, {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    }, {
      title: 'Action',
      key: 'action',
      width: 360,
      render: (text, record) => (<span>
        <a href="javascript:;" onClick={() => this.handleEdit(record)}>Manage</a>
        {/* <Divider type="vertical" />
    <a href="javascript:;">Delete</a>
    <Divider type="vertical" />
    <a href="javascript:;" className="ant-dropdown-link">
      More actions <Icon type="down" />
    </a> */}
      </span>
      ),
    }];

    const columnsForSelectedProduct = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150,
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
      width: 90,
    },
    {
      title: '90',
      dataIndex: "stockIn['ninty']",
      key: `stockIn['ninty']`,
      width: 70,
    }, {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: 150
    }];
    return (
      <div>
        <div>
          <Table {...this.state}
            columns={columns}
            dataSource={state.hasData ? this.props.products : null}
            footer={() => this.getFooterDetails(this.props.products)}
            pagination={{ pageSize: 5 }}
          />
        </div>
        {/* ------------------------------ */}
        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button> */}
        <Modal
          width={762}
          visible={state.visibleDeletePopup}
          title="Edit Product Stock / Delete Product"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <div>
              <Popconfirm title="Are you sure to Delete the Product?"
                onConfirm={() => this.handleDelete(selectedProduct[0])}
                onCancel={() => this.cancel}
                okText="Yes"
                cancelText="No">
                <Button key="delete" type="danger">Delete</Button>
              </Popconfirm>
              <Button key="submit" type="primary" loading={state.buttonSubmitLoader} onClick={this.handleSaveAfterEdit}>
                Save
            </Button>
            </div>
          ]}
        >
          <Table
            columns={columnsForSelectedProduct}
            dataSource={selectedProduct}
            pagination={false}
            footer={false}
          />
        </Modal>
        {/* ------------------------------ */}



      </div>
    );
  }

  confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }

  cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  handleDelete = product => {

    this.props.actions.deleteAProduct(product);
    this.setState({
      visibleDeletePopup: false
    });
  }

  componentDidMount() {
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


