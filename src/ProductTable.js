import React from 'react';
import ProductRow from './ProductRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);

    this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);

    this.state = {
      sort: {
        columnNameToSort: 'name',
        directionOfSorting: 'desc'
      },
      products: this.props.products
    };
  }
  sortByKeyAndOrder(objectA, objectB) {
    let isDesc = this.state.sort.directionOfSorting === 'desc' ? 1 : -1;
    let [a, b] = [objectA[this.state.sort.columnNameToSort], objectB[this.state.sort.columnNameToSort]];
    if (this.state.sort.columnNameToSort === 'price') {
      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
    }
    if (a > b) {
      return 1 * isDesc;
    }
    if (a < b) {
      return -1 * isDesc;
    }
    return 0;
  }
  sortProducts() {
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    return productsAsArray.sort(this.sortByKeyAndOrder);
  }

  handleSort(direction, columnName) {

    this.setState({
      sort: {
        directionOfSorting: direction,
        columnNameToSort: columnName
      }
    });

  }

  handleDestroy(product) {

    this.props.onDelete(product.id);
  }

  render() {
    let rows = [];

    this.sortProducts().forEach((product) => {

      if (
        (this.props.inStockOnly === true && product.stocked === false) ||
        (product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1)
      ) {


        return;
      }
      rows.push(<ProductRow product={product} key={product.id} onDestroy={this.handleDestroy}></ProductRow>);
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <SortableColumnHeader
                colName="name"
                onSort={this.handleSort}>
              </SortableColumnHeader>
              <SortableColumnHeader
                colName="price"
                onSort={this.handleSort}>
              </SortableColumnHeader>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div >
    );
  }
}

export default ProductTable;