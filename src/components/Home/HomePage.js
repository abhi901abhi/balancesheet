import React from 'react';
import axios from 'axios';
import './HomePage.css';
import Card from './Card';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  dense: {
    marginTop: 19,
    width: "100%"
  },

});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterProducts: [],
      products: [],
      activatedIdStoredInParent: ""
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {

    var searchedText = e.target.value;
    var filterList = this.state.masterProducts;

    filterList = filterList.filter(item => {
      return item.name.trim().toLowerCase().search(searchedText.trim().toLowerCase()) > -1;
    });

    this.setState({
      products: filterList
    });
  }

  toggleCountersMenu = (name) => {
    var activatedItemName = name;
    this.setState((prevState) => {
      return {
        activatedIdStoredInParent: activatedItemName
      }
    });

  }
  componentDidMount() {
    axios.get(`database/livedata.json`)
      .then(res => {

        this.setState({
          masterProducts: res.data,
          products: res.data
        })
      });
  }

  decreaseStock = (qty, type, product) => {

    var qtyIsNegative = qty < 0 ? true : false;
    var products = [...this.state.products];

    var text = {
      "F": "full",
      "H": "half",
      "Q": "quarter",
      "90": "ninty"
    };
    var typeOfBottle = text[type];
    for (let index = 0; index < products.length; index++) {
      const prod = products[index];
      if (prod.name === product.name) {


        var x = (prod.stockIn[typeOfBottle] > 0 && prod.stockIn[typeOfBottle] >= qty);
        prod.stockIn[typeOfBottle] = (qtyIsNegative) ?
          (prod.stockIn[typeOfBottle] > 0 && prod.stockIn[typeOfBottle] >= -1 * qty) ? prod.stockIn[typeOfBottle] + qty : prod.stockIn[typeOfBottle] :
          prod.stockIn[typeOfBottle] + qty;
        break;
      }
    }
    this.setState({
      products: products
    });
  }

  getProducts() {
    const colorClasses = ["primary", "secondary", "success", "danger", "light", "dark", "info"];
    let colorClass = "info";
    let i = 0;

    const products = this.state.products.map((item, index) => {
      i = (index > 7) ? 0 : i;
      colorClass = colorClasses[i];
      i++;
      let cssText = `card text-` + ((colorClass === "light") ? "black" : (colorClass == undefined ? "black" : "white")) + ` bg-` + colorClass + ` maxWidth18rm`;

      return <div key={index}>
        <Card
          cssClassName={cssText}
          product={item}
          activatedIdStoredInParent={this.state.activatedIdStoredInParent}
          toggleCountersMenu={this.toggleCountersMenu}
          decreaseStock={this.decreaseStock}
        >
        </Card>
      </div>
    });
    return products;
  }


  render() {
    console.log('Home Page comp rendered');

    const products = this.getProducts();
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <TextField
              label="Search"
              margin="dense"
              onChange={(e) => this.onSearchChange(e)}
            />
          </div>
          <div className="col-9">
            <span className="float-right">  Total Products: {this.state.masterProducts.length}</span>
          </div>
        </div>
        <div className="card-columns">
          {products}
        </div>
      </div >
    );
  }
}

export default withStyles(styles)(HomePage);
